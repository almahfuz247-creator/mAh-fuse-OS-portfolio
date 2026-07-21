import { ProjectSchema, type Project } from "@/lib/schemas";

export const uxcellence: Project = {
  slug: "uxcellence",
  title: "UXcellence (UIU event identity)",
  status: "shipped",
  role: "Designer",
  tools: ["Figma", "Photoshop"],
  year: 2024,
  summary:
    "Visual identity + landing surface for UXcellence, a UIU UX-focused student event.",
  goal: "Give UXcellence a memorable identity that signals craft — typographic system, accent palette, and a landing page operators (students) actually want to register from.",
  modules: [
    {
      name: "Wordmark + marks",
      detail:
        "Wordmark, monogram, and a stackable variant for social. Designed in two weights for hierarchy.",
    },
    {
      name: "Landing surface",
      detail:
        "One-page registration: hero, schedule, speakers, registration form, footer.",
    },
    {
      name: "Social kit",
      detail:
        "Templates for Instagram, LinkedIn, and Discord announcements — sized correctly, with brand assets bundled.",
    },
  ],
  diagnostics: [
    "Reviewed last year's UX-celebration decks from 4 other student events",
    "Sketched 6 wordmark directions; narrowed to 2 with peers",
    "Tested landing page with 3 students, iterated on hero copy",
  ],
  outputs: [
    "Wordmark + monogram (SVG/PNG)",
    "Brand colors + typography spec",
    "Landing page (Figma)",
    "Social templates (8)",
  ],
  signalRouting: [
    "Hero → Schedule → Speakers → Register",
  ],
};