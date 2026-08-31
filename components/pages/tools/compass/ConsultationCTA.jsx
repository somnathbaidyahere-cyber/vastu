import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      
      {/* Section background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/backgrounds/scriptures.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-95"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-secondary/10 backdrop-blur-[1px]" />

      <div className="mx-auto max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-primary/20 bg-background/80 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.35)] backdrop-blur-md">

          {/* Subtle colour atmosphere */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          </div>

          {/* Architectural grid */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, currentColor 1px, transparent 1px),
                  linear-gradient(to bottom, currentColor 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          {/* Decorative compass */}
          <div className="pointer-events-none absolute -right-24 top-1/2 hidden aspect-square w-[58%] -translate-y-1/2 lg:block">

            {/* Outer rings */}
            <div className="absolute inset-[8%] rounded-full border border-primary/20" />
            <div className="absolute inset-[18%] rounded-full border border-primary/15" />
            <div className="absolute inset-[31%] rounded-full border border-primary/20" />

            {/* Cross axes */}
            <div className="absolute left-1/2 top-[4%] h-[92%] w-px bg-primary/15" />
            <div className="absolute left-[4%] top-1/2 h-px w-[92%] bg-primary/15" />

            {/* Diagonal axes */}
            <div className="absolute left-1/2 top-1/2 h-[88%] w-px origin-center rotate-45 bg-primary/10" />
            <div className="absolute left-1/2 top-1/2 h-[88%] w-px origin-center -rotate-45 bg-primary/10" />

            {/* Direction labels */}
            <span className="absolute left-1/2 top-[1%] -translate-x-1/2 text-xs font-semibold tracking-widest text-primary/60">
              N
            </span>

            <span className="absolute right-[8%] top-[14%] text-xs font-semibold tracking-widest text-primary/50">
              NE
            </span>

            <span className="absolute right-[1%] top-1/2 -translate-y-1/2 text-xs font-semibold tracking-widest text-primary/60">
              E
            </span>

            <span className="absolute bottom-[14%] right-[8%] text-xs font-semibold tracking-widest text-primary/50">
              SE
            </span>

            <span className="absolute bottom-[1%] left-1/2 -translate-x-1/2 text-xs font-semibold tracking-widest text-primary/60">
              S
            </span>

            <span className="absolute bottom-[14%] left-[8%] text-xs font-semibold tracking-widest text-primary/50">
              SW
            </span>

            <span className="absolute left-[1%] top-1/2 -translate-y-1/2 text-xs font-semibold tracking-widest text-primary/60">
              W
            </span>

            <span className="absolute left-[8%] top-[14%] text-xs font-semibold tracking-widest text-primary/50">
              NW
            </span>

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/25 bg-background/40 backdrop-blur-sm">
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border border-primary/25">
                <Home className="h-5 w-5 text-primary/70" />

                {/* <span className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-primary/60">
                  Your Home
                </span> */}
              </div>
            </div>

            {/* Compass icon */}
            {/* <Compass className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-primary/70" /> */}
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-16 lg:max-w-[62%] lg:px-16 lg:py-20">

            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary/40" />
              Found your directions?
            </span>

            <h2 className="cta-heading mt-6 max-w-2xl text-foreground">
              Now understand what they mean for your home.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A compass can show you where each direction lies. A
              property-specific Vastu review looks at how those directions,
              your entrance, rooms and overall layout come together.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">

              <Link
                href="/consultation"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Get My Home Assessed

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <span className="text-xs text-muted-foreground">
                Bring your floor plan
              </span>

            </div>
          </div>

          {/* Bottom technical label */}
          <div className="absolute bottom-5 right-7 hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary/40 lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            Direction → Layout → Guidance
          </div>

        </div>
      </div>
    </section>
  );
}