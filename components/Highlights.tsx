import Image from "next/image";
import Link from "next/link";
import { highlights, type HighlightId } from "@/content/site";

/**
 * Profile "highlights" (round photo + label). They are the site menu and live in the
 * fixed top bar, so they stay on screen on every page.
 */
export default function Highlights({ active }: { active?: HighlightId }) {
  return (
    <nav aria-label="Profile sections">
      <ul className="flex items-start justify-center gap-0 sm:gap-2">
        {highlights.map((h) => {
          const on = active === h.id;
          return (
            <li key={h.id}>
              <Link
                href={h.href}
                aria-current={on ? "page" : undefined}
                className="group flex w-[56px] flex-col items-center gap-1 text-center sm:w-[68px]"
              >
                <span
                  className={`rounded-full p-[2px] transition-colors ${
                    on
                      ? "bg-gradient-to-tr from-aqua to-tally"
                      : "bg-paper/25 group-hover:bg-gradient-to-tr group-hover:from-aqua group-hover:to-tally"
                  }`}
                >
                  <span className="block rounded-full bg-ink p-[2px]">
                    <span className="relative block h-9 w-9 overflow-hidden rounded-full">
                      <Image src={h.img} alt="" fill sizes="36px" className="object-cover" />
                    </span>
                  </span>
                </span>
                <span
                  className={`whitespace-nowrap text-[0.8125rem] font-semibold leading-none ${
                    on ? "text-aqua" : "text-paper/90 group-hover:text-aqua"
                  }`}
                >
                  {h.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
