import { profile } from "@/content/profile";
import { BatteryBadge } from "./BatteryBadge";
import { ThemeToggle } from "../theme/ThemeToggle";

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-panel/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:gap-4 sm:px-6">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-accent batt-pulse"
          />
          <span className="text-ink">mAh⚡fuse OS</span>
          <span className="hidden text-mute sm:inline">·</span>
          <span className="hidden text-mute sm:inline">{profile.handle}@os</span>
        </div>

        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <div className="hidden items-center gap-1.5 text-xs text-mute md:inline-flex">
            <span>charge</span>
            <BatteryBadge pct={87} label size="sm" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-mute">
            <span className="hidden sm:inline">{profile.location}</span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
