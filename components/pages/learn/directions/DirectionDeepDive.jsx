"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { directions, elementIcon } from "@/data/directions";

export default function DirectionDeepDive() {
  const [active, setActive] = useState("NE");

  const activeDirection = directions.find(
    (direction) => direction.code === active
  );

  const ActiveIcon = elementIcon[activeDirection.element];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Deep dive
          </span>

          <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
            One direction at a time
          </h2>

          <p className="mt-4 text-muted-foreground">
            Select a direction to understand what it represents and how it is
            traditionally interpreted.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {directions.map((direction) => (
            <button
              key={direction.code}
              type="button"
              onClick={() => setActive(direction.code)}
              aria-pressed={active === direction.code}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === direction.code
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              {direction.name}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-border/60 bg-card p-8 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {activeDirection.sanskrit}
              </p>

              <h3 className="mt-2 text-2xl font-medium text-foreground sm:text-3xl">
                {activeDirection.name}
              </h3>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                {activeDirection.meaning}
              </p>
            </div>

            <dl className="grid shrink-0 grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  Deity
                </dt>
                <dd className="mt-1 font-medium text-foreground">
                  {activeDirection.deity}
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  Element
                </dt>

                <dd className="mt-1 inline-flex items-center gap-1.5 font-medium text-foreground">
                  <ActiveIcon className="h-3.5 w-3.5 text-primary" />
                  {activeDirection.element}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 grid gap-8 border-t border-border/60 pt-8 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-medium text-foreground">
                Traditional significance
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activeDirection.significance}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground">
                Practical interpretation
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activeDirection.practical}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}