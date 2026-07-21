"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { DUR, EASE } from "@/lib/motion";
import { Magnetic } from "./Magnetic";

type Props = {
  label: string;
  hint?: string;
  href: string;
  icon?: React.ReactNode;
  cta?: string;
};

export function Tile({ label, hint, href, icon, cta }: Props) {
  return (
    <Magnetic strength={6}>
      <Link href={href} className="block">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: DUR.base, ease: EASE }}
          className={cn(
            "group relative flex h-full flex-col gap-2 rounded-lg border border-line bg-panel p-4 transition-colors",
            "hover:border-accent hover:shadow-glow"
          )}
        >
          <div className="flex items-center gap-2 text-mute">
            {icon && <span aria-hidden>{icon}</span>}
            <span className="font-mono text-[11px] uppercase tracking-wider">
              {cta ?? "launch"}
            </span>
          </div>
          <div className="font-mono text-lg text-ink">{label}</div>
          {hint && (
            <div className="font-mono text-xs text-mute">{hint}</div>
          )}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-3 right-3 text-accent opacity-0 transition-opacity group-hover:opacity-100"
          >
            →
          </span>
        </motion.div>
      </Link>
    </Magnetic>
  );
}