// components/mandala/interactive-mandala.jsx
"use client";

import { useMandala } from "./MandalaContext";

// import { useState } from "react";

import { zones } from "../../../../data/mandalaData";
import  MandalaGrid  from "./MandalaGrid";

export default function InteractiveMandala() {
   const { selectedZone, setSelectedZone } = useMandala();

  const activeZone =
    zones.find((zone) => zone.id === selectedZone) || zones[4];

  return (
    <section
      id="interactive-mandala"
      className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              02 · Interactive Mandala
            </span>

            <h2 className="section-heading">
              Read the whole through each part
            </h2>
          </div>

          <p className="max-w-xl section-description lg:col-span-5">
            Select a field within the Mandala. The diagram is the navigation:
            each zone reveals a traditional association, elemental
            relationship, and spatial character.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative mx-auto aspect-square w-full max-w-[680px] p-[7%] bg-background shadow-divine">
              <MandalaGrid
                activeZone={activeZone.id}
                onZoneSelect={setSelectedZone}
                interactive
                showQuality
              />
            </div>
          </div>

          <div className="lg:col-span-5" aria-live="polite">
            <div className="min-h-[390px] border-l-2 border-primary pl-6 sm:pl-9">
              <div className="flex items-center justify-between gap-4">
                <span className="font-heading text-6xl text-primary/20">
                  {activeZone.id}
                </span>

                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {activeZone.element}
                </span>
              </div>

              <p className="mt-4 text-sm italic text-primary">
                {activeZone.deity} · traditional association
              </p>

              <h3 className="mt-2 text-3xl font-medium text-foreground">
                {activeZone.direction}
              </h3>

              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-accent">
                {activeZone.quality}
              </p>

              <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
                {activeZone.meaning}
              </p>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Spatial reading
                </p>

                <p className="mt-3 leading-relaxed text-foreground/80">
                  Read this quality in relation to the center and neighboring
                  fields—not as an isolated prescription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// NAMED EXPORT