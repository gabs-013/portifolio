import Image from "next/image";

/**
 * Square logo tile for companies and schools.
 * Without a logo file it shows a monogram, so every row keeps the same shape.
 */
export default function LogoTile({
  name,
  initials,
  src,
  fit = "contain",
  size = "md",
}: {
  name: string;
  initials: string;
  src?: string;
  fit?: "contain" | "cover";
  size?: "xs" | "sm" | "md";
}) {
  const box =
    size === "xs" ? "h-9 w-9 rounded-lg" : size === "sm" ? "h-11 w-11 rounded-lg" : "h-14 w-14 rounded-xl";
  if (!src) {
    return (
      <span
        role="img"
        aria-label={name}
        className={`${box} grid shrink-0 place-items-center bg-ink font-extrabold tracking-tight text-paper ${
          size === "md" ? "text-sm" : "text-[0.8125rem]"
        }`}
      >
        {initials}
      </span>
    );
  }
  return (
    <span
      className={`${box} relative block shrink-0 overflow-hidden border border-ink/15 ${
        fit === "cover" ? "bg-graphite" : "bg-white"
      }`}
    >
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        sizes="56px"
        unoptimized={src.endsWith(".svg")}
        className={fit === "cover" ? "object-cover" : size === "xs" ? "object-contain p-1" : "object-contain p-1.5"}
      />
    </span>
  );
}
