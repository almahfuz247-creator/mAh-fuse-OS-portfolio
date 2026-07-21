import type { Project } from "@/lib/schemas";
import { taskerPro } from "./tasker-pro";
import { edulearn } from "./edulearn";
import { calculators } from "./calculators";
import { uxcellence } from "./uxcellence";
import { cityFish } from "./city-fish";

export const projects: Project[] = [
  taskerPro,
  edulearn,
  calculators,
  uxcellence,
  cityFish,
];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);

export const projectsByStatus = {
  shipped: projects.filter((p) => p.status === "shipped"),
  wip: projects.filter((p) => p.status === "wip"),
  idea: projects.filter((p) => p.status === "idea"),
  archived: projects.filter((p) => p.status === "archived"),
};