import type { Channel, Format, Project } from "./types";

export const channels: Channel[] = ["Entertainment", "Sports", "Gaming & iGaming"];
export const formats: Format[] = ["Launch", "Live", "Always-on", "Creator-led"];

/**
 * To add key art: drop a file in /public/images/work/ and set `image: "/images/work/your-file.jpg"`.
 * Until then each tile shows a typographic title card.
 * Only titles confirmed in Gabriel's sources are listed.
 */
/** My role, the same on every project (confirmed by Gabriel). Shown as "My role" on the project card and the case page. */
export const myRole =
  "Responsible for the digital side of the campaign, reporting to the global team and managing projects with influencers and advertising agencies.";

const entries: Project[] = [
  // ───────── Entertainment ─────────
  {
    slug: "the-last-of-us-season-2", market: "Brazil", image: "/images/work/the-last-of-us-season-2.png", imageFit: "contain", imageBg: "#000000", imageSize: [480, 270], imageAlt: "The Last of Us Season 2 title art",
    title: "The Last of Us, Season 2",
    brand: "HBO Max",
    channel: "Entertainment",
    formats: ["Launch", "Creator-led"],
    year: "2025",
    tier: "case",
    summary: "Season 2 launch on Max in Brazil.",
    context: "Season 2 of The Last of Us premiered on Max in April 2025.",
    challenge: "Take the series with the best digital result of Season 1 and carry it into Season 2, and beat it.",
    results: [
      {
        value: "+30%", short: "impressions vs. Season 1",
        label:
          "More impressions on HBO Max Brasil's social channels than Season 1, despite having fewer episodes.",
      },
    ],
  },
  {
    slug: "the-penguin", market: "Brazil", image: "/images/work/the-penguin.png", imageFit: "contain", imageBg: "#000000", imageSize: [418, 236], imageAlt: "The Penguin title art",
    title: "The Penguin",
    brand: "HBO · Max",
    channel: "Entertainment",
    formats: ["Launch", "Creator-led"],
    year: "2024",
    tier: "case",
    summary: "Premiere activation with Colin Farrell for Max in Brazil.",
    context: "The Penguin premiered on Max in September 2024.",
    gallery: [{ src: "/images/behind/b02.webp", alt: "My press credential for The Penguin premiere in New York, on an HBO lanyard." }],
    execution: [
      "Took creators from Mexico and Brazil to the premiere in New York, where we also worked with creators based in the city.",
      "Interviews and gifts for the cast, for Brazil and LATAM.",
      "Red carpet coverage in New York.",
      "Partnership with influencers and content creators to bring their point of view to our channels.",
    ],
    links: [{ label: "The Penguin: video stunt (Instagram)", url: "https://www.instagram.com/reels/DAJfNhvqUBG/" }],
    results: [
      {
        value: "+20%", short: "above the global goal",
        label:
          "Above the goal global had set for impressions and views, thanks to the activation featuring Colin Farrell, which generated organic buzz.",
      },
    ],
  },
  {
    slug: "superman", image: "/images/work/superman.png", imageBg: "#31567d", imageFit: "contain",
    title: "Superman",
    brand: "Warner Bros. · DC Studios",
    channel: "Entertainment",
    formats: ["Launch"],
    year: "2025",
    tier: "case",
    summary: "Launch campaign for the film on HBO Max Brasil's social channels.",
    execution: [
      "Briefed the creators who took part in the campaign.",
      "Reported on the results.",
      "Localized the content sent by the Global team for Brazil.",
    ],
    links: [
      { label: "James Guun: post (Instagram)", url: "https://www.instagram.com/p/DPZPSxQjkhJ/" },
      { label: "Campaign context (LinkedIn)", url: "https://www.linkedin.com/feed/update/urn:li:activity:7381750681235386368/" },
    ],
  },
  {
    slug: "peacemaker", image: "/images/work/peacemaker.png", imageBg: "#082250",
    title: "Peacemaker",
    brand: "HBO Max",
    channel: "Entertainment",
    formats: ["Launch", "Creator-led"],
    year: "2025",
    tier: "case",
    summary: "Series campaign on the HBO Max and HBO social channels in Brazil, with creators.",
    results: [
      {
        value: "2.48M", short: "views in the first 24h",
        label: "Views in the first 24 hours of the stunt, across Instagram, TikTok, YouTube, X and Facebook.",
      },
      {
        value: "3.8M", short: "impressions in 24h",
        label: "Impressions in the same 24 hours.",
      },
    ],
    approach: [
      "Creators grouped in four clusters, each with its own role: The Brainiacs, The Controllers, The Jokers and Hidden Gems.",
      "Two audiences: the DC fan base (Gaveta, Mikann, Seriemaniacostv, DC da Depressão) and a general audience (Greengo Dictionary, Gina Indelicada, Brazilian Version, Goularte).",
    ],
    execution: [
      "Briefed the creators who took part in the campaign.",
      "Supported the premiere and the stunt on the channels, with creator posts around them.",
      "The Brainiacs cluster delivered 653,661 views and The Jokers cluster 5,175,759.",
      "Reported on the results.",
      "Localized the content sent by the Global team for Brazil.",
    ],
    links: [{ label: "Peacemaker: stunt (TikTok, @hbomaxbr)", url: "https://www.tiktok.com/@hbomaxbr/video/7541162000055897400" }],
  },
  { slug: "hbo-max-rebrand", logo: "/images/brands/hbo-max.png", title: "HBO Max rebrand", channel: "Entertainment", formats: ["Launch"], tier: "credit" },
  { slug: "max-always-on", logo: "/images/brands/hbo-max.png", title: "HBO Max / Max always-on", channel: "Entertainment", formats: ["Always-on"], tier: "credit" },
  { slug: "oscars", image: "/images/work/oscars.png", title: "Oscars", channel: "Entertainment", formats: ["Live"], tier: "credit" },
  { slug: "golden-globes", title: "Golden Globes", channel: "Entertainment", formats: ["Live"], tier: "credit" },
  { slug: "grammys", title: "Grammys", channel: "Entertainment", formats: ["Live"], tier: "credit" },
  { slug: "ccxp", image: "/images/work/ccxp.png", title: "CCXP", channel: "Entertainment", formats: ["Live"], tier: "credit" },
  { slug: "sdcc", image: "/images/work/sdcc.png", title: "San Diego Comic-Con", channel: "Entertainment", formats: ["Live"], tier: "credit" },
  { slug: "dune-part-two", image: "/images/work/dune-part-two.png", title: "Dune: Part Two", channel: "Entertainment", formats: ["Launch"], tier: "credit" },
  { slug: "the-batman", image: "/images/work/the-batman.png", title: "The Batman", channel: "Entertainment", formats: ["Launch"], tier: "credit" },
  { slug: "welcome-to-derry", image: "/images/work/welcome-to-derry.png", title: "IT: Welcome to Derry", channel: "Entertainment", formats: ["Launch"], tier: "credit" },
  { slug: "game-of-thrones", image: "/images/work/game-of-thrones.png", title: "Game of Thrones", channel: "Entertainment", formats: ["Launch"], tier: "credit" },
  // Discovery / TLC reality shows (formats left empty until confirmed)
  { slug: "aeroporto", image: "/images/work/aeroporto.png", title: "Aeroporto", brand: "Discovery · TLC", channel: "Entertainment", formats: [], tier: "credit" },
  { slug: "muquirana-brasil", image: "/images/work/muquirana-brasil.png", title: "Muquirana$ Brasil", brand: "Discovery · TLC", channel: "Entertainment", formats: [], tier: "credit" },

  // ───────── Sports ─────────
  {
    slug: "uefa-champions-league", image: "/images/work/uefa-champions-league.png", imageBg: "#5d0a7e", imageAlt: "UEFA Champions League key art",
    title: "UEFA Champions League",
    brand: "Max",
    channel: "Sports",
    formats: ["Live"],
    year: "2024/25",
    tier: "case",
    summary: "Live coverage of the 2024/25 UEFA Champions League on HBO Max Brasil's social channels.",
    execution: [
      "Briefed the creators who took part.",
      "Analyzed content opportunities in every round.",
      "Recorded content in real time with the narrators.",
      "Cut the matches and handled community management.",
      "Reported on the results.",
    ],
    links: [
      { label: "Pedro Certezas: video (Instagram)", url: "https://www.instagram.com/reels/DKVezNHtYGr/" },
      { label: "Marina Baldin: reel (Instagram)", url: "https://www.instagram.com/reels/DKUrW6wR8E3/" },
      { label: "André Scardovelli: post (Instagram)", url: "https://www.instagram.com/p/DKVWOV7I0GF/" },
    ],
  },
  { slug: "paulistao-25", image: "/images/work/paulistao-25.png", title: "Paulistão 25", brand: "TNT Sports", channel: "Sports", formats: ["Live"], tier: "credit" },
  { slug: "tnt-sports", logo: "/images/brands/tnt-sports.png", title: "TNT Sports", channel: "Sports", formats: ["Always-on"], tier: "credit" },

  // ───────── Gaming & iGaming ─────────
  {
    slug: "stake-brasil", market: "Brazil", logo: "/images/brands/stake.png",
    title: "Stake Brasil",
    brand: "Stake",
    channel: "Gaming & iGaming",
    formats: ["Always-on", "Creator-led"],
    year: "2026–now",
    tier: "case",
    summary: "Building Stake's social presence in Brazil from an early stage.",
    context:
      "Stake Brasil was at an early stage of operation when I joined as Social Media Lead in February 2026, with its social presence still to be structured.",
    challenge:
      "Build and scale a social presence in a highly regulated iGaming environment, where every asset has to be culturally relevant and compliant with local regulation.",
    approach: [
      "Define content pillars, tone of voice and publishing routines.",
      "Lead the relationship with creators, influencers and agencies across sports, esports, casino and entertainment.",
      "Run benchmark studies on competitors, creator strategies, audience behavior and local market trends.",
    ],
    execution: [
      "Monitor sports, tournaments, athletes and fan conversations to find content opportunities in real time.",
      "Localize global assets for Brazilian cultural relevance and local regulation.",
      "Lead reporting routines on reach, engagement and Share of Voice with local and global teams to steer creative and performance optimizations.",
    ],
    results: [
      { value: "4×", short: "followers", label: "The brand's follower base in Brazil." },
      { value: "7×+", short: "overall KPIs", label: "Overall KPIs for the area, in a highly regulated environment." },
    ],
  },
  {
    slug: "razer-brazil", market: "Brazil", logo: "/images/brands/razer.png",
    title: "Razer Brazil",
    brand: "Razer",
    channel: "Gaming & iGaming",
    formats: ["Creator-led", "Live"],
    year: "2021",
    tier: "case",
    summary: "Gamified campaign with regional influencers, plus paid media optimization.",
    context:
      "Social media projects for Brazil's gamer audience, from product launches to brand activations, between July and November 2021.",
    approach: [
      "Plan campaigns and promotional tournaments for launches and activations.",
      "Identify and build relationships with influencers across different segments of the gamer universe.",
      "Align local actions with Razer's global strategy.",
    ],
    execution: [
      "Create and run a gamified campaign with regional influencers.",
      "Optimize paid campaigns on Meta and Google Ads.",
      "Create offline campaigns for in-person events focused on awareness and conversion.",
    ],
    results: [
      { value: "+42%", short: "social engagement", label: "Social media engagement from the gamified influencer campaign." },
      { value: "2×", short: "ROI vs. prior", label: "ROI versus the brand's previous activations, from paid-media optimization." },
    ],
  },
  { slug: "stake-counter-strike", logo: "/images/brands/stake.png", title: "Counter-Strike community", brand: "Stake", channel: "Gaming & iGaming", formats: ["Always-on"], tier: "credit" },
  { slug: "stake-creators", logo: "/images/brands/stake.png", title: "Creator & influencer initiatives", brand: "Stake", channel: "Gaming & iGaming", formats: ["Creator-led"], tier: "credit" },
  { slug: "lbff", image: "/images/work/lbff.png", title: "LBFF", channel: "Gaming & iGaming", formats: ["Live"], tier: "credit" },
];

export const projects: Project[] = entries.map((p) => ({ ...p, role: myRole }));

export const caseSlugs = projects.filter((p) => p.tier === "case").map((p) => p.slug);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
