// components/mandala/interactive-mandala.jsx
"use client";

import { useMandala } from "./MandalaContext";

import { zones } from "../../../../data/mandalaData";
import  MandalaGrid  from "./MandalaGrid";

export default function InteractiveMandala() {
   const { selectedZone, setSelectedZone } = useMandala();

  const activeZone =
    zones.find((zone) => zone.id === selectedZone) || zones[4];

  return (
   <section
  id="interactive-mandala"
  className="
    border-y border-border/60
    bg-secondary/30
    px-4
    py-14

    sm:px-6
    sm:py-16

    lg:px-8
    lg:py-24
  "
>
  <div className="mx-auto max-w-7xl">

    {/* Section heading */}
    <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
      <div className="lg:col-span-7">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-widest">
          02 · Interactive Mandala
        </span>

        <h2 className="section-heading">
          Read the whole through each part
        </h2>
      </div>

      <p className="max-w-xl section-description lg:col-span-5">
        Select a field within the Mandala. The diagram is the navigation:
        each zone reveals a traditional association, elemental relationship,
        and spatial character.
      </p>
    </div>

    {/* Explorer */}
    <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:items-center lg:gap-14">

      {/* Mandala */}
      <div className="lg:col-span-6">
        <div
          className="
            relative
            mx-auto
            aspect-square
            w-full
            max-w-[17rem]
            bg-background
            p-[7%]
            shadow-divine

            sm:max-w-[21rem]

            md:max-w-[24rem]

            lg:max-w-[34rem]
          "
        >
          <MandalaGrid
            activeZone={activeZone.id}
            onZoneSelect={setSelectedZone}
            interactive
            showQuality
          />
        </div>
      </div>

      {/* Information */}
      <div
        className="lg:col-span-6 lg:ml-3"
        aria-live="polite"
      >
        <div
          className="
            border-l-2
            border-primary
            pl-4

            sm:pl-6

            lg:min-h-97.5
            lg:pl-9
          "
        >
          {/* Direction + element */}
          <div className="flex items-center justify-between gap-4">
            <span className="font-heading text-4xl text-primary/20 sm:text-5xl">
              {activeZone.id}
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-widest">
              {activeZone.element}
            </span>
          </div>

          {/* Association */}
          <p className="mt-3 text-xs italic text-primary sm:mt-4 sm:text-sm">
            {activeZone.deity} · traditional association
          </p>

          {/* Direction */}
          <h3 className="mt-1.5 text-2xl font-medium text-foreground sm:mt-2 sm:text-3xl">
            {activeZone.direction}
          </h3>

          {/* Quality */}
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent sm:text-xs sm:tracking-widest">
            {activeZone.quality}
          </p>

          {/* Meaning */}
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:text-base">
            {activeZone.meaning}
          </p>

          {/* Spatial reading */}
          <div className="mt-6 border-t border-border pt-5 sm:mt-8 sm:pt-6">
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-widest">
              Spatial reading
            </p>

            <p className="mt-2 text-xs leading-relaxed text-foreground/80 sm:mt-3 sm:text-sm">
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