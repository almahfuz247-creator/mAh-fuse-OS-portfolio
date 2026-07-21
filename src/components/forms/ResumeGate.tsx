import { TerminalForm } from "./TerminalForm";
import { FileDown, ShieldCheck } from "lucide-react";

export function ResumeGate() {
  return (
    <div className="rounded-lg border border-line bg-panel p-4 sm:p-5">
      <div className="mb-3 flex items-center gap-2 font-mono text-xs text-mute">
        <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden />
        <span className="uppercase tracking-widest">gated :: resume.pdf</span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/5 px-2 py-0.5 text-[10px] text-accent">
          <FileDown className="h-3 w-3" aria-hidden />
          1 file
        </span>
      </div>

      <p className="mb-4 font-mono text-xs text-mute">
        Drop your email — the resume is mailed to your inbox in
        <span className="text-ink"> &lt; 60s</span>. No forms, no tracking, no
        bundle.
      </p>

      <TerminalForm
        endpoint="/api/resume-gate"
        fields={[
          {
            name: "email",
            label: "your.email",
            type: "email",
            placeholder: "you@studio.com",
            required: true,
          },
        ]}
        submitLabel="request resume"
        successMessage="// check inbox — resuming transmission."
      />

      <div className="mt-3 border-t border-line pt-3 font-mono text-[11px] text-mute">
        // why? we strip-paper-trail the recruitment funnel.
        <br />
        // you&rsquo;ll only ever hear back if it&rsquo;s worth it.
      </div>
    </div>
  );
}