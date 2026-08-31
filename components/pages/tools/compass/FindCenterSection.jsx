import React from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import FloorPlanCenter from '@/components/ui/FloorPlanCenter'

function FindCenterSection() {
  return (
      <section
        id="find-center"
        className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <FloorPlanCenter />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel number="01">Begin at the source</SectionLabel>
            <h2 className="mt-4 text-3xl font-medium text-foreground sm:text-4xl">
              Find your home&apos;s center
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A whole-home direction reading begins at the approximate geometric
              center of the complete floor plan—traditionally understood as the
              Brahmasthan.
            </p>
            <ol className="mt-8 space-y-5">
              {[
                "Sketch the outer footprint of the whole home.",
                "Draw diagonal lines between opposite corners.",
                "Mark their meeting point as the practical center.",
              ].map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-foreground/80">{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 border border-primary/20 bg-secondary/45 p-5">
              <p className="font-medium text-foreground">
                Stand close to this point.
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Avoid taking the whole-home reading from an entrance, corner,
                balcony, or a random room simply because it is more convenient.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FindCenterSection