import React from "react";
import { ArrowDown, Compass, Smartphone } from "lucide-react";
import CompassDiagram from "@/components/ui/CompassDiagram";

function CompassHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-ivory-pattern px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            <Compass className="h-4 w-4" />
            Vastu Direction Guide
          </span>

          <h1 className="hero-heading">
            Understand the{" "}
            <span className="text-gradient-brand">Directions</span> of your space
          </h1>
          <p className="hero-description">
            Learn a simple, reliable method to locate your home&apos;s center,
            establish North using your smartphone, and read the eight
            traditional Vastu directions.
          </p>
          <div className="mt-5 flex items-start gap-3 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">
            <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            This is an educational guide. It does not access your phone sensors
            or provide a live compass reading.
          </div>
          <a
            href="#find-center"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Start the guide <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-7">
          <CompassDiagram selectedId="" onSelect={null} decorative />
        </div>
      </div>
    </section>
  );
}

export default CompassHero;
