import Link from "next/link";
import Image from "next/image";

export default function BlogFinalCTA() {
  return (
    <section className="relative isolate px-4 py-16 sm:px-6 lg:px-8">
      {/* Image background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/blogCta/sunset-valley.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-95"
        />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 pb-5 border-b border-border/60  pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xss md:text-sm font-medium uppercase tracking-widest text-accent-muted mb-2">
            VastuGuru Journal
          </p>

          <h2 className="cta-heading text-primary-foreground/95">
            Keep learning with calm, practical Vastu guidance.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/learn/fundamentals"
            className="group inline-flex rounded-full border border-border bg-white/10 px-5 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-surface/16"
          >
            <span className="transiion-all duration-100 group-hover:-translate-y-0.25">
              Learn fundamentals
            </span>
          </Link>

          <Link
            href="/tools"
            className="group inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <span className="transiion-all duration-100 group-hover:-translate-y-0.25">
              Explore tools
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}