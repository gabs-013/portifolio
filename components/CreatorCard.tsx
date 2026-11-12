import Image from "next/image";
import { formatFollowers, type Creator } from "@/content/creators-data";
import { Badge, Chip, Stats, cardShell } from "./CardParts";

const countryCodes: Record<string, string> = {
  Brazil: "BR",
  Mexico: "MX",
  Argentina: "AR",
  Colombia: "CO",
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

/**
 * Creator card, same format as the project card: 16:9 image area, accent line,
 * name and handle, description, chips, stats, delivery links.
 * Profile pictures are small, so the photo sits over a blurred copy of itself.
 */
export default function CreatorCard({ creator: c }: { creator: Creator }) {
  const country = c.country.replace(/\s*\(.*\)\s*$/, "").trim();
  const campaign = c.campaign.split(",")[0];

  return (
    <article className={`${cardShell} hover:border-paper/40`}>
      <div className="relative aspect-[16/9] overflow-hidden bg-ink">
        {c.photo ? (
          <>
            <Image
              src={c.photo}
              alt=""
              fill
              sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
              className="scale-150 object-cover opacity-70 blur-2xl"
              aria-hidden
            />
            <div aria-hidden className="absolute inset-0 bg-ink/30" />
            <Image
              src={c.photo}
              alt={`${c.name}, profile picture`}
              width={120}
              height={120}
              className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl object-cover shadow-2xl ring-2 ring-paper/25"
            />
          </>
        ) : (
          <div aria-hidden className="grid h-full place-items-center bg-gradient-to-br from-graphite to-ink">
            <span className="num text-5xl text-paper/80">{initials(c.name)}</span>
          </div>
        )}
      </div>
      <div aria-hidden className="h-[3px] bg-tally" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="display text-xl leading-tight">{c.name}</h3>
            <p className="mt-1 break-words text-[0.95rem] text-paper/70">
              {c.profileUrl ? (
                <a
                  href={c.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-tally"
                >
                  {c.handle || "Profile"} ↗<span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                c.handle
              )}
            </p>
          </div>
          {countryCodes[country] && <Badge>{countryCodes[country]}</Badge>}
        </div>
        {c.niche && <p className="mt-4 text-[0.975rem] text-paper/80">{c.niche}</p>}
        <div className="mb-5 mt-4 flex flex-wrap gap-2">
          {c.platform && <Chip primary>{c.platform}</Chip>}
          {campaign && <Chip>{campaign}</Chip>}
        </div>
        {(c.followersNum || c.followersText) && (
          <Stats
            items={[
              { label: "Followers", value: c.followersNum ? formatFollowers(c.followersNum) : c.followersText },
              { label: "As of", value: c.followersAsOf || "n/a" },
            ]}
          />
        )}
        {c.deliverables.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.deliverables.map((d, i) => (
              <li key={d}>
                <a
                  href={d}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label tap inline-flex rounded-md border border-paper/25 px-3 hover:border-tally hover:text-tally"
                >
                  Delivery {i + 1} ↗<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
