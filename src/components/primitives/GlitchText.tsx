"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  text: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  triggerOnHover?: boolean;
  intervalMs?: number;
};

/**
 * GlitchText — channel-shifted text that flickers on a timer,
 * or always on hover.
 */
export function GlitchText({
  text,
  as: Tag = "span",
  className,
  triggerOnHover = true,
  intervalMs = 4500,
}: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (triggerOnHover) return;
    const id = setInterval(() => {
      setActive(true);
      setTimeout(() => setActive(false), 200);
    }, intervalMs);
    return () => clearInterval(id);
  }, [triggerOnHover, intervalMs]);

  return (
    <Tag
      className={cn("relative inline-block", className)}
      onMouseEnter={() => triggerOnHover && setActive(true)}
      onMouseLeave={() => triggerOnHover && setActive(false)}
      aria-label={text}
    >
      <span aria-hidden className="relative inline-block">
        {text}
        {active && (
          <>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 text-warn"
              style={{ transform: "translate(-2px, 0)" }}
            >
              {text}
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 text-accent"
              style={{ transform: "translate(2px, 0)" }}
            >
              {text}
            </span>
          </>
        )}
      </span>
    </Tag>
  );
}