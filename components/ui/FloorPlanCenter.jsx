import { Crosshair } from "lucide-react";

export default function FloorPlanCenter() {
  return (
  <figure className="mx-auto max-w-xl">
  <div className="relative aspect-[6/5] w-full border-2 border-primary/40 bg-card p-[8%] divine-shadow">
    {/* Rooms Layout */}
    <div className="absolute left-[8%] top-[8%] h-[38%] w-[40%] border border-border bg-secondary/30 p-3 text-xs font-medium text-muted-foreground">
      Living
    </div>
    <div className="absolute right-[8%] top-[8%] h-[38%] w-[40%] border border-border bg-background p-3 text-xs font-medium text-muted-foreground">
      Bedroom
    </div>
    <div className="absolute bottom-[8%] left-[8%] h-[38%] w-[35%] border border-border bg-background p-3 text-xs font-medium text-muted-foreground">
      Kitchen
    </div>
    <div className="absolute bottom-[8%] right-[8%] h-[38%] w-[45%] border border-border bg-secondary/30 p-3 text-xs font-medium text-muted-foreground">
      Dining
    </div>

    {/* SVG Diagonal Overlay (True Corner-to-Corner Precision) */}
    <svg 
      className="pointer-events-none absolute inset-0 h-full w-full stroke-primary/40" 
      style={{ strokeDasharray: '4 4' }}
    >
      <line x1="8%" y1="8%" x2="92%" y2="92%" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <line x1="92%" y1="8%" x2="8%" y2="92%" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>

    {/* Center Focal Point */}
    <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background shadow-md shadow-primary/20 ring-4 ring-background">
        <Crosshair className="h-6 w-6 text-primary" />
      </div>
      <div className="mt-2 flex flex-col items-center gap-0.5 rounded-md border border-border bg-background/95 px-2.5 py-1 backdrop-blur-sm shadow-sm">
        <span className="text-[10px] font-bold tracking-wider text-foreground uppercase">
          Center Point
        </span>
        <span className="font-mono text-[9px] text-muted-foreground">
          50% × 50%
        </span>
      </div>
    </div>
  </div>

  {/* Caption */}
  <figcaption className="mt-4 text-center font-mono text-xs text-muted-foreground">
    <span className="font-semibold text-foreground">Find Center:</span> Intersect diagonal lines from outer boundary corners.
  </figcaption>
</figure>
  );
}