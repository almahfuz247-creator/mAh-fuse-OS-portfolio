import { ProjectSchema, type Project } from "@/lib/schemas";

export const taskerPro: Project = ProjectSchema.parse({
  slug: "tasker-pro",
  title: "Tasker Pro",
  status: "shipped",
  role: "Sole Designer",
  tools: ["Figma"],
  year: 2024,
  summary:
    "A personal task-management app with category grouping, progress tracking, and reminder notifications.",
  goal: "Help operators cut cognitive load by turning scattered tasks into a single readable stream, with progress signals that reinforce momentum.",
  modules: [
    {
      name: "Task inbox",
      detail:
        "Single scrollable queue with quick-add, swipe-to-complete, and a toggle for completed view.",
    },
    {
      name: "Category lanes",
      detail:
        "Operators bucket tasks into lanes (work / personal / study / errands). Lanes are color-coded for at-a-glance triage.",
    },
    {
      name: "Progress ring",
      detail:
        "Per-lane and global completion rings. Visual signal that the system is discharging gracefully, not chaotically.",
    },
    {
      name: "Reminders",
      detail:
        "Local-notification reminders with quiet hours and a fuse-style snooze (5 / 15 / 60 min).",
    },
  ],
  diagnostics: [
    "Diary studies (5 operators) on existing task apps — surfaced chaos as the dominant frustration.",
    "Card sort to derive category taxonomy.",
    "Tree-test on routing.",
    "Usability tests on 3 mid-fi prototypes; iterated on the add-task module twice.",
  ],
  outputs: [
    "Information architecture map",
    "Wireframe set (40+ frames)",
    "Hi-fi prototype (Figma)",
    "Usability test report",
  ],
  signalRouting: [
    "Inbox → Category lanes → Task detail",
    "Reminders → Quiet hours overlay",
  ],
});