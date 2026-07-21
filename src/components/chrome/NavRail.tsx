"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Cpu, FolderGit2, Radio } from "lucide-react";
import { cn } from "@/lib/cn";

const routes = [
  { href: "/boot", label: "boot", icon: Home },
  { href: "/sys", label: "sys", icon: Cpu },
  { href: "/work", label: "work", icon: FolderGit2 },
  { href: "/signal", label: "signal", icon: Radio },
] as const;

export function NavRail() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Signal routing"
      className="sticky top-[49px] z-20 border-b border-line bg-panel/60 backdrop-blur-sm md:border-b-0 md:bg-transparent md:backdrop-blur-0"
    >
      <ul className="mx-auto flex max-w-7xl items-stretch gap-1 px-3 py-2 sm:gap-2 sm:px-6">
        {routes.map((r) => {
          const active = pathname.startsWith(r.href);
          const Icon = r.icon;
          return (
            <li key={r.href} className="flex-1 md:flex-none">
              <Link
                href={r.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-xs font-mono transition-all md:justify-start",
                  active
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-line bg-panel/40 text-mute hover:border-ink/40 hover:text-ink"
                )}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                <span className="hidden md:inline">
                  <span className="text-mute group-hover:text-ink">/</span>
                  {r.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}