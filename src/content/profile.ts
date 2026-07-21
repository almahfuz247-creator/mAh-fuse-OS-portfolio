/**
 * Profile / about content for Abdullah Al Mahfuz.
 * Drives /sys page, JSON-LD, resume gate response copy.
 */

export const profile = {
  name: "Abdullah Al Mahfuz",
  handle: "mahfuz",
  role: "UX Designer",
  org: "United International University",
  location: "Dhaka, Bangladesh",
  timezone: "Asia/Dhaka (UTC+6)",
  email: "mahfuz.bsc@gmail.com",
  phone: "+880 1XXX-XXXXXX",
  tagline: "UX that holds charge under pressure.",
  shortBio:
    "UX designer at UIU crafting interfaces that survive contact with operators. Research-first, prototype-driven, slightly addicted to calculators.",
  longBio: `I build operator-facing systems: clean IA, defensible wireframes, prototypes that survive usability testing, and UI that holds up when the load spikes. Currently designing modules for internal platforms at United International University, where I run diagnostics on student + staff flows and ship outputs that lower the support load.

Hobby: taking apart calculators and putting them back together, in tools and in apps.`,

  education: {
    school: "United International University",
    program: "B.Sc. Computer Science & Engineering",
    start: "2021-01",
    expected: "2026-06",
    cgpa: "3.25 / 4.00",
  },

  experience: {
    org: "United International University",
    role: "UX Designer",
    start: "2024-08",
    end: "present",
    summary:
      "Lead designer for internal platforms — research, IA, wireframes, high-fidelity UI, prototyping, usability testing.",
  },

  skills: {
    hard: [
      "User Research",
      "Information Architecture",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Usability Testing",
      "Figma",
      "Adobe XD",
      "Sketch",
      "Photoshop",
      "HTML",
      "CSS",
      "JavaScript (basic)",
    ],
    soft: [
      "Communication",
      "Teamwork",
      "Problem-solving",
      "Adaptability",
      "Empathy",
    ],
    languages: [
      { name: "Bangla", level: "native" },
      { name: "English", level: "proficient" },
    ],
  },

  hobbies: ["Trying different calculators", "UXcellence events", "Squid Game lore"],

  social: [
    { label: "Email", value: "mahfuz.bsc@gmail.com", href: "mailto:mahfuz.bsc@gmail.com", hint: "primary channel" },
    { label: "LinkedIn", value: "/in/abdullah-al-mahfuz", href: "https://linkedin.com/", hint: "career history" },
    { label: "GitHub", value: "@mahfuz", href: "https://github.com/", hint: "code fragments" },
    { label: "Figma", value: "@mahfuz", href: "https://figma.com/@mahfuz", hint: "design surfaces" },
    { label: "Behance", value: "/mAhfuz", href: "https://behance.net/", hint: "archived outputs" },
  ],
} as const;

export type Profile = typeof profile;