"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Channel, Format, Project } from "@/content/types";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
  channels: Channel[];
  formats: Format[];
};

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`label tap inline-flex border px-4 transition-colors ${
        active
          ? "border-tally bg-tally text-ink"
          : "border-paper/25 text-paper/80 hover:border-tally hover:text-tally"
      }`}
    >
      {children}
    </button>
  );
}

export default function WorkExplorer({ projects, channels, formats }: Props) {
  const [channel, setChannel] = useState<Channel | "All">("All");
  const [format, setFormat] = useState<Format | "Any">("Any");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (channel === "All" || p.channel === channel) &&
          (format === "Any" || p.formats.includes(format)),
      ),
    [projects, channel, format],
  );

  const tiles = filtered.filter((p) => p.tier !== "credit");
  const credits = filtered.filter((p) => p.tier === "credit");

  return (
    <div>
      <div className="mb-12 grid gap-6 border-y rule-paper py-6 md:grid-cols-[auto_1fr] md:gap-x-12">
        <p className="label text-mist md:pt-2">Channel</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by channel">
          <Chip active={channel === "All"} onClick={() => setChannel("All")}>
            All
          </Chip>
          {channels.map((c) => (
            <Chip key={c} active={channel === c} onClick={() => setChannel(c)}>
              {c}
            </Chip>
          ))}
        </div>
        <p className="label text-mist md:pt-2">Format</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by format">
          <Chip active={format === "Any"} onClick={() => setFormat("Any")}>
            Any
          </Chip>
          {formats.map((f) => (
            <Chip key={f} active={format === f} onClick={() => setFormat(f)}>
              {f}
            </Chip>
          ))}
        </div>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {filtered.length} projects shown
      </p>

      {tiles.length > 0 && (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((p, i) => (
            <li key={p.slug} >
              <ProjectCard project={p} index={i} />
            </li>
          ))}
        </ul>
      )}

      {credits.length > 0 && (
        <div className="mt-20 border-t rule-paper pt-8">
          <h3 className="label mb-6 text-mist">More credits</h3>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {credits.map((p) => {
              const thumb = p.logo ?? p.image;
              return (
                <li
                  key={p.slug}
                  className="flex items-center gap-4 border-b rule-paper py-3"
                >
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden bg-graphite">
                    {thumb && (
                      <Image src={thumb} alt="" fill sizes="44px" className="object-cover" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1 font-sans text-lg leading-snug">
                    {p.title}
                    {p.brand && <span className="text-paper/60"> · {p.brand}</span>}
                  </span>
                  <span className="label shrink-0 text-mist">{p.formats[0]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-paper/70">
          Nothing in that combination yet.{" "}
          <button
            type="button"
            className="underline underline-offset-4 hover:text-tally"
            onClick={() => {
              setChannel("All");
              setFormat("Any");
            }}
          >
            Reset filters
          </button>
        </p>
      )}
    </div>
  );
}
