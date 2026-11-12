import Link from "next/link";
import type { Project } from "@/content/types";
import { Badge, Chip, Stats, cardShell } from "./CardParts";
import Poster from "./Poster";

/**
 * Project card: 16:9 image, accent line, name and brand, description, chips, stats.
 * Same size for every project. Links to the case page when tier is "case".
 */
export default function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const isCase = p.tier === "case";

  const stats = p.results?.length
    ? p.results.slice(0, 2).map((r) => ({ label: r.short ?? "Result", value: r.value, accent: true }))
    : [
        ...(p.market ? [{ label: "Market", value: p.market, accent: false }] : []),
        ...(p.year ? [{ label: "Year", value: p.year, accent: false }] : []),
      ].slice(0, 2);

  const body = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden bg-ink">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <Poster project={p} index={index} variant="card" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
        </div>
      </div>
      <div aria-hidden className="h-[3px] bg-tally" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="display text-xl leading-tight">{p.title}</h3>
            <p className="mt-1 text-[0.95rem] text-paper/70">
              {[p.brand, p.year].filter(Boolean).join(" · ") || p.channel}
            </p>
          </div>
          {isCase && <Badge filled>↗</Badge>}
        </div>
        {p.summary && <p className="mt-4 text-[0.975rem] text-paper/80">{p.summary}</p>}
        <div className="mb-5 mt-4 flex flex-wrap gap-2">
          <Chip primary>{p.channel}</Chip>
          {p.formats.map((f) => (
            <Chip key={f}>{f}</Chip>
          ))}
        </div>
        {stats.length > 0 && <Stats items={stats} />}
      </div>
    </>
  );

  return isCase ? (
    <Link href={`/work/${p.slug}`} className={`${cardShell} hover:border-tally`}>
      {body}
    </Link>
  ) : (
    <article className={cardShell}>{body}</article>
  );
}
