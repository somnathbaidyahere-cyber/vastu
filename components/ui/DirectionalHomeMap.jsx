import { ArrowDown } from "lucide-react";

export default function DirectionalHomeMap() {
  return (
    <figure>
      <div className="mx-auto max-w-2xl">
        <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
          <ArrowDown className="h-4 w-4 rotate-180" /> North reference
        </div>
        <div className="grid aspect-square grid-cols-3 overflow-hidden border-2 border-primary/30 bg-background divine-shadow">
          {[
            ["NW", "Guest / utility"],
            ["N", "Living / study"],
            ["NE", "Pooja / meditation"],
            ["W", "Dining / study"],
            ["CENTER", "Brahmasthan"],
            ["E", "Entrance / living"],
            ["SW", "Primary bedroom"],
            ["S", "Storage / work"],
            ["SE", "Kitchen"],
          ].map(([zone, room]) => (
            <div
              key={zone}
              className={`flex flex-col items-center justify-center border border-border p-3 text-center ${zone === "CENTER" ? "bg-primary text-primary-foreground" : "bg-card"}`}
            >
              <span className="font-heading text-xl sm:text-2xl">{zone}</span>
              <span
                className={`mt-1 text-[10px] sm:text-xs ${zone === "CENTER" ? "text-primary-foreground/75" : "text-muted-foreground"}`}
              >
                {room}
              </span>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-5 text-center text-xs uppercase tracking-widest text-muted-foreground">
        Simplified eight-zone educational overlay
      </figcaption>
    </figure>
  );
}