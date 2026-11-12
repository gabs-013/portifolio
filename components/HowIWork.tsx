import { creatorsPage as c } from "@/content/creators";
import SectionHead from "./SectionHead";

type IconName =
  | "search" | "chat" | "doc" | "send" | "chart"
  | "film" | "gamepad" | "trophy" | "dice";

const paths: Record<IconName, React.ReactNode> = {
  search: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>),
  chat: (<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />),
  doc: (<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>),
  send: (<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />),
  chart: (<path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />),
  film: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" /></>),
  gamepad: (<><rect x="2" y="7" width="20" height="11" rx="5" /><path d="M7 10v5M4.5 12.5h5M15.5 11.5h.01M18 13.5h.01" /></>),
  trophy: (<><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z" /><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4" /></>),
  dice: (<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01" /></>),
};

function Icon({ name }: { name: IconName }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[name]}
    </svg>
  );
}

/** "How I work" (5 steps) and "Where I work" (4 communities), as one infographic. */
export default function HowIWork() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="bg-ink py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionHead compact id="approach-title" label="Approach" title={<>{c.stepsTitle}</>} />

        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
          <span aria-hidden className="absolute left-[27px] top-7 block h-[calc(100%-3.5rem)] w-0.5 bg-paper/20 md:left-[10%] md:right-[10%] md:top-[27px] md:h-0.5 md:w-auto" />
          {c.steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 md:block md:text-center">
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-tally text-ink md:mx-auto">
                <Icon name={s.icon as IconName} />
              </span>
              <div className="md:mt-5">
                <p className="label text-mist">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display h-sub mt-1">{s.title}</h3>
                <p className="mt-2 text-paper/80 md:mx-auto md:max-w-[24ch]">{s.short}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 border-t rule-paper pt-10 md:mt-20">
          <h3 className="label mb-6 text-mist">{c.communitiesTitle}</h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.communities.map((g) => (
              <li key={g.name} className="rounded-xl border border-paper/15 bg-graphite p-5">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-aqua text-ink">
                  <Icon name={g.icon as IconName} />
                </span>
                <h4 className="display h-sub mt-4">{g.name}</h4>
                <p className="label mt-3 text-paper/75">{g.brands}</p>
                <p className="mt-3 text-paper/85">{g.short}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
