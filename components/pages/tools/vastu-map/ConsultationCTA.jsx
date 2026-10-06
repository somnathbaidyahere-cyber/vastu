import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";

export default function ConsultationCTA() {
  return (
   <section className="relative isolate overflow-hidden border-t border-border/60 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-20">

  {/* Background texture */}
  <div className="absolute inset-0 -z-20">
    <Image
      src="/backgrounds/floorPlan.webp"
      alt=""
      fill
      sizes="100vw"
      className="object-cover object-center opacity-80"
    />
  </div>

  <div className="mx-auto max-w-5xl">

    {/* CTA panel */}
    <div className="relative isolate overflow-hidden rounded-3xl border border-primary/20 bg-background/15 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.35)] backdrop-blur-md sm:rounded-4xl">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-lg sm:h-72 sm:w-72" />
        <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent/10 blur-lg sm:h-80 sm:w-80" />
      </div>

      {/* Architectural grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Compass decoration — desktop only */}
      <div className="pointer-events-none absolute -right-24 top-1/2 hidden aspect-square w-[52%] -translate-y-1/2 lg:block">

        {/* Rings */}
        <div className="absolute inset-[8%] rounded-full border border-primary/15" />
        <div className="absolute inset-[20%] rounded-full border border-primary/15" />
        <div className="absolute inset-[33%] rounded-full border border-primary/20" />

        {/* Axes */}
        <div className="absolute left-1/2 top-[5%] h-[90%] w-px bg-primary/10" />
        <div className="absolute left-[5%] top-1/2 h-px w-[90%] bg-primary/10" />

        {/* Center */}
        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/25 bg-background/30 backdrop-blur-sm">
          <div className="flex h-18 w-18 flex-col items-center justify-center rounded-full border border-primary/20">
            <Home className="h-5 w-5 text-primary" />

            <span className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-surface">
              Your Home
            </span>
          </div>
        </div>

        {/* Directions */}
        <span className="absolute left-1/2 top-0 -translate-x-1/2 text-xs font-semibold text-surface-accent">
          N
        </span>

        <span className="absolute right-[7%] top-[16%] text-xs font-semibold text-surface-accent">
          NE
        </span>

        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-semibold text-surface-accent">
          E
        </span>

        <span className="absolute bottom-[16%] right-[7%] text-xs font-semibold text-surface-accent">
          SE
        </span>

        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-semibold text-surface-accent">
          S
        </span>

        <span className="absolute bottom-[16%] left-[7%] text-xs font-semibold text-primary">
          SW
        </span>

        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary">
          W
        </span>

        <span className="absolute left-[7%] top-[16%] text-xs font-semibold text-primary">
          NW
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 py-9 sm:px-8 sm:py-10 lg:max-w-[64%] lg:px-14 lg:py-16">

        <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-muted sm:text-xs sm:tracking-[0.2em]">
          Ready for your property?
        </span>

        <h2 className="cta-heading mt-1.5 max-w-xl text-primary-foreground">
          Your home is more than a grid.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-accent-muted sm:mt-5 sm:text-base">
          Use the map to understand the framework. For guidance specific to
          your entrance, rooms and complete layout, get your property reviewed
          in context.
        </p>

        <Link
          href="/consultation"
          className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 sm:mt-7 sm:px-6 sm:py-3"
        >
          Get My Home Assessed

          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Technical label */}
      <div className="absolute bottom-4 right-6 hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-foreground lg:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-surface-muted" />
        Direction → Layout → Guidance
      </div>

    </div>
  </div>
</section>
  );
}