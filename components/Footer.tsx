import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="no-print border-t rule-paper bg-ink text-paper/70">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="space-y-2">
          <p className="label text-paper">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="max-w-xl text-sm">
            Independent portfolio. Brand names, logos and key art belong to their respective
            owners and appear here only as references to work I took part in.
          </p>
        </div>
        <ul className="label flex flex-wrap gap-x-8 gap-y-1">
          <li>
            <Link className="tap inline-flex min-w-11 hover:text-aqua" href="/creators">
              Creators
            </Link>
          </li>
          <li>
            <Link className="tap inline-flex min-w-11 hover:text-aqua" href="/work">
              Work
            </Link>
          </li>
          <li>
            <Link className="tap inline-flex min-w-11 hover:text-aqua" href="/ai">
              AI
            </Link>
          </li>
          <li>
            <Link className="tap inline-flex min-w-11 hover:text-aqua" href="/resume">
              Résumé
            </Link>
          </li>
          <li>
            <a
              className="tap inline-flex min-w-11 hover:text-aqua"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </li>
          <li>
            <Link className="tap inline-flex min-w-11 hover:text-aqua" href="/">
              Home ↑
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
