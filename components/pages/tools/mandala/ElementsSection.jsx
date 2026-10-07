// components/mandala/elements-section.jsx
"use client";
import { useState } from "react";

import { elements, zones } from "../../../../data/mandalaData";

export default function ElementsSection() {
  const [selectedElement, setSelectedElement] = useState("Space");

  const activeElement = elements.find(([name]) => name === selectedElement);

  return (
    <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              04 · Pancha Mahabhuta
            </span>

            <h2 className="section-heading">Five elements, one field</h2>

            <p className="section-description">
              Select an element to see where its quality becomes most legible in
              this simplified Mandala.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {elements.map(([name]) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelectedElement(name)}
                  className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
                    selectedElement === name
                      ? "bg-primary text-primary-foreground shadow hover:bg-primary/90"
                      : "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="mt-8 min-h-32 border-t border-border pt-6">
              <p className="font-heading text-2xl text-foreground">
                {selectedElement}
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
                {activeElement?.[1]}
              </p>

              <p className="section-para">
                {activeElement?.[2]}
              </p>
            </div>
          </div>

          {/* Element visual */}
          <div className="lg:col-span-6 md:mx-auto md:w-[55%] lg:mx-auto lg:w-[80%] ">
            <div className="relative mx-auto aspect-square border border-primary/25 bg-background p-[8%] shadow-divine ">
              <div className="absolute inset-[8%] grid grid-cols-3">
                {zones.map((zone) => {
                  const isRelated = zone.element === selectedElement;

                  return (
                    <div
                      key={zone.id}
                      className={`flex min-w-0 flex-col items-center justify-center border border-primary/15 text-center transition-all duration-500 ${
                        isRelated
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/15"
                          : "bg-card/55 text-muted-foreground opacity-45"
                      }`}
                    >
                      <span className="font-heading text-base sm:text-lg lg:text-xl">
                        {zone.id === "CENTER" ? "◉" : zone.id}
                      </span>

                      <span className="mt-1 hidden text-[8px] uppercase tracking-[0.12em] sm:block sm:text-[9px] lg:text-[10px] lg:tracking-widest">
                        {zone.quality}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// NAMED EXPORT
