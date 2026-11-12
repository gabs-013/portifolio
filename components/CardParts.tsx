import type { ReactNode } from "react";

/** Shared pieces of the "image on top, name, description, chips, stats" card format. */

export function Chip({ children, primary = false }: { children: ReactNode; primary?: boolean }) {
  return (
    <span
      className={`label inline-flex items-center rounded-md px-2.5 py-1 ${
        primary ? "bg-tally text-ink" : "bg-paper/10 text-paper"
      }`}
    >
      {children}
    </span>
  );
}

export function Stats({
  items,
}: {
  items: { label: string; value: string; accent?: boolean }[];
}) {
  return (
    <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-paper/15 pt-4">
      {items.map((i) => (
        <div key={i.label} className="flex flex-col-reverse">
          <dt className="label mt-1 text-paper/70">{i.label}</dt>
          <dd className={`text-xl font-bold leading-tight tracking-tight ${i.accent ? "text-tally" : ""}`}>
            {i.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Square badge in the top-right corner of the card body. */
export function Badge({ children, filled = false }: { children: ReactNode; filled?: boolean }) {
  return (
    <span
      aria-hidden
      className={`label grid h-10 w-10 shrink-0 place-items-center rounded-md ${
        filled ? "bg-tally text-ink" : "border border-paper/25 text-paper"
      }`}
    >
      {children}
    </span>
  );
}

export const cardShell =
  "group flex h-full flex-col overflow-hidden rounded-xl border border-paper/15 bg-graphite text-paper transition-colors";
