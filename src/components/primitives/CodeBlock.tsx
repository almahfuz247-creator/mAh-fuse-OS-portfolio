import { cn } from "@/lib/cn";

type Props = {
  code: string;
  language?: string;
  glow?: boolean;
  showLineNumbers?: boolean;
};

export function CodeBlock({
  code,
  language = "txt",
  glow = false,
  showLineNumbers = true,
}: Props) {
  const lines = code.split("\n");
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-md border border-line bg-bg/60 p-3 font-mono text-xs leading-relaxed text-ink/90",
        glow && "shadow-glow"
      )}
    >
      <div className="mb-2 inline-flex items-center gap-2 border-b border-line pb-1 text-mute">
        <span aria-hidden>●</span>
        <span aria-hidden>●</span>
        <span aria-hidden>●</span>
        <span className="ml-2">{language}</span>
      </div>
      <code className="block">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {showLineNumbers && (
              <span className="mr-3 inline-block w-6 select-none text-right text-mute/60 tabular-nums">
                {i + 1}
              </span>
            )}
            {line || "\u00A0"}
          </span>
        ))}
      </code>
    </pre>
  );
}
