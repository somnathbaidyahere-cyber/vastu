import React from 'react'
import { Home } from 'lucide-react';
import { directions } from "@/data/vastuCompassData";


function CompassDiagram({ selectedId, onSelect, decorative = false }) {
   return (
    <div className="relative mx-auto aspect-square w-full max-w-155">
      <div className="vastu-compass-wheel absolute inset-[7%] rounded-full border border-primary/25 shadow-[0_28px_70px_-35px_var(--primary)]">
        <div className="absolute inset-[10%] rounded-full border border-primary/20" />
        <div className="absolute inset-[23%] rotate-45 border border-primary/20" />
        <div className="absolute inset-[23%] border border-primary/20" />
        <div className="absolute left-1/2 top-[14%] h-[72%] w-px -translate-x-1/2 bg-primary/20" />
        <div className="absolute left-[14%] top-1/2 h-px w-[72%] -translate-y-1/2 bg-primary/20" />
        <div className="absolute left-1/2 top-1/2 flex h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/35 bg-background text-center shadow-lg shadow-primary/10">
          <Home className="h-5 w-5 text-primary" />
          <span className="mt-1 text-xs font-semibold text-foreground">
            Home Center
          </span>
          <span className="text-[10px] italic text-muted-foreground">
            Brahmasthan
          </span>
        </div>
      </div>
      {directions.map((direction) => {
        const isSelected = selectedId === direction.id;
        const classes = `absolute z-10 flex h-12 w-12 items-center justify-center rounded-full border text-xs font-semibold transition-all sm:h-14 sm:w-14 ${direction.position} ${
          isSelected
            ? "scale-110 border-primary bg-accent text-primary-foreground shadow-lg shadow-primary/20"
            : "border-primary/25 bg-background text-primary hover:border-primary hover:bg-secondary"
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
      <span className="absolute -mt-2.5 left-1/2 top-0 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        North
      </span>
    </div>
  );
}

export default CompassDiagram