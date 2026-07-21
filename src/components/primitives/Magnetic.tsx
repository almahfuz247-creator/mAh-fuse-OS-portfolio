"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { clamp } from "@/lib/utils";
import { MAG_CAP } from "@/lib/motion";

type Props = {
  children: ReactNode;
  strength?: number;
  className?: string;
  asChild?: boolean;
};

/**
 * Magnetic — wraps a child to subtly attract toward the cursor,
 * capped at MAG_CAP px (8 px by default) per spec.
 */
export function Magnetic({ children, strength = MAG_CAP, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 22 });
  const sy = useSpring(y, { stiffness: 250, damping: 22 });
  const reduced = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(clamp(dx / 8, -strength, strength));
    y.set(clamp(dy / 8, -strength, strength));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}