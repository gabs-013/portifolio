"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { pages, type HighlightId } from "@/content/site";
import Highlights from "./Highlights";

/** Pages that end with the shared #contact section. Others fall back to the home page's. */
function hasContact(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/creators" ||
    pathname === "/work" ||
    pathname === "/ai" ||
    pathname.startsWith("/work/")
  );
}

function activeHighlight(pathname: string): HighlightId | undefined {
  if (pathname === "/") return "about";
  if (pathname === "/creators") return "creators";
  if (pathname === "/work" || pathname.startsWith("/work/")) return "works";
  if (pathname === "/ai") return "ai";
  return undefined;
}

export default function Nav() {
  const pathname = usePathname();
  const contactHref = hasContact(pathname) ? "#contact" : "/#contact";
  const [open, setOpen] = useState(false);
  const [atContact, setAtContact] = useState(false);
  const [cta, setCta] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  // Scroll progress (no re-render). Also decides when the mobile CTA shows: only after the
  // top of the page and only while scrolling up, so it never sits on top of what is being read.
  useEffect(() => {
    let last = document.documentElement.scrollTop;
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      const y = h.scrollTop;
      if (y < 600) setCta(false);
      else if (y < last - 6) setCta(true);
      else if (y > last + 6) setCta(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Hide the mobile CTA while the contact section is on screen
  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), {
      rootMargin: "0px 0px -20% 0px",
    });
    io.observe(el);
    return () => {
      io.disconnect();
      setAtContact(false);
    };
  }, [pathname]);

  // Overlay: Esc, scroll lock, focus
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const indexItems = [
    ...pages.map((p) => ({ href: p.href, n: p.n, label: p.label, sub: p.sub })),
    { href: contactHref, n: "05", label: "Contact", sub: "Let's connect" },
  ];

  return (
    <>
      <header className="no-print fixed inset-x-0 top-0 z-50 border-b rule-paper bg-ink text-paper">
        <div className="mx-auto flex h-[var(--nav-h)] max-w-[1400px] items-center justify-between gap-2 px-3 sm:px-5 md:px-10">
          <Link
            href="/"
            aria-label="Gabriel Martins, home"
            className="tap hidden min-w-11 items-center gap-2 font-sans text-base font-extrabold tracking-tight sm:flex"
          >
            <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-tally" />
            <span className="sm:max-md:inline md:hidden">GM</span>
            <span className="hidden md:inline">Gabriel Martins</span>
          </Link>

          <div className="flex min-w-0 flex-1 justify-center">
            <Highlights active={activeHighlight(pathname)} />
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href={contactHref}
              className="label tap hidden border border-paper/30 px-4 transition-colors hover:border-aqua hover:text-aqua md:inline-flex"
            >
              Let&apos;s connect ↗
            </Link>
            <button
              ref={toggle}
              type="button"
              className="label tap inline-flex border border-paper/30 px-2.5 transition-colors hover:border-aqua hover:text-aqua sm:px-4"
              aria-expanded={open}
              aria-controls="site-index"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Index"}
            </button>
          </div>
        </div>
        <div
          ref={bar}
          aria-hidden
          className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left scale-x-0 bg-tally"
        />
      </header>

      {open && (
        <div
          id="site-index"
          role="dialog"
          aria-modal="true"
          aria-label="Site index"
          className="no-print fixed inset-0 z-40 overflow-y-auto bg-ink pt-[var(--nav-h)] text-paper"
        >
          <ol className="mx-auto max-w-[1400px] px-5 py-10 md:px-10">
            {indexItems.map((s, i) => (
              <li key={s.label} className="border-b rule-paper">
                <Link
                  ref={i === 0 ? firstLink : undefined}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5 py-4 md:py-5"
                >
                  <span className="label text-mist">{s.n}</span>
                  <span>
                    <span className="display block text-[clamp(1.9rem,5.5vw,3.6rem)] transition-colors group-hover:text-aqua">
                      {s.label}
                    </span>
                    <span className="label block text-paper/70">{s.sub}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Mobile CTA: appears when scrolling up, hidden at the top and once the contact section is on screen */}
      {cta && !atContact && !open && (
        <Link
          href={contactHref}
          className="label tap inline-flex whitespace-nowrap no-print fixed bottom-4 left-1/2 z-40 -translate-x-1/2 bg-tally px-6 text-ink shadow-[0_6px_24px_rgba(0,0,0,0.4)] md:hidden"
        >
          Let&apos;s connect ↗
        </Link>
      )}
    </>
  );
}
