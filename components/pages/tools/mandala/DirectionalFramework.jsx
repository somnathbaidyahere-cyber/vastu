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
  <section className="bg-primary-foreground px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-28">
  <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">

    {/* Content */}
    <div className="min-w-0 lg:col-span-7">
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-widest">
        03 · Directional framework
      </span>

      <h2 className="section-heading">
        Eight characters around one center
      </h2>

      <p className="section-description max-w-2xl">
        The directions no longer act as compass points alone. In the
        Mandala, they become distinct spatial characters—flowing, radiant,
        active, settled—held in balance by the center.
      </p>

      <p className="mt-5 max-w-xl border-l border-accent pl-4 text-xs leading-relaxed text-foreground/75 sm:mt-6 sm:pl-5 sm:text-sm">
        Return to the interactive Mandala above to compare each field. One
        diagram replaces eight disconnected rules.
      </p>
    </div>

    {/* Directional grid */}
    <div className="relative mx-auto w-full min-w-0 lg:col-span-5 lg:mx-0">
      <div className="mx-auto grid aspect-square w-full max-w-[18rem] grid-cols-3 border border-primary/25 bg-card shadow-divine sm:max-w-[21rem] md:max-w-[24rem] lg:max-w-2xl">
        {zones.map((zone) => (
          <button
            key={zone.id}
            type="button"
            onClick={() => {
              setSelectedZone(zone.id);
              document
                .getElementById("interactive-mandala")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
            }}
            className={`flex min-w-0 flex-col items-center justify-center border border-primary/15 p-2 text-center transition-colors sm:p-3 ${
              zone.id === "CENTER"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
          >
            <span
              className={`max-w-full truncate font-heading text-sm sm:text-lg md:text-xl ${
                zone.id === "CENTER"
                  ? "text-sm sm:text-lg md:text-xl"
                  : ""
              }`}
            >
              {zone.id === "CENTER" ? "Brahmasthan" : zone.quality}
            </span>

            <span
              className={`mt-1 text-[8px] uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-widest md:text-xs ${
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