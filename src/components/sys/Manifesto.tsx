import { profile } from "@/content/profile";
import { CodeBlock } from "@/components/primitives/CodeBlock";

const lines = [
  "// mAh⚡fuse / philosophy.txt",
  "// runtime: every product, every time.",
  "",
  "$ whoami --purpose",
  "UX designer at UIU building operator-facing systems.",
  "Research-first, prototype-driven.",
  "Hold the charge. Protect the fuse.",
  "",
  "$ defaults",
  "users --> operators",
  "features --> modules",
  "deliverables --> outputs",
  "process --> diagnostics",
  "navigation --> signal routing",
  "",
  "$ exit",
];

export function Manifesto() {
  return (
    <div className="space-y-3">
      <header className="font-mono text-xs text-mute">
        <span className="text-accent">▌ </span>
        cat /sys/manifesto.txt
      </header>
      <CodeBlock code={lines.join("\n")} language="manifesto.txt" />
      <p className="font-mono text-xs leading-relaxed text-mute">
        {profile.longBio}
      </p>
    </div>
  );
}