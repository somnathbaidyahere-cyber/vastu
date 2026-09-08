import { Mountain, Droplets, Flame, Wind, Orbit } from "lucide-react";

const zones = [
  {
    label: "Air",
    sub: "Northwest",
    icon: Wind,
    image: "/elements/air.jpg",
    alt: "clear sky",
  },
  {
    label: "Water",
    sub: "North",
    icon: Droplets,
    image: "/elements/water.jpg",
    alt: "",
  },
  {
    label: "Water",
    sub: "Northeast",
    icon: Droplets,
    image: "/elements/water.jpg",
    alt: "",
  },
  {
    label: "Air",
    sub: "West",
    icon: Wind,
    image: "/elements/air.jpg",
    alt: "clear sky",
  },
  {
    label: "Space",
    sub: "Centre",
    icon: Orbit,
    image: "/elements/space.jpg",
    alt: "space",
  },
  {
    label: "Fire",
    sub: "East",
    icon: Flame,
    image: "/elements/fire.jpg",
    alt: "burning flame",
  },
  {
    label: "Earth",
    sub: "Southwest",
    icon: Mountain,
    image: "/elements/earth.jpg",
    alt: "tableland view",
  },
  {
    label: "Earth",
    sub: "South",
    icon: Mountain,
    image: "/elements/earth.jpg",
    alt: "tableland view",
  },
  {
    label: "Fire",
    sub: "Southeast",
    icon: Flame,
    image: "/elements/fire.jpg",
    alt: "burning flame",
  },
];

export default function ElementsInVastu() {
  return (
    <section
      id="in-vastu"
      className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="section-badge">
            Elements in Vastu
          </span>

          <h2 className="section-heading">
            Where each element belongs in a plan
          </h2>

          <p className="section-description">
            Laid over the eight directions, the five elements resolve into a
            simple traditional map.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-3 bg-transparent p-1">
          {zones.map((zone, index) => {
            const Icon = zone.icon;

            return (
              <div
                key={`${zone.sub}-${index}`}
                className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/20 p-4 shadow-lg"
              >
                {/* Base Background Image Layer (Fully visible, darkens slightly for text contrast) */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${zone.image || "/your-default-image.jpg"})`,
                  }}
                />

                {/* Subtle Dark Overlay (Improves text contrast, fades out on hover) */}
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />

                {/* Circular Glassmorphic Content Badge (Disappears on hover) */}
                <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-full border border-white/30 bg-white/25 p-3 text-center backdrop-blur-md transition-all duration-350 group-hover:scale-95 group-hover:opacity-0 dark:border-white/15 dark:bg-black/30">
                  <Icon className="h-5 w-5 text-accent-muted drop-shadow-sm" />
                  <span className="text-xs font-semibold tracking-wide text-surface-muted drop-shadow-sm">
                    {zone.label}
                  </span>
                  <span className="text-[10px] text-white">{zone.sub}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
