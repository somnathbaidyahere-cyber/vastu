import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section
      aria-labelledby="compass-consultation-heading"
      className="relative isolate overflow-hidden border-t border-border/60 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-20"
    >
      {/* Section background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/backgrounds/scriptures.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-95"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-secondary/10 backdrop-blur-[1px]"
      />

      <div className="mx-auto max-w-5xl">
        {/* CTA card */}
        <div className="relative isolate overflow-hidden rounded-3xl border border-primary/20 bg-background/80 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.35)] backdrop-blur-md sm:rounded-4xl">
          {/* Subtle colour atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />
            <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-80 sm:w-80" />
          </div>

          {/* Architectural grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
          >
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

          {/* Decorative compass — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-1/2 hidden aspect-square w-[54%] -translate-y-1/2 lg:block"
          >
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
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/25 bg-background/40 backdrop-blur-sm">
              <div className="flex h-18 w-18 items-center justify-center rounded-full border border-primary/25">
                <Home className="h-5 w-5 text-primary/70" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 lg:max-w-[62%] lg:px-14 lg:py-14">
            <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.2em]">
              <span
                aria-hidden="true"
                className="hidden h-px w-7 bg-primary/40 sm:block"
              />
              Found your directions?
            </span>

            <h2
              id="compass-consultation-heading"
              className="cta-heading mt-1.5 max-w-xl text-foreground"
            >
              Now understand what they mean for your home.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/80 sm:mt-4 sm:text-base">
              A compass shows direction. A Vastu review shows how those
              directions work together in your home.
            </p>

            <div className="mt-6 flex items-center gap-4 sm:mt-7 sm:gap-5">
              <Link
                href="/consultation"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 sm:px-6 sm:py-3"
              >
                Get My Home Assessed
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Link>

              <span className="hidden text-xs text-muted-foreground sm:block">
                Bring your floor plan
              </span>
            </div>
          </div>

          {/* Bottom technical label */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 right-6 hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary/40 lg:flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            Direction → Layout → Guidance
          </div>
        </div>
      </div>
    </section>
  );
}
