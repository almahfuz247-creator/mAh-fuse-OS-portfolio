import type { Metadata } from "next";
import { Manifesto } from "@/components/sys/Manifesto";
import { SkillMatrix } from "@/components/sys/SkillMatrix";
import { Timeline } from "@/components/sys/Timeline";
import { ResumeGate } from "@/components/forms/ResumeGate";
import { Window } from "@/components/chrome/Window";
import { Stat } from "@/components/primitives/Stat";
import { profile } from "@/content/profile";
import { Cpu, User, MapPin, Mail, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Sys",
  description:
    "Manifesto, skills, and uptime log of Abdullah Al Mahfuz — UX designer at UIU.",
};

export default function SysPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 sm:py-12">
      {/* Identity */}
      <Window title="whoami" subtitle="user identity module">
        <div className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:p-7">
          <div className="space-y-3 font-mono">
            <div className="text-xs text-mute">▌ {profile.role} · {profile.org}</div>
            <h1 className="text-2xl font-bold text-ink sm:text-3xl">
              {profile.name}
            </h1>
            <p className="text-sm leading-relaxed text-mute">{profile.shortBio}</p>
            <dl className="grid gap-2 pt-2 text-xs sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3 text-accent" aria-hidden />
                <dt className="text-mute">location</dt>
                <dd className="text-ink">{profile.location}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 text-accent" aria-hidden />
                <dt className="text-mute">email</dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-ink underline decoration-accent/40 underline-offset-4 hover:text-accent"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-3 w-3 text-accent" aria-hidden />
                <dt className="text-mute">cgpa</dt>
                <dd className="text-ink">{profile.education.cgpa}</dd>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-3 w-3 text-accent" aria-hidden />
                <dt className="text-mute">handle</dt>
                <dd className="text-ink">@{profile.handle}</dd>
              </div>
            </dl>
          </div>
          <div className="hidden items-start justify-end sm:flex">
            <Cpu className="h-10 w-10 text-accent" aria-hidden />
          </div>
        </div>
      </Window>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <Window title="manifesto.txt" subtitle="/sys">
            <div className="p-5">
              <Manifesto />
            </div>
          </Window>
          <Window title="skills.matrix" subtitle="13 hard · 5 soft · 2 lang">
            <div className="p-5">
              <SkillMatrix />
            </div>
          </Window>
        </div>

        <aside className="space-y-6">
          <Window title="uptime_log" subtitle="career timeline">
            <div className="p-5">
              <Timeline />
            </div>
          </Window>

          <Window title="quick_stats">
            <div className="grid grid-cols-2 gap-2 p-3">
              <Stat label="hard modules" value={profile.skills.hard.length} tone="accent" />
              <Stat label="soft modules" value={profile.skills.soft.length} />
              <Stat label="languages" value={profile.skills.languages.length} />
              <Stat label="cgpa" value={profile.education.cgpa.split(" ")[0]} />
            </div>
          </Window>

          <ResumeGate />
        </aside>
      </div>
    </div>
  );
}