import Image from "next/image";
import { featuredCreator as f } from "@/content/creators";

/** Wide highlighted card for one collaboration, with the context of my work on it. */
export default function FeaturedCreator() {
  return (
    <article
      aria-labelledby="featured-name"
      className="mb-16 overflow-hidden rounded-2xl border border-paper/15 bg-ink text-paper md:mb-20"
    >
      <div className="grid md:grid-cols-12">
        <div className="relative aspect-[16/10] overflow-hidden bg-graphite md:col-span-4 md:aspect-auto md:min-h-[360px]">
          <Image src={f.photo} alt="" fill sizes="(min-width: 768px) 30vw, 100vw" className="scale-150 object-cover opacity-70 blur-2xl" aria-hidden />
          <div aria-hidden className="absolute inset-0 bg-ink/30" />
          <Image
            src={f.photo}
            alt={`${f.name}, profile picture`}
            width={160}
            height={160}
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-3xl object-cover shadow-2xl ring-2 ring-paper/25"
          />
        </div>

        <div className="p-6 md:col-span-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="label bg-tally px-3 py-1 text-ink">{f.label}</span>
            <span className="label text-mist">{f.campaign}</span>
          </div>
          <h3 id="featured-name" className="display h-section mt-4">
            {f.name}
          </h3>
          <p className="mt-2 text-paper/80">
            <a
              href={f.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-aqua underline decoration-aqua/50 underline-offset-4 hover:decoration-aqua"
            >
              {f.handle}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            · {f.platform} · {f.followers} ({f.followersAsOf})
          </p>
          <p className="mt-1 text-paper/70">{f.bio}</p>

          <p className="label mt-8 text-mist">My work on this video · {f.role}</p>
          <ul className="mt-4 space-y-3 text-lg text-paper/90">
            {f.context.map((c) => (
              <li key={c} className="flex gap-4">
                <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 bg-tally" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {f.links.map((l, i) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`label tap inline-flex px-5 transition-transform hover:-translate-y-0.5 ${
                  i === 0 ? "bg-tally text-ink" : "border border-paper/40 text-paper hover:border-tally hover:text-tally"
                }`}
              >
                {l.label} ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
