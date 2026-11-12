# Gabriel Martins — Portfolio ("The Control Room")

Next.js (App Router) + TypeScript + Tailwind. Fully static, no backend, no cookies.

## Run it

You need Node 20+ (https://nodejs.org).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (static pages)
npm run start      # serve the build
```

## Pages

| Route | What it holds | Content file |
| --- | --- | --- |
| `/` | Hero, at a glance, about, links to the 3 pages | `content/site.ts` |
| `/creators` | How I work with creators, creator-led campaigns, communities | `content/creators.ts` + projects tagged `Creator-led` in `content/work.ts` |
| `/work` | Brands, projects with filters, results | `content/work.ts`, `content/site.ts` (`impact`) |
| `/ai` | Tools built with Claude, AI at work, AI training | `components/ToolsSection.tsx`, `content/site.ts` |
| `/work/[slug]` | Case studies | `content/work.ts` |
| `/resume` | Printable résumé | `content/site.ts` |

## Where things live

| To change…                        | Edit                          |
| --------------------------------- | ----------------------------- |
| Hero, about, experience, skills, education, contact copy | `content/site.ts` |
| Projects, case studies, credits   | `content/work.ts`             |
| Colors, fonts, motion             | `app/globals.css`, `app/layout.tsx` |
| Résumé page                       | `app/resume/page.tsx` (reads `content/site.ts`) |

### Creators roster (`/creators`)
The list of creators comes from `content/creators.csv`. Open it in Excel or Google Sheets (keep it as CSV, UTF-8), one row per creator:
- `deliverables`: **paste the links to the delivered posts here**, separated by `;`. Each link appears on the site as "Delivery 1 ↗", "Delivery 2 ↗"…
- `campaign`: rows with the same value are grouped under one heading.
- `followers_text`, `followers_num`, `followers_as_of`: public follower count and the date it was read. Update them before publishing; they change.
- `notes`: private, never shown. `publish`: `yes` shows the row, anything else hides it.
Names, handles and counts were read from your portfolio deck and the public profiles. Confirm with WBD (and, if contracts require it, with each creator) that they can be listed.

### Top menu, logos and skills
- **Menu:** the four round "highlights" (About Me, Creators, Works, AI) live in the fixed top bar (`components/Nav.tsx` and `components/Highlights.tsx`), so they stay on screen on every page. Photos are in `public/images/highlights/`.
- **Company and school logos** (home page, About me): `logo` and `initials` on each role and education entry in `content/site.ts`. Files are in `public/images/logos/` (FIAP and Unisanta, from their official sites) and `public/images/brands/` (Stake, Razer). Gabriel supplied the logos for Warner Bros. Discovery (the file is the HBO Max logo), Mkt Virtual and Marcasite. Without a logo the tile shows a monogram: only Digital House still needs one. Drop the file in `public/images/logos/` and set `logo` on its entry.
- **Skills:** now on the home page, in About. Category cards come from `expertise` in `content/site.ts`; the tools-by-company matrix (columns Stake, WBD, Razer) is `toolsMatrix` in the same file. A tool is marked for a role where Gabriel said he used it.

### AI page (`/ai`, the fifth highlight)
Holds the "Tools I built" section, a band with the reporting result at WBD, the AI tools used and the FIAP master's. Highlight image: `public/images/highlights/ai-v2.jpg`.

### "Tools I built" (AI page)
`components/ToolsSection.tsx` (texts and tabs) and `components/RealShot.tsx` (real, blurred screens: see "Tools I built: real screens" at the end of this file). The "what it does" and "problem it solved" texts are drafts written from what the artifacts contain. Correct them in `ToolsSection.tsx`. Get Stake's OK before publishing this section.

### Profile header (home page)
The top of the home page is laid out like a TikTok profile (`components/ProfileHeader.tsx`). Edit it in `content/site.ts` (`profile`): handle (same as the LinkedIn address), the three numbers (**Following** = years of experience, **Followers** = clients, **Likes** = combined followers of the creators in `content/creators.csv`, calculated automatically) and the bio. The round "highlights" are the site menu (`highlights` in the same file, images in `public/images/highlights/`) and sit in the fixed top bar.

### Colors (TikTok palette)
Defined once in `app/globals.css` (`@theme`): ink `#010101`, graphite `#161823`, paper `#ffffff`, bone `#f1f1f2`, mist `#8a8b91`, **red `#fe2c55`** (main accent, `tally`) and **cyan `#25f4ee`** (`aqua`, only on dark backgrounds). Red on white is only used for large text or shapes (about 3.7:1); small text on red uses black. The `.glitch` class adds the red/cyan offset to one key word per headline.

### Cards, photos and fonts
- **Card format:** projects (`components/ProjectCard.tsx`) and creators (`components/CreatorCard.tsx`) share one format: 16:9 image, accent line, name and handle/brand, description, chips and two stats. Every card has the same image size.
- **Creator photos** are in `public/images/creators/` and set in the `photo` column of `content/creators.csv` (empty = initials). They are the public Instagram profile pictures, downloaded on 2026-11-09 with Gabriel's OK (21 files, 150×150 px; Séries Brasil has none). They are small, so each sits over a blurred copy of itself; send larger photos and replace the files (same name) for a sharper result. **Showing a person's photo on a public site needs their authorization (image rights).** Set `publish` to `no` or clear `photo` for anyone who has not agreed.
- **Project images:** the art comes from the portfolio deck. Stake Brasil and Razer have none: I looked for official images and found nothing campaign-specific (Stake's domain redirects to a government page; Razer's site only has current product banners and restricts use of its materials), so they keep the title card with the brand logo. Add their own campaign visuals via `image` in `content/work.ts`.
- **Font:** Figtree for everything, the closest open font to Meta's Optimistic / Instagram Sans (both proprietary), with the system UI stack (San Francisco, Segoe UI, Roboto) as fallback. Change it in `app/layout.tsx` and `app/globals.css`.

### Showing the size of each project and career stage
- **At a glance band** (4 big figures under the hero): `glance` in `content/site.ts`.
- **Career stages**: each role has `highlights` (1–3 figures) in `content/site.ts`.
- **Projects**: `results` (value, `short` caption for the tile, full `label` for the case page) and `market` in `content/work.ts`. Add more figures here as you collect them (impressions, views, followers, creators, budget range, number of markets…). Only figures that are in your sources should go in.

### Add key art / images to a project
1. Drop the file in `public/images/work/`.
2. In `content/work.ts` set `image: "/images/work/your-file.jpg"` (and `imageAlt`).
3. Optional: `gallery: [{ src, alt }]` for extra assets on the case page.

Until then, each project shows a typographic title card.

### Promote a project to a full case study
Set `tier: "case"` and fill any of: `context`, `challenge`, `approach`, `execution`, `results`, `gallery`.
Empty fields are not rendered, so visitors never see "TBD". `tier: "mini"` = tile without a page; `"credit"` = text line.

### Contact
The contact section shows Email, Copy email, WhatsApp and LinkedIn. Email and WhatsApp number are set in `content/site.ts` (`email`, `whatsapp`) and were published with Gabriel's explicit approval. Set `NEXT_PUBLIC_CONTACT_EMAIL` to use a different address, or to `none` to hide the email button. To remove WhatsApp, set `whatsapp` to an empty string.
The phone number is not printed on the page: it only appears inside the `wa.me` link. The résumé page shows the email only.

## Deploy
Vercel or Netlify: import the repo, set `NEXT_PUBLIC_SITE_URL` (your domain) and optionally `NEXT_PUBLIC_CONTACT_EMAIL`. Build command `npm run build`.

## Before you publish — open items

**Impact numbers** (section 04 and the hero line). Gabriel supplied the details below himself; none of them appears in the LinkedIn or portfolio PDFs, so they rest on his word:
- +30% — impressions on HBO Max Brasil's social channels, The Last of Us S2 vs. Season 1 (fewer episodes).
- LATAM — he defined the KPIs (impressions, views, engagement, share of voice) and built the dashboard that tracked all WBD brands. The "weekly" and "adopted as the LATAM standard" wording comes from his original brief, not from his later answer. Confirm it or soften it in `content/site.ts` (`impact.stats[1]`).
- +20% — The Penguin finished 20% above the goal global had set for impressions and views.
- 5 days → 24h — social media results dashboards built with Claude.
Before launch, check that WBD is fine with these figures being public.

**Choices I made where the sources disagreed** (change in `content/site.ts` if you prefer the other):
- Languages: English "Advanced", Spanish "Basic" (brief) — LinkedIn says Native/Bilingual and Limited Working.
- "Gaming Accounts" is not in your LinkedIn; the 2021 agency role is shown as **Mkt Virtual** (verified).
- Razer title: "Digital Marketing Specialist" (brief) — LinkedIn says "Analista de Marketing Pleno".
- Warner title: "Social Media Specialist / Data Analyst" (brief) — LinkedIn says "Especialista em marketing em mídias sociais".
- Tools: Sprinklr is listed (it's on your LinkedIn); Sprout Social and ListenFirst are **not** (not found in your sources).
- Certifications: only Agile Marketing (verified). Generative AI, OKR and Social Listening certificates from the brief are **not** shown until you confirm them.
- Added from your LinkedIn (not in the brief): FIAP Master in Data Science & AI, Marcasite agency years, the Curta Santos 2011 finalist honor.
- "Ten years" in the About-page headline = Oct 2016 → 2026. Your portfolio deck says 13 years; change it if you count from earlier.

**Clearance**
- Stake and Warner Bros. Discovery results/brands: check with your comms/legal teams before going live. Add an 18+/responsible-play note wherever betting content is shown.
- The UCL Final 24/25 deck is marked "Internal Use Only", so it is not used. Use public posts or cleared screenshots.
- Key art and logos belong to their owners; the footer carries an independent-portfolio notice.

**Credits to verify** (read from your portfolio deck images): Dune: Part Two, The Batman, IT: Welcome to Derry, Game of Thrones, Peacemaker, LBFF. "Aeroporto" and "Muquirana$ Brasil" (Discovery/TLC reality shows) are listed as credits with no format set; confirm the exact titles and your role. X-Zone (gaming accessories) and Santa Helena (food group) appear in the "Brands I've worked with" line. The yellow-circle logo from the deck's brand wall is the **Space** channel; it is included in the brands strip, so confirm it belongs there.

**Logos and art** come from the images embedded in your portfolio PDF (native resolution, 150–800 px): brand logos in `public/images/brands/` (normalized to 320×320 squares), campaign art in `public/images/work/`. They are small, so swap in higher-resolution official files when you have them (same file names, or edit `content/work.ts` / `content/site.ts`). Gabriel confirmed (Nov 2026) that all of these logos may be shown publicly.

## Quality notes
- Semantic landmarks, skip link, visible focus, `prefers-reduced-motion` respected, native `<details>` for expandable roles.
- JSON-LD `Person`, sitemap, robots, per-case metadata.
- Hero image: `public/images/portrait.webp` (941×1672). Swap the file (and the `src`/`alt` in `app/page.tsx`) to change it; a higher-resolution original will look sharper on large screens.

## Tool and platform icons (home page, About me)
- Files are in `public/images/tools/`; each tool in `toolsMatrix` and each entry in `platforms` (`content/site.ts`) points to one. Sources: Simple Icons (CC0) for the social platforms, Claude, Gemini, Looker and Google; SVGL and gilbarbara/logos for Canva, ChatGPT (OpenAI mark), Photoshop, Premiere, Excel, Tableau and Power BI. They are trademarks of their owners, shown only to name the tools.
- No icon found (monogram shown): Sprinklr, Brandwatch, Quid Monitor, CapCut, Edits (Meta). To add one, drop an SVG/PNG in that folder and set `icon` on the tool.
- CapCut and Edits (Meta) are marked as used at Stake only. That was a guess: confirm the roles.

## Deploy to Netlify
- **Drag and drop (fastest):** run `npm run export`, then drag the `out/` folder (or `gabriel-portfolio-netlify-site.zip` unzipped) to https://app.netlify.com/drop.
- **From Git:** push this folder to GitHub/GitLab and "Import an existing project" in Netlify. `netlify.toml` already sets the build command (`npm run export`) and publish folder (`out`).
- Set `NEXT_PUBLIC_SITE_URL` (Site configuration > Environment variables) to your real domain, then redeploy, so canonical links, sitemap and social previews use it. On a Git deploy Netlify's own `URL` is used if you don't. Pages exported by hand without it point to localhost.
- `npm run export` makes a plain static site (images are not optimized at build, so they are served as they are in `public/images`). `npm run build` + `npm start` is still the normal Next.js mode.

## Home page structure
Profile (ink) → About (paper: who I am, the short version, social platforms, path, skills and courses, education) → Worked on (ink, interactive) → Explore (graphite, icon cards with small infographics) → Contact (ink). The tools-by-company matrix lives at the end of the AI page (`/ai#tools`); `/tools` redirects there on Netlify (`netlify.toml`).
- **About** (`components/AboutSection.tsx`): text and numbers live in `about` and `glance` (`content/site.ts`); the creators number is computed from the roster. Platforms are `platforms` in the same file.
- **Worked on** (`components/WorkedOn.tsx`): a proportion bar and filter chips by area, an icon grid, and a detail card. Items and areas live in `hero.areas`; an item with a `slug` shows year, format and role from `content/work.ts`, and links to the case page when one exists.
- **Explore** (`components/ExploreCards.tsx`): numbers and bars come from the roster, `content/work.ts` and the AI tools list.

## Tools I built: real screens (AI page)
`components/RealShot.tsx` shows real screens of the four tools (`public/images/tools-real/*.webp`). The blur on creator names and photos, numbers and promotions was **baked into the image files** before they were saved, never done with CSS, so nothing sensitive is in the page or the HTML. Brand Book, Calendar and Deal Priority were rendered from the published artifacts; Social Stats (a live BigQuery dashboard) comes from two screenshots Gabriel sent. To replace a screen, export a new image, blur it, and overwrite the file. Stake still has to approve this section.

## Photos from the work
Ten photos from Gabriel's events and sets live in `public/images/behind` and are listed in `content/behind.ts` (file, size, alt text, caption). They appear in the "Behind the scenes" mosaic on `/work`, in the Penguin case gallery, and in the detail card of four "Worked on" items (The Penguin, Cavaleiro dos 7 Reinos, CCXP, Stake Brasil; set with `photo` in `hero.areas`). The photos are small (360 to 640 px wide), so they are shown at native size. The Penguin credential was shot in a mirror and was flipped back. People are not named in captions. Make sure everyone who appears agreed to be published.

## Courses and skills
`courses` in `content/site.ts` lists the courses from Gabriel's LinkedIn "Licenses and certifications" (10 items, titles translated to English, years only). Each course has `skills`, the skill cards it is the base for; the "Courses" list inside each skill card is built from it (one bar per course). Skill cards are `skillGroups` (Strategy, Data & Intelligence, Creative & Culture, AI). The AI card is new: its items come from the AI courses and the AI tools Gabriel uses. "Waze" and "Python Pro" are the names as typed on LinkedIn (the original says "pyton pro"), and "Waze" has no skill tag because the title alone doesn't say what it covered.

## Menu images
The round highlights are `public/images/highlights/*.jpg` (320 px). The file names carry a version (`-v2`): browsers keep optimized images in cache for hours, so when you redraw one, save it under a new name (`-v3`) and update `highlights` in `content/site.ts`. About Me is Gabriel's photo; Creators, Works and AI are drawn icons in flat cyan and red (a phone with a play button and a heart, a trophy with a star, a chat bubble with a sparkle), so they read well at 36 px and don't use third-party images. To use a photo instead, overwrite the file with a square image.

## Live demos (AI page)
Social Stats and Calendar link to two live demos hosted on Netlify with sample data: https://social-dashboard-exemple.netlify.app/ (Br.Stake social stats, English) and https://social-events-promos.netlify.app (Radar de pautas, Portuguese). They are the `demo` field of each tool in `components/ToolsSection.tsx`.

## Creators list
The roster on `/creators` is one list sorted by followers (biggest first), with a bar by size (1M+, 500K to 1M, 100K to 500K, under 100K); it is no longer grouped by campaign. The `campaign` column of `content/creators.csv` is optional now: when it is empty the card shows no campaign chip. A creator without a follower count (today Lázaro Ramos and Séries Brasil) goes last and shows no numbers. The home "Explore" card uses the same size tiers.

## Résumé PDF
The "Résumé PDF" button on the home page opens `public/Gabriel-Martins-Resume.pdf`, and `/resume` has a "Download PDF" button for the same file. The PDF is made from the `/resume` page with its print styles, so it is not updated automatically: after changing the résumé content (`roles`, `expertise`, `background`, `courses` in `content/site.ts`), run the site (`npm run build && npx next start -p 3000`) and then `scripts/resume-pdf.sh` (needs Google Chrome; set `CHROME` to its path if it is not in the default Mac location). Commit the new PDF.

## My role on every project
`myRole` at the top of `content/work.ts` is the "My role" line shown on every project (the project card on the home page and the case page). It is the same text for all of them, as Gabriel asked; to give one project its own text, set `role` after the `.map` at the end of the file.

## Home hero
The hero (`components/ProfileHeader.tsx`, copy in `profile` in `content/site.ts`) shows the role, city and English level, one line on what Gabriel is looking for, three results (4× Stake followers, 7×+ KPIs, 5 days → 24h reporting) and the three profile numbers. The tools-by-company matrix moved to the end of the AI page.

## Mobile "Let's connect" button
On phones the floating button only shows after the first screen and only while scrolling up, and it hides at the contact section (`components/Nav.tsx`).

## Site address and share image
The public address is set in `.env.production` (`NEXT_PUBLIC_SITE_URL=https://gab-mkt.netlify.app`). It feeds the canonical tags, `sitemap.xml`, `robots.txt` and the link-preview tags. When the site gets its own domain, change that one line and redeploy. The link-preview image (LinkedIn, WhatsApp, X) is `app/opengraph-image.png` (1200×630), with `twitter-image.png` as a copy and `.alt.txt` files for the descriptions; it shows the photo, role, city and three results, and has the Netlify address printed on it, so redraw it when the domain changes.
