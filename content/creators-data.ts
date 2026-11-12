import fs from "node:fs";
import path from "node:path";

/**
 * Reads content/creators.csv at build time (open it in Excel or Google Sheets).
 *
 * Columns:
 *  name, handle, platform, profile_url,
 *  photo            path under /public (e.g. /images/creators/gaveta.jpg); empty = initials
 *  followers_text   what the profile showed (e.g. "398K followers")
 *  followers_num    the same as a plain number (e.g. 398000), used for totals
 *  followers_as_of  date of the count (e.g. "Nov 2026")
 *  niche            short description (English)
 *  campaign         group on the page (e.g. "Peacemaker"); rows with the same value are grouped
 *  country          where the creator is based/was invited from
 *  deliverables     links to the posts you want to show, separated by ";"   <-- fill this in
 *  notes            private notes, never shown on the site
 *  publish          "yes" to show the row on the site, anything else hides it
 */
export type Creator = {
  name: string;
  handle: string;
  platform: string;
  profileUrl: string;
  photo: string;
  followersText: string;
  followersNum: number | null;
  followersAsOf: string;
  niche: string;
  campaign: string;
  country: string;
  deliverables: string[];
};

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(cell);
      cell = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      cell = "";
      if (row.some((x) => x.trim() !== "")) rows.push(row);
      row = [];
    } else cell += c;
  }
  row.push(cell);
  if (row.some((x) => x.trim() !== "")) rows.push(row);
  return rows;
}

export function getCreators(): Creator[] {
  const file = path.join(process.cwd(), "content", "creators.csv");
  if (!fs.existsSync(file)) return [];
  const [head, ...rows] = parseCsv(fs.readFileSync(file, "utf-8").replace(/^﻿/, ""));
  if (!head) return [];
  const idx = (k: string) => head.map((h) => h.trim()).indexOf(k);
  const col = (r: string[], k: string) => (r[idx(k)] ?? "").trim();
  return rows
    .filter((r) => col(r, "publish").toLowerCase() === "yes" && col(r, "name"))
    .map((r) => {
      const num = Number(col(r, "followers_num").replace(/[^\d.]/g, ""));
      return {
        name: col(r, "name"),
        handle: col(r, "handle"),
        platform: col(r, "platform"),
        profileUrl: col(r, "profile_url"),
        photo: col(r, "photo"),
        followersText: col(r, "followers_text"),
        followersNum: Number.isFinite(num) && num > 0 ? num : null,
        followersAsOf: col(r, "followers_as_of"),
        niche: col(r, "niche"),
        campaign: col(r, "campaign"),
        country: col(r, "country"),
        deliverables: col(r, "deliverables")
          .split(";")
          .map((s) => s.trim())
          .filter((s) => /^https?:\/\//i.test(s)),
      };
    });
}

/** Size tiers by followers, from the biggest. Creators without a follower count are left out. */
export const sizeTiers = [
  { id: "mega", label: "1M+", min: 1_000_000 },
  { id: "macro", label: "500K to 1M", min: 500_000 },
  { id: "mid", label: "100K to 500K", min: 100_000 },
  { id: "micro", label: "Under 100K", min: 0 },
] as const;

export function sizeSplit(roster: Creator[]) {
  return sizeTiers.map((t, i) => ({
    label: t.label,
    n: roster.filter((c) => {
      const n = c.followersNum;
      if (n == null) return false;
      const upper = i === 0 ? Infinity : sizeTiers[i - 1].min;
      return n >= t.min && n < upper;
    }).length,
  }));
}

export function bySize(roster: Creator[]) {
  return [...roster].sort((a, b) => (b.followersNum ?? -1) - (a.followersNum ?? -1));
}

export function formatFollowers(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return String(n);
}
