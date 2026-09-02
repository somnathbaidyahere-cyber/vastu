// components/mandala/mandala-overview.jsx

import { zones } from "../../../../data/mandalaData";

export default function MandalaOverview() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          07 · Mandala in one view
        </span>

        <h2 className="section-heading">
          One center. Eight fields. Five elements.
        </h2>

        <div className="relative mx-auto mt-14 aspect-square w-full max-w-3xl p-[6%]">
          <div className="absolute inset-0 rotate-45 border border-primary/20" />

          <div className="relative grid h-full grid-cols-3 border-2 border-primary/30 bg-background divine-shadow">
            {zones.map((zone) => (
              <div
                key={zone.id}
                className={`flex flex-col items-center justify-center border border-primary/15 p-3 text-center ${zone.position} ${
                  zone.id === "CENTER"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card"
                }`}
              >
                <span className="font-heading text-xl sm:text-4xl">
                  {zone.id === "CENTER" ? "Center" : zone.id}
                </span>

                <span
                  className={`mt-2 text-[10px] uppercase tracking-widest sm:text-xs ${
                    zone.id === "CENTER"
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {zone.element}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl font-heading text-xl leading-relaxed text-foreground sm:text-2xl">
          Compass helps me find. Home Map helps me apply. Mandala helps me
          understand.
        </p>
      </div>
    </section>
  );
}

// NAMED EXPORT