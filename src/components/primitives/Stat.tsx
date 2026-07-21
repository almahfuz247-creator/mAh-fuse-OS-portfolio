import { cn } from "@/lib/cn";

type Props = {
  label: string;
  value: string | number;
  unit?: string;
  delta?: string;
  tone?: "default" | "accent" | "warn" | "danger";
};

export function Stat({ label, value, unit, delta, tone = "default" }: Props) {
  return (
    <div className="rounded-md border border-line bg-bg/40 p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-mute">
        {label}
      </div>
      <div className="mt-1 flex items-baseline gap-1">
        <span
          className={cn(
            "font-mono text-xl tabular-nums",
            tone === "accent" && "text-accent",
            tone === "warn" && "text-warn",
            tone === "danger" && "text-danger",
            tone === "default" && "text-ink"
          )}
        >
          {value}
        </span>
        {unit && <span className="font-mono text-xs text-mute">{unit}</span>}
      </div>
      {delta && (
        <div className="mt-1 font-mono text-[10px] text-mute">{delta}</div>
      )}
    </div>
  );
}