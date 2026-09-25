'use client'

import { useState } from "react";
import Link from "next/link";
import { ArrowRight,Mountain,Droplets,Flame,Wind,CircleDot} from "lucide-react";

const fiveElements = [
  { name: "Earth", icon: Mountain, quality: "Stability" },
  { name: "Water", icon: Droplets, quality: "Flow" },
  { name: "Fire", icon: Flame, quality: "Transformation" },
  { name: "Air", icon: Wind, quality: "Movement" },
  { name: "Space", icon: CircleDot, quality: "Possibility" },
];

export default function FiveElementsSpectrum() {
  const [active, setActive] = useState(0);
  const current = fiveElements[active];
  const Icon = current.icon;

  return (
    <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-badge">The five elements</p>
          <h2 className="section-heading">
            Everything begins with the elements.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div
            className="grid grid-cols-5 border-y border-border/60 lg:col-span-8"
            role="tablist"
            aria-label="Five elements"
          >
            {fiveElements.map((element, index) => {
              const ElIcon = element.icon;
              const isActive = index === active;
              return (
                <button
                  key={element.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className={`flex flex-col items-center gap-3 border-r border-border/60 py-8 text-center transition-colors last:border-r-0 sm:py-12 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-card"
                  }`}
                >
                  <ElIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-widest">
                    {element.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-4" aria-live="polite">
            <div className="flex items-baseline gap-4 border-b border-border/60 pb-5">
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-medium text-foreground">
                {current.quality}
              </h3>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {current.name} shapes how a space holds{" "}
              {current.quality.toLowerCase()} — one part of a balance that only
              makes sense alongside the other four.
            </p>
          </div>
        </div>

        <Link
          href="/learn/elements"
          className="group mt-12 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
        >
          Explore the five elements{" "}
          <ArrowRight className="h-4 w-4 transition-all suration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}