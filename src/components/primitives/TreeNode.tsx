"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, File, Folder, FolderOpen, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/schemas";

type Props = {
  name: string;
  selected?: string | null;
  onSelect: (project: Project) => void;
  projects: Project[];
  defaultOpen?: boolean;
};

const statusGlyph = (status: Project["status"]) => {
  switch (status) {
    case "shipped":
      return <CircleDot className="h-3 w-3 text-accent" aria-hidden />;
    case "wip":
      return <CircleDot className="h-3 w-3 text-warn" aria-hidden />;
    case "archived":
      return <Circle className="h-3 w-3 text-mute" aria-hidden />;
    case "idea":
    default:
      return <Circle className="h-3 w-3 text-mute" aria-hidden />;
  }
};

const statusLabel = (s: Project["status"]) =>
  ({ shipped: "shipped", wip: "wip", idea: "idea", archived: "archive" })[s];

export function TreeNode({
  name,
  selected,
  onSelect,
  projects,
  defaultOpen = true,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="font-mono text-xs">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full items-center gap-1.5 rounded px-1.5 py-1 text-left hover:bg-bg/50",
          open ? "text-ink" : "text-mute"
        )}
        aria-expanded={open}
      >
        {open ? (
          <ChevronDown className="h-3.5 w-3.5" aria-hidden />
        ) : (
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
        )}
        {open ? (
          <FolderOpen className="h-3.5 w-3.5 text-accent" aria-hidden />
        ) : (
          <Folder className="h-3.5 w-3.5 text-accent" aria-hidden />
        )}
        <span>{name}</span>
        <span className="ml-auto text-mute/60">{projects.length}</span>
      </button>
      {open && (
        <ul className="ml-3 mt-0.5 space-y-0.5 border-l border-line pl-2">
          {projects.map((p) => {
            const isSelected = selected === p.slug;
            return (
              <li key={p.slug}>
                <button
                  type="button"
                  onClick={() => onSelect(p)}
                  className={cn(
                    "flex w-full items-center gap-1.5 rounded px-1.5 py-1 text-left transition-colors",
                    isSelected
                      ? "bg-accent/10 text-accent"
                      : "text-mute hover:bg-bg/50 hover:text-ink"
                  )}
                  aria-current={isSelected ? "true" : undefined}
                >
                  {statusGlyph(p.status)}
                  <File className="h-3 w-3" aria-hidden />
                  <span className="flex-1 truncate">{p.slug}</span>
                  <span className="text-mute/60">
                    {statusLabel(p.status)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}