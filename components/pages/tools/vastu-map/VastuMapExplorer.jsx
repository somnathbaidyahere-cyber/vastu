"use client";

import { useState } from "react";
import { directions } from "@/data/vastuCompassData";
import SectionLabel from "../../../ui/SectionLabel";
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
            <SectionLabel number="02">Explore the map</SectionLabel>

            <h2 className="section-heading">Explore each Vastu zone</h2>
          </div>

          <p className="max-w-xl section-description lg:col-span-5">
            Select a direction to understand its traditional associations and
            the broad principles commonly connected with that zone.
          </p>
        </div>

        {/* Main explorer */}
        {/* Main explorer */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-secondary/30 sm:mt-10 sm:rounded-3xl lg:mt-12 lg:rounded-4xl">
          <div className="grid lg:grid-cols-12">
            {/* Map */}
            <div
              className="
        relative
        flex
        min-h-[23rem]
        items-center
        justify-center
        overflow-hidden
        border-b
        border-border
        bg-surface/20
        px-4
        py-10

        sm:min-h-[27rem]
        sm:px-6
        sm:py-12

        md:min-h-[31rem]
        md:px-8

        lg:col-span-5
        lg:min-h-[40rem]
        lg:border-b-0
        lg:border-r
        lg:px-12
        lg:py-14
      "
            >
              {/* Ambient geometry */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/2.5 blur-3xl" />

                <div className="absolute left-1/2 top-0 h-full w-px bg-primary/5" />

                <div className="absolute left-0 top-1/2 h-px w-full bg-primary/5" />
              </div>

              {/* Map */}
              <div
                className="
          relative
          w-full
          max-w-[18rem]

          sm:max-w-[22rem]
          md:max-w-[26rem]

          lg:max-w-xl
        "
              >
                <VastuMapGrid
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                  interactive
                />
              </div>

              {/* Bottom hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/60 sm:bottom-5 sm:text-[10px] sm:tracking-[0.18em] lg:bottom-6">
                Select a zone to explore
              </div>
            </div>

            {/* Information panel */}
            <div
              className="
        flex
        flex-col
        justify-center
        bg-secondary/45
        p-5

        sm:p-7
        md:p-8

        lg:col-span-7
        lg:p-12
      "
            >
              {/* Direction */}
              <div className="flex items-end justify-between gap-4 border-b border-border pb-5 sm:pb-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-[0.18em]">
                    Selected zone
                  </p>

                  <div className="mt-2 flex items-baseline gap-2 sm:mt-3 sm:gap-3">
                    <span className="font-heading text-4xl text-primary/30 sm:text-5xl">
                      {selected?.id}
                    </span>

                    <span className="text-xs italic text-primary sm:text-sm">
                      {selected?.sanskrit}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-widest">
                  Direction
                </span>
              </div>

              {/* Name */}
              <div className="pt-5 sm:pt-7">
                <h3 className="text-2xl font-medium text-foreground sm:text-3xl md:text-4xl">
                  {selected?.name}
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent sm:mt-3 sm:text-sm sm:tracking-[0.16em]">
                  {selected?.theme}
                </p>
              </div>

              {/* Association */}
              <div className="mt-6 sm:mt-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-widest">
                  Traditional association
                </p>

                <p className="section-para">
                  {selected?.association}
                </p>
              </div>

              {/* Guidance */}
              <div className="mt-6 border-l-2 border-primary/25 pl-4 sm:mt-8 sm:pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-widest">
                  General guidance
                </p>

                <p className="section-para">
                  {selected?.guidance}
                </p>
              </div>

              {/* Disclaimer */}
              <p className="mt-6 hidden lg:block text-[10px] leading-relaxed text-muted-foreground sm:mt-8 sm:text-[11px]">
                These associations represent traditional Vastu concepts and are
                intended for general educational purposes. A property&apos;s
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
                    className={`hidden md:block mt-1 text-[9px] uppercase tracking-widest ${
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
