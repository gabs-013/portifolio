import { impact } from "@/content/site";
import SectionHead from "./SectionHead";

export default function ImpactSection({ n = "02" }: { n?: string }) {
  return (
    <section
      id="impact"
      aria-labelledby="impact-title"
      className="on-tally bg-tally py-24 text-ink md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionHead id="impact-title" n={n} label="Results" tone="tally" title={<>{impact.intro}</>} />
        <dl className="grid border-t border-ink/30 md:grid-cols-2">
          {impact.stats.map((s, i) => (
            <div
              key={s.title}
              className={`border-b border-ink/30 py-10 md:py-14 ${
                i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"
              }`}
            >
              <dt className="sr-only">{s.title}</dt>
              <dd>
                <p
                  className="num text-[clamp(3.6rem,10vw,8.5rem)]"
                  aria-label={s.display ?? `${s.prefix ?? ""}${s.value}${s.suffix ?? ""}`}
                >
                  {s.display ?? `${s.prefix ?? ""}${s.value}${s.suffix ?? ""}`}
                </p>
                <p className="display h-sub mt-6 max-w-[24ch]">{s.title}</p>
                <p className="mt-3 max-w-[44ch] text-ink">{s.body}</p>
                <p className="label mt-5 text-ink">{s.source}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
