import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { directions } from "@/data/directions";

export default function DirectionsHero() {
  return (
    <header className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Chapter three
          </span>

          <h1 className="hero-heading">
            The {" "}<span className="text-gradient-brand">8 Directions</span>
          </h1>

          <p className="hero-description">
            Every reading in Vastu begins with direction. Before a room, a
            wall or a doorway is judged, the plan is first oriented against
            eight fixed points — and each one carries its own traditional
            weight.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#the-eight"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore the eight
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#glance"
              className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Compare at a glance
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <DirectionHeroImage/>
        </div>
      </div>
    </header>
  );
}

function DirectionHeroImage() {
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
          src="/section-images/palace-floor-view.webp"
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