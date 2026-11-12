import type { Metadata } from "next";
import { creatorsPage as c } from "@/content/creators";
import { bySize, formatFollowers, getCreators } from "@/content/creators-data";
import { projects } from "@/content/work";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import CreatorCard from "@/components/CreatorCard";
import SizeBar from "@/components/SizeBar";
import FeaturedCreator from "@/components/FeaturedCreator";
import CampaignList from "@/components/CampaignList";
import HowIWork from "@/components/HowIWork";
import SectionHead from "@/components/SectionHead";

export const metadata: Metadata = {
  title: "Campaigns with creators",
  description:
    "How Gabriel Martins finds, briefs and manages creators, influencers and agencies, and the creator-led campaigns behind HBO Max, Razer and Stake.",
  alternates: { canonical: "/creators" },
};

const wrap = "mx-auto w-full max-w-[1400px] px-5 md:px-10";

export default function CreatorsPage() {
  const campaigns = projects.filter((p) => p.tier !== "credit" && p.formats.includes("Creator-led"));
  const roster = getCreators();
  const countries = new Set(
    roster.map((r) => r.country.replace(/\s*\(.*\)\s*$/, "").trim()).filter(Boolean),
  );
  const platforms = new Set(roster.map((r) => r.platform).filter(Boolean));
  const combined = roster.reduce((sum, r) => sum + (r.followersNum ?? 0), 0);
  const asOf = [...new Set(roster.map((r) => r.followersAsOf).filter(Boolean))].join(" / ");

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={
          <>
            I work with creators from first contact to <em className="glitch">final post.</em>
          </>
        }
        intro={c.intro}
      />

      <HowIWork />

      {/* ───────── 02 CAMPAIGNS (light) ───────── */}
      <section id="campaigns" aria-labelledby="campaigns-title" className="bg-graphite py-12 md:py-16">
        <div className={wrap}>
          <SectionHead compact id="campaigns-title" label="Campaigns" title={<>{c.campaignsTitle}</>} />
          <CampaignList campaigns={campaigns} />
          <p className="mt-6 max-w-[70ch] text-[0.9375rem] text-paper/65">{c.campaignsNote}</p>
        </div>
      </section>

      {/* ───────── 03 CREATORS I'VE WORKED WITH ───────── */}
      {roster.length > 0 && (
        <section id="roster" aria-labelledby="roster-title" className="bg-paper py-24 text-ink md:py-36">
          <div className={wrap}>
            <SectionHead
              id="roster-title"
              n="03"
              label="Roster"
              tone="paper"
              title={<>Creators I&apos;ve worked with</>}
            />
            <FeaturedCreator />

            <dl className="mb-16 grid gap-x-10 gap-y-8 border-t rule-ink pt-8 sm:grid-cols-3">
              <div className="flex flex-col-reverse">
                <dt className="label mt-2 text-ink/75">creators and talents</dt>
                <dd className="num text-[clamp(2.4rem,4vw,3.6rem)]">{roster.length}</dd>
              </div>
              {countries.size > 0 && (
                <div className="flex flex-col-reverse">
                  <dt className="label mt-2 text-ink/75">countries</dt>
                  <dd className="num text-[clamp(2.4rem,4vw,3.6rem)]">{countries.size}</dd>
                </div>
              )}
              {combined > 0 && (
                <div className="flex flex-col-reverse">
                  <dt className="label mt-2 text-ink/75">combined {platforms.size === 1 ? `${[...platforms][0]} ` : ""}followers</dt>
                  <dd className="num text-[clamp(2.4rem,4vw,3.6rem)]">{formatFollowers(combined)}</dd>
                </div>
              )}
            </dl>

            <SizeBar roster={roster} />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {bySize(roster).map((c) => (
                <li key={c.handle + c.name}>
                  <CreatorCard creator={c} />
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-[70ch] border-t rule-ink pt-6 text-sm text-ink/75">
              Follower counts are the public figures shown on each profile{asOf ? ` (${asOf})` : ""} and change over
              time. Creators are listed as professional partners on the campaigns above.
            </p>
          </div>
        </section>
      )}

      <ContactSection />
    </>
  );
}
