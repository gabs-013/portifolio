"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

/** Switches between several screens of one tool. Panels are always in the DOM, only one is visible. */
export default function ScreenTabs({
  label,
  screens,
}: {
  label: string;
  screens: { id: string; label: string; node: ReactNode }[];
}) {
  const [active, setActive] = useState(0);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent, i: number) => {
    const last = screens.length - 1;
    let n = i;
    if (e.key === "ArrowRight") n = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft") n = i === 0 ? last : i - 1;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = last;
    else return;
    e.preventDefault();
    setActive(n);
    refs.current[n]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label={`${label}: screens`} className="mb-3 flex flex-wrap gap-2">
        {screens.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-t-${s.id}`}
            aria-selected={active === i}
            aria-controls={`${base}-p-${s.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`label tap inline-flex rounded-full border px-4 transition-colors ${
              active === i
                ? "border-ink bg-ink text-paper"
                : "border-ink/30 text-ink hover:border-ink"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      {screens.map((s, i) => (
        <div
          key={s.id}
          role="tabpanel"
          id={`${base}-p-${s.id}`}
          aria-labelledby={`${base}-t-${s.id}`}
          hidden={active !== i}
        >
          {s.node}
        </div>
      ))}
    </div>
  );
}
