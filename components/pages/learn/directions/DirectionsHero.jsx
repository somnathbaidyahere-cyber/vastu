import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { directions } from "@/data/directions";

export default function DirectionsHero() {
  return (
    <header className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
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

        <div className="lg:col-span-6">
          <DirectionCompass />
        </div>
      </div>
    </header>
  );
}

function DirectionCompass() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div
        aria-hidden="true"
        className="absolute inset-8 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative aspect-square w-full">
        <svg viewBox="0 0 200 200" className="h-full w-full" fill="none">
          <circle
            cx="100"
            cy="100"
            r="92"
            className="stroke-primary/15"
            strokeWidth="1"
          />

          <circle
            cx="100"
            cy="100"
            r="64"
            className="stroke-primary/20"
            strokeWidth="1"
          />

          {directions.map((direction) => (
            <line
              key={direction.code}
              x1="100"
              y1="100"
              x2={(direction.pos.x / 100) * 200}
              y2={(direction.pos.y / 100) * 200}
              className="stroke-primary/15"
              strokeWidth="1"
            />
          ))}

          <circle cx="100" cy="100" r="3" className="fill-primary" />
        </svg>

        {directions.map((direction) => (
          <span
            key={direction.code}
            style={{
              left: `${direction.pos.x}%`,
              top: `${direction.pos.y}%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-sm"
          >
            {direction.code}
          </span>
        ))}
      </div>
    </div>
  );
}