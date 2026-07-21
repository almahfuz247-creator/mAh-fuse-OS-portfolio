"use client";

import { useEffect, useState } from "react";
import { formatUptime, jitter } from "@/lib/utils";
import { BatteryBadge } from "./BatteryBadge";

export function VitalsBar() {
  const startedAt = useState(() => new Date())[0];
  const [cpu, setCpu] = useState(12);
  const [mem, setMem] = useState(8.2);
  const [net, setNet] = useState(86);
  const [batt, setBatt] = useState(87);
  const [uptime, setUptime] = useState("00:00:00");

  useEffect(() => {
    const tick = () => {
      setCpu(jitter(12, 8));
      setMem(jitter(8.2, 1.4));
      setNet(jitter(86, 30));
      setBatt((b) => Math.max(20, Math.min(100, b + (Math.random() < 0.5 ? -1 : 1))));
      setUptime(formatUptime(startedAt));
    };
    tick();
    const id = setInterval(tick, 1500);
    return () => clearInterval(id);
  }, [startedAt]);

  return (
    <footer className="border-t border-line bg-panel/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2 font-mono text-[11px] text-mute sm:px-6">
        <span className="inline-flex items-center gap-1.5">
          <span className="text-mute">cpu</span>
          <span className="text-ink tabular-nums">{cpu.toFixed(1)}</span>
          <span className="text-mute">%</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="text-mute">mem</span>
          <span className="text-ink tabular-nums">{mem.toFixed(1)}</span>
          <span className="text-mute">GB</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="text-mute">net</span>
          <span className="text-ink tabular-nums">{net.toFixed(0)}</span>
          <span className="text-mute">Mb/s</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="text-mute">batt</span>
          <BatteryBadge pct={batt} label={false} pulse={false} />
          <span className="text-ink tabular-nums">{batt}%</span>
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5">
          <span className="text-mute">uptime</span>
          <span className="text-ink tabular-nums">{uptime}</span>
        </span>
      </div>
    </footer>
  );
}