import React from "react";
import { Crosshair, LocateFixed, Smartphone } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

function CompassInstructions() {
  return (
    <section className="border-y border-border/60 bg-linear-to-br from-surface to-surface-muted/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <SectionLabel number="02">Orient the plan</SectionLabel>
          <h2 className="section-heading">How to find the directions</h2>
          <p className="section-description">
            Use the compass app already available on your smartphone. The
            website does not read or display your device heading.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-3">
          {[
            [
              Crosshair,
              "01",
              "Find center",
              "Move to the marked center of the complete home footprint.",
            ],
            [
              Smartphone,
              "02",
              "Open phone compass",
              "Keep the phone flat and complete calibration if prompted.",
            ],
            [
              LocateFixed,
              "03",
              "Establish North",
              "Note North; every other direction is understood relative to it.",
            ],
          ].map(([Icon, number, heading, copy]) => (
            <div key={number} className="group hover:bg-primary/30 p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-primary " />
                <span className="font-heading text-2xl text-primary/45 group-hover:text-primary ">
                  {number}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-medium text-primary ">
                {heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground ">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompassInstructions;
