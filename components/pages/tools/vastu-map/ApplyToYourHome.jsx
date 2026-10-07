import { ArrowDown, Compass, MapPinned } from "lucide-react";
import SectionLabel from "../../../ui/SectionLabel";

export default function ApplyToYourHome() {
  return (
    <section className="border-y border-border/60 bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel number="05">Apply it to your home</SectionLabel>

            <h2 className="section-heading">
              Now look at your own floor plan.
            </h2>
          </div>

          <p className="max-w-xl section-description lg:col-span-5">
            Mark North on your floor plan, then see where your entrance, rooms
            and other major spaces fall within the directional framework.
          </p>
        </div>

        {/* Visual + instructions */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Floor plan visual */}
          <div className="lg:col-span-5">
            <div
              className="
      relative
      mx-auto
      aspect-6/4
      w-full
      max-w-[22rem]
      overflow-hidden
      rounded-2xl
      border
      border-border
      bg-background/30
      p-5
      shadow-[0_20px_55px_-40px_var(--primary)]

      sm:max-w-[26rem]
      sm:rounded-[1.5rem]
      sm:p-7

      md:max-w-[30rem]
      md:p-8

      lg:max-w-none
      lg:rounded-[1.75rem]
      lg:p-10
      lg:shadow-[0_25px_70px_-45px_var(--primary)]
    "
            >
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
                <div className="absolute left-[5%] top-[6%] flex h-[38%] w-[42%] items-start p-2 sm:p-3">
                  <span className="text-[10px] text-muted-foreground sm:text-xs">
                    Living
                  </span>
                </div>

                {/* Bedroom */}
                <div className="absolute right-[5%] top-[6%] flex h-[38%] w-[42%] items-start justify-end p-2 sm:p-3">
                  <span className="text-[10px] text-muted-foreground sm:text-xs">
                    Bedroom
                  </span>
                </div>

                {/* Kitchen */}
                <div className="absolute bottom-[6%] left-[5%] flex h-[38%] w-[42%] items-end p-2 sm:p-3">
                  <span className="text-[10px] text-muted-foreground sm:text-xs">
                    Kitchen
                  </span>
                </div>

                {/* Study */}
                <div className="absolute bottom-[6%] right-[5%] flex h-[38%] w-[42%] items-end justify-end p-2 sm:p-3">
                  <span className="text-[10px] text-muted-foreground sm:text-xs">
                    Study
                  </span>
                </div>

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background text-sm text-primary shadow-md shadow-primary/10 sm:h-12 sm:w-12 md:h-14 md:w-14">
                  ✦
                </div>

                {/* North */}
                <div className="absolute left-1/2 top-[-18%] flex -translate-x-1/2 flex-col items-center">
                  <Compass className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />

                  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-primary sm:text-[10px] sm:tracking-widest">
                    North
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:mt-4 sm:text-[10px] sm:tracking-[0.18em]">
              Simplified educational floor-plan example
            </p>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7">
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
                    Use your smartphone compass to establish North, then mark it
                    on a copy of your floor plan.
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
                property. Treat this exercise as a learning tool, not a property
                diagnosis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
