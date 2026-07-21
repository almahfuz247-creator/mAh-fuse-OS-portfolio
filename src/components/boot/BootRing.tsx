"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DUR, EASE } from "@/lib/motion";

type Props = {
  size?: number;
};

export function BootRing({ size = 220 }: Props) {
  const reduced = useReducedMotion();
  const spin = reduced ? 0 : 360;
  const dur = reduced ? 0 : 18;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Outer ring */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 220 220"
        animate={{ rotate: spin }}
        transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        aria-hidden
      >
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle
          cx="110"
          cy="110"
          r="100"
          fill="none"
          stroke="var(--line)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        <motion.circle
          cx="110"
          cy="110"
          r="100"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="220 800"
          animate={{ strokeDashoffset: [0, -1030] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.svg>

      {/* Inner counter-rotating ring */}
      <motion.svg
        width={size * 0.7}
        height={size * 0.7}
        viewBox="0 0 220 220"
        animate={{ rotate: -spin }}
        transition={{ duration: dur * 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute"
        aria-hidden
      >
        <circle
          cx="110"
          cy="110"
          r="86"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="6 4"
        />
      </motion.svg>

      {/* Center core */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: EASE }}
        className="relative flex h-24 w-24 items-center justify-center rounded-full border border-accent/60 bg-bg"
        style={{ boxShadow: "var(--glow)" }}
      >
        <svg viewBox="0 0 32 32" className="h-10 w-10" aria-hidden>
          <path
            d="M16 3 L8 18 H15 L13 29 L24 13 H17 Z"
            fill="var(--accent)"
          />
        </svg>
      </motion.div>

      {/* Tick labels */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 font-mono text-[10px] text-mute">
        ▾ 3.7V
      </div>
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 font-mono text-[10px] text-mute">
        ▴ core
      </div>
    </div>
  );
}