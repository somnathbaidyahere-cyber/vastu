import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

function MandalaHero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#F5F1E8] px-5 py-16 sm:px-8 lg:px-12">
      
      {/* Atmospheric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#B99A5B]/10 blur-3xl" />

        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#65745A]/10 blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#171820 1px, transparent 1px), linear-gradient(90deg, #171820 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl flex-col justify-center">
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl pt-10 lg:pt-0">
          
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9A7D45]">
            Vastu Purusha Mandala
          </p>

          <h1 className="mt-6 max-w-3xl text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#171820]">
            The geometry
            <br />
            <span className="font-serif italic text-[#75613C]">
              behind Vastu.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#55544F] sm:text-lg sm:leading-8">
            Explore the traditional spatial framework that brings direction,
            elements, and the spaces of a home into one harmonious whole.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#mandala"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#171820] px-6 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore the Mandala

              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>

            <Link
              href="/vastu-home-map"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#171820]/15 bg-white/40 px-6 text-sm font-medium text-[#171820] backdrop-blur-sm transition-colors duration-300 hover:bg-white/70"
            >
              Home Map

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Mandala visual */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-12%] right-[-10%] hidden h-[760px] w-[760px] items-center justify-center lg:flex"
        >
          <MandalaGeometry />
        </div>

        {/* Mobile Mandala */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative mt-16 flex h-[360px] w-full items-center justify-center lg:hidden"
        >
          <MandalaGeometry />
        </div>

        {/* Bottom cue */}
        <div className="absolute bottom-7 left-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#77736A] sm:left-8 lg:left-12">
          <span className="h-px w-8 bg-[#9A7D45]/50" />
          Explore the spatial framework
        </div>
      </div>
    </section>
  );
}


/* -------------------------------------------------
   Mandala Geometry
-------------------------------------------------- */

function MandalaGeometry() {
  return (
    <div className="relative aspect-square w-[88%] max-w-[680px] rotate-[1deg]">
      
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-[#9A7D45]/20" />

      {/* Second ring */}
      <div className="absolute inset-[5%] rounded-full border border-[#9A7D45]/15" />

      {/* Main square */}
      <div className="absolute inset-[13%] rotate-45 border border-[#9A7D45]/30" />

      {/* Inner square */}
      <div className="absolute inset-[23%] rotate-45 border border-[#9A7D45]/25" />

      {/* Grid */}
      <div className="absolute inset-[18%]">
        <div className="absolute left-1/3 top-0 h-full w-px bg-[#171820]/10" />
        <div className="absolute left-2/3 top-0 h-full w-px bg-[#171820]/10" />

        <div className="absolute left-0 top-1/3 h-px w-full bg-[#171820]/10" />
        <div className="absolute left-0 top-2/3 h-px w-full bg-[#171820]/10" />
      </div>

      {/* Cardinal lines */}
      <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-[#9A7D45]/20" />
      <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-[#9A7D45]/20" />

      {/* Centre */}
      <div className="absolute left-1/2 top-1/2 flex h-[16%] w-[16%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#9A7D45]/35 bg-[#F5F1E8]/70 backdrop-blur-sm">
        <div className="h-2.5 w-2.5 rounded-full bg-[#9A7D45]/70" />
      </div>

      {/* Direction markers */}
      <span className="absolute left-1/2 top-[3%] -translate-x-1/2 text-[10px] font-medium tracking-[0.25em] text-[#75613C]/60">
        N
      </span>

      <span className="absolute bottom-[3%] left-1/2 -translate-x-1/2 text-[10px] font-medium tracking-[0.25em] text-[#75613C]/60">
        S
      </span>

      <span className="absolute left-[3%] top-1/2 -translate-y-1/2 text-[10px] font-medium tracking-[0.25em] text-[#75613C]/60">
        W
      </span>

      <span className="absolute right-[3%] top-1/2 -translate-y-1/2 text-[10px] font-medium tracking-[0.25em] text-[#75613C]/60">
        E
      </span>

      {/* Decorative points */}
      <span className="absolute left-[15%] top-[15%] h-1.5 w-1.5 rounded-full bg-[#9A7D45]/30" />
      <span className="absolute right-[15%] top-[15%] h-1.5 w-1.5 rounded-full bg-[#9A7D45]/30" />
      <span className="absolute bottom-[15%] left-[15%] h-1.5 w-1.5 rounded-full bg-[#9A7D45]/30" />
      <span className="absolute bottom-[15%] right-[15%] h-1.5 w-1.5 rounded-full bg-[#9A7D45]/30" />
    </div>
  );
}

export default MandalaHero;