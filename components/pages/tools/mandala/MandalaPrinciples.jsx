// components/mandala/mandala-principles.jsx

import { ArrowRight } from "lucide-react";
import { principleCards } from "./mandala-data";

export function MandalaPrinciples() {
  const flow = [
    "Orientation",
    "Mandala",
    "Elements",
    "Spatial zones",
    "Harmony",
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              06 · Mandala principles
            </span>

            <h2 className="mt-5 text-3xl font-medium text-foreground sm:text-5xl">
              From orientation to harmony
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col border-y border-border sm:flex-row">
              {flow.map((item, index) => (
                <div
                  key={item}
                  className="relative flex flex-1 items-center justify-between gap-3 border-b border-border px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>

                  {index < 4 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary/50 sm:absolute sm:-right-2 sm:z-10 sm:bg-background" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {principleCards.map(([heading, copy], index) => (
                <div
                  key={heading}
                  className="border-t-2 border-primary/30 pt-5"
                >
                  <span className="text-xs text-primary/50">
                    0{index + 1}
                  </span>

                  <h3 className="mt-3 text-xl font-medium text-foreground">
                    {heading}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {copy}
                  </p>
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