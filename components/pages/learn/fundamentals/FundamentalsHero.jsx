import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FundamentalsHero() {
  return (
    <header className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <span className="section-badge">Chapter one</span>
          <h1 className="hero-heading">
            Vastu {" "}<span className="text-gradient-brand">Fundamentals</span>
          </h1>
          <p className="hero-description">
            The vocabulary and reasoning behind Vastu Shastra, explained without
            mystification. Start here to understand orientation, the five
            elements, the grid of padas and the open centre — the ideas every
            other chapter depends on.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#start-learning"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Start the path{" "}
              <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-1" />
            </a>
            <a
              href="#core-concepts"
              className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Jump to concepts
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <FundamentalsHeroImage/>
        </div>
      </div>
    </header>
  );
}

function FundamentalsHeroImage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-6 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Image */}
      <div className="relative h-full w-full overflow-hidden rounded-4xl border border-border/60 bg-card shadow-sm">
        <Image
          src="/section-images/housing-lane.webp"
          alt="Traditional Indian palace floor and architectural layout"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 448px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}