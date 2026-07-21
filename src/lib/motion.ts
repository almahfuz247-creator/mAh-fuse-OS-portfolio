/**
 * Centralized motion tokens for mAh⚡fuse OS.
 * Durations are 60–160 ms per spec; easing is precise (not bouncy).
 */
import type { Variants } from "framer-motion";

export const DUR = {
  fast: 0.06,
  base: 0.1,
  slow: 0.16,
} as const;

export const EASE = [0.2, 0.8, 0.2, 1] as const;

/** Max pointer displacement for the magnetic cursor effect (px). */
export const MAG_CAP = 8;

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE },
  },
};

export const lineReveal: Variants = {
  hidden: { opacity: 0, x: -4 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: DUR.base, ease: EASE },
  },
};

export const pulseScale: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: DUR.base, ease: EASE } },
};