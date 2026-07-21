import type { Metadata } from "next";
import { BootSequence } from "@/components/boot/BootSequence";
import { BootRing } from "@/components/boot/BootRing";
import { AsciiFace } from "@/components/boot/AsciiFace";
import { Tile } from "@/components/primitives/Tile";
import { Window } from "@/components/chrome/Window";
import { profile } from "@/content/profile";
import { FolderGit2, Cpu, Radio, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Boot",
  description: "Boot sequence. mAh⚡fuse OS — UX that holds charge under pressure.",
};

export default function BootPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <Window
          title="mAh⚡fuse OS"
          subtitle={`@ ${profile.handle} · ${profile.location}`}
          variant="elevated"
        >
          <div className="space-y-8 p-6 sm:p-10">
            <header className="flex items-center gap-2 font-mono text-xs text-mute">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/5 px-2 py-0.5 text-accent">
                <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                LIVE
              </span>
              <span>·</span>
              <span>boot_progress: 12%</span>
            </header>

            <BootSequence />

            <section className="grid gap-3 sm:grid-cols-3">
              <Tile
                href="/work"
                label="LAUNCH WORK"
                hint="5 case studies · 4 lab experiments"
                cta="→ /work"
                icon={<FolderGit2 className="h-3.5 w-3.5" />}
              />
              <Tile
                href="/sys"
                label="READ SYS"
                hint="manifesto · skills · uptime log"
                cta="→ /sys"
                icon={<Cpu className="h-3.5 w-3.5" />}
              />
              <Tile
                href="/signal"
                label="OPEN SIGNAL"
                hint="contact · terminal · gated resume"
                cta="→ /signal"
                icon={<Radio className="h-3.5 w-3.5" />}
              />
            </section>
          </div>
        </Window>

        {/* Side column */}
        <aside className="space-y-4">
          <Window title="core" subtitle="rotating">
            <div className="flex items-center justify-center p-4">
              <BootRing size={220} />
            </div>
          </Window>

          <Window title="ascii.portrait" subtitle="variant: focus">
            <div className="flex items-center justify-center p-4">
              <AsciiFace variant="focus" />
            </div>
            <div className="border-t border-line p-3 font-mono text-xs text-mute">
              <div>// rendered at 96dpi</div>
              <div>// prefer vector — swap me out anytime</div>
            </div>
          </Window>

          <Window title="quick.diags">
            <ul className="space-y-1 p-3 font-mono text-xs">
              <li className="flex justify-between">
                <span className="text-mute">voltage</span>
                <span className="text-accent">3.7 V</span>
              </li>
              <li className="flex justify-between">
                <span className="text-mute">charge</span>
                <span className="text-accent">87%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-mute">caffeinated</span>
                <span className="text-ink">true</span>
              </li>
              <li className="flex justify-between">
                <span className="text-mute">fuse</span>
                <span className="text-accent">intact</span>
              </li>
            </ul>
          </Window>

          <a
            href="/signal"
            className="group flex items-center justify-center gap-2 rounded-md border border-accent bg-accent/10 px-4 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
          >
            <Play className="h-4 w-4" aria-hidden />
            launch.mahfuz
          </a>
        </aside>
      </div>
    </div>
  );
}