import { ArrowDown, Compass, MapPinned } from "lucide-react";
import SectionLabel from "../../../ui/SectionLabel";

export default function ApplyToYourHome() {
  return (
    <section className="border-y border-border/60 bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel number="05">
              Apply it to your home
            </SectionLabel>

            <h2 className="section-heading">
              Now look at your own floor plan.
            </h2>
          </div>

          <p className="max-w-xl text-sm md:text-base text-foreground-muted leading-relaxed lg:col-span-5">
            Mark North on your floor plan, then see where your entrance, rooms
            and other major spaces fall within the directional framework.
          </p>
        </div>

        {/* Visual + instructions */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">

          {/* Floor plan visual */}
          <div className="lg:col-span-7">
            <div className="relative aspect-6/4 overflow-hidden rounded-[1.75rem] border border-border bg-background/30 p-6 shadow-[0_25px_70px_-45px_var(--primary)] sm:p-10">

              {/* Subtle map grid */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, currentColor 1px, transparent 1px),
                      linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>

              {/* House */}
              <div className="absolute left-[10%] top-[15%] h-[70%] w-[80%] border-2 border-primary/20 bg-secondary/20">

                {/* Vertical / horizontal divisions */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-border" />
                <div className="absolute left-0 top-1/2 h-px w-full bg-border" />

                {/* Living */}
                <div className="absolute left-[5%] top-[6%] flex h-[38%] w-[42%] items-start p-3">
                  <span className="text-xs text-muted-foreground">
                    Living
                  </span>
                </div>

                {/* Bedroom */}
                <div className="absolute right-[5%] top-[6%] flex h-[38%] w-[42%] items-start justify-end p-3">
                  <span className="text-xs text-muted-foreground">
                    Bedroom
                  </span>
                </div>

                {/* Kitchen */}
                <div className="absolute bottom-[6%] left-[5%] flex h-[38%] w-[42%] items-end p-3">
                  <span className="text-xs text-muted-foreground">
                    Kitchen
                  </span>
                </div>

                {/* Study */}
                <div className="absolute bottom-[6%] right-[5%] flex h-[38%] w-[42%] items-end justify-end p-3">
                  <span className="text-xs text-muted-foreground">
                    Study
                  </span>
                </div>

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background text-primary shadow-lg shadow-primary/10">
                  ✦
                </div>

                {/* North */}
                <div className="absolute left-1/2 top-[-18%] flex -translate-x-1/2 flex-col items-center">
                  <Compass className="h-4 w-4 text-primary" />
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                    North
                  </span>
                </div>

              </div>
            </div>

            <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Simplified educational floor-plan example
            </p>
          </div>

          {/* Steps */}
          <div className="lg:col-span-5">
            <div className="space-y-8">

              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-background/30 text-primary">
                  <Compass className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Step 01
                  </p>

                  <h3 className="mt-2 text-xl font-medium text-foreground">
                    Mark North
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Use your smartphone compass to establish North, then mark
                    it on a copy of your floor plan.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-background/30 text-primary">
                  <MapPinned className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Step 02
                  </p>

                  <h3 className="mt-2 text-xl font-medium text-foreground">
                    Place your spaces
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Identify where your entrance, kitchen, bedrooms and other
                    major spaces fall within the directional zones.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-background/30 text-primary">
                  <ArrowDown className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Step 03
                  </p>

                  <h3 className="mt-2 text-xl font-medium text-foreground">
                    Compare and learn
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Use the map as a general reference for learning traditional
                    Vastu associations.
                  </p>
                </div>
              </div>

            </div>

            {/* Important note */}
            <div className="mt-10 border-l-2 border-accent/40 pl-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                A simplified map cannot account for every detail of a real
                property. Treat this exercise as a learning tool, not a
                property diagnosis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}