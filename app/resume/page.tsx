import type { Metadata } from "next";
import { background, courses, expertise, roles, site } from "@/content/site";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${site.name}, ${site.title}.`,
  alternates: { canonical: "/resume" },
};

export default function Resume() {
  return (
    <div className="bg-paper pt-[calc(var(--nav-h)+2rem)] text-ink print:pt-0">
      <div className="mx-auto max-w-[900px] px-5 pb-24 md:px-10">
        <div className="no-print mb-10 flex items-center justify-between">
          <p className="label text-ink/70">Résumé</p>
          <div className="flex gap-3">
            <a
              href={site.resumePdf}
              download
              className="label tap inline-flex bg-ink px-4 text-paper transition-opacity hover:opacity-85"
            >
              Download PDF
            </a>
            <PrintButton />
          </div>
        </div>

        <header className="border-b-2 border-ink pb-6">
          <h1 className="display text-5xl md:text-6xl">{site.name}</h1>
          <p className="label mt-3">
            {site.title} · {site.descriptor} · {site.location}
          </p>
          <p className="mt-3 text-sm">
            linkedin.com/in/gabrielmartins1707
            {site.email ? ` · ${site.email}` : ""}
          </p>
        </header>

        <section className="mt-8">
          <h2 className="label mb-4">Experience</h2>
          <ol className="space-y-6">
            {roles.map((r) => (
              <li key={r.id} className="break-inside-avoid">
                <p className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-sans text-lg font-bold">
                    {r.company} <span className="font-normal">· {r.role}</span>
                  </span>
                  <span className="label">
                    {r.start} – {r.end}
                  </span>
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  {r.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="label mb-4">Expertise</h2>
          <dl className="grid gap-4 text-sm sm:grid-cols-2">
            {expertise.map((g) => (
              <div key={g.title}>
                <dt className="font-bold">{g.title}</dt>
                <dd>{g.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="label mb-4">Education &amp; background</h2>
          <ul className="space-y-1 text-sm">
            {background.education.map((e) => (
              <li key={e.what}>
                <strong>{e.what}</strong>, {e.where} ({e.when})
              </li>
            ))}
            <li>
              Courses:{" "}
              {courses.map((c) => `${c.title} (${c.provider}, ${c.year})`).join("; ")}
            </li>
            <li>
              Languages: {background.languages.map((l) => `${l.name} (${l.level})`).join(", ")}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
