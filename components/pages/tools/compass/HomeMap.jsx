import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { directions } from "@/data/vastuCompassData";
import DirectionalHomeMap from "@/components/ui/DirectionalHomeMap";

export default function HomeMap() {
  return (
    <section className="border-y border-border/60 bg-secondary/35 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <DirectionalHomeMap />
        </div>
        <div className="lg:col-span-5">
          <SectionLabel number="04">Map the home</SectionLabel>
          <h2 className="section-heading">
            North becomes your reference
          </h2>
          <p className="section-description">
            Once North is known, align it with the top of your floor-plan
            sketch. The remaining seven zones follow around the home relative to
            that axis.
          </p>
          <div className="mt-8 border-y border-border">
            <div className="grid grid-cols-[5rem_1fr] py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span>Zone</span>
              <span>Common association</span>
            </div>
            {directions.map((direction) => (
              <div
                key={direction.id}
                className="grid grid-cols-[5rem_1fr] border-t border-border/60 py-3 text-sm"
              >
                <span className="font-semibold text-primary">
                  {direction.id}
                </span>
                <span className="text-foreground/80">{direction.room}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Room associations are broad traditions. Plot shape, entrance,
            openings and the full layout all affect a complete assessment.
          </p>
        </div>
      </div>
    </section>
  );
}
