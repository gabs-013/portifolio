import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import Poster from "./Poster";

/** Creator-led campaigns as a light, compact list: a small image, the name, and one key result. */
export default function CampaignList({ campaigns }: { campaigns: Project[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((p) => {
        const result = p.results?.[0];
        const body = (
          <>
            <div className="relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg bg-ink">
              {!p.image && p.logo ? (
                <span className="absolute inset-0 grid place-items-center bg-graphite">
                  <span className="relative block h-12 w-12 overflow-hidden rounded-lg border border-paper/15">
                    <Image src={p.logo} alt="" fill sizes="48px" className="object-contain" />
                  </span>
                </span>
              ) : (
                <Poster project={p} variant="card" sizes="112px" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-sans text-base font-bold leading-tight">{p.title}</h3>
              <p className="mt-0.5 text-[0.875rem] text-paper/65">{[p.brand, p.year].filter(Boolean).join(" · ")}</p>
              {result && (
                <p className="mt-1.5 text-[0.875rem] text-paper/85">
                  <span className="num mr-1.5 text-lg text-tally">{result.value}</span>
                  {result.short ?? ""}
                </p>
              )}
            </div>
            {p.tier === "case" && (
              <span aria-hidden className="shrink-0 text-lg text-paper/50 transition-transform group-hover:translate-x-0.5 group-hover:text-tally">
                →
              </span>
            )}
          </>
        );
        const base = "group flex items-center gap-4 rounded-xl border border-paper/15 bg-ink p-3";
        return (
          <li key={p.slug}>
            {p.tier === "case" ? (
              <Link href={`/work/${p.slug}`} className={`${base} transition-colors hover:border-tally`}>
                {body}
              </Link>
            ) : (
              <article className={base}>{body}</article>
            )}
          </li>
        );
      })}
    </ul>
  );
}
