import { sizeSplit, type Creator } from "@/content/creators-data";

const fills = ["bg-tally", "bg-ink", "bg-mist", "bg-ink/25"] as const;

/** Creators by size: a proportion bar with the count of each tier, for a light background. */
export default function SizeBar({ roster }: { roster: Creator[] }) {
  const parts = sizeSplit(roster).filter((p) => p.n > 0);
  return (
    <div className="mb-10">
      <p className="label mb-3 text-ink/70">By followers, biggest first</p>
      <div aria-hidden className="flex h-3 gap-1">
        {parts.map((p, i) => (
          <span key={p.label} className={`${fills[i % 4]} rounded-full`} style={{ flexGrow: p.n, flexBasis: 0 }} />
        ))}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5">
        {parts.map((p, i) => (
          <li key={p.label} className="flex items-center gap-2 text-[0.9375rem]">
            <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${fills[i % 4]}`} />
            {p.label}
            <span className="num text-lg">{p.n}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
