import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";

type Group = {
  title: string;
  items: string[];
  flag: "research" | "design" | "tool" | "soft" | "lang";
};

const flagClasses: Record<Group["flag"], string> = {
  research: "border-accent/40 bg-accent/5 text-accent",
  design: "border-warn/40 bg-warn/5 text-warn",
  tool: "border-ink/20 bg-bg/40 text-ink/80",
  soft: "border-line bg-bg/40 text-mute",
  lang: "border-line bg-bg/40 text-mute",
};

export function SkillMatrix() {
  const groups: Group[] = [
    { title: "// research", flag: "research", items: ["User Research", "Information Architecture", "Usability Testing"] },
    { title: "// craft", flag: "design", items: ["Wireframing", "UI Design", "Prototyping"] },
    { title: "// tools", flag: "tool", items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "HTML", "CSS", "JavaScript (basic)"] },
    { title: "// soft modules", flag: "soft", items: [...profile.skills.soft] },
    { title: "// languages", flag: "lang", items: profile.skills.languages.map((l) => `${l.name} · ${l.level}`) },
  ];

  return (
    <div className="space-y-4">
      <header className="font-mono text-xs text-mute">loaded_modules ::</header>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className={cn(
              "rounded-md border p-3 font-mono",
              flagClasses[g.flag]
            )}
          >
            <div className="mb-2 text-[10px] uppercase tracking-widest opacity-80">
              {g.title}
            </div>
            <ul className="space-y-1">
              {g.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="opacity-60">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}