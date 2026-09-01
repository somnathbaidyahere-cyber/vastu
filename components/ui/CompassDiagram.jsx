import React from 'react'
import { Home } from 'lucide-react';
import { directions } from "@/data/vastuCompassData";


function CompassDiagram({ selectedId, onSelect, decorative = false }) {
   return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
  {/* Compass Wheel Background Overlay */}
  <div className="vastu-compass-wheel absolute inset-[8%] rounded-full border border-primary/20 bg-background/50 shadow-[0_0_50px_-12px_var(--primary)] backdrop-blur-[2px]">
    <svg 
      className="absolute inset-0 h-full w-full stroke-primary/20 fill-none" 
      viewBox="0 0 100 100"
    >
      {/* Outer & Inner Concentric Rings */}
      <circle cx="50" cy="50" r="48" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="38" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
      <circle cx="50" cy="50" r="26" strokeWidth="0.5" />

      {/* Crosshair Axes (N-S, E-W) */}
      <line x1="50" y1="2" x2="50" y2="98" strokeWidth="0.75" />
      <line x1="2" y1="50" x2="98" y2="50" strokeWidth="0.75" />

      {/* Diagonal Axes (NE-SW, NW-SE) */}
      <line x1="16.16" y1="16.16" x2="83.84" y2="83.84" strokeWidth="0.5" strokeDasharray="1 1" />
      <line x1="83.84" y1="16.16" x2="16.16" y2="83.84" strokeWidth="0.5" strokeDasharray="1 1" />
    </svg>

    {/* Center Element: Brahmasthan */}
    <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/40 bg-background p-2 text-center shadow-lg shadow-primary/10 ring-4 ring-background">
      <Home className="h-5 w-5 text-primary" />
      <span className="mt-1 text-xs font-bold uppercase tracking-wider text-foreground">
        Home Center
      </span>
      <span className="font-mono text-[9px] uppercase text-muted-foreground tracking-widest">
        Brahmasthan
      </span>
    </div>
  </div>

  {/* Direction Nodes */}
  {directions.map((direction) => {
    const isSelected = selectedId === direction.id;
    const classes = `absolute z-20 flex h-12 w-12 items-center justify-center rounded-full border text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-14 sm:w-14 ${
      direction.position
    } ${
      isSelected
        ? "scale-110 border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25 ring-2 ring-background"
        : "border-primary/30 bg-background text-foreground hover:border-primary hover:bg-accent/50"
    }`;

    return decorative ? (
      <span key={direction.id} className={classes}>
        {direction.id}
      </span>
    ) : (
      <button
        key={direction.id}
        type="button"
        className={classes}
        aria-label={`Explore ${direction.name}`}
        aria-pressed={isSelected}
        onClick={() => onSelect(direction.id)}
      >
        {direction.id}
      </button>
    );
  })}

  {/* North Indicator Tag */}
  <div className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-background px-2.5 py-0.5 shadow-sm">
    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
      N (North)
    </span>
  </div>
</div>
  );
}

export default CompassDiagram