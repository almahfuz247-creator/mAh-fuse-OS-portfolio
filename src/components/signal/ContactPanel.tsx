import { profile } from "@/content/profile";
import { Copy, Clock, MapPin } from "lucide-react";
import { ResumeGate } from "@/components/forms/ResumeGate";
import { Window } from "@/components/chrome/Window";
import { TerminalForm } from "@/components/forms/TerminalForm";
import { ClockClient } from "./ClockClient";
import { CopyButton } from "./CopyButton";

export function ContactPanel() {
  return (
    <div className="space-y-4">
      <Window title="signal-routing // contact" subtitle="auto-resp: ≤ 48h">
        <div className="space-y-3 p-4 sm:p-5">
          <div className="grid gap-3 font-mono text-sm sm:grid-cols-2">
            <div className="rounded-md border border-line bg-bg/40 p-3">
              <div className="flex items-center gap-2 text-xs text-mute">
                <MapPin className="h-3 w-3" aria-hidden />
                location
              </div>
              <div className="mt-1 text-ink">{profile.location}</div>
              <div className="mt-1 text-xs text-mute">{profile.timezone}</div>
            </div>
            <div className="rounded-md border border-line bg-bg/40 p-3">
              <div className="flex items-center gap-2 text-xs text-mute">
                <Clock className="h-3 w-3" aria-hidden />
                local time
              </div>
              <div className="mt-1 text-ink">
                <ClockClient />
              </div>
              <div className="mt-1 text-xs text-mute">updates each minute</div>
            </div>
          </div>

          <div className="space-y-2 font-mono text-sm">
            <div className="text-xs text-mute">email ::</div>
            <div className="inline-flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="text-ink underline decoration-accent/40 underline-offset-4 hover:text-accent"
              >
                {profile.email}
              </a>
              <CopyButton text={profile.email} />
            </div>
          </div>

          <div className="space-y-2 font-mono text-sm">
            <div className="text-xs text-mute">social ::</div>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {profile.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${s.label} — ${s.hint}`}
                    className="group inline-flex w-full items-center justify-between gap-2 rounded border border-line bg-bg/40 px-2 py-1.5 text-xs text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    <span className="truncate">
                      <span className="text-accent">▸ </span>
                      {s.label}
                      <span className="ml-2 hidden text-mute group-hover:text-mute sm:inline">
                        {s.hint}
                      </span>
                    </span>
                    <span className="text-mute">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Window>

      <Window title="transmit // message" subtitle="zod-validated">
        <div className="p-4 sm:p-5">
          <TerminalForm
            endpoint="/api/contact"
            fields={[
              {
                name: "name",
                label: "your.name",
                placeholder: "Jane Doe",
                required: true,
              },
              {
                name: "email",
                label: "your.email",
                type: "email",
                placeholder: "jane@studio.com",
                required: true,
              },
              {
                name: "message",
                label: "your.message",
                type: "textarea",
                placeholder: "Signal content. Keep it signal-dense.",
                required: true,
              },
            ]}
          />
        </div>
      </Window>

      <ResumeGate />
    </div>
  );
}
