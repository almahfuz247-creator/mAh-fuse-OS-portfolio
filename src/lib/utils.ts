/** Misc utilities */

export function formatUptime(startedAt: Date): string {
  const seconds = Math.max(0, Math.floor((Date.now() - startedAt.getTime()) / 1000));
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

/** Pseudo-random voltage-style reading for the vitals bar. */
export function jitter(base: number, range: number): number {
  return Number((base + (Math.random() - 0.5) * range).toFixed(1));
}