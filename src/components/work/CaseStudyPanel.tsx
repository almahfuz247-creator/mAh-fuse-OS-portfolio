import type { Project } from "@/lib/schemas";
import { Stat } from "@/components/primitives/Stat";

const statusLabel = {
  shipped: { label: "shipped", tone: "text-accent" },
  wip: { label: "wip", tone: "text-warn" },
  idea: { label: "idea", tone: "text-mute" },
  archived: { label: "archived", tone: "text-mute" },
} as const;

type Props = { project: Project };

export function CaseStudyPanel({ project }: Props) {
  const s = statusLabel[project.status];
  return (
    <article className="space-y-6">
      <header className="space-y-2 border-b border-line pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-mute">
          <span className={`inline-flex items-center gap-1.5 ${s.tone}`}>
            <span aria-hidden>●</span>
            {s.label}
          </span>
          <span>·</span>
          <span>/{project.slug}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
        <h2 className="font-mono text-2xl font-bold text-ink sm:text-3xl">
          {project.title}
        </h2>
        <p className="font-mono text-sm leading-relaxed text-mute">
          {project.summary}
        </p>
      </header>

      <section className="space-y-2">
        <h3 className="font-mono text-xs uppercase tracking-widest text-mute">
          goal
        </h3>
        <p className="font-mono text-sm leading-relaxed text-ink/90">
          {project.goal}
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-mono text-xs uppercase tracking-widest text-mute">
          modules
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {project.modules.map((m) => (
            <li
              key={m.name}
              className="rounded-md border border-line bg-bg/40 p-3 font-mono"
            >
              <div className="text-sm text-accent">▸ {m.name}</div>
              <p className="mt-1 text-xs leading-relaxed text-mute">{m.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-mono text-xs uppercase tracking-widest text-mute">
            diagnostics
          </h3>
          <ul className="space-y-1 font-mono text-xs text-ink/90">
            {project.diagnostics.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-accent">$</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-mono text-xs uppercase tracking-widest text-mute">
            outputs
          </h3>
          <ul className="space-y-1 font-mono text-xs text-ink/90">
            {project.outputs.map((o, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-warn">↳</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-2 border-t border-line pt-4">
        <h3 className="font-mono text-xs uppercase tracking-widest text-mute">
          signal routing
        </h3>
        <ul className="space-y-1 font-mono text-xs">
          {project.signalRouting.map((s, i) => (
            <li key={i} className="flex gap-2 text-ink/80">
              <span className="text-mute">·</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="role" value={project.role} />
        <Stat label="year" value={project.year} />
        <Stat label="modules" value={project.modules.length} />
        <Stat
          label="tools"
          value={project.tools.length}
          delta={project.tools.join(" · ")}
        />
      </section>
    </article>
  );
}