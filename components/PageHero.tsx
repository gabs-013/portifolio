export default function PageHero({
  kicker,
  title,
  intro,
  compact = false,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
  compact?: boolean;
}) {
  return (
    <header
      className={`bg-ink pt-[calc(var(--nav-h)+2.5rem)] md:pt-[calc(var(--nav-h)+3.5rem)] ${
        compact ? "pb-8 md:pb-10" : "pb-16 md:pb-24"
      }`}
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <p className="label mb-6 text-mist">{kicker}</p>
        <h1 className="display h-hero max-w-[18ch]">{title}</h1>
        {intro && <p className="mt-6 max-w-[56ch] text-lg text-paper/80 md:text-xl">{intro}</p>}
      </div>
    </header>
  );
}
