import type { Role } from "./types";

/**
 * All site copy lives here. Edit text, save, done.
 * Every fact below comes from Gabriel's LinkedIn profile, his portfolio deck
 * or his written brief. Items still waiting for confirmation are listed in README.md.
 */

export const site = {
  name: "Gabriel Martins",
  title: "Social Media Lead",
  descriptor: "Digital Strategy & Audience Insights",
  location: "São Paulo, Brazil",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "http://localhost:3000",
  linkedin: "https://www.linkedin.com/in/gabrielmartins1707",
  /** Résumé as a PDF. Regenerate it with scripts/resume-pdf.sh after changing the résumé content. */
  resumePdf: "/Gabriel-Martins-Resume.pdf",
  /** Published with Gabriel's explicit approval. NEXT_PUBLIC_CONTACT_EMAIL overrides it; set it to "none" to hide the email button. */
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL === "none"
      ? null
      : process.env.NEXT_PUBLIC_CONTACT_EMAIL || "gabriel.martins.1989@gmail.com",
  /** WhatsApp, published with Gabriel's explicit approval. Digits only for the wa.me link. */
  whatsapp: "5513997276001",
  description:
    "Gabriel Martins is a Social Media Lead in São Paulo. He works on strategy, creator partnerships and reporting for entertainment, sports, gaming and iGaming brands, including HBO Max, TNT Sports, Razer and Stake.",
};

/** Site map: the home page is a gateway to three content pages. */
export const pages = [
  { href: "/", n: "01", label: "About me", sub: "Who I am, my tools and my studies" },
  { href: "/creators", n: "02", label: "Creators", sub: "Campaigns with creators" },
  { href: "/work", n: "03", label: "Work", sub: "Projects and results" },
  { href: "/ai", n: "04", label: "AI", sub: "Tools and workflows with AI" },
] as const;


/** TikTok-style profile at the top of the home page. */
export const profile = {
  handle: "@gabrielmartins1707", // same as the LinkedIn address
  name: "Gabriel Martins",
  /** The three profile numbers. The third one ("reach") is computed from content/creators.csv. */
  following: { value: "10+", label: "Years", caption: "in social and digital" },
  followers: { value: "27+", label: "Clients", caption: "served at the agency" },
  likesLabel: "Reach",
  likesCaption: "creator followers combined",
  bio: {
    role: "Social Media Lead at Stake Brasil.",
    place: "São Paulo, Brazil · Fluent English",
    rest: "Strategy, creators and data for entertainment, sports and gaming. Ex\u00a0Warner Bros. Discovery.",
    goal: "Interested in ambitious projects where creators are part of the idea from day one.",
  },
  /** Three results, shown as chips under the bio. Same figures as the Stake case and the AI page. */
  proof: [
    { value: "4×", label: "Stake Brasil followers" },
    { value: "7×+", label: "overall area KPIs at Stake" },
    { value: "5d → 24h", label: "time to report social results" },
  ],
  linkLabel: "linkedin.com/in/gabrielmartins1707",
};

/** The profile "highlights" are the site menu. */
export const highlights = [
  { id: "about", label: "About Me", href: "/#about", img: "/images/highlights/about.jpg" },
  { id: "creators", label: "Creators", href: "/creators", img: "/images/highlights/creators-v2.jpg" },
  { id: "works", label: "Works", href: "/work", img: "/images/highlights/works-v2.jpg" },
  { id: "ai", label: "AI", href: "/ai", img: "/images/highlights/ai-v2.jpg" },
] as const;

export type HighlightId = (typeof highlights)[number]["id"];

export const hero = {
  /**
   * "Worked on" icons, grouped by area. `logo` = transparent SVG in public/images/ticker,
   * always shown as a white silhouette. No logo = monogram tile (no clean SVG found yet).
   * `slug` links the icon to its entry in content/work.ts (details, and the case page when there is one).
   */
  areas: [
    {
      title: "Sports",
      items: [
        { name: "UEFA Champions League", logo: "uefa.svg", slug: "uefa-champions-league" },
        { name: "Paulistão 25", logo: "paulistao.svg", slug: "paulistao-25" },
        { name: "TNT Sports", logo: "tnt-sports.svg", slug: "tnt-sports" },
        { name: "F1", logo: "f1.svg" },
        { name: "SLS", initials: "SLS" },
        { name: "LBFF", initials: "LBFF", slug: "lbff" },
        { name: "IEM", logo: "iem.svg" },
      ],
    },
    {
      title: "Movies/series",
      items: [
        { name: "The Last of Us S2", logo: "tlou.svg", slug: "the-last-of-us-season-2" },
        { name: "The Penguin", initials: "TP", slug: "the-penguin", photo: { src: "/images/behind/b02.webp", w: 640, h: 640, alt: "A press credential for The Penguin premiere in New York." } },
        { name: "Superman", logo: "superman.svg", slug: "superman" },
        { name: "Peacemaker", initials: "PM", slug: "peacemaker" },
        { name: "Cavaleiro dos 7 Reinos", initials: "7K", photo: { src: "/images/behind/b05.webp", w: 640, h: 567, alt: "An interview set with a poster of O Cavaleiro dos Sete Reinos." } },
      ],
    },
    {
      title: "Event",
      items: [
        { name: "Oscars", initials: "OS", slug: "oscars" },
        { name: "Golden Globes", logo: "golden-globes.svg", slug: "golden-globes" },
        { name: "Grammys", logo: "grammys.svg", slug: "grammys" },
        { name: "CCXP", logo: "ccxp.svg", slug: "ccxp", photo: { src: "/images/behind/b08.webp", w: 360, h: 640, alt: "A man holding a CCXP microphone on stage." } },
      ],
    },
    {
      title: "Global Brand",
      items: [
        { name: "Razer", logo: "razer.svg", slug: "razer-brazil" },
        { name: "Stake Brasil", logo: "stake.svg", slug: "stake-brasil", photo: { src: "/images/behind/b07.webp", w: 360, h: 640, alt: "A photo shoot for Stake, with a camera in front of a man in a blue shirt with the Stake logo." } },
        { name: "TNT", logo: "tnt.svg" },
        { name: "HBO Max", logo: "hbo-max.svg" },
        { name: "HBO", logo: "hbo.svg" },
        { name: "Warner Channel", logo: "warner-channel.svg" },
      ],
    },
  ] as { title: string; items: { name: string; logo?: string; initials?: string; slug?: string; photo?: { src: string; w: number; h: number; alt: string } }[] }[],
};

/**
 * Brands worked with. Logos come from Gabriel's portfolio deck (square files in /public/images/brands).
 * Brands without a logo are listed as text under the strip.
 * X-Zone = gaming accessories; Santa Helena = food group; Space = Warner Bros. Discovery channel.
 */
export const brands: { name: string; logo?: string }[] = [
  { name: "Stake", logo: "/images/brands/stake.png" },
  { name: "HBO Max", logo: "/images/brands/hbo-max.png" },
  { name: "TNT", logo: "/images/brands/tnt.png" },
  { name: "TNT Sports", logo: "/images/brands/tnt-sports.png" },
  { name: "Space", logo: "/images/brands/space.png" },
  { name: "Discovery", logo: "/images/brands/discovery.png" },
  { name: "Razer", logo: "/images/brands/razer.png" },
  { name: "X-Zone", logo: "/images/brands/x-zone.png" },
  { name: "Santa Helena", logo: "/images/brands/santa-helena.png" },
  { name: "Warner Channel" },
  { name: "TLC" },
];

/** Executive "at a glance" band. Every figure is traceable to the LinkedIn profile. */
export const glance = [
  { icon: "cal" as const, value: "10+", label: "years in social and digital, since 2016" },
  { icon: "brief" as const, value: "27+", label: "agency clients served before entertainment" },
  { icon: "tv" as const, value: "4", label: "WBD brands led: Max, TNT, Warner Channel, Discovery, with reporting for LATAM" },
];

export const about = {
  quote:
    "Entertainment and sport don't live on cold posts. They live on real conversations, pop culture and moments that stop the internet.",
  paragraphs: [
    "I studied journalism, learned social media at a digital agency and have worked ever since on entertainment, sport and gaming brands: launches, live coverage and always-on channels.",
    "What pulls me in most is the space between a brand and a community: choosing the right creators, briefing them well and turning a big moment into something people share. I have done it with creators of every size, up to James Gunn recording a script I co-wrote.",
    "Today I'm building Stake's social presence in Brazil, in a highly regulated environment. I want to keep working on ambitious projects where creators are part of the idea from day one.",
    "I am also a cinephile and a gamer.",
  ],
  /** Career path in one glance: logo + name + one short phrase. No dates, no job titles. */
  path: [
    { name: "Universidade Santa Cecília", short: "Santa Cecília", note: "Journalism", logo: "/images/logos/unisanta.png", initials: "US", fit: "contain" as const },
    { name: "Marcasite Digital Agency", short: "Marcasite", note: "Where it started", logo: "/images/logos/marcasite.jpg", initials: "MA", fit: "cover" as const },
    { name: "Mkt Virtual", short: "Mkt Virtual", note: "Social & influencers", logo: "/images/logos/mkt-virtual.jpg", initials: "MV", fit: "cover" as const },
    { name: "Razer", short: "Razer", note: "Gaming", logo: "/images/brands/razer.png", initials: "RZ", fit: "cover" as const },
    { name: "Warner Bros. Discovery", short: "Warner Bros. Discovery", note: "Launches & data", logo: "/images/logos/wbd.jpg", initials: "WBD", fit: "cover" as const },
    { name: "Stake", short: "Stake", note: "Social lead, Brazil", logo: "/images/brands/stake.png", initials: "ST", fit: "cover" as const },
  ],
};

/**
 * Impact numbers. `source` is shown under each stat.
 * `confirmed: false` = taken from Gabriel's brief, not found in his LinkedIn/portfolio PDFs.
 * It is never shown to visitors; it's a reminder for you before launch.
 */
export const impact = {
  intro: "Selected results",
  stats: [
    {
      value: 30,
      prefix: "+",
      suffix: "%",
      title: "The Last of Us S2 beat Season 1",
      body: "30% more impressions on HBO Max Brasil's social channels than Season 1, with fewer episodes to work with.",
      source: "HBO Max Brasil · The Last of Us S2",
      confirmed: true,
    },
    {
      display: "LATAM",
      title: "A weekly KPI & OKR method became a regional standard",
      body: "I defined the KPIs (impressions, views, engagement and share of voice) and built the dashboard that tracked the evolution of every WBD brand.",
      source: "Warner Bros. Discovery",
      confirmed: true,
    },
    {
      value: 20,
      prefix: "+",
      suffix: "%",
      title: "The Penguin beat the global goal",
      body: "The Colin Farrell activation generated organic buzz and finished 20% above the goal global had set for impressions and views.",
      source: "HBO · The Penguin",
      confirmed: true,
    },
    {
      display: "5d → 24h",
      title: "Social reporting, automated with AI",
      body: "Dashboards built with Claude cut the time to report on social media results from five days to 24 hours.",
      source: "Warner Bros. Discovery",
      confirmed: true,
    },
  ] as Array<{
    value?: number;
    prefix?: string;
    suffix?: string;
    display?: string;
    title: string;
    body: string;
    source: string;
    confirmed: boolean;
  }>,
};

export const roles: Role[] = [
  {
    id: "stake",
    logo: "/images/brands/stake.png",
    logoFit: "cover",
    initials: "ST",
    company: "Stake",
    role: "Social Media Lead",
    start: "Feb 2026",
    end: "Present",
    years: "2026",
    location: "São Paulo",
    summary:
      "Building Stake's social presence in Brazil from an early stage: content pillars, publishing routines and creator relationships across sports, esports, casino and entertainment.",
    tags: ["Creators", "Benchmarking", "Share of Voice", "Localization"],
    highlights: [
      { value: "4×", label: "followers in Brazil" },
      { value: "7×+", label: "overall area KPIs" },
    ],
    scope: [
      "Quadrupled the brand's follower base in Brazil and scaled overall area KPIs more than 7×, in a highly regulated iGaming environment.",
      "Identify, approach and manage creators, influencers and agencies, including selection, deliverables, formats, schedules and budgets.",
      "Run benchmark studies on competitors, creator strategies, audience behavior and local iGaming trends.",
      "Monitor sports, tournaments, athletes and fan conversations to spot real-time content opportunities.",
      "Localize global assets for Brazilian cultural relevance and regulatory compliance.",
      "Lead reporting routines (reach, engagement, Share of Voice) with local and global teams.",
    ],
  },
  {
    id: "wbd",
    logo: "/images/logos/wbd.jpg",
    logoFit: "cover",
    initials: "WBD",
    company: "Warner Bros. Discovery",
    role: "Social Media Specialist / Data Analyst",
    start: "Oct 2021",
    end: "Feb 2026",
    years: "2021",
    location: "São Paulo",
    summary:
      "Led the social strategy for launches and live coverage of Max, TNT, Warner Channel and Discovery Channel, and built the listening and reporting that guided LATAM territories.",
    tags: ["Launches", "Live events", "Social listening", "KPI & OKR"],
    highlights: [
      { value: "4", label: "brands: Max, TNT, Warner Channel, Discovery" },
      { value: "LATAM", label: "listening and reporting scope" },
      { value: "4y 5m", label: "in role" },
    ],
    scope: [
      "Major campaigns and global blockbusters: HBO Max rebrand, The Last of Us S2, The Penguin, plus Oscars, Golden Globes, Grammys, SDCC, CCXP and the UEFA Champions League.",
      "Structured and led social listening for all of Latin America (Sprinklr, Brandwatch, Quid Monitor) with weekly recommendations and strategic reports.",
      "Built executive performance dashboards (Looker, Tableau, Power BI) around KPIs and OKRs for awareness, engagement and Share of Voice.",
      "Briefs for always-on and campaign content, schedules, alignment with global teams, approval of local assets.",
      "Daily work with partner agencies, creators and talent, from first contact to final delivery and reporting.",
    ],
  },
  {
    id: "razer",
    logo: "/images/brands/razer.png",
    logoFit: "cover",
    initials: "RZ",
    company: "Razer",
    role: "Digital Marketing Specialist",
    start: "Jul 2021",
    end: "Nov 2021",
    years: "2021",
    location: "Santos",
    summary:
      "Social and campaign work for Brazil's gamer audience: promotional tournaments, influencer partnerships and paid media.",
    tags: ["Gaming", "Tournaments", "Influencers"],
    highlights: [
      { value: "+42%", label: "social engagement" },
      { value: "2×", label: "ROI vs. previous activations" },
    ],
    scope: [
      "Lifted social engagement 42% with a gamified campaign built with regional influencers.",
      "Reached 2× the ROI of the brand's previous activations by optimizing Meta and Google Ads.",
      "Contributed to repositioning Razer's digital presence in Brazil, aligning local actions with global strategy.",
    ],
  },
  {
    id: "mkt-virtual",
    logo: "/images/logos/mkt-virtual.jpg",
    logoFit: "cover",
    initials: "MV",
    company: "Mkt Virtual",
    role: "Content Experience Analyst",
    start: "Jan 2021",
    end: "Jul 2021",
    years: "2021",
    location: "Santos",
    summary:
      "The agency's main point of contact for two clients, X-Zone and Santa Helena, managing the performance and design team and the full creator relationship.",
    tags: ["Agency", "Gaming", "Creators"],
    highlights: [{ value: "2", label: "gaming brands as clients" }],
    scope: [
      "Led creator recruitment, creation and strategic service for campaigns.",
      "Managed client results against KPIs and shaped content strategies and activations.",
      "Mapped new commercial opportunities and built e-commerce performance reports.",
    ],
  },
  {
    id: "marcasite",
    logo: "/images/logos/marcasite.jpg",
    logoFit: "cover",
    initials: "MA",
    company: "Marcasite Digital Agency",
    role: "Digital Marketing Analyst · Social Media Analyst",
    start: "Oct 2016",
    end: "Jan 2021",
    years: "2016",
    location: "Santos",
    summary:
      "Four years of digital work for 27+ clients across social, SEO/SEM, UX and conversion, with reports built in R and Google Data Studio.",
    tags: ["Social", "SEO / SEM", "UX", "Data with R"],
    highlights: [
      { value: "27+", label: "clients, many segments" },
      { value: "+70%", label: "avg. organic traffic (contributed)" },
      { value: "4×", label: "conversions, same budget (up to)" },
    ],
    scope: [
      "Contributed to an average 70% increase in organic traffic through technical and content SEO.",
      "Helped campaigns reach up to 4× more conversions on the same budget after restructuring AdWords.",
      "Cut average site load time by up to 45%.",
      "Automated performance reports with R and Google Data Studio, reducing delivery time by 60%.",
      "Built editorial lines and digital brand identity for 27+ clients; cut CPC 30% through targeting and creative changes.",
    ],
  },
];

export const expertise = [
  {
    title: "Strategy",
    items: [
      "Social Media Strategy",
      "Content Strategy",
      "KPI & OKR",
      "Competitive Benchmarking",
      "Project Management",
    ],
  },
  {
    title: "Data & Intelligence",
    items: [
      "Social Listening",
      "Share of Voice",
      "Audience Insights",
      "Performance Analysis",
      "Reporting & Dashboards",
    ],
  },
  {
    title: "Creative & Culture",
    items: [
      "Storytelling",
      "Community Engagement",
      "Creator Marketing",
      "Cultural Trends",
      "Entertainment & Sports Marketing",
    ],
  },
  {
    title: "Technology",
    items: [
      "AI Content Workflows",
      "Claude · Claude Code · ChatGPT · Gemini",
      "Sprinklr · Brandwatch · Quid Monitor",
      "Looker · Power BI · Tableau",
      "Excel · R",
    ],
  },
];

export const background = {
  education: [
    {
      what: "Master of Data Science & Artificial Intelligence",
      where: "FIAP",
      when: "2024–2025",
      logo: "/images/logos/fiap.svg",
      initials: "FI",
    },
    {
      what: "Nanodegree, Data Analytics",
      where: "Digital House Brasil",
      when: "2020–2021",
      initials: "DH",
    },
    {
      what: "Bachelor's degree, Journalism",
      where: "Universidade Santa Cecília",
      when: "2008–2011",
      logo: "/images/logos/unisanta.png",
      initials: "US",
    },
  ],
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Limited working" },
  ],
};

export const contact = {
  headline: "Have a project in entertainment, sports or gaming?",
  body: "Write to me by email or WhatsApp. I am based in São Paulo (GMT-3).",
};

/**
 * Skills, shown as cards. The "Technology" list is replaced by the tools matrix below.
 */
export const skillGroups = [
  { id: "strategy", title: "Strategy", icon: "target", items: expertise[0].items },
  { id: "data", title: "Data & Intelligence", icon: "chart", items: expertise[1].items },
  { id: "creative", title: "Creative & Culture", icon: "spark", items: expertise[2].items },
  {
    id: "ai",
    title: "AI",
    icon: "ai",
    items: ["AI Strategy", "Generative AI", "ChatGPT", "Claude", "Claude Code"],
  },
] as const;

export type SkillId = (typeof skillGroups)[number]["id"];

/**
 * Courses outside a degree, from Gabriel's LinkedIn "Licenses and certifications" (Nov 2026).
 * `skills` says which skill cards each course is the base for; titles are in English, the
 * originals are Portuguese. "Waze" and "Python Pro" are the names as listed on LinkedIn.
 */
export const courses: {
  title: string;
  provider: string;
  initials: string;
  year: string;
  skills: readonly SkillId[];
}[] = [
  { title: "Head of Context: Brand, AI and Algorithms", provider: "ESPM", initials: "ES", year: "2026", skills: ["ai", "strategy"] },
  { title: "IA em Curso: complete AI course", provider: "Anacronia", initials: "AN", year: "2026", skills: ["ai"] },
  { title: "Social Listening and Social Media Monitoring", provider: "ESPM", initials: "ES", year: "2024", skills: ["data"] },
  { title: "Generative Artificial Intelligence", provider: "FIA Business School", initials: "FIA", year: "2024", skills: ["ai"] },
  { title: "Agile Marketing: Methodology and Results", provider: "ESPM", initials: "ES", year: "2024", skills: ["strategy"] },
  { title: "Product Marketing", provider: "PM3", initials: "PM3", year: "2023", skills: ["strategy"] },
  { title: "Strategic Planning and Business Agility with OKRs", provider: "ESPM", initials: "ES", year: "2023", skills: ["strategy", "data"] },
  { title: "Python Pro", provider: "Ada", initials: "AD", year: "2020", skills: ["data"] },
  { title: "Waze", provider: "Google", initials: "G", year: "2020", skills: [] },
  { title: "Podcast", provider: "Rádiofobia Podcast e Multimídia", initials: "RF", year: "2019", skills: ["creative"] },
];

/**
 * Tools by role, as a matrix. Marked where Gabriel used the tool in that role
 * (LinkedIn profile for most; the AI tools were added by him).
 */
export const toolsMatrix = {
  roles: ["stake", "wbd", "razer"] as const,
  /** `icon` = file in public/images/tools. Without one, the tile shows `initials`. */
  groups: [
    {
      title: "AI",
      tools: [
        { name: "Claude", in: ["stake", "wbd"], icon: "claude.svg", initials: "Cl" },
        { name: "Claude Code", in: ["stake", "wbd"], icon: "claudecode.svg", initials: "CC" },
        { name: "ChatGPT", in: ["stake", "wbd"], icon: "chatgpt.svg", initials: "GP" },
        { name: "Gemini", in: ["stake", "wbd"], icon: "gemini.svg", initials: "Ge" },
      ],
    },
    {
      title: "Social listening",
      tools: [
        { name: "Sprinklr", in: ["wbd"], initials: "Sp" },
        { name: "Brandwatch", in: ["wbd"], initials: "Bw" },
        { name: "Quid Monitor", in: ["wbd"], initials: "Qm" },
      ],
    },
    {
      title: "Dashboards and reporting",
      tools: [
        { name: "Looker", in: ["wbd"], icon: "looker.svg", initials: "Lo" },
        { name: "Tableau", in: ["wbd"], icon: "tableau.svg", initials: "Ta" },
        { name: "Power BI", in: ["wbd"], icon: "power-bi.svg", initials: "PB" },
        { name: "Excel", in: ["stake", "wbd", "razer"], icon: "excel.svg", initials: "Ex" },
      ],
    },
    {
      title: "Paid media and analytics",
      tools: [
        { name: "Meta Ads", in: ["razer"], icon: "meta.svg", initials: "Me" },
        { name: "Google Ads", in: ["razer"], icon: "googleads.svg", initials: "GA" },
        { name: "Google Analytics", in: ["stake", "razer"], icon: "ga.svg", initials: "GA" },
      ],
    },
    {
      title: "Content production",
      tools: [
        { name: "Photoshop", in: ["stake", "wbd", "razer"], icon: "photoshop.svg", initials: "Ps" },
        { name: "Premiere", in: ["stake", "wbd", "razer"], icon: "premiere.svg", initials: "Pr" },
        { name: "Canva", in: ["stake", "wbd", "razer"], icon: "canva.svg", initials: "Ca" },
        // Roles for CapCut and Edits are a guess (current role only): confirm with Gabriel.
        { name: "CapCut", in: ["stake"], initials: "Cc" },
        { name: "Edits (Meta)", in: ["stake"], initials: "Ed" },
      ],
    },
  ],
};

/** Social platforms Gabriel manages. Files are in public/images/tools. */
export const platforms = [
  { name: "Instagram", icon: "instagram.svg" },
  { name: "Meta", icon: "meta.svg" },
  { name: "YouTube", icon: "youtube.svg" },
  { name: "Shorts", icon: "shorts.svg" },
  { name: "TikTok", icon: "tiktok.svg" },
  { name: "X", icon: "x.svg" },
  { name: "Reddit", icon: "reddit.svg" },
  { name: "Telegram", icon: "telegram.svg" },
  { name: "Twitch", icon: "twitch.svg" },
  { name: "WhatsApp", icon: "whatsapp.svg" },
] as const;
