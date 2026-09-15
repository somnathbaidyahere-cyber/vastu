"use client";

import { useState } from "react";
import { ArrowRight, MoveRight } from "lucide-react";

// import { Button } from "@/components/ui/button";

const spatialSequences = [
  {
    id: "daily",
    label: "Daily movement",
    rooms: ["Entrance", "Living", "Dining", "Kitchen"],
    note: "A legible shared sequence makes arrival, gathering and nourishment feel connected.",
  },
  {
    id: "privacy",
    label: "Degrees of privacy",
    rooms: ["Public", "Semi-private", "Private"],
    note: "The home grows quieter by degrees, rather than changing abruptly at a single door.",
  },
];

export default function RoomRelationship() {
  const [activeSequence, setActiveSequence] = useState(spatialSequences[0]);

  return (
    <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-badge">
            Rooms in relation
          </p>

          <h2 className="section-heading">
            Rooms don’t exist alone.
          </h2>

          <p className="section-description">
            Choose a way of reading the plan. The sequence changes, but the
            transitions between spaces remain the key.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div
            className="flex gap-2 lg:col-span-3 lg:flex-col"
            role="group"
            aria-label="Choose a spatial relationship"
          >
            {spatialSequences.map((sequence) => (
              <button
                key={sequence.id}
                type="button"
                variant="ghost"
                aria-pressed={activeSequence.id === sequence.id}
                onClick={() => setActiveSequence(sequence)}
                className={`h-auto flex-1 justify-start whitespace-normal rounded-sm border px-5 py-4 text-left ${
                  activeSequence.id === sequence.id
                    ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    : "border-border/60 bg-card text-foreground hover:bg-secondary"
                }`}
              >
                {sequence.label}
              </button>
            ))}
          </div>

          <div
            className="min-h-80 border border-border/60 bg-card p-6 sm:p-10 lg:col-span-9"
            aria-live="polite"
          >
            <div className="flex min-h-44 flex-wrap items-center justify-center gap-3 sm:flex-nowrap sm:gap-5">
              {activeSequence.rooms.map((room, index) => (
                <div
                  key={room}
                  className="flex items-center gap-3 sm:gap-5"
                >
                  <div className="flex h-24 min-w-24 items-center justify-center border border-primary/35 bg-secondary/40 px-4 text-center text-sm font-medium text-foreground sm:h-32 sm:min-w-32">
                    {room}
                  </div>

                  {index < activeSequence.rooms.length - 1 && (
                    <MoveRight
                      className="h-5 w-5 animate-pulse text-primary/55 motion-reduce:animate-none"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>

            <p className="mx-auto mt-7 max-w-2xl border-t border-border/60 pt-6 text-center text-sm leading-relaxed text-muted-foreground">
              {activeSequence.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}