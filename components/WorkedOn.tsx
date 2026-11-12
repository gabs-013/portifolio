"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { hero } from "@/content/site";
import { getProject } from "@/content/work";
import SectionHead from "./SectionHead";

type Item = { name: string; logo?: string; initials?: string; slug?: string; photo?: { src: string; w: number; h: number; alt: string } };

/** One color per area. Full class names so Tailwind can see them. */
const tone = [
  { bg: "bg-tally", text: "text-tally", ring: "ring-tally", border: "border-tally" },
  { bg: "bg-aqua", text: "text-aqua", ring: "ring-aqua", border: "border-aqua" },
  { bg: "bg-paper", text: "text-paper", ring: "ring-paper", border: "border-paper" },
  { bg: "bg-mist", text: "text-mist", ring: "ring-mist", border: "border-mist" },
] as const;

function Mark({ it, size }: { it: Item; size: "md" | "lg" }) {
  const box = size === "lg" ? "h-14 w-14" : "h-[46px] w-[46px]";
  return it.logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/ticker/${it.logo}`}
      alt=""
      loading="lazy"
      className={`block ${box} object-contain brightness-0 invert`}
    />
  ) : (
    <span
      aria-hidden
      className={`font-extrabold tracking-tight text-paper ${
        size === "lg" ? "text-2xl" : (it.initials?.length ?? 0) > 2 ? "text-base" : "text-lg"
      }`}
    >
      {it.initials}
    </span>
  );
}

/** "What I've worked on": a proportion bar + filters + icon grid + detail card. */
export default function WorkedOn() {
  const areas = hero.areas;
  const all = useMemo(
    () => areas.flatMap((a, ai) => a.items.map((it) => ({ ...it, area: ai }))),
    [areas],
  );
  const [area, setArea] = useState<number | null>(null); // null = all
  const [selected, setSelected] = useState<string | null>(null);

  const asideRef = useRef<HTMLElement>(null);
  const sel = all.find((i) => i.name === selected) ?? null;
  const project = sel?.slug ? getProject(sel.slug) : undefined;
  const visible = area === null ? all.length : areas[area].items.length;

  // On phones the detail card sits above the grid: bring it into view when an icon is picked.
  useEffect(() => {
    if (selected && window.matchMedia("(max-width: 1023px)").matches) {
      asideRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [selected]);

  const pick = (next: number | null) => {
    setArea(next);
    // keep the selection only if it is still in view
    if (selected && next !== null && all.find((i) => i.name === selected)?.area !== next) setSelected(null);
  };

  return (
    <section id="worked-on" aria-labelledby="worked-title" className="bg-ink py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionHead compact id="worked-title" label="Worked on" title={<>Brands, titles and events</>} />

        {/* Proportion bar: width = number of items in each area. Click a segment to filter. */}
        <div role="group" aria-label="Filter by area" className="flex h-4 gap-1">
          {areas.map((a, i) => (
            <button
              key={a.title}
              type="button"
              aria-pressed={area === i}
              aria-label={`${a.title}, ${a.items.length}`}
              onClick={() => pick(area === i ? null : i)}
              style={{ flexGrow: a.items.length, flexBasis: 0 }}
              className={`${tone[i].bg} rounded-full transition-opacity ${
                area === null || area === i ? "opacity-100" : "opacity-25"
              } hover:opacity-100 focus-visible:opacity-100`}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={area === null}
            onClick={() => pick(null)}
            className={`label tap inline-flex rounded-full border px-4 ${
              area === null ? "border-paper bg-paper text-ink" : "border-paper/30 text-paper hover:border-paper"
            }`}
          >
            All · {all.length}
          </button>
          {areas.map((a, i) => (
            <button
              key={a.title}
              type="button"
              aria-pressed={area === i}
              onClick={() => pick(area === i ? null : i)}
              className={`label tap inline-flex gap-2 rounded-full border px-4 ${
                area === i ? "border-paper bg-paper text-ink" : "border-paper/30 text-paper hover:border-paper"
              }`}
            >
              <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${tone[i].bg}`} />
              {a.title} · {a.items.length}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(64px,1fr))] content-start gap-x-3 gap-y-5 max-lg:order-2 lg:col-span-8 lg:grid-cols-[repeat(auto-fill,minmax(76px,1fr))]">
            {all.map((it) => {
              const dim = area !== null && it.area !== area;
              const on = selected === it.name;
              return (
                <li key={it.name} className="text-center">
                  <button
                    type="button"
                    aria-pressed={on}
                    aria-disabled={dim || undefined}
                    tabIndex={dim ? -1 : 0}
                    onClick={() => !dim && setSelected(on ? null : it.name)}
                    className={`group block w-full transition-opacity ${dim ? "pointer-events-none opacity-20" : ""}`}
                  >
                    <span
                      className={`relative grid aspect-square w-full place-items-center overflow-hidden rounded-2xl border bg-graphite transition-transform group-hover:-translate-y-0.5 ${
                        on ? `border-transparent ring-2 ${tone[it.area].ring}` : "border-paper/15 group-hover:border-paper/50"
                      }`}
                    >
                      <Mark it={it} size="md" />
                      <span aria-hidden className={`absolute bottom-1.5 h-1 w-6 rounded-full ${tone[it.area].bg}`} />
                    </span>
                    <span className="mt-2 block text-[0.8125rem] leading-tight text-paper/85">{it.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail card */}
          <aside
            ref={asideRef}
            aria-live="polite"
            className="scroll-mt-[calc(var(--nav-h)+1rem)] rounded-2xl border border-paper/15 bg-graphite p-6 max-lg:order-1 lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)] lg:col-span-4 lg:self-start"
          >
            {sel ? (
              <>
                <div className="flex items-center gap-4">
                  <span className={`grid h-20 w-20 shrink-0 place-items-center rounded-2xl border-2 bg-ink ${tone[sel.area].border}`}>
                    <Mark it={sel} size="lg" />
                  </span>
                  <div className="min-w-0">
                    <p className={`label ${tone[sel.area].text}`}>{areas[sel.area].title}</p>
                    <h3 className="display h-sub mt-1">{sel.name}</h3>
                  </div>
                </div>
                {sel.photo && (
                  <Image
                    src={sel.photo.src}
                    alt={sel.photo.alt}
                    width={sel.photo.w}
                    height={sel.photo.h}
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="mt-5 aspect-[4/3] w-full rounded-xl object-cover object-top"
                  />
                )}
                <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-t rule-paper pt-5">
                  {project?.brand && (
                    <div>
                      <dt className="label text-mist">Brand</dt>
                      <dd className="mt-1">{project.brand}</dd>
                    </div>
                  )}
                  {project?.year && (
                    <div>
                      <dt className="label text-mist">Year</dt>
                      <dd className="mt-1">{project.year}</dd>
                    </div>
                  )}
                  {project && project.formats.length > 0 && (
                    <div className="col-span-2">
                      <dt className="label text-mist">Format</dt>
                      <dd className="mt-1">{project.formats.join(" · ")}</dd>
                    </div>
                  )}
                  {project?.role && (
                    <div className="col-span-2">
                      <dt className="label text-mist">My role</dt>
                      <dd className="mt-1">{project.role}</dd>
                    </div>
                  )}
                </dl>
                {project?.tier === "case" ? (
                  <Link
                    href={`/work/${project.slug}`}
                    className="label tap mt-5 inline-flex bg-tally px-5 text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Open case ↗
                  </Link>
                ) : (
                  <p className="mt-5 text-paper/70">
                    {project ? "Listed in my credits." : "Part of my work in this area."}
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="num text-[clamp(3.4rem,6vw,5rem)] text-tally">{visible}</p>
                <p className="display h-sub mt-2">
                  {area === null ? "brands, titles and events" : `in ${areas[area].title}`}
                </p>
                <ul className="mt-6 hidden space-y-2 border-t rule-paper pt-5 lg:block">
                  {areas.map((a, i) => (
                    <li key={a.title} className="flex items-center gap-3 text-paper/85">
                      <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${tone[i].bg}`} />
                      <span className="flex-1">{a.title}</span>
                      <span className="num text-lg">{a.items.length}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-paper/70 lg:mt-6">Select an icon to see what I did there.</p>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
