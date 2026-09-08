import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DirectionsPanchabhuta() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <div className="mx-auto flex max-w-xs flex-col items-center gap-3 text-center">
            <span className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium">
              Directions
            </span>

            <ArrowRight
              className="h-4 w-4 rotate-90 text-primary"
              aria-hidden="true"
            />

            <span className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium">
              Five Elements
            </span>

            <ArrowRight
              className="h-4 w-4 rotate-90 text-primary"
              aria-hidden="true"
            />

            <span className="rounded-full border border-primary bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">
              Qualities
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            How this connects
          </span>

          <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
            Directions &amp; the five elements
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Direction provides the spatial framework, while the five elements
            provide another layer for understanding the qualities traditionally
            associated with different zones.
          </p>

          <Link
            href="/learn/five-elements"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Explore Panchabhuta
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}