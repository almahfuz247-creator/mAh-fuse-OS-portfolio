"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signalFeed, type SignalEntry } from "@/content/signal-feed";
import { DUR, EASE } from "@/lib/motion";
import { Radio } from "lucide-react";

export function SignalFeed() {
  const [entries, setEntries] = useState<SignalEntry[]>(signalFeed.slice(0, 3));
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setEntries((prev) => {
        const next = signalFeed[(prev.length) % signalFeed.length];
        return [next, ...prev].slice(0, 4);
      });
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-lg border border-line bg-panel p-4 font-mono">
      <header className="mb-3 flex items-center gap-2 text-xs text-mute">
        <Radio className="h-3.5 w-3.5 text-accent" aria-hidden />
        <span className="uppercase tracking-widest">incoming_signals</span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-accent">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          LIVE
        </span>
      </header>
      <ul className="space-y-2">
        <AnimatePresence initial={false}>
          {entries.map((e) => (
            <motion.li
              key={e.id + tick}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: DUR.base, ease: EASE }}
              className="rounded-md border border-line bg-bg/40 p-2 text-xs"
            >
              <div className="flex items-center justify-between text-mute">
                <span className="truncate text-accent">@{e.source}</span>
                <span className="tabular-nums">{e.timestamp}</span>
              </div>
              <p className="mt-1 text-ink/90">{e.message}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}