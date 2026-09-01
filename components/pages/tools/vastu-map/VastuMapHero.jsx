import Link from "next/link";
import { ArrowDown, ArrowRight, Compass } from "lucide-react";
import VastuMapGrid from "./VastuMapGrid";

export default function VastuMapHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-ivory-pattern px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">

        {/* Content */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 border-b border-primary/30 pb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <Compass className="h-4 w-4" />
            Vastu Spatial Guide
          </div>

          <h1 className="hero-heading">
            See your Home through the{" "}
            <span className="text-gradient-brand">Vastu Map</span>
          </h1>

          <p className="hero-description">
            Understand how the eight directions are arranged across a home and
            explore the traditional Vastu associations of each zone.
          </p>

          {/* Context note */}
          <div className="mt-6 flex items-start gap-3 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />

            <p>
              This is an educational map. Use the Vastu Compass first to
              establish North for your property.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#map-explorer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore the map
              <ArrowDown className="h-4 w-4" />
            </a>

            <Link
              href="/tools/compass"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-6 py-3.5 font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Find North
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Map visual */}
        <div className="lg:col-span-7">
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/5 blur-3xl" />

            <VastuMapGrid />
          </div>
        </div>

      </div>
    </section>
  );
}