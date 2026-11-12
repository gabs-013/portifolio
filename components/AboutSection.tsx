import { about, background, courses, glance, platforms } from "@/content/site";
import { formatFollowers, getCreators } from "@/content/creators-data";
import Icon from "./Icon";
import LogoTile from "./LogoTile";
import PlatformIcons from "./PlatformIcons";
import SectionHead from "./SectionHead";
import SkillCards from "./SkillCards";

const wrap = "mx-auto w-full max-w-[1400px] px-5 md:px-10";

/** Who I am, the short version, the platforms I manage, my path and my skills: one section. */
export default function AboutSection() {
  const roster = getCreators();
  const combined = roster.reduce((sum, r) => sum + (r.followersNum ?? 0), 0);
  const stats = [
    ...glance,
    ...(roster.length > 0
      ? [{ icon: "users" as const, value: String(roster.length), label: `creators I've worked with, ${formatFollowers(combined)} followers combined` }]
      : []),
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="bg-paper py-16 text-ink md:py-24">
      <div className={wrap}>
        <SectionHead compact id="about-title" label="About" tone="paper" title={<>Who I am</>} />

        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <blockquote className="md:col-span-6">
            <p className="display text-[clamp(1.5rem,2.8vw,2.4rem)]">
              <span aria-hidden className="text-tally">“</span>
              {about.quote}
              <span aria-hidden className="text-tally">”</span>
            </p>
          </blockquote>
          <div className="space-y-5 text-lg text-ink/85 md:col-span-5 md:col-start-8">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* Details of "Who I am": my path and the platforms I manage, as two compact icon rows */}
        <div className="mt-10 grid gap-8 border-t rule-ink pt-8 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="label mb-4 text-ink/70">Path</h3>
            <ol aria-label="My path, in order" className="flex flex-wrap items-center gap-x-1.5 gap-y-3">
              {about.path.map((s, i) => (
                <li key={s.name} className="flex items-center gap-1.5" title={`${s.name}: ${s.note}`}>
                  <LogoTile name={s.name} initials={s.initials} src={s.logo} fit={s.fit} size="sm" />
                  <span className="sr-only">{s.note}</span>
                  {i < about.path.length - 1 && (
                    <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-ink/40">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div id="platforms">
            <h3 className="label mb-4 text-ink/70">Social platforms I manage · {platforms.length}</h3>
            <PlatformIcons size="sm" />
          </div>
        </div>

        {/* The short version */}
        <div className="mt-12 md:mt-14">
          <h3 className="label mb-5 text-ink/70">The short version</h3>
          <dl className="grid gap-x-8 gap-y-8 border-t rule-ink pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((g) => (
              <div key={g.label} className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-tally text-ink">
                  <Icon name={g.icon} />
                </span>
                <div className="flex flex-col-reverse">
                  <dt className="mt-1 max-w-[26ch] text-ink/80">{g.label}</dt>
                  <dd className="num text-[clamp(2.2rem,3.4vw,3.2rem)]">{g.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Skills and the courses they are based on, then education */}
        <div id="skills" className="mt-14 md:mt-16">
          <h3 className="label mb-5 text-ink/70">Skills and courses</h3>
          <SkillCards />
          {courses.some((c) => c.skills.length === 0) && (
            <p className="mt-3 text-[0.875rem] text-ink/70">
              Also:{" "}
              {courses
                .filter((c) => c.skills.length === 0)
                .map((c) => `${c.title} (${c.provider}, ${c.year})`)
                .join(", ")}
              .
            </p>
          )}
          <h3 id="education" className="label mb-3 mt-8 text-ink/70">Education</h3>
          <ul className="grid gap-3 sm:grid-cols-3">
            {background.education.map((e) => (
              <li key={e.what} className="flex items-center gap-3 rounded-xl border border-ink/15 p-3">
                <LogoTile name={e.where} initials={e.initials} src={e.logo} size="sm" />
                <div className="min-w-0">
                  <p className="font-sans text-[0.9375rem] font-semibold leading-snug">{e.what}</p>
                  <p className="text-[0.8125rem] text-ink/75">
                    {e.where} · {e.when}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
