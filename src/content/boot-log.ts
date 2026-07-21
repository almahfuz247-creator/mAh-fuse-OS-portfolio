/**
 * Boot sequence — runs once on /boot visit.
 * Each line reveals with a 50ms stagger; title fades in last.
 * Copied verbatim from Plan 2.
 */

export type BootLine = {
  status: "OK" | "WARN" | "ERR" | "INFO";
  module: string;
  detail: string;
};

export const bootLog: BootLine[] = [
  { status: "OK", module: "ui_identity", detail: "ABDAH-AL-MAHFUZ" },
  { status: "OK", module: "current_role", detail: "UX-ENGINEER // UIU" },
  { status: "OK", module: "voltage", detail: "3.7 V" },
  { status: "OK", module: "charge", detail: "87%" },
  { status: "OK", module: "caffeinated", detail: "true" },
  { status: "OK", module: "manifesto_loaded", detail: "/sys/manifesto.txt" },
  { status: "OK", module: "skill_modules", detail: "13 loaded" },
  { status: "OK", module: "lab_experiments", detail: "4 primed" },
  { status: "OK", module: "signal_routing", detail: "/signal :: armed" },
  { status: "OK", module: "fuse_integrity", detail: "intact" },
  { status: "OK", module: "thermal", detail: "nominal" },
  { status: "OK", module: "core.online", detail: "true — booting mAh⚡fuse OS" },
];

export const bootProgress = 12;
export const bootTitle = "mAh⚡fuse OS";
export const bootSubtitle = "UX that holds charge under pressure.";
