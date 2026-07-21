export type LabExperiment = {
  slug: string;
  title: string;
  blurb: string;
  effect:
    | "hover-cards"
    | "magnetic-cursor"
    | "glitch-text"
    | "terminal";
};

export const labExperiments: LabExperiment[] = [
  {
    slug: "hover-cards",
    title: "Hover surface / cards",
    blurb:
      "Cards lift on cursor proximity. A 0.16 s ease — not floaty, just enough.",
    effect: "hover-cards",
  },
  {
    slug: "magnetic-cursor",
    title: "Magnetic cursor (≤8px)",
    blurb:
      "Capped pointer displacement on CTAs. Respects reduced-motion.",
    effect: "magnetic-cursor",
  },
  {
    slug: "glitch-text",
    title: "Glitch text channel-shift",
    blurb:
      "RGB-split on hover. Three layered copies, fast cycle, settles on idle.",
    effect: "glitch-text",
  },
  {
    slug: "terminal",
    title: "Terminal command palette",
    blurb:
      "Inline > prompts. Type-to-validate. No submit button until valid.",
    effect: "terminal",
  },
];
