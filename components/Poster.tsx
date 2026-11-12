import Image from "next/image";
import type { Project } from "@/content/types";

const tones = ["#161823", "#1c1e2c", "#12131c", "#1d1a26"];

function toneFor(slug: string) {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) % 997;
  return tones[h % tones.length];
}

type PosterProject = Pick<
  Project,
  "slug" | "title" | "image" | "imageAlt" | "imageFit" | "imageBg" | "imageSize" | "logo" | "brand"
>;

/**
 * Key art when available; otherwise a typographic title card (with the brand logo if set).
 * Replace by setting `image` on the project in content/work.ts.
 */
export default function Poster({
  project,
  index,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  variant = "hero",
}: {
  project: PosterProject;
  index?: number;
  sizes?: string;
  priority?: boolean;
  /** "card": fills its frame (contain/cover). "hero": big case-page image, never upscaled beyond native size. */
  variant?: "card" | "hero";
}) {
  if (project.image) {
    const alt = project.imageAlt ?? `${project.title} key art`;
    const bg = project.imageBg ?? "#000";
    if (variant === "hero" && project.imageFit === "contain" && project.imageSize) {
      const [w, h] = project.imageSize;
      return (
        <div className="absolute inset-0 grid place-items-center" style={{ background: bg }}>
          <Image
            src={project.image}
            alt={alt}
            width={w}
            height={h}
            sizes="640px"
            priority={priority}
            className="h-auto w-[min(100%,640px)]"
          />
        </div>
      );
    }
    return (
      <div className="absolute inset-0" style={{ background: bg }}>
        <Image
          src={project.image}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    );
  }
  if (project.logo) {
    // Brand logo as the image: big, centered, same visual weight as key art on the other cards.
    return (
      <div aria-hidden className="absolute inset-0 grid place-items-center" style={{ background: toneFor(project.slug) }}>
        {typeof index === "number" && (
          <span className="label absolute left-5 top-4 text-mist md:left-7 md:top-5">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <span className="relative block aspect-square h-[62%] overflow-hidden rounded-3xl border border-paper/15 bg-ink shadow-2xl">
          <Image src={project.logo} alt="" fill sizes="160px" className="object-contain p-4" />
        </span>
      </div>
    );
  }
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex flex-col justify-between p-5 md:p-7"
      style={{ background: toneFor(project.slug) }}
    >
      <div className="label flex items-start justify-between text-mist">
        <span>{typeof index === "number" ? String(index + 1).padStart(2, "0") : ""}</span>
        <span>{project.brand}</span>
      </div>
      <p className="display text-[clamp(1.35rem,2.4vw,2rem)] text-paper">{project.title}</p>
    </div>
  );
}
