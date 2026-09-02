// components/mandala/mandala-cta.jsx
import Link from "next/link";
import Image from "next/image";
import { Home, MoveUpRight } from "lucide-react";

export default function MandalaCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

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

      {/* Soft overlay */}
      {/* <div className="absolute inset-0 -z-10 bg-secondary/75 backdrop-blur-[1px]" /> */}

      <div className="mx-auto max-w-6xl">

        {/* CTA panel */}
        <div className="relative isolate overflow-hidden rounded-4xl border border-primary/20 bg-background/15 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.35)] backdrop-blur-md">

          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-lg" />
            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-lg" />
          </div>

       {/* Sacred Vastu Mandala Compass Decoration */}
<div className="pointer-events-none absolute -right-32 top-1/2 hidden aspect-square w-[60%] -translate-y-1/2 lg:block">
  
  {/* Outer Glow Ring */}
  <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl" />

  {/* Outer Mandala Square Frame (Padas Border) */}
  <div className="absolute inset-[6%] rotate-45 border border-primary/20 opacity-40" />
  <div className="absolute inset-[6%] border border-primary/20 opacity-40" />

  {/* Concentric Vastu Zones (Brahma, Daivika, Manusha, Paisacha) */}
  <div className="absolute inset-[2%] rounded-full border border-dashed border-primary/15" />
  <div className="absolute inset-[12%] rounded-full border border-primary/20" />
  <div className="absolute inset-[24%] rounded-full border border-primary/25" />
  <div className="absolute inset-[36%] rounded-full border border-dashed border-primary/20" />

  {/* 8 Sacred Cardinal & Intercardinal Directional Rays */}
  {/* N-S / E-W Main Axes */}
  <div className="absolute left-1/2 top-[2%] h-[96%] w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
  <div className="absolute left-[2%] top-1/2 h-px w-[96%] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
  
  {/* Diagonal Axes (NE-SW / NW-SE) */}
  <div className="absolute left-1/2 top-[2%] h-[96%] w-px rotate-45 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
  <div className="absolute left-1/2 top-[2%] h-[96%] w-px -rotate-45 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

  {/* Brahmasthan (Central Core Sacred Shrine) */}
  <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/40 backdrop-blur-md shadow-divine">
    {/* Inner Sacred Ring */}
    <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-center">
      <Home className="h-5 w-5 text-primary" />
      <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
        Brahmasthan
      </span>
      <span className="text-[8px] font-medium text-muted-foreground">
        Center
      </span>
    </div>
  </div>

  {/* Ashtadikpalaka (8 Directional Nodes) */}
  {/* North */}
  <div className="absolute left-1/2 top-[3%] -translate-x-1/2 flex flex-col items-center">
    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
    <span className="mt-1 text-[11px] font-bold tracking-widest text-primary">N</span>
  </div>

  {/* North-East (Ishan - Sacred Water Corner) */}
  <div className="absolute right-[14%] top-[14%] flex flex-col items-center">
    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
    <span className="mt-1 text-[10px] font-semibold text-primary/80">NE</span>
  </div>

  {/* East */}
  <div className="absolute right-[3%] top-1/2 -translate-y-1/2 flex items-center gap-1">
    <span className="text-[11px] font-bold tracking-widest text-primary">E</span>
    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
  </div>

  {/* South-East (Agni - Fire Corner) */}
  <div className="absolute bottom-[14%] right-[14%] flex flex-col items-center">
    <span className="text-[10px] font-semibold text-primary/80">SE</span>
    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
  </div>

  {/* South */}
  <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 flex flex-col items-center">
    <span className="text-[11px] font-bold tracking-widest text-primary">S</span>
    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
  </div>

  {/* South-West (Nairitya - Earth Corner) */}
  <div className="absolute bottom-[14%] left-[14%] flex flex-col items-center">
    <span className="text-[10px] font-semibold text-primary/80">SW</span>
    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
  </div>

  {/* West */}
  <div className="absolute left-[3%] top-1/2 -translate-y-1/2 flex items-center gap-1">
    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
    <span className="text-[11px] font-bold tracking-widest text-primary">W</span>
  </div>

  {/* North-West (Vayu - Air Corner) */}
  <div className="absolute left-[14%] top-[14%] flex flex-col items-center">
    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
    <span className="mt-1 text-[10px] font-semibold text-primary/80">NW</span>
  </div>

</div>

          {/* Content */}
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-16 lg:max-w-[64%] lg:px-16 lg:py-20">

            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted">
              Ready for your property?
            </span>

            <h2 className="cta-heading mt-6 max-w-2xl text-primary-foreground">
              See your home with a deeper understanding.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-accent-muted sm:text-lg">
         Carry this spatial perspective into the plan you have already explored.
            </p>

              <Link
            href="/tools/vastu-map"
            className="group mt-9 inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow transition-colors duration-100 hover:bg-primary/90 hover:shadow-divine-glow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Explore My Home Map
            <MoveUpRight className="h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>


          </div>

        </div>
      </div>
    </section>
  );
}

// NAMED EXPORT
