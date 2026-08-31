'use client'
import {useState} from 'react'
import { directions } from "@/data/vastuCompassData";
import SectionLabel from '@/components/ui/SectionLabel'
import CompassDiagram from '@/components/ui/CompassDiagram'

function DirectionExplorer() {
    const [selectedId, setSelectedId] = useState("N");
    const selected =
      directions.find((direction) => direction.id === selectedId) ||
      directions[0];
  return (
     <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel number="03">Explore the compass</SectionLabel>
              <h2 className="section-heading">
                The eight Vastu directions
              </h2>
            </div>
            <p className="max-w-xl text-muted-foreground lg:col-span-5">
              Select a direction to explore its traditional association and
              broad planning guidance. These are educational principles, not a
              diagnosis of your home.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <CompassDiagram
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            </div>
            <div className="lg:col-span-5" aria-live="polite">
              <div className="border-l-2 border-primary pl-6 sm:pl-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-6xl text-primary/25">
                    {selected.id}
                  </span>
                  <span className="text-sm italic text-primary">
                    {selected.sanskrit}
                  </span>
                </div>
                <h3 className="mt-3 text-3xl font-medium text-foreground">
                  {selected.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-accent">
                  {selected.theme}
                </p>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {selected.association}
                </p>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    General guidance
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground/80">
                    {selected.guidance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default DirectionExplorer