import React from 'react'
import Link from 'next/link'
import { ArrowRight,Check, Sparkles } from 'lucide-react'

function FreeVsPersonalized() {
  return (
     <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
              Know the difference
            </span>
            <h2 className="section-heading text-surface">
              Free guidance vs personalized Vastu
            </h2>
          </div>
          <div className="mt-12 grid gap-10 border-y border-primary-foreground/20 py-10 md:grid-cols-2 md:gap-0">
            <div className="md:border-r md:border-primary-foreground/20 md:pr-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
                In this guide
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Direction identification",
                  "Eight-direction meanings",
                  "Basic room associations",
                  "General planning principles",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
                With a consultant
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Property-specific analysis",
                  "Entrance and layout assessment",
                  "Room-by-room guidance",
                  "Context-aware remedies",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/consultation"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 font-medium text-primary transition-colors hover:bg-brand-cream divine-shadow"
              >
                Get personalized Vastu guidance{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FreeVsPersonalized