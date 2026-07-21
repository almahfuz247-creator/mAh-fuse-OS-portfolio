"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="group inline-flex h-9 items-center gap-2 rounded-md border border-line bg-panel px-3 text-xs font-mono text-ink hover:border-accent hover:text-accent transition-colors"
    >
      {theme === "dark" ? (
        <>
          <Moon className="h-3.5 w-3.5" />
          <span>dark</span>
        </>
      ) : (
        <>
          <Sun className="h-3.5 w-3.5" />
          <span>light</span>
        </>
      )}
      <span className="hidden sm:inline opacity-60 group-hover:opacity-100">
        // toggle
      </span>
    </button>
  );
}
