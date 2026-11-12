import type { Metadata } from "next";
import { channels, formats, projects } from "@/content/work";
import BehindTheScenes from "@/components/BehindTheScenes";
import BrandsStrip from "@/components/BrandsStrip";
import ContactSection from "@/components/ContactSection";
import ImpactSection from "@/components/ImpactSection";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import WorkExplorer from "@/components/WorkExplorer";

export const metadata: Metadata = {
  title: "Projects and results",
  description:
    "Campaigns, launches and live events by Gabriel Martins for HBO Max, TNT Sports, Stake, Razer and more, and what they delivered.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Projects and results"
        title={
          <>
            Campaigns, launches and <em className="glitch">live events</em>, and what they delivered.
          </>
        }
        intro="Entertainment, sports, gaming and iGaming. Filter by channel or format, and open a case for context, approach and results."
      />

      <section id="projects" aria-labelledby="projects-title" className="bg-ink pb-24 md:pb-36">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
          <SectionHead id="projects-title" n="01" label="Projects" title={<>Selected work</>} />
          <BrandsStrip />
          <WorkExplorer projects={projects} channels={channels} formats={formats} />
        </div>
      </section>

      <BehindTheScenes />

      <ImpactSection n="02" />

      <ContactSection />
    </>
  );
}
