export default function SectionHead({
  label,
  title,
  id,
  tone = "ink",
  compact = false,
}: {
  /** Kept for old call sites; the number is no longer shown. */
  n?: string;
  label: string;
  title: React.ReactNode;
  id: string;
  tone?: "ink" | "paper" | "tally";
  compact?: boolean;
}) {
  const muted = tone === "ink" ? "text-mist" : tone === "tally" ? "text-ink" : "text-ink/70";
  return (
    <header className={compact ? "mb-6 md:mb-8" : "mb-12 md:mb-16"}>
      <p className={`label mb-4 ${muted}`}>{label}</p>
      <h2 id={id} className="display h-section max-w-[22ch]">
        {title}
      </h2>
    </header>
  );
}
