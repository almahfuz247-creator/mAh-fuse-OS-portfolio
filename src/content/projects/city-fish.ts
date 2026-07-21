import { ProjectSchema, type Project } from "@/lib/schemas";

export const cityFish: Project = {
  slug: "city-fish",
  title: "City Fish",
  status: "idea",
  role: "Concept designer",
  tools: ["Figma"],
  year: 2025,
  summary:
    "Concept-stage startup idea: connecting city-based fishermen with buyers and restaurants through a transparent catch-log marketplace.",
  goal: "Sketch the early IA and surface assumptions before any code is written. Test the value prop with 3 fishermen and 2 restaurant owners.",
  modules: [
    {
      name: "Catch log",
      detail:
        "Fishermen log catch (species, kg, location, time). Becomes the marketplace's source of truth.",
    },
    {
      name: "Restaurant matcher",
      detail:
        "Restaurants see live catch within their radius, can place a hold before the boat lands.",
    },
    {
      name: "Operator dashboard",
      detail:
        "Catch frequency, buyer ratings, payout history.",
    },
  ],
  diagnostics: [
    "3 fisherman interviews (planned)",
    "2 restaurant owner interviews (planned)",
    "Persona hypotheses — open to revision",
  ],
  outputs: [
    "Concept deck",
    "Wireframes (low-fi)",
    "IA sketch",
  ],
  signalRouting: [
    "Catch log → Live market → Restaurant match",
    "Operator dashboard ↔ Payouts",
  ],
};