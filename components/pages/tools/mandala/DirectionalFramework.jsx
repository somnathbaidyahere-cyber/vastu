"use client";

import { useMandala } from "./MandalaContext";
import { zones } from "../../../../data/mandalaData";

export default function DirectionalFramework() {
   const { setSelectedZone } = useMandala();
  // const handleZoneClick = () => {
  //   document
  //     .getElementById("interactive-mandala")
  //     ?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  // };

  return (
    <section className="px-4 bg-primary-foreground py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            03 · Directional framework
          </span>

          <h2 className="section-heading">
            Eight characters around one center
          </h2>

          <p className="section-description">
            The directions no longer act as compass points alone. In the
            Mandala, they become distinct spatial characters—flowing, radiant,
            active, settled—held in balance by the center.
          </p>

          <p className="mt-6 border-l border-accent pl-5 text-sm leading-relaxed text-foreground/75">
            Return to the interactive Mandala above to compare each field. One
            diagram replaces eight disconnected rules.
          </p>
        </div>

        <div className="relative lg:col-span-7">
          <div className="grid aspect-square max-w-2xl grid-cols-3 border border-primary/25 bg-card shadow-divine">
            {zones.map((zone) => (
              <button
                key={zone.id}
                type="button"
                  onClick={() => {
                    setSelectedZone(zone.id);
                    document.getElementById("interactive-mandala")?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                className={`flex flex-col items-center justify-center border border-primary/15 p-3 text-center transition-colors ${zone.position} ${
                  zone.id === "CENTER"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                <span className="font-heading text-lg sm:text-2xl">
                  {zone.id === "CENTER" ? "Brahmasthan" : zone.quality}
                </span>

                <span
                  className={`mt-1 text-[10px] uppercase tracking-widest sm:text-xs ${
                    zone.id === "CENTER"
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {zone.id}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// NAMED EXPORT