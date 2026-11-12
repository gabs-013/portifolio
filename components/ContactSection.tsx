import { contact, site } from "@/content/site";
import CopyEmail from "./CopyEmail";

/** Closing section shared by every page. The nav's "Let's connect" scrolls here. */
export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t rule-paper bg-ink py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <p className="label mb-8 text-mist">Contact</p>
        <h2 id="contact-title" className="display h-hero max-w-[16ch]">
          {contact.headline}
        </h2>
        <p className="mt-8 max-w-[48ch] text-lg text-paper/80 md:text-xl">{contact.body}</p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          {site.email && (
            <>
              <a
                href={`mailto:${site.email}`}
                className="label bg-tally px-7 py-4 text-ink transition-transform hover:-translate-y-0.5"
              >
                Email me ↗
              </a>
              <CopyEmail email={site.email} />
            </>
          )}
          {site.whatsapp && (
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="label border border-paper/40 px-7 py-4 transition-colors hover:border-tally hover:text-tally"
            >
              WhatsApp ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`label px-7 py-4 transition-colors ${
              site.email || site.whatsapp
                ? "border border-paper/40 hover:border-tally hover:text-tally"
                : "bg-tally text-ink hover:-translate-y-0.5"
            }`}
          >
            {site.email || site.whatsapp ? "LinkedIn ↗" : "Message me on LinkedIn ↗"}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
