import Image from "next/image";
import Link from "next/link";
import { profile, site } from "@/content/site";
import { formatFollowers, getCreators } from "@/content/creators-data";

/** The top of the home page, laid out like a TikTok profile. */
export default function ProfileHeader() {
  const likes = getCreators().reduce((sum, c) => sum + (c.followersNum ?? 0), 0);
  const stats = [
    { ...profile.following },
    { ...profile.followers },
    { value: likes > 0 ? formatFollowers(likes) : "n/a", label: profile.likesLabel, caption: profile.likesCaption },
  ];

  return (
    <header className="bg-ink pb-10 pt-[calc(var(--nav-h)+2.5rem)] md:pb-14 md:pt-[calc(var(--nav-h)+4rem)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-12 md:text-left">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-2 ring-paper/25 md:h-44 md:w-44">
            <Image
              src="/images/avatar.jpg"
              alt="Gabriel Martins at the Formula 1 São Paulo paddock, wearing a purple t-shirt and an event lanyard"
              fill
              priority
              sizes="(min-width: 768px) 176px, 128px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="flex flex-col md:flex-row md:items-baseline md:gap-4">
              <span className="display glitch text-[clamp(1.7rem,3.4vw,2.6rem)]">{profile.handle}</span>
              <span className="text-lg font-semibold text-paper/80">{profile.name}</span>
            </h1>

            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="#contact"
                className="label tap inline-flex rounded-md bg-tally px-8 text-ink transition-opacity hover:opacity-90"
              >
                Let&apos;s connect
              </Link>
              <a
                href={site.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="label tap inline-flex rounded-md bg-paper/10 px-6 text-paper transition-colors hover:bg-paper/20"
              >
                Résumé PDF<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <dl className="mt-6 flex justify-center gap-8 sm:gap-10 md:justify-start">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">
                    {s.label}: {s.caption}
                  </dt>
                  <dd>
                    <span className="block text-2xl font-extrabold leading-none tracking-tight">{s.value}</span>
                    <span className="mt-1 block text-[0.9375rem] font-semibold text-paper/90">{s.label}</span>
                    <span className="block text-sm leading-tight text-paper/70">{s.caption}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-snug text-paper/90">
              <span className="block font-bold">{profile.bio.role}</span>
              <span className="block font-bold text-aqua">{profile.bio.place}</span>
              <span className="block">{profile.bio.rest}</span>
              <span className="mt-2 block text-paper/80">{profile.bio.goal}</span>
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start" aria-label="Results">
              {profile.proof.map((r) => (
                <li key={r.label} className="flex items-baseline gap-2 rounded-full border border-paper/20 px-4 py-2">
                  <span className="text-lg font-extrabold leading-none text-tally">{r.value}</span>
                  <span className="text-sm text-paper/85">{r.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold underline-offset-4 hover:text-aqua hover:underline"
              >
                {profile.linkLabel} ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}
