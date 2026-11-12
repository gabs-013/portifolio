import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Closest open font to Meta's Optimistic / Instagram Sans (both proprietary).
const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans-face",
  display: "swap",
});

const pageTitle = `${site.name}: ${site.title} | ${site.descriptor}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: pageTitle, template: `%s · ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#010101",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  description: site.description,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressCountry: "BR" },
  sameAs: [site.linkedin],
  knowsAbout: [
    "Social media strategy",
    "Social listening",
    "Audience insights",
    "Creator marketing",
    "Entertainment marketing",
    "Sports marketing",
    "iGaming marketing",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={sans.variable}
    >
      <body>
        <a
          href="#main"
          className="label no-print fixed left-4 top-3 z-[70] -translate-y-20 bg-tally px-4 py-3 text-ink focus:translate-y-0"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
