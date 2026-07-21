"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import { labExperiments } from "@/content/lab-experiments";
import { archive } from "@/content/archive";
import { TreeNode } from "@/components/primitives/TreeNode";
import { CaseStudyPanel } from "./CaseStudyPanel";
import { Window } from "@/components/chrome/Window";
import { Stat } from "@/components/primitives/Stat";
import { FolderGit2, FlaskConical, Archive as ArchiveIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Tab = "case-studies" | "lab" | "archive";

export function WorkExplorer() {
  const [selected, setSelected] = useState<string>(
    projects.find((p) => p.status === "shipped")?.slug ?? projects[0]!.slug
  );
  const [tab, setTab] = useState<Tab>("case-studies");

  const project = projects.find((p) => p.slug === selected) ?? projects[0]!;

  return (
    <div className="space-y-4">
      {/* Tab bar */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
        <TabButton active={tab === "case-studies"} onClick={() => setTab("case-studies")} icon={<FolderGit2 className="h-3 w-3" />}>
          /case-studies
        </TabButton>
        <TabButton active={tab === "lab"} onClick={() => setTab("lab")} icon={<FlaskConical className="h-3 w-3" />}>
          /lab-experiments
        </TabButton>
        <TabButton active={tab === "archive"} onClick={() => setTab("archive")} icon={<ArchiveIcon className="h-3 w-3" />}>
          ~/archive
        </TabButton>
        <span className="ml-auto text-mute">{projects.length} projects · 4 lab · 3 eras</span>
      </div>

      {tab === "case-studies" && (
        <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
          {/* Tree */}
          <Window title="file-tree" subtitle="~/work">
            <div className="p-3">
              <TreeNode
                name="case-studies"
                projects={projects}
                selected={selected}
                onSelect={(p) => setSelected(p.slug)}
              />
            </div>
          </Window>

          {/* Detail */}
          <Window
            title={`case-study // ${project.slug}`}
            subtitle={project.tools.join(" · ")}
          >
            <div className="p-4 sm:p-6">
              <CaseStudyPanel project={project} />
            </div>
          </Window>
        </div>
      )}

      {tab === "lab" && (
        <div className="grid gap-3 sm:grid-cols-2">
          {labExperiments.map((exp) => (
            <Window
              key={exp.slug}
              title={`lab/${exp.slug}`}
              subtitle={exp.effect}
            >
              <div className="p-4">
                <h3 className="font-mono text-sm text-accent">▸ {exp.title}</h3>
                <p className="mt-1 font-mono text-xs text-mute">{exp.blurb}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/40 px-2 py-0.5 font-mono text-[10px] text-mute">
                  <span aria-hidden>●</span> effect: {exp.effect}
                </div>
              </div>
            </Window>
          ))}
        </div>
      )}

      {tab === "archive" && (
        <div className="grid gap-3 md:grid-cols-3">
          {archive.map((era) => (
            <Window
              key={era.era}
              title={`~/archive/${era.era}`}
              subtitle={era.period}
            >
              <div className="p-4">
                <ul className="space-y-2 font-mono text-xs">
                  {era.items.map((item) => (
                    <li key={item.label} className="space-y-0.5">
                      <div className="text-ink">{item.label}</div>
                      <div className="text-mute">// {item.note}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Window>
          ))}
        </div>
      )}

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="projects" value={projects.length} tone="accent" />
        <Stat label="shipped" value={projects.filter((p) => p.status === "shipped").length} />
        <Stat label="tools" value={Array.from(new Set(projects.flatMap((p) => p.tools))).length} />
        <Stat label="years" value={new Date().getFullYear() - 2023} delta="designing since 2023" />
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono transition-colors",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-line bg-panel text-mute hover:border-ink/40 hover:text-ink"
      )}
      aria-pressed={active}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}