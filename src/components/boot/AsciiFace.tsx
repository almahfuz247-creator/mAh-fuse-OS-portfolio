import { cn } from "@/lib/cn";

type Props = {
  variant?: "idle" | "focus" | "scan";
  className?: string;
};

const faces: Record<NonNullable<Props["variant"]>, string> = {
  idle: `      .  .  .
     /|  | |\\
    / |  | | \\
   /  '==='  \\
  |    ___    |
  |   /   \\   |
  |  | o o |  |
  |  |  ω  |  |
   \\  \\___/  /
    \\_______/
`,
  focus: `      ─  ─  ─
     ┌───────┐
     │ ◉ ◉ ◉ │
     │   ◡   │
     │  ━━━  │
     └───────┘
`,
  scan: `      ▒  ▓  ▒
     ░▒▓█▓▒░
     ░ SCAN ░
     ░▒▓█▓▒░
      ▒  ▓  ▒
`,
};

export function AsciiFace({ variant = "idle", className }: Props) {
  return (
    <pre
      aria-hidden
      className={cn(
        "font-mono text-[10px] leading-tight text-accent select-none",
        className
      )}
    >
      {faces[variant]}
    </pre>
  );
}