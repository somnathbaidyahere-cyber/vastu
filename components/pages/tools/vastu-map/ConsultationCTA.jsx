import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

      {/* Background texture */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/backgrounds/scriptures.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
      </div>

      {/* Soft overlay */}
      <div className="absolute inset-0 -z-10 bg-secondary/75 backdrop-blur-[2px]" />

      <div className="mx-auto max-w-6xl">

        {/* CTA panel */}
        <div className="relative isolate overflow-hidden rounded-4xl border border-primary/20 bg-background/80 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.35)] backdrop-blur-md">

          {/* Ambient glow */}
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

          {/* Compass decoration */}
          <div className="pointer-events-none absolute -right-28 top-1/2 hidden aspect-square w-[55%] -translate-y-1/2 lg:block">

            {/* Rings */}
            <div className="absolute inset-[8%] rounded-full border border-primary/15" />
            <div className="absolute inset-[20%] rounded-full border border-primary/15" />
            <div className="absolute inset-[33%] rounded-full border border-primary/20" />

            {/* Axes */}
            <div className="absolute left-1/2 top-[5%] h-[90%] w-px bg-primary/10" />
            <div className="absolute left-[5%] top-1/2 h-px w-[90%] bg-primary/10" />

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/25 bg-background/30 backdrop-blur-sm">

              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border border-primary/20">
                <Home className="h-5 w-5 text-primary/60" />

                <span className="mt-2 text-[9px] font-semibold uppercase tracking-widest text-primary/60">
                  Your Home
                </span>
              </div>

            </div>

            <Compass className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-primary/60" />

            {/* Directions */}
            <span className="absolute left-1/2 top-0 -translate-x-1/2 text-xs font-semibold text-primary/50">
              N
            </span>

            <span className="absolute right-[7%] top-[16%] text-xs font-semibold text-primary/40">
              NE
            </span>

            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary/50">
              E
            </span>

            <span className="absolute bottom-[16%] right-[7%] text-xs font-semibold text-primary/40">
              SE
            </span>

            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary/50">
              S
            </span>

            <span className="absolute bottom-[16%] left-[7%] text-xs font-semibold text-primary/40">
              SW
            </span>

            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary/50">
              W
            </span>

            <span className="absolute left-[7%] top-[16%] text-xs font-semibold text-primary/40">
              NW
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-16 lg:max-w-[64%] lg:px-16 lg:py-20">

            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Ready for your property?
            </span>

            <h2 className="cta-heading mt-6 max-w-2xl text-foreground">
              Your home is more than a grid.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Use the map to understand the framework. For guidance specific
              to your entrance, rooms and complete layout, get your property
              reviewed in context.
            </p>

            <Link
              href="/consultation"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Get My Home Assessed

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

          {/* Technical label */}
          <div className="absolute bottom-5 right-7 hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary/35 lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            Direction → Layout → Guidance
          </div>

        </div>
      </div>
    </section>
  );
}