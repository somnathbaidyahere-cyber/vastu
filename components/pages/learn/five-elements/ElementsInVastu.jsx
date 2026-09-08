import {
  Mountain,
  Droplets,
  Flame,
  Wind,
  Orbit,
} from "lucide-react";

const zones = [
  { label: "Air", sub: "Northwest", icon: Wind },
  { label: "Water", sub: "North", icon: Droplets },
  { label: "Water", sub: "Northeast", icon: Droplets },
  { label: "Air", sub: "West", icon: Wind },
  { label: "Space", sub: "Centre", icon: Orbit },
  { label: "Fire", sub: "East", icon: Flame },
  { label: "Earth", sub: "Southwest", icon: Mountain },
  { label: "Earth", sub: "South", icon: Mountain },
  { label: "Fire", sub: "Southeast", icon: Flame },
];

export default function ElementsInVastu() {
  return (
    <section
      id="in-vastu"
      className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Elements in Vastu
          </span>

          <h2 className="mt-3 text-3xl font-medium sm:text-4xl">
            Where each element belongs in a plan
          </h2>

          <p className="mt-4 text-muted-foreground">
            Laid over the eight directions, the five elements resolve into a
            simple traditional map.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60">
          {zones.map((zone, index) => {
            const Icon = zone.icon;

            return (
              <div
                key={`${zone.sub}-${index}`}
                className="flex aspect-square flex-col items-center justify-center gap-2 bg-card p-4 text-center"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{zone.label}</span>
                <span className="text-xs text-muted-foreground">
                  {zone.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}