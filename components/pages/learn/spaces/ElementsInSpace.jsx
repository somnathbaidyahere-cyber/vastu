"use client";

import { useState } from "react";
import { spaceElements } from "@/data/spacesData";

export default function ElementsInSpace() {
  const [selected, setSelected] = useState(spaceElements[0]);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-badge">
            Five elements × space
          </p>

          <h2 className="section-heading">
            Material qualities, translated into space
          </h2>

          <p className="section-description">
            Explore the spatial qualities associated with each
            element and how they can influence the experience of a
            place.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="grid gap-2 sm:grid-cols-5 lg:col-span-7">
            {spaceElements.map((element) => {
              const Icon = element.icon;
              const active = selected.id === element.id;

              return (
                <button
                  key={element.id}
                  type="button"
                  onClick={() => setSelected(element)}
                  aria-pressed={active}
                  className={`flex min-h-32 flex-col items-center justify-center rounded-lg border px-3 py-5 transition ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/60 bg-card hover:bg-secondary"
                  }`}
                >
                  <Icon className="h-5 w-5" />

                  <span className="mt-3 font-medium">
                    {element.name}
                  </span>

                  <span className="text-xs italic opacity-70">
                    {element.sanskrit}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-lg border border-border/60 bg-secondary/35 p-8 lg:col-span-5 shadow-divine">
            <p className="text-xs uppercase tracking-widest text-primary">
              {selected.zone}
            </p>

            <h3 className="mt-2 text-2xl font-medium">
              {selected.character}
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {selected.space}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}