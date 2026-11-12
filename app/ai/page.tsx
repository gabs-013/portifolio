import type { Metadata } from "next";
import Link from "next/link";
import { background, impact, toolsMatrix } from "@/content/site";
import ContactSection from "@/components/ContactSection";
import LogoTile from "@/components/LogoTile";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ToolsMatrix from "@/components/ToolsMatrix";
import ToolsSection from "@/components/ToolsSection";

export const metadata: Metadata = {
  title: "AI: tools and workflows",
  description:
    "Tools Gabriel Martins built with Claude at Stake Brasil, dashboards that cut reporting from five days to 24 hours at Warner Bros. Discovery, and his master's in data science and AI.",
  alternates: { canonical: "/ai" },
};

const wrap = "mx-auto w-full max-w-[1400px] px-5 md:px-10";

export default function AiPage() {
  const reporting = impact.stats[3];
  const aiTools = toolsMatrix.groups.find((g) => g.title === "AI")?.tools ?? [];
  const masters = background.education[0];

  return (
    <>
      <PageHero
        compact
        kicker="AI works"
        title={
          <>
            I build tools and workflows with <em className="glitch">AI.</em>
          </>
        }
        intro="Internal tools at Stake Brasil, reporting automation at Warner Bros. Discovery, and a master's degree in data science and AI."
      />

      <ToolsSection />

      {/* ───────── AI IN MY WORK ───────── */}
      <section id="ai-in-work" aria-labelledby="ai-work-title" className="bg-ink py-16 md:py-24">
        <div className={wrap}>
          <SectionHead id="ai-work-title" label="AI in my work" title={<>Where else AI shows up</>} />
          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-paper/15 bg-graphite p-6">
              <p className="num text-[clamp(2.6rem,4vw,3.4rem)] text-tally">{reporting.display}</p>
              <h3 className="display h-sub mt-4">{reporting.title}</h3>
              <p className="mt-3 text-paper/85">{reporting.body}</p>
              <p className="label mt-auto pt-5 text-mist">{reporting.source}</p>
            </div>

            <div className="flex flex-col rounded-xl border border-paper/15 bg-graphite p-6">
              <h3 className="display h-sub">The AI tools I use</h3>
              <p className="mt-3 text-paper/85">At Stake Brasil and at Warner Bros. Discovery.</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {aiTools.map((t) => (
                  <li key={t.name} className="rounded-full bg-paper/10 px-3 py-1.5 text-[0.9375rem]">
                    {t.name}
                  </li>
                ))}
              </ul>
              <Link
                href="#tools"
                className="label tap mt-auto inline-flex pt-5 text-paper underline decoration-tally decoration-2 underline-offset-4 hover:text-aqua"
              >
                Tools by company →
              </Link>
            </div>

            <div className="flex flex-col rounded-xl border border-paper/15 bg-graphite p-6">
              <div className="flex items-center gap-4">
                <LogoTile name={masters.where} initials={masters.initials} src={masters.logo} />
                <p className="label text-paper/80">{masters.when}</p>
              </div>
              <h3 className="display h-sub mt-4">{masters.what}</h3>
              <p className="mt-3 text-paper/85">{masters.where}</p>
              <Link
                href="/#education"
                className="label tap mt-auto inline-flex pt-5 text-paper underline decoration-tally decoration-2 underline-offset-4 hover:text-aqua"
              >
                All education →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools by company */}
      <ToolsMatrix />

      <ContactSection />
    </>
  );
}
