import Link from "next/link";
import Image from "next/image";

export default function LearnCTA() {
  return (
    <section className="relative isolate px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-primary-foreground ">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/backgrounds/chakra.webp"
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-4xl border border-white/35 bg-primary/10 px-6 py-16 text-center shadow-xl backdrop-blur-sm backdrop-saturate-120 sm:px-12 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.917_0.032_82.8/0.12),transparent_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,oklch(0.644_0.111_55/0.12),transparent_100%)]" />
          <div className="relative">
            <h2 className="cta-heading">Learn it, then test it on your home</h2>
            <p className="cta-description">
              Pair the chapters with the compass, the interactive map, and the
              mandala to see the theory land on your own floor plan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-7 py-3.5 text-base font-medium text-primary transition-all hover:bg-brand-cream"
              >
                Explore the tools
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-base font-medium text-primary-foreground transition-colors bg-foreground  hover:bg-primary-foreground/10 hover:text-accent-muted"
              >
                Book a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
