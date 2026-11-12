import { courses, skillGroups } from "@/content/site";
import SkillIcon from "./SkillIcon";

/**
 * Skills and the courses they are based on, in one card per area: skills as chips, then a count
 * (one bar per course) and the course list. Dark cards, so they work on any section background.
 */
export default function SkillCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((g) => {
        const base = courses.filter((c) => (c.skills as readonly string[]).includes(g.id));
        return (
          <div key={g.title} className="flex flex-col rounded-xl border border-paper/15 bg-graphite p-6 text-paper">
            <div className="flex items-start justify-between gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-tally text-ink">
                <SkillIcon name={g.icon} />
              </span>
              <p className="num text-3xl" aria-label={`${base.length} courses`}>
                {base.length}
              </p>
            </div>
            <h3 className="display h-sub mt-4">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li key={it} className="rounded-full bg-paper/10 px-3 py-1.5 text-[0.9375rem] text-paper">
                  {it}
                </li>
              ))}
            </ul>
            {base.length > 0 && (
              <div className="mt-auto border-t border-paper/15 pt-4">
                <div className="mb-3 mt-5 flex items-center gap-3">
                  <p className="label text-mist">Courses</p>
                  <div aria-hidden className="flex gap-1">
                    {base.map((c) => (
                      <span key={c.title} className="h-2 w-4 rounded-full bg-tally" />
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  {base.map((c) => (
                    <li key={c.title} className="text-[0.875rem] leading-snug text-paper/90">
                      {c.title}
                      <span className="block text-[0.8125rem] text-paper/60">
                        {c.provider} · {c.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
