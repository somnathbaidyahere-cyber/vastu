import { Crosshair } from "lucide-react";
import SectionLabel from "../../../ui/SectionLabel";


export default function CenterZone() {
  return (
    <section className="border-y border-border/60 bg-secondary/35 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-20">

        {/* Visual */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[1.75rem] border border-primary/20 bg-background p-[12%] shadow-[0_25px_70px_-45px_var(--primary)]">

            {/* Outer geometry */}
            <div className="absolute inset-[10%] rounded-full border border-primary/10" />
            <div className="absolute inset-[20%] rounded-full border border-primary/10" />

            {/* Direction axes */}
            <div className="absolute left-1/2 top-[8%] h-[84%] w-px bg-primary/10" />
            <div className="absolute left-[8%] top-1/2 h-px w-[84%] bg-primary/10" />

            {/* Diagonal geometry */}
            <div className="absolute left-1/2 top-1/2 h-[84%] w-px origin-center rotate-45 bg-primary/6" />
            <div className="absolute left-1/2 top-1/2 h-[84%] w-px origin-center -rotate-45 bg-primary/6" />

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-primary bg-background text-center shadow-lg shadow-primary/10">
              <Crosshair className="h-5 w-5 text-primary" />

              <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-foreground">
                Center
              </span>

              <span className="mt-1 text-[9px] italic text-muted-foreground">
                Brahmasthan
              </span>
            </div>

            {/* Direction labels */}
            <span className="absolute left-1/2 top-[3%] -translate-x-1/2 text-[10px] font-semibold text-primary/60">
              N
            </span>

            <span className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[10px] font-semibold text-primary/60">
              E
            </span>

            <span className="absolute bottom-[3%] left-1/2 -translate-x-1/2 text-[10px] font-semibold text-primary/60">
              S
            </span>

            <span className="absolute left-[5%] top-1/2 -translate-y-1/2 text-[10px] font-semibold text-primary/60">
              W
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-6">
          <SectionLabel number="03">
            The central zone
          </SectionLabel>

          <h2 className="mt-4 max-w-xl text-3xl font-medium leading-[1.1] text-foreground sm:text-4xl">
            Keep the center in context
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            The central area of a Vastu layout is traditionally referred to as
            the Brahmasthan. In this simplified map, it acts as the central
            reference around which the eight directions are arranged.
          </p>

          {/* Note */}
          <div className="mt-7 border-l-2 border-primary/30 pl-5">
            <p className="font-medium text-foreground">
              The map is a framework, not a diagnosis.
            </p>

            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Real properties can have irregular shapes, extensions and
              complex layouts. Those details can affect how traditional Vastu
              principles are interpreted.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}