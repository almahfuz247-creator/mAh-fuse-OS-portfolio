import { NextResponse } from "next/server";
import { ContactSchema } from "@/lib/schemas";
import { getResend, CONTACT_FROM, CONTACT_TO } from "@/lib/resend";

export const runtime = "nodejs";

// Simple in-memory token bucket (best-effort). Production: Upstash.
const buckets = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1h

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const b = buckets.get(ip);
  if (!b || now > b.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (b.count >= LIMIT) return false;
  b.count += 1;
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "anon";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "rate limit exceeded // try again in 1h" },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid json" },
      { status: 400 }
    );
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    const issues = parsed.error.issues.map((i) => ({
      field: i.path.join("."),
      message: i.message,
    }));
    return NextResponse.json(
      { ok: false, error: "validation failed", issues },
      { status: 400 }
    );
  }

  // Honeypot: if "company" is filled, silently succeed (it's a bot).
  if (parsed.data.company && parsed.data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = parsed.data;

  // Resend only configured if API key is set
  if (!process.env.RESEND_API_KEY) {
    console.warn("[contact] RESEND_API_KEY not set — logging only");
    console.log("[contact]", { name, email, message });
    return NextResponse.json({ ok: true, mode: "log-only" });
  }

  try {
    const resend = getResend();
    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `[mAh⚡fuse signal] ${name}`,
      text: [
        `name:  ${name}`,
        `email: ${email}`,
        "",
        "--- message ---",
        message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] send failed", e);
    const message =
      e instanceof Error
        ? e.message
        : typeof e === "object" && e !== null && "message" in e
          ? String((e as { message: unknown }).message)
          : "send failed";
    return NextResponse.json(
      { ok: false, error: "send failed", detail: message },
      { status: 502 }
    );
  }
}
