import RealShot from "./RealShot";
import ScreenTabs from "./ScreenTabs";
import SectionHead from "./SectionHead";

const real = (file: string, title: string, alt: string, w = 1600, h = 1000) => (
  <RealShot src={`/images/tools-real/${file}.webp`} title={title} alt={alt} w={w} h={h} />
);

type Demo = { url: string; note: string };

const tools: {
  name: string;
  kind: string;
  screens: { id: string; label: string; node: React.ReactNode }[];
  does: string;
  pain: string;
  demo?: Demo;
}[] = [
  {
    name: "Social Stats",
    kind: "Dashboard",
    screens: [
      { id: "overview", label: "Overview", node: real("stats-1-overview", "Social Stats · overview", "Social Stats overview: six headline metrics with trend lines for the month, a view per account and a block that flags what is out of range. Numbers are blurred.", 1600, 952) },
      { id: "tiktok", label: "One account", node: real("stats-2-tiktok", "Social Stats · TikTok", "Social Stats page for a single account, with the six metrics and the weekly impressions chart. Numbers are blurred.", 1600, 731) },
    ],
    does: "A shared dashboard of Stake Brasil's social accounts (Instagram, X and TikTok), by month or by week: six headline metrics with trend lines and the change against the previous period, a page per account, and a block that flags what is out of range against each metric's own history.",
    pain: "Social numbers lived in platform exports and spreadsheets, so every report started with collecting and reconciling them.",
    demo: { url: "https://social-dashboard-exemple.netlify.app/", note: "Live demo with sample data, in English" },
  },
  {
    name: "Brand Book",
    kind: "Design system",
    screens: [
      { id: "stories", label: "Stories", node: real("brand-1-stories", "Brand Book · story frames", "Brand Book screen with the four story frames: Anticipate, In Play, Boost and Stylise. Promotional copy is blurred.") },
      { id: "feed", label: "Feed and legal line", node: real("brand-2-feed", "Brand Book · feed and legal line", "Brand Book screen with three feed post layouts and the mandatory 18+ legal line. Promotional copy is blurred.") },
      { id: "type", label: "Typography", node: real("brand-3-type", "Brand Book · typography", "Brand Book screen with the typeface width ladder and the text hierarchy. Promotional copy is blurred.") },
    ],
    does: "A working brand book for Stake Brasil's social content: colors, type and voice, the three content behaviours (Anticipate, In Play, Boost), ready story and feed components, and the mandatory 18+ legal line.",
    pain: "Turning a global brand guide into Brazilian social content quickly, with the legal line on every piece, without someone re-reading a PDF each time.",
  },
  {
    name: "Calendar",
    kind: "Planning",
    screens: [
      { id: "focus", label: "Focus", node: real("cal-1-foco", "Calendar · focus", "Calendar screen, Focus view: today's agenda and what deserves attention in the coming weeks. Promotions are blurred.") },
      { id: "agenda", label: "Agenda", node: real("cal-2-agenda", "Calendar · agenda", "Calendar screen, Agenda view: upcoming days and events grouped by week. Promotions are blurred.") },
      { id: "month", label: "Month", node: real("cal-3-mes", "Calendar · month", "Calendar screen, month view with fixtures colored by priority. Promotions are blurred.") },
    ],
    does: "A calendar with four views (Focus, Agenda, Calendar, Tickets), status filters, sync with the team's spreadsheet, sharing by email with an access level, and CSV export.",
    pain: "The plan lived in a spreadsheet: hard to see what comes next, to share with people outside the team, and to keep a single version.",
    demo: { url: "https://social-events-promos.netlify.app", note: "Live demo with sample data, in Portuguese" },
  },
  {
    name: "Deal Priority",
    kind: "Prioritization",
    screens: [
      { id: "wall", label: "Wall", node: real("deal-1-wall", "Deal Priority · wall", "Deal Priority wall with filters by section, status and tier, and cards by tier. Names, photos and numbers are blurred.") },
      { id: "detail", label: "Card detail", node: real("deal-2-detail", "Deal Priority · card detail", "Deal Priority card detail with the fields Followers, Why this position, Blocker or dependency and Next step. Everything is blurred.") },
      { id: "guide", label: "Cheat sheet", node: real("deal-3-guide", "Deal Priority · Brazil cheat sheet", "Deal Priority cheat sheet with local market terms. Numbers are blurred.") },
    ],
    does: "A wall of ambassadors, media partners, team sponsorships and events for Brazil, ranked by tier and status (Activate, Explore, Monitor), with reach, rationale, blockers and the next step on each card, plus a cheat sheet for people new to the market.",
    pain: "Dozens of possible partnerships in one sheet, hard to compare, while calendar windows decided which decisions could not wait.",
  },
];

export default function ToolsSection() {
  return (
    <section id="tools" aria-labelledby="tools-title" className="bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionHead
          id="tools-title"
          label="Tools I built"
          tone="paper"
          title={<>Four tools I built with Claude at Stake Brasil</>}
        />
        <p className="-mt-6 mb-12 max-w-[62ch] text-lg text-ink/80 md:-mt-10">
          Internal tools, each one made for a specific problem. Switch tabs to see their screens. These are real screens, with
          creator names, numbers and promotions blurred in the image itself. Social Stats and Calendar also have a live demo,
          with sample data, that you can open and click through.
        </p>
        <ul className="grid gap-x-10 gap-y-16 lg:grid-cols-2">
          {tools.map((t) => (
            <li key={t.name}>
              <ScreenTabs label={t.name} screens={t.screens} />
              <div className="mt-6 flex items-baseline gap-3">
                <h3 className="display h-sub">{t.name}</h3>
                <span className="label rounded-md bg-ink px-2.5 py-1 text-paper">{t.kind}</span>
              </div>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="label text-ink/70">What it does</dt>
                  <dd className="mt-1 max-w-[56ch] text-ink/90">{t.does}</dd>
                </div>
                <div>
                  <dt className="label text-ink/70">The problem it solved</dt>
                  <dd className="mt-1 max-w-[56ch] text-ink/90">{t.pain}</dd>
                </div>
              </dl>
              {t.demo && (
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <a
                    href={t.demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label tap inline-flex bg-ink px-5 text-paper transition-transform hover:-translate-y-0.5 hover:bg-tally hover:text-ink"
                  >
                    Open the live demo ↗<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <span className="text-[0.9375rem] text-ink/70">{t.demo.note}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
