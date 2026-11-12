export type Channel = "Entertainment" | "Sports" | "Gaming & iGaming";
export type Format = "Launch" | "Live" | "Always-on" | "Creator-led";

/**
 * tier "case"   → gets its own page at /work/[slug]
 * tier "mini"   → tile in the grid, no page yet
 * tier "credit" → text-only line in the credits list
 *
 * Optional fields are simply not rendered when empty, so nothing ever
 * shows "TBD" to visitors. Fill a field in and it appears.
 */
export type Project = {
  slug: string;
  title: string;
  brand?: string;
  channel: Channel;
  formats: Format[];
  year?: string;
  role?: string;
  /** Market the work ran in, e.g. "Brazil". */
  market?: string;
  tier: "case" | "mini" | "credit";
  summary?: string;
  /** Path under /public, e.g. "/images/work/tlou-s2.jpg". Empty → typographic title card. */
  image?: string;
  imageAlt?: string;
  /** "cover" fills the frame (default). "contain" keeps the art at its native size, centered, on `imageBg`; needs `imageSize`. */
  imageFit?: "cover" | "contain";
  imageBg?: string;
  imageSize?: [number, number];
  /** Brand logo (square). Shown as a small mark on the title card and as the thumbnail in the credits list. */
  logo?: string;
  context?: string;
  challenge?: string;
  approach?: string[];
  execution?: string[];
  /** `short` is the 2-3 word caption used on the project tile. */
  results?: { value: string; label: string; short?: string }[];
  gallery?: { src: string; alt: string }[];
  /** Links to published deliverables (posts, reels, videos). */
  links?: { label: string; url: string }[];
};

export type Role = {
  id: string;
  company: string;
  role: string;
  start: string; // display string
  end: string;
  years: string; // big sticky label
  location: string;
  summary: string;
  tags: string[];
  /** Magnitude of this stage: 1-3 big figures. Facts only. */
  highlights: { value: string; label: string }[];
  scope: string[];
  /** Company logo (path under /public). Empty = monogram tile. */
  logo?: string;
  logoFit?: "contain" | "cover";
  /** Letters for the monogram tile when there is no logo. */
  initials: string;
};
