import { profile } from "@/content/profile";

function fmt(date: string) {
  // Accepts "2024-08" or ISO; returns "Aug 2024"
  const d = new Date(date + "-01");
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

type Entry = {
  period: string;
  role: string;
  org: string;
  summary: string;
  present?: boolean;
};

const entries: Entry[] = [
  {
    period: `${fmt(profile.experience.start)} – ${profile.experience.end === "present" ? "present" : fmt(profile.experience.end)}`,
    role: profile.experience.role,
    org: profile.experience.org,
    summary: profile.experience.summary,
    present: true,
  },
  {
    period: `${fmt(profile.education.start)} – ${fmt(profile.education.expected)}`,
    role: profile.education.program,
    org: profile.education.school,
    summary: `CGPA ${profile.education.cgpa}. UX coursework, design studios, capstone in progress.`,
    present: true,
  },
];

export function Timeline() {
  return (
    <div className="space-y-3">
      <header className="font-mono text-xs text-mute">uptime_log ::</header>
      <ol className="relative space-y-4 border-l border-line pl-4">
        {entries.map((e, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden
              className="absolute -left-[21px] top-1.5 inline-block h-2.5 w-2.5 rounded-full border border-accent bg-bg"
            />
            <div className="flex items-baseline justify-between gap-3 font-mono text-xs text-mute">
              <span>{e.period}</span>
              {e.present && (
                <span className="rounded-full border border-accent/40 bg-accent/5 px-2 py-0.5 text-[10px] uppercase tracking-widest text-accent">
                  running
                </span>
              )}
            </div>
            <div className="mt-0.5 font-mono text-sm text-ink">
              {e.role} <span className="text-mute">@</span> {e.org}
            </div>
            <p className="mt-1 font-mono text-xs leading-relaxed text-mute">
              {e.summary}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}