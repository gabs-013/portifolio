import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseSlugs } from "@/content/work";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/creators`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ai`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resume`, changeFrequency: "monthly", priority: 0.5 },
    ...caseSlugs.map((s) => ({
      url: `${base}/work/${s}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
