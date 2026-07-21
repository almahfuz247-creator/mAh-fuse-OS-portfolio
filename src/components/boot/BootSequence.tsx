"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, XCircle } from "lucide-react";
import { DUR, EASE, lineReveal } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { bootLog, bootProgress, bootTitle, bootSubtitle, type BootLine } from "@/content/boot-log";

const LINE_STAGGER = 0.05; // 50 ms per spec
const TITLE_DELAY = 1.6; // seconds

const statusIcon = (s: BootLine["status"]) => {
  switch (s) {
    case "OK":
      return <CheckCircle2 className="h-3 w-3 text-accent" aria-hidden />;
    case "WARN":
      return <AlertCircle className="h-3 w-3 text-warn" aria-hidden />;
    case "ERR":
      return <XCircle className="h-3 w-3 text-danger" aria-hidden />;
    case "INFO":
    default:
      return <Info className="h-3 w-3 text-mute" aria-hidden />;
  }
};

const statusTone = (s: BootLine["status"]) =>
  s === "OK" ? "text-accent" : s === "WARN" ? "text-warn" : s === "ERR" ? "text-danger" : "text-mute";

type Props = {
  onComplete?: () => void;
};

export function BootSequence({ onComplete }: Props) {
  const [visible, setVisible] = useState(0);
  const [titleIn, setTitleIn] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      // Render everything at once
      setVisible(bootLog.length);
      setTitleIn(true);
      onComplete?.();
      return;
    }
    let i = 0;
    const lineTimer = setInterval(() => {
      i++;
      setVisible(i);
      if (i >= bootLog.length) {
        clearInterval(lineTimer);
        const t = setTimeout(() => {
          setTitleIn(true);
          onComplete?.();
        }, TITLE_DELAY * 1000 - (bootLog.length - 1) * LINE_STAGGER * 1000);
        return () => clearTimeout(t);
      }
    }, LINE_STAGGER * 1000);
    return () => clearInterval(lineTimer);
  }, [onComplete, reduced]);

  return (
    <div className="space-y-3">
      <div className="font-mono text-[12px] leading-6" role="log" aria-live="polite">
        {bootLog.slice(0, visible).map((line, idx) => (
          <motion.div
            key={`${line.module}-${idx}`}
            variants={lineReveal}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2"
          >
            <span className="text-mute">[</span>
            <span className={cn("font-bold", statusTone(line.status))}>
              {line.status}
            </span>
            <span className="text-mute">]</span>
            <span className="text-ink/90">{line.module.padEnd(22, ".")}</span>
            <span className="flex-1 truncate text-mute">
              <span className="text-mute/60">··· </span>
              {line.detail}
            </span>
            {statusIcon(line.status)}
          </motion.div>
        ))}
        {visible < bootLog.length && (
          <motion.span
            aria-hidden
            className="inline-block h-3 w-2 translate-y-0.5 bg-accent cursor-blink"
          />
        )}
      </div>

      {titleIn && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DUR.slow, ease: EASE }}
          className="pt-2"
        >
          <div className="font-mono text-3xl font-bold text-ink sm:text-4xl">
            <span className="text-accent">▌ </span>
            {bootTitle}
          </div>
          <div className="mt-1 font-mono text-sm text-mute">{bootSubtitle}</div>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
            <span aria-hidden>●</span>
            boot_progress :: {bootProgress}%
          </div>
        </motion.div>
      )}
    </div>
  );
}