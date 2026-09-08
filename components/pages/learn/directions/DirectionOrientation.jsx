import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function DirectionOrientation() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Compass className="h-5 w-5 text-primary" aria-hidden="true" />

          <h2 className="mt-5 text-3xl font-medium text-foreground sm:text-4xl">
            Why direction comes first
          </h2>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8">
          <p>
            Direction matters in Vastu because the sun&apos;s path, prevailing
            wind and the flow of natural light are not symmetric across a day.
            A room facing east behaves differently from the same room facing
            west.
          </p>

          <p>
            Orientation is evaluated against true north, not simply the front
            door or boundary wall. Once established, that orientation is
            applied consistently across the whole plan.
          </p>

          <p>
            This is why direction comes first when reading a plan. Every
            judgement that follows depends on knowing which way the plot
            actually faces.
          </p>

          <Link
            href="/tools/compass"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Explore directions with the Vastu Compass
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}