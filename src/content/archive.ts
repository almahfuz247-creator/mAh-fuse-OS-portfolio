/**
 * Archive folder entries for /work/~/archive panel.
 * Career-era tree, non-detailed.
 */

export type ArchiveEntry = {
  era: string;
  period: string;
  items: { label: string; note: string }[];
};

export const archive: ArchiveEntry[] = [
  {
    era: "ui-era",
    period: "2024 – present",
    items: [
      { label: "UIU / operator modules", note: "Internal platform work" },
      { label: "UXcellence event identity", note: "Visual system + landing" },
      { label: "EduLearn v1", note: "E-learning platform surfaces" },
    ],
  },
  {
    era: "intern-era",
    period: "2023 – 2024",
    items: [
      { label: "coursework projects", note: "Studio projects, group critiques" },
    ],
  },
  {
    era: "earlier",
    period: "2021 – 2023",
    items: [
      { label: "calculator side-projects", note: "Personal apps, hobby builds" },
      { label: "study work + doodles", note: "Visual experiments" },
    ],
  },
];
