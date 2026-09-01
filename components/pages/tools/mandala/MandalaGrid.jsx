// components/mandala/mandala-grid.jsx

import { CircleDot } from "lucide-react";
import { zones } from "./mandala-data";

export function MandalaGrid({
  activeZone,
  onZoneSelect,
  interactive = false,
  showQuality = false,
  showElement = false,
  highlightedElement,
}) {
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-0 rotate-45 border border-primary/20" />

      <div className="absolute inset-[5%] rotate-45 border border-accent/20" />

      <div className="relative grid h-full w-full grid-cols-3 overflow-hidden border-2 border-primary/30 bg-background divine-shadow">
        {zones.map((zone) => {
          const isActive = activeZone === zone.id;
          const isRelated = zone.element === highlightedElement;

          const className = `
            group flex min-w-0 items-center justify-center
            border border-primary/15 p-2 text-center
            transition-all duration-500
            ${zone.position}
            ${
              isActive
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : isRelated
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/15"
                  : "bg-card/75 text-foreground hover:bg-secondary"
            }
          `;

          const content = (
            <span className="flex min-w-0 flex-col items-center">
              <span className="font-heading text-xl sm:text-3xl">
                {zone.id === "CENTER" ? (
                  <CircleDot className="h-7 w-7" />
                ) : (
                  zone.id
                )}
              </span>

              {showQuality && (
                <span className="mt-1 hidden text-[10px] uppercase tracking-widest sm:block">
                  {zone.quality}
                </span>
              )}

              {showElement && (
                <span className="mt-2 text-[10px] uppercase tracking-widest">
                  {zone.element}
                </span>
              )}
            </span>
          );

          if (interactive) {
            return (
              <button
                key={zone.id}
                type="button"
                onMouseEnter={() => onZoneSelect?.(zone.id)}
                onFocus={() => onZoneSelect?.(zone.id)}
                onClick={() => onZoneSelect?.(zone.id)}
                aria-pressed={isActive}
                aria-label={`Explore ${zone.direction}`}
                className={className}
              >
                {content}
              </button>
            );
          }

          return (
            <div key={zone.id} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// NAMED EXPORT
// import { MandalaGrid } from "@/components/mandala/mandala-grid";