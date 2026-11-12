import Image from "next/image";
import Link from "next/link";
import { formatFollowers, getCreators, sizeSplit } from "@/content/creators-data";
import { toolsMatrix } from "@/content/site";
import { projects } from "@/content/work";
import Icon, { type IconName } from "./Icon";
import LogoTile from "./LogoTile";
import SectionHead from "./SectionHead";

const wrap = "mx-auto w-full max-w-[1400px] px-5 md:px-10";
const bars = ["bg-tally", "bg-aqua", "bg-paper", "bg-mist"] as const;
const dots = bars;

/** A proportion bar with a legend: the same idea as the "Worked on" bar. */
function Split({ parts }: { parts: { label: string; n: number }[] }) {
  return (
    <div>
      <div aria-hidden className="flex h-3 gap-1">
        {parts.map((p, i) => (
          <span key={p.label} className={`${bars[i % 4]} rounded-full`} style={{ flexGrow: p.n, flexBasis: 0 }} />
        ))}
      </div>
      <ul className="mt-3 space-y-1.5">
        {parts.map((p, i) => (
          <li key={p.label} className="flex items-center gap-3 text-[0.9375rem] text-paper/85">
            <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${dots[i % 4]}`} />
            <span className="flex-1">{p.label}</span>
            <span className="num text-lg">{p.n}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Card({
  href, icon, kicker, title, body, children,
}: { href: string; icon: IconName; kicker: string; title: string; body: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex h-full flex-col rounded-2xl border border-paper/15 bg-ink p-6 transition-colors hover:border-tally md:p-7"
      >
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-tally text-ink">
            <Icon name={icon} />
          </span>
          <p className="label text-mist">{kicker}</p>
        </div>
        <h3 className="display h-section mt-5 transition-colors group-hover:text-tally">{title}</h3>
        <p className="mt-3 max-w-[40ch] text-paper/80">{body}</p>
        <div className="mt-6 flex flex-col gap-5 border-t rule-paper pt-6">{children}</div>
        <p className="label mt-auto pt-6 text-paper">
          Open{" "}
          <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
          <span className="sr-only"> {title}</span>
        </p>
      </Link>
    </li>
  );
}

/** Explore: one card per page, each with an icon and a small infographic made from the site's own data. */
export default function ExploreCards() {
  const roster = getCreators();
  const combined = roster.reduce((s, r) => s + (r.followersNum ?? 0), 0);
  const bySizeTier = sizeSplit(roster).filter((p) => p.n > 0);
  const byChannel = [...new Set(projects.map((p) => p.channel))].map((c) => ({
    label: c,
    n: projects.filter((p) => p.channel === c).length,
  }));
  const cases = projects.filter((p) => p.tier === "case").length;
  const ai = toolsMatrix.groups.find((g) => g.title === "AI")?.tools ?? [];

  return (
    <section id="explore" aria-labelledby="explore-title" className="bg-graphite py-16 md:py-24">
      <div className={wrap}>
        <SectionHead compact id="explore-title" label="Explore" title={<>More about my work</>} />
        <ul className="grid gap-5 lg:grid-cols-3">
          <Card
            href="/creators"
            icon="users"
            kicker="Campaigns with creators"
            title="Creators"
            body="How I work with creators and influencer agencies, the campaigns, and who I worked with."
          >
            <div className="flex items-center gap-4">
              <ul className="flex -space-x-2.5">
                {roster.slice(0, 6).map((c) => (
                  <li key={c.handle + c.name}>
                    {c.photo ? (
                      <Image src={c.photo} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-2 ring-ink" />
                    ) : (
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-graphite text-xs font-bold ring-2 ring-ink">{c.name[0]}</span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="text-paper/85">
                <span className="num text-2xl text-tally">{roster.length}</span> creators ·{" "}
                <span className="num text-2xl text-tally">{formatFollowers(combined)}</span> followers
              </p>
            </div>
            <Split parts={bySizeTier} />
          </Card>

          <Card
            href="/work"
            icon="film"
            kicker="Projects and results"
            title="Work"
            body="Launches, live events and always-on programs for HBO Max, TNT Sports, Stake and more, and their results."
          >
            <div className="flex items-baseline gap-6">
              <p className="text-paper/85">
                <span className="num text-4xl text-tally">{projects.length}</span> projects
              </p>
              <p className="text-paper/85">
                <span className="num text-4xl text-tally">{cases}</span> case studies
              </p>
            </div>
            <Split parts={byChannel} />
          </Card>

          <Card
            href="/ai"
            icon="spark"
            kicker="Tools and workflows"
            title="AI"
            body="The internal tools I built with Claude, and how AI changed the way I report."
          >
            <div>
              <p className="num text-[clamp(2.6rem,4vw,3.6rem)] text-tally">5d → 24h</p>
              <p className="label mt-1 text-paper/80">time to report on social results</p>
            </div>
            <div className="space-y-3" aria-hidden>
              <div className="flex items-center gap-3">
                <span className="w-14 text-sm text-paper/75">Before</span>
                <span className="h-3 flex-1 rounded-full bg-mist" />
                <span className="w-12 text-right text-sm text-paper/75">5 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-14 text-sm text-paper/75">Now</span>
                <span className="flex h-3 flex-1">
                  <span className="h-3 rounded-full bg-tally" style={{ width: "20%" }} />
                </span>
                <span className="w-12 text-right text-sm text-paper/75">24 h</span>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2">
              {ai.map((t) => (
                <li key={t.name} title={t.name} className="flex items-center gap-2 rounded-full bg-paper/10 py-1 pl-1 pr-3 text-[0.9375rem]">
                  <LogoTile name={t.name} initials={t.initials} src={"icon" in t && t.icon ? `/images/tools/${t.icon}` : undefined} size="xs" />
                  {t.name}
                </li>
              ))}
            </ul>
          </Card>
        </ul>
      </div>
    </section>
  );
}
