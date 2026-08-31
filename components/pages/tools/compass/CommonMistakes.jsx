import React from 'react'
import {X,TriangleAlert} from "lucide-react"
import { mistakes } from '@/data/vastuCompassData'

function CommonMistakes() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <TriangleAlert className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-3xl font-medium text-foreground">
                Common reading mistakes
              </h2>
              <p className="mt-4 text-muted-foreground">
                A careful starting point matters more than a complicated
                interpretation.
              </p>
            </div>
            <ul className="divide-y divide-border border-y border-border lg:col-span-8">
              {mistakes.map((mistake, index) => (
                <li key={mistake} className="flex items-center gap-5 py-5">
                  <span className="font-heading text-lg text-primary/45">
                    0{index + 1}
                  </span>
                  <X className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-foreground/85">{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  )
}

export default CommonMistakes