import Link from "next/link";

export default function LearnCTA() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="cta-heading">
          Learn it, then test it on your home
        </h2>

        <p className="cta-description">
          Pair the chapters with the compass, the interactive map, and the
          mandala to see the theory land on your own floor plan.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-7 py-3.5 text-base font-medium text-primary transition-colors hover:bg-brand-cream"
          >
            Explore the tools
          </Link>

          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}