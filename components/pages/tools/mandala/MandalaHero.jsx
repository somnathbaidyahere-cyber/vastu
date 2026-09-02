import { ArrowDown, CircleDot, Grid3X3 } from "lucide-react";

export default function MandalaHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-ivory-pattern px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border  px-4 py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-primary">
            <Grid3X3 className="h-4 w-4" />
            Vastu Purusha Mandala
          </span>

          <h1 className="hero-heading">
            The geometry behind{" "}
            <span className="text-gradient-brand">Vastu</span>
          </h1>

          <p className="hero-description">
            Beyond direction and placement lies a deeper idea: space as a field
            of relationships, ordered around a living center.
          </p>

          <a
            href="#mandala-introduction"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Explore the Mandala
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <div
          className="relative h-105 sm:h-140 lg:col-span-6 lg:h-162.5"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 aspect-square w-152.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-primary/20 sm:w-190 lg:left-[62%] lg:w-220">
            <div className="absolute inset-[8%] border border-primary/20" />
            <div className="absolute inset-[19%] border border-accent/25" />
            <div className="absolute inset-[31%] border border-primary/25" />
            <div className="absolute inset-[42%] bg-primary/10" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-primary/15" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-primary/15" />
          </div>

          <div className="absolute left-1/2 top-1/2 grid aspect-square w-82.5 -translate-x-1/2 -translate-y-1/2 grid-cols-3 border border-primary/25 bg-background/70 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:w-107.5 lg:left-[62%] lg:w-125">
            {["NW", "N", "NE", "W", "CENTER", "E", "SW", "S", "SE"].map(
              (zone) => (
                <div
                  key={zone}
                  className={`flex items-center justify-center border border-primary/15 text-xs font-semibold text-primary/60 ${
                    zone === "CENTER"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  {zone === "CENTER" ? (
                    <CircleDot className="h-7 w-7 text-primary-foreground" />
                  ) : (
                    zone
                  )}
                </div>
              ),
            )}
          </div>

          <p className="absolute bottom-2 right-0 text-xs uppercase tracking-widest text-muted-foreground sm:right-8 lg:right-0">
            A whole revealed through its centre
          </p>
        </div>
      </div>
    </section>
  );
}

// NAMED EXPORT
