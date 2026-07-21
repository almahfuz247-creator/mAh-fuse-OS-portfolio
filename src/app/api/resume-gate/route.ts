import { NextResponse } from "next/server";
import { ResumeGateSchema } from "@/lib/schemas";
import { getResend, CONTACT_FROM, RESUME_FILE_PATH } from "@/lib/resend";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    // Always 200 to avoid email enumeration on the gate
    return NextResponse.json({ ok: true });
  }

  const parsed = ResumeGateSchema.safeParse(body);
  if (!parsed.success || (parsed.data.company && parsed.data.company.length > 0)) {
    // Always 200 to avoid email enumeration
    return NextResponse.json({ ok: true });
  }

  const { email } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.warn("[resume-gate] RESEND_API_KEY not set — logging only");
    console.log("[resume-gate] would mail to:", email);
    return NextResponse.json({ ok: true, mode: "log-only" });
  }

  try {
    const absPath = resolve(process.cwd(), RESUME_FILE_PATH);
    // Verify the file exists before sending
    await stat(absPath);
    const buf = await readFile(absPath);

    const resend = getResend();
    await resend.emails.send({
      from: CONTACT_FROM,
      to: email,
      subject: "mAh⚡fuse OS — resume",
      text: [
        `Hey,`,
        ``,
        `As requested — attached is the resume.`,
        ``,
        `If anything in here prompts a question, ping me:`,
        `mahfuz.bsc@gmail.com`,
        ``,
        `— Mahfuz`,
      ].join("\n"),
      attachments: [
        {
          filename: "Mahfuz-Resume.pdf",
          content: buf,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[resume-gate] send failed", e);
    return NextResponse.json({ ok: true }); // still 200 to avoid enumeration
  }
}