import { ArrowDown } from "lucide-react";

function MandalaIntro() {
  return (
    <section className="relative overflow-hidden bg-[#F5F1E8] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-square">

              {/* Outer geometry */}
              <div className="absolute inset-[4%] rotate-45 border border-[#9A7D45]/20" />

              {/* Inner geometry */}
              <div className="absolute inset-[17%] border border-[#171820]/10" />

              {/* Grid */}
              <div className="absolute inset-[17%]">
                <div className="absolute left-1/3 top-0 h-full w-px bg-[#171820]/10" />
                <div className="absolute left-2/3 top-0 h-full w-px bg-[#171820]/10" />

                <div className="absolute left-0 top-1/3 h-px w-full bg-[#171820]/10" />
                <div className="absolute left-0 top-2/3 h-px w-full bg-[#171820]/10" />
              </div>

              {/* Cardinal axis */}
              <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-[#9A7D45]/15" />
              <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-[#9A7D45]/15" />

              {/* Centre */}
              <div className="absolute left-1/2 top-1/2 flex h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#9A7D45]/30 bg-[#F5F1E8]">
                <div className="h-2 w-2 rounded-full bg-[#9A7D45]/60" />
              </div>

              {/* Direction labels */}
              <span className="absolute left-1/2 top-0 -translate-x-1/2 text-[10px] font-medium tracking-[0.25em] text-[#75613C]/60">
                N
              </span>

              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-medium tracking-[0.25em] text-[#75613C]/60">
                S
              </span>

              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-medium tracking-[0.25em] text-[#75613C]/60">
                W
              </span>

              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-medium tracking-[0.25em] text-[#75613C]/60">
                E
              </span>

              {/* Decorative dots */}
              <span className="absolute left-[14%] top-[14%] h-1.5 w-1.5 rounded-full bg-[#9A7D45]/30" />
              <span className="absolute right-[14%] top-[14%] h-1.5 w-1.5 rounded-full bg-[#9A7D45]/30" />
              <span className="absolute bottom-[14%] left-[14%] h-1.5 w-1.5 rounded-full bg-[#9A7D45]/30" />
              <span className="absolute bottom-[14%] right-[14%] h-1.5 w-1.5 rounded-full bg-[#9A7D45]/30" />

              {/* Soft glow */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B99A5B]/10 blur-3xl" />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-xl">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A7D45]">
              The Mandala
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#171820] sm:text-5xl lg:text-[3.5rem]">
              A spatial language,
              <br />
              <span className="font-serif italic text-[#75613C]">
                not simply a diagram.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-[#5C5A54] sm:text-lg sm:leading-8">
              <p>
                The Vastu Purusha Mandala is a traditional geometric
                framework for understanding a space through its divisions,
                directions, and elemental relationships.
              </p>

              <p>
                Rather than viewing a home as a collection of rooms, the
                Mandala offers a way of seeing the dwelling as an ordered
                spatial field.
              </p>
            </div>

            {/* Concept line */}
            <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-[#171820]">
              <span>Direction</span>
              <span className="text-[#9A7D45]/50">→</span>
              <span>Element</span>
              <span className="text-[#9A7D45]/50">→</span>
              <span>Zone</span>
              <span className="text-[#9A7D45]/50">→</span>
              <span>Space</span>
            </div>

            {/* Scroll cue */}
            <a
              href="#interactive-mandala"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#75613C]"
            >
              Explore the framework

              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MandalaIntro;

