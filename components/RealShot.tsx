import Image from "next/image";

/**
 * A real screen of one of the internal tools, in a window frame.
 * The blur on names, numbers and promotions is baked into the image file, never done in CSS,
 * so nothing sensitive is in the page.
 */
export default function RealShot({
  src,
  alt,
  title,
  w = 1600,
  h = 1000,
}: {
  src: string;
  alt: string;
  title: string;
  w?: number;
  h?: number;
}) {
  return (
    <figure
      className="m-0 select-none overflow-hidden rounded-xl border text-white shadow-xl"
      style={{ background: "#071824", borderColor: "rgba(85,112,134,.55)" }}
    >
      <div className="flex items-center gap-2 px-3 py-2" style={{ background: "rgba(0,0,0,.25)", borderBottom: "1px solid rgba(85,112,134,.55)" }}>
        <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: "#e9113c" }} />
        <span aria-hidden className="h-2 w-2 rounded-full bg-white/30" />
        <span aria-hidden className="h-2 w-2 rounded-full bg-white/30" />
        <span className="ml-2 text-[11px] font-semibold" style={{ color: "#e6e7e8" }}>
          {title}
        </span>
        <span className="ml-auto rounded px-1.5 py-0.5 text-[10px] font-bold" style={{ background: "#25f4ee", color: "#071824" }}>
          REAL SCREEN · BLURRED
        </span>
      </div>
      <Image src={src} alt={alt} width={w} height={h} sizes="(min-width: 1024px) 620px, 100vw" className="block h-auto w-full" />
    </figure>
  );
}
