// components/mandala/mandala-introduction.jsx

import { ArrowRight } from "lucide-react";

export default function MandalaIntro() {
  const framework = ["Direction", "Element", "Zone", "Space"];

  return (
    <section
      id="mandala-introduction"
      className="scroll-mt-24 bg-primary-foreground px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              01 · The framework
            </span>

            <h2 className="section-heading">
              Space understood as relationship
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <p className="section-description">
              The Vastu Purusha Mandala is a traditional diagram for reading
              an oriented site as an interconnected whole. It brings
              direction, natural qualities, spatial zones, and the lived use
              of space into one ordered framework.
            </p>

            <div className="mt-10 grid border-y border-border sm:grid-cols-4">
              {framework.map((item, index) => (
                <div
                  key={item}
                  className="relative border-b border-border px-5 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <span className="text-[10px] font-semibold text-primary/45">
                    0{index + 1}
                  </span>

                  <p className="mt-2 font-heading text-xl text-foreground">
                    {item}
                  </p>

                  {index < 3 && (
                    <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 bg-background text-primary sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// NAMED EXPORT