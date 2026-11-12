import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import Poster from "@/components/Poster";
import { caseSlugs, getProject } from "@/content/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getProject(slug);
  if (!p) return {};
  const description =
    p.summary ?? `${p.title}${p.brand ? `, ${p.brand}` : ""}: a case study by Gabriel Martins.`;
  return {
    title: p.title,
    description,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: `${p.title} · Gabriel Martins`,
      description,
      type: "article",
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: ["/twitter-image.png"] },
  };
}

const wrap = "mx-auto w-full max-w-[1400px] px-5 md:px-10";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t rule-paper py-10 md:grid-cols-12 md:gap-10 md:py-14">
      <h2 className="label text-mist md:col-span-3">{label}</h2>
      <div className="md:col-span-8 md:col-start-5">{children}</div>
    </section>
  );
}

export default async function CasePage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const p = getProject(slug);
  if (!p || p.tier !== "case") notFound();

  const i = caseSlugs.indexOf(p.slug);
  const next = getProject(caseSlugs[(i + 1) % caseSlugs.length])!;

  const meta: [string, string | undefined][] = [
    ["Brand", p.brand],
    ["Market", p.market],
    ["Channel", p.channel],
    ["Format", p.formats.join(" · ")],
    ["Year", p.year],
  ];

  return (
    <>
    <article className="bg-ink pt-[calc(var(--nav-h)+2rem)]">
      <div className={wrap}>
        <Link href="/work" className="label tap inline-flex text-mist hover:text-tally">
          ← All work
        </Link>

        <header className="mb-12 mt-10 md:mb-16">
          <p className="label mb-5 text-mist">Case study</p>
          <h1 className="display h-hero max-w-[16ch]">{p.title}</h1>
          {p.summary && <p className="mt-6 max-w-[52ch] text-lg text-paper/80 md:text-xl">{p.summary}</p>}
        </header>

        <dl className="mb-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y rule-paper py-6 md:grid-cols-3 lg:grid-cols-5">
          {meta
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k}>
                <dt className="label text-mist">{k}</dt>
                <dd className="mt-1">{v}</dd>
              </div>
            ))}
          {p.role && (
            <div className="col-span-full border-t rule-paper pt-6">
              <dt className="label text-mist">My role</dt>
              <dd className="mt-1 max-w-[70ch]">{p.role}</dd>
            </div>
          )}
        </dl>

        {p.results && (
          <section aria-label="Headline results" className="mb-10 border-b rule-paper pb-10">
            <p className="label mb-6 text-mist">Headline results</p>
            <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {p.results.map((r) => (
                <div key={r.value} className="flex flex-col-reverse">
                  <dt className="mt-3 max-w-[38ch] text-lg text-paper/90">{r.label}</dt>
                  <dd className="num text-[clamp(3.8rem,9vw,7.5rem)] text-tally">{r.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <div className="relative aspect-[16/9] overflow-hidden bg-graphite">
          <Poster project={p} sizes="100vw" priority />
        </div>

        <div className="mt-16 md:mt-24">
          {p.context && (
            <Block label="Context">
              <p className="text-xl text-paper/90 md:text-2xl">{p.context}</p>
            </Block>
          )}
          {p.challenge && (
            <Block label="Challenge">
              <p className="text-xl text-paper/90 md:text-2xl">{p.challenge}</p>
            </Block>
          )}
          {p.approach && (
            <Block label="Strategic approach">
              <ul className="space-y-4 text-lg text-paper/90">
                {p.approach.map((a) => (
                  <li key={a} className="flex gap-4">
                    <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 bg-tally" />
                    {a}
                  </li>
                ))}
              </ul>
            </Block>
          )}
          {p.execution && (
            <Block label="Execution">
              <ul className="space-y-4 text-lg text-paper/90">
                {p.execution.map((a) => (
                  <li key={a} className="flex gap-4">
                    <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 bg-tally" />
                    {a}
                  </li>
                ))}
              </ul>
            </Block>
          )}
          {p.links && p.links.length > 0 && (
            <Block label="Deliverables">
              <ul className="space-y-3 text-lg">
                {p.links.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tap inline-flex underline decoration-tally decoration-2 underline-offset-4 hover:text-tally"
                    >
                      {l.label} ↗<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          )}
          {p.gallery && p.gallery.length > 0 && (
            <Block label="Selected assets">
              <ul className="grid gap-4 sm:grid-cols-2">
                {p.gallery.map((g) => (
                  <li key={g.src} className="relative aspect-[4/5] overflow-hidden bg-graphite">
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>
      </div>

      <Link
        href={`/work/${next.slug}`}
        className="group mt-16 block border-t rule-paper bg-graphite py-16 transition-colors hover:bg-tally hover:text-ink md:py-24"
      >
        <div className={wrap}>
          <p className="label mb-4 text-mist group-hover:text-ink">Next project ↗</p>
          <p className="display h-section">{next.title}</p>
        </div>
      </Link>
    </article>
    <ContactSection />
    </>
  );
}
