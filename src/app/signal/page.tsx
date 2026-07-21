import type { Metadata } from "next";
import { SignalFeed } from "@/components/signal/SignalFeed";
import { ContactPanel } from "@/components/signal/ContactPanel";

export const metadata: Metadata = {
  title: "Signal",
  description:
    "Open a signal — contact Abdullah Al Mahfuz (UX designer at UIU) or request the gated resume.",
};

export default function SignalPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-6 space-y-2">
        <div className="font-mono text-xs text-mute">
          ▌ open /signal --arm
        </div>
        <h1 className="font-mono text-2xl font-bold text-ink sm:text-3xl">
          Signal
        </h1>
        <p className="font-mono text-sm text-mute">
          Open a channel. Live feed is mocked; the contact form routes through
          Resend to {`mahfuz.bsc@gmail.com`}.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-4">
          <SignalFeed />
          <div className="rounded-lg border border-line bg-panel p-4 font-mono text-xs text-mute">
            <div className="uppercase tracking-widest text-mute">signal_notes</div>
            <ul className="mt-2 space-y-1.5">
              <li>// <span className="text-ink">≤ 2000 chars</span> per message</li>
              <li>// zod-validated, honeypot-protected</li>
              <li>// auto-reply ≤ 48h (if relevant)</li>
              <li>// resume gated — no tracking, no forms</li>
            </ul>
          </div>
        </aside>

        <ContactPanel />
      </div>
    </div>
  );
}