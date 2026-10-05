import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import FloorPlanCenter from "@/components/ui/FloorPlanCenter";

function FindCenterSection() {
  return (
    <section
      id="find-center"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-surface"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 w-full justify-self-center md:max-w-md lg:order-1 lg:max-w-none">
          <FloorPlanCenter />
        </div>

        <div className="order-1 lg:order-2">
          <SectionLabel number="01">Begin at the source</SectionLabel>

          <h2 className="section-heading">Find your home&apos;s center</h2>

          <p className="section-description">
            A whole-home direction reading begins at the approximate geometric
            center of the complete floor plan—traditionally understood as the
            Brahmasthan.
          </p>

          <ol className="mt-6 space-y-3.5 sm:mt-7 sm:space-y-4 lg:mt-8 lg:space-y-5">
            {[
              "Sketch the outer footprint of the whole home.",
              "Draw diagonal lines between opposite corners.",
              "Mark their meeting point as the practical center.",
            ].map((item, index) => (
              <li key={item} className="flex gap-3 sm:gap-4 items-center">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 text-xs font-semibold text-primary sm:h-8 sm:w-8 sm:text-sm">
                  {index + 1}
                </span>

                <span className="mt-0 section-para text-foreground/80">{item}</span>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-2xl border border-primary/20 bg-secondary/45 p-4 sm:mt-7 sm:p-5 lg:mt-8">
            <p className="font-medium text-foreground">
              <span className="font-base font-bold text-green-500">*</span>{" "}
              Stand close to this point.
            </p>

            <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Avoid taking the whole-home reading from an entrance, corner,
              balcony, or a random room simply because it is more convenient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindCenterSection;
