import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FundamentalsHero() {
  return (
    <header className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <span className="section-badge">Chapter one</span>
          <h1 className="hero-heading">Vastu Fundamentals</h1>
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
              Start the path <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-1" />
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
          <Image
            src="/backgrounds/compass-symbol.png"
            alt=""
            width={600}
            height={400}
          />
        </div>
      </div>
    </header>
  );
}
