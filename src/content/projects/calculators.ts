import { ProjectSchema, type Project } from "@/lib/schemas";

export const calculators: Project = {
  slug: "calculators",
  title: "Calculators (hobby series)",
  status: "shipped",
  role: "Designer + builder",
  tools: ["Figma", "HTML", "CSS", "JavaScript"],
  year: 2023,
  summary:
    "A personal series of niche calculator apps built for fun: tip splitter, resistor color codes, GPA converter, fuel-cost estimator.",
  goal: "Treat each calculator as a tiny UX problem — minimize input friction, expose only the result that matters, and never lose the operator's place.",
  modules: [
    {
      name: "Tip splitter",
      detail:
        "Single screen, three inputs (bill / tip % / heads), big live result. No tabs, no settings.",
    },
    {
      name: "Resistor color codes",
      detail:
        "Tap-to-add bands, instant resistance readout. Mirrors the physical resistor-reading workflow.",
    },
    {
      name: "GPA converter",
      detail:
        "Dual-mode: CGPA ↔ percentage. Single number in, single number out.",
    },
    {
      name: "Fuel cost",
      detail:
        "Distance + consumption + fuel price → total cost + per-person split.",
    },
  ],
  diagnostics: [
    "Personal journaling: which calculator do I actually reach for, and why?",
    "Comparator review: pull one module from each of the top 3 apps in the category, screenshot the input surface, write what annoys me.",
  ],
  outputs: [
    "4 working HTML/CSS/JS calculators",
    "One-page case study (per app)",
    "Side-by-side comparator deck",
  ],
  signalRouting: [
    "Single input surface → single output",
    "No menus, no settings, no fluff",
  ],
};