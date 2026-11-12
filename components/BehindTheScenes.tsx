import Image from "next/image";
import { behind } from "@/content/behind";
import SectionHead from "./SectionHead";

/** Photos from the work itself: premieres, sets, shoots and events. */
export default function BehindTheScenes() {
  return (
    <section id="behind" aria-labelledby="behind-title" className="bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionHead compact id="behind-title" label="Behind the scenes" tone="paper" title={<>On set, on the carpet, in the room</>} />
        <ul className="columns-2 gap-3 sm:columns-3 lg:columns-5">
          {behind.map((p) => (
            <li key={p.file} className="mb-3 break-inside-avoid">
              <figure className="group relative m-0 overflow-hidden rounded-xl bg-ink">
                <Image
                  src={`/images/behind/${p.file}.webp`}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="block h-auto w-full"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-3 pb-2.5 pt-8 text-[0.8125rem] font-semibold leading-tight text-paper">
                  {p.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
