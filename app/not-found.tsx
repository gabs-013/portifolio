import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col justify-center bg-ink px-5 pt-[var(--nav-h)] md:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="label mb-6 text-mist">404</p>
        <h1 className="display h-hero max-w-[14ch]">
          Page <em className="glitch">not found.</em>
        </h1>
        <Link href="/" className="label mt-10 inline-block bg-tally px-7 py-4 text-ink">
          Back to the home page
        </Link>
      </div>
    </section>
  );
}
