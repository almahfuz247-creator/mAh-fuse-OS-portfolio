import { ProjectSchema, type Project } from "@/lib/schemas";

export const edulearn: Project = {
  slug: "edulearn",
  title: "EduLearn",
  status: "shipped",
  role: "UX Designer",
  tools: ["Figma"],
  year: 2024,
  summary:
    "A skill-learning platform connecting learners and instructors with progress tracking and structured pathways.",
  goal: "Reduce the friction between discovering a skill and committing to it — give both learners and instructors clear, low-noise signals of progress.",
  modules: [
    {
      name: "Skill catalog",
      detail:
        "Browse by domain, difficulty, and duration. Filter chips with explicit counts.",
    },
    {
      name: "Pathway engine",
      detail:
        "Skills chain into pathways — courses unlock sequentially with progress tied to prior module completion.",
    },
    {
      name: "Instructor console",
      detail:
        "Operators (instructors) see a roster of learners, completion rates, and at-risk flags (no progress for 7+ days).",
    },
    {
      name: "Progress dashboard",
      detail:
        "Operator and instructor share the same progress signal — a ring of completion plus a streak counter.",
    },
  ],
  diagnostics: [
    "Competitive audit of 6 learning platforms",
    "Interviews with 4 learners, 2 instructors",
    "Persona development (Anxious Ali, Steady Sara)",
    "IA tree test, 2 rounds",
    "Usability test on mid-fi prototype",
  ],
  outputs: [
    "Research synthesis",
    "IA map",
    "Persona deck",
    "Mid-fi prototype",
    "Final hi-fi flows (Figma)",
  ],
  signalRouting: [
    "Catalog → Course detail → Enroll",
    "Learner dashboard ↔ Instructor console",
  ],
};