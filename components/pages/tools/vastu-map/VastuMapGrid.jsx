const zones = [
  ["NW", "N", "NE"],
  ["W", "CENTER", "E"],
  ["SW", "S", "SE"],
];

export default function VastuMapGrid({
  selectedId,
  onSelect,
  interactive = false,
  compact = false,
}) {
  return (
    <div
      className={`relative mx-auto aspect-square w-full ${
        compact ? "max-w-sm" : "max-w-xl"
      }`}
    >
      {/* Ambient glow */}
      <div className="absolute -inset-[5%] rounded-[2rem] bg-[radial-gradient(circle_at_center,oklch(0.644_0.111_55/0.08),transparent_65%)]" />

      {/* Map */}
      <div className="relative grid h-full grid-cols-3 overflow-hidden rounded-[1.5rem] border border-primary/25 bg-card shadow-[0_25px_70px_-40px_var(--primary)]">
        {zones.flat().map((id) => {
          const center = id === "CENTER";
          const selected = id === selectedId;

          const className = `
            relative flex flex-col items-center justify-center
            border border-border/70 p-3 text-center transition-all
            ${center ? "bg-primary text-primary-foreground" : "bg-background/85"}
            ${
              selected && !center
                ? "z-10 bg-secondary shadow-inner ring-2 ring-inset ring-primary/40"
                : ""
            }
            ${interactive ? "cursor-pointer hover:bg-secondary/70" : ""}
          `;

          const content = (
            <>
              <span
                className={`font-heading text-2xl sm:text-3xl ${
                  center
                    ? "text-primary-foreground"
                    : "text-primary"
                }`}
              >
                {center ? "✦" : id}
              </span>

              <span
                className={`mt-1 text-[9px] uppercase tracking-widest sm:text-[10px] ${
                  center
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {center ? "Brahmasthan" : "Zone"}
              </span>
            </>
          );

          if (interactive) {
            return (
              <button
                key={id}
                type="button"
                onClick={() => !center && onSelect?.(id)}
                disabled={center}
                aria-label={
                  center
                    ? "Home center"
                    : `Explore ${id} zone`
                }
                aria-pressed={!center && selected}
                className={className}
              >
                {content}
              </button>
            );
          }

          return (
            <div key={id} className={className}>
              {content}
            </div>
          );
        })}
      </div>

      {/* North indicator */}
      <span className="absolute left-1/2 top-[-9%] -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
        North ↑
      </span>
    </div>
  );
}