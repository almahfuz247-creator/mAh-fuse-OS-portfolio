import type { Metadata } from "next";
import { WorkExplorer } from "@/components/work/WorkExplorer";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies, lab experiments, and archive — selected work by Abdullah Al Mahfuz.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-6 space-y-2">
        <div className="font-mono text-xs text-mute">▌ ls -la ~/work</div>
        <h1 className="font-mono text-2xl font-bold text-ink sm:text-3xl">
          Work
        </h1>
        <p className="font-mono text-sm text-mute">
          Five shipped modules, four lab experiments, three eras of archive.
          Pick a file to inspect.
        </p>
      </header>
      <WorkExplorer />
    </div>
  );
}