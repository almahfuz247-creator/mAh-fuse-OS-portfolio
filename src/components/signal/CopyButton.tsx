"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {
        /* ignore */
      }
    }
  };
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="copy to clipboard"
      className="inline-flex h-7 items-center gap-1.5 rounded border border-line bg-bg/40 px-2 text-xs text-mute transition-colors hover:border-accent hover:text-accent"
    >
      <Copy className="h-3 w-3" aria-hidden />
      {copied ? "copied" : "copy"}
    </button>
  );
}