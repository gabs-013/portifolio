import Image from "next/image";
import { brands } from "@/content/site";

export default function BrandsStrip() {
  return (
    <div className="mb-16">
      <p className="label mb-5 text-mist">Brands I&apos;ve worked with</p>
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
        {brands
          .filter((b) => b.logo)
          .map((b) => (
            <li key={b.name} className="group">
              <div className="relative aspect-square overflow-hidden bg-graphite">
                <Image
                  src={b.logo!}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 11vw, (min-width: 640px) 18vw, 30vw"
                  className="object-cover opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <p className="label mt-2 text-paper/75">{b.name}</p>
            </li>
          ))}
      </ul>
      <p className="label mt-5 text-mist">
        Also: {brands.filter((b) => !b.logo).map((b) => b.name).join(" · ")}
      </p>
    </div>
  );
}
