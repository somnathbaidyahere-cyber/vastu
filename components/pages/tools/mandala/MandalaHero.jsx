import { ArrowDown, CircleDot, Flower } from "lucide-react";

export default function MandalaHero() {
  return (
<section className="relative overflow-hidden border-b border-border/60 bg-ivory-pattern px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
  <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12 lg:gap-10">

    {/* Content */}
    <div className="lg:col-span-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-widest text-primary sm:px-4 sm:text-xs">
        <Flower className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
        href="#interactive-mandala"
        className="group mt-5 inline-flex items-center gap-2 rounded-full bg-primary hero-btn font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
      >
        Explore the Mandala
        <ArrowDown className="h-4 w-4 transition-all duration-100 group-hover:translate-y-0.5" />
      </a>
    </div>

    {/* Mandala visual */}
    <div
      className="relative flex items-center justify-center lg:col-span-6"
      aria-hidden="true"
    >
      <div className="relative w-full max-w-68 sm:max-w-84 md:max-w-[24rem] lg:max-w-116 xl:max-w-lg">

        {/* Decorative geometry */}
        <div className="absolute left-1/2 top-1/2 aspect-square w-[112%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-primary/20">
          <div className="absolute inset-[8%] border border-primary/20" />
          <div className="absolute inset-[19%] border border-accent/25" />
          <div className="absolute inset-[31%] border border-primary/25" />
          <div className="absolute inset-[42%] bg-primary/10" />

          <div className="absolute left-1/2 top-0 h-full w-px bg-primary/15" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-primary/15" />
        </div>

        {/* Mandala */}
        <div className="relative grid aspect-square w-full grid-cols-3 border border-primary/25 bg-background/70 shadow-xl shadow-primary/10 backdrop-blur-sm">
          {[
            "NW",
            "N",
            "NE",
            "W",
            "CENTER",
            "E",
            "SW",
            "S",
            "SE",
          ].map((zone) => (
            <div
              key={zone}
              className={`flex items-center justify-center border border-primary/15 text-[9px] font-semibold text-primary/60 sm:text-[10px] ${
                zone === "CENTER"
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
            >
              {zone === "CENTER" ? (
                <CircleDot className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              ) : (
                zone
              )}
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="mt-3 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-widest">
          A whole revealed through its centre
        </p>
      </div>
    </div>

  </div>
</section>
  );
}

// NAMED EXPORT
