"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  pct?: number;
  pulse?: boolean;
  label?: boolean;
  size?: "sm" | "md";
};

export function BatteryBadge({
  pct = 87,
  pulse = true,
  label = true,
  size = "sm",
}: Props) {
  const [current, setCurrent] = useState(pct);
  const [prev, setPrev] = useState(pct);

  // subtle drift every 8s to feel alive
  useEffect(() => {
    const id = setInterval(() => {
      setPrev(current);
      const next = Math.max(20, Math.min(100, current + (Math.random() < 0.5 ? -1 : 1)));
      setCurrent(next);
    }, 8000);
    return () => clearInterval(id);
  }, [current]);

  const widthPx = size === "sm" ? 28 : 40;
  const heightPx = size === "sm" ? 12 : 16;
  const innerPct = current;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-xs",
        pulse && "batt-pulse rounded-full"
      )}
      aria-label={`battery ${current} percent`}
    >
      <span className="relative inline-block" style={{ width: widthPx, height: heightPx }}>
        <span
          aria-hidden
          className="absolute inset-0 rounded-[3px] border border-ink/70"
        />
        <span
          aria-hidden
          className="absolute top-1/2 -right-[3px] h-1/2 w-[2px] -translate-y-1/2 rounded-r-[1px] bg-ink/70"
        />
        <span
          aria-hidden
          className="absolute left-[2px] top-[2px] bottom-[2px] rounded-[1px] bg-accent transition-all duration-700"
          style={{ width: `calc(${innerPct}% - 4px)` }}
        />
      </span>
      {label && (
        <span className="text-ink/80 tabular-nums">
          {current}
          <span className="text-mute">%</span>
        </span>
      )}
    </div>
  );
}