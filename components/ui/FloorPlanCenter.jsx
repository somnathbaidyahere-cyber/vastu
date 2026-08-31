import { Crosshair } from "lucide-react";

export default function FloorPlanCenter() {
  return (
    <figure>
      <div className="relative mx-auto aspect-[6/5] max-w-xl border-2 border-primary/35 bg-card p-[8%] divine-shadow">
        <div className="absolute left-[8%] top-[8%] h-[34%] w-[38%] border border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
          Living
        </div>
        <div className="absolute right-[8%] top-[8%] h-[34%] w-[38%] border border-border bg-background p-3 text-xs text-muted-foreground">
          Bedroom
        </div>
        <div className="absolute bottom-[8%] left-[8%] h-[34%] w-[30%] border border-border bg-background p-3 text-xs text-muted-foreground">
          Kitchen
        </div>
        <div className="absolute bottom-[8%] right-[8%] h-[34%] w-[46%] border border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
          Dining
        </div>
        <div className="absolute left-[8%] top-[8%] h-px w-[112%] origin-left rotate-[39deg] bg-accent/65" />
        <div className="absolute right-[8%] top-[8%] h-px w-[112%] origin-right -rotate-[39deg] bg-accent/65" />
        <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-primary bg-background text-center shadow-lg shadow-primary/15">
          <Crosshair className="h-5 w-5 text-primary" />
          <span className="mt-1 text-[10px] font-semibold text-foreground">
            CENTER
          </span>
        </div>
      </div>
      <figcaption className="mt-5 text-center text-xs uppercase tracking-widest text-muted-foreground">
        Opposite corners meet near the geometric center
      </figcaption>
    </figure>
  );
}