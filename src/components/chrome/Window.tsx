import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "ghost";
  trafficLights?: boolean;
};

export function Window({
  title,
  subtitle,
  children,
  className,
  variant = "default",
  trafficLights = true,
}: Props) {
  return (
    <section
      className={cn(
        "rounded-lg border border-line overflow-hidden",
        variant === "default" && "bg-panel",
        variant === "elevated" && "bg-panel shadow-glow",
        variant === "ghost" && "bg-transparent",
        className
      )}
    >
      {(title || trafficLights) && (
        <header className="flex items-center gap-3 border-b border-line bg-panel-2/60 px-4 py-2.5">
          {trafficLights && (
            <div className="flex items-center gap-1.5">
              <span
                aria-hidden
                className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]"
              />
              <span
                aria-hidden
                className="block h-2.5 w-2.5 rounded-full bg-[#febc2e]"
              />
              <span
                aria-hidden
                className="block h-2.5 w-2.5 rounded-full bg-[#28c840]"
              />
            </div>
          )}
          {title && (
            <div className="flex-1 truncate text-xs font-mono text-mute">
              <span className="text-ink">{title}</span>
              {subtitle && (
                <>
                  <span className="px-2 opacity-50">·</span>
                  <span>{subtitle}</span>
                </>
              )}
            </div>
          )}
        </header>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
