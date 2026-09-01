"use client";

import { useState } from "react";
import { directions } from "@/data/vastuCompassData";
import SectionLabel from "./SectionLabel";
import VastuMapGrid from "./VastuMapGrid";

export default function VastuMapExplorer() {
  const [selectedId, setSelectedId] = useState("NE");

  const selected =
    directions.find((direction) => direction.id === selectedId) ||
    directions.find((direction) => direction.id === "NE") ||
    directions[0];

  return (
    <section
      id="map-explorer"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel number="03">
              Explore the map
            </SectionLabel>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-[1.1] text-foreground sm:text-4xl">
              Explore each Vastu zone
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-5">
            Select a direction to understand its traditional associations and
            the broad principles commonly connected with that zone.
          </p>
        </div>

        {/* Main explorer */}
        <div className="mt-12 overflow-hidden rounded-4xl border border-border bg-secondary/30">

          <div className="grid lg:grid-cols-12">

            {/* Map */}
            <div className="relative flex min-h-125 items-center justify-center overflow-hidden border-b border-border bg-background px-6 py-14 lg:col-span-7 lg:min-h-162.5 lg:border-b-0 lg:border-r lg:px-12">

              {/* Ambient geometry */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/2.5 blur-3xl" />

                <div className="absolute left-1/2 top-0 h-full w-px bg-primary/5" />

                <div className="absolute left-0 top-1/2 h-px w-full bg-primary/5" />
              </div>

              <div className="relative w-full max-w-xl">
                <VastuMapGrid
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                  interactive
                />
              </div>

              {/* Bottom hint */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/60">
                Select a zone to explore
              </div>
            </div>

            {/* Information panel */}
            <div className="flex flex-col justify-center bg-secondary/45 p-7 sm:p-10 lg:col-span-5 lg:p-12">

              {/* Direction */}
              <div className="flex items-end justify-between gap-5 border-b border-border pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Selected zone
                  </p>

                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="font-heading text-5xl text-primary/30">
                      {selected?.id}
                    </span>

                    <span className="text-sm italic text-primary">
                      {selected?.sanskrit}
                    </span>
                  </div>
                </div>

                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Direction
                </span>
              </div>

              {/* Name */}
              <div className="pt-7">
                <h3 className="text-3xl font-medium text-foreground sm:text-4xl">
                  {selected?.name}
                </h3>

                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {selected?.theme}
                </p>
              </div>

              {/* Association */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Traditional association
                </p>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {selected?.association}
                </p>
              </div>

              {/* Guidance */}
              <div className="mt-8 border-l-2 border-primary/25 pl-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  General guidance
                </p>

                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {selected?.guidance}
                </p>
              </div>

              {/* Disclaimer */}
              <p className="mt-8 text-[11px] leading-relaxed text-muted-foreground">
                These associations represent traditional Vastu concepts and
                are intended for general educational purposes. A property&apos;s
                actual layout and context can affect interpretation.
              </p>
            </div>

          </div>
        </div>

        {/* Direction navigator */}
        <div className="mt-6 grid grid-cols-4 overflow-hidden rounded-[1.25rem] border border-border bg-background sm:grid-cols-8">
          {directions
            .filter((direction) => direction.id !== "CENTER")
            .map((direction) => {
              const active = direction.id === selectedId;

              return (
                <button
                  key={direction.id}
                  type="button"
                  onClick={() => setSelectedId(direction.id)}
                  className={`border-r border-b border-border px-3 py-4 text-center transition-colors last:border-r-0 sm:border-b-0 ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span className="block font-heading text-lg">
                    {direction.id}
                  </span>

                  <span
                    className={`mt-1 block text-[9px] uppercase tracking-widest ${
                      active
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {direction.name}
                  </span>
                </button>
              );
            })}
        </div>

      </div>
    </section>
  );
}