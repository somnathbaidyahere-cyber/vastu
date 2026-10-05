import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const freeItems = [
  "Direction identification",
  "Eight-direction meanings",
  "Basic room associations",
  "General planning principles",
];

const personalizedItems = [
  "Property-specific analysis",
  "Entrance and layout assessment",
  "Room-by-room guidance",
  "Context-aware remedies",
];

function FreeVsPersonalized() {
  return (
    <section className="border-y border-border/60 bg-secondary/35 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="section-heading">
            The compass gives you the directions.
            <span className="text-primary">
              {" "}
              Your home directions needs custom evolution.
            </span>
          </h2>

          <p className="section-description">
            Use the compass to learn and the directions and explore. Only a
            personalized review will help you understand what they meant for
            your property.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-10 grid overflow-hidden rounded-3xl border border-border bg-background sm:mt-12 sm:rounded-[1.75rem] lg:grid-cols-2">
          {/* Free */}
          <div className="p-5 sm:p-7 lg:p-10 xl:p-12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-[0.18em]">
                  Explore for free
                </p>

                <h3 className="mt-2 text-xl font-medium text-foreground sm:mt-3 sm:text-2xl">
                  Learn the Vastu framework
                </h3>
              </div>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary sm:h-10 sm:w-10">
                <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
            </div>

            <ul className="mt-6 space-y-3 sm:mt-7 sm:space-y-3.5 lg:mt-8 lg:space-y-4">
              {freeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground sm:gap-3 sm:text-sm"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personalized */}
          <div className="relative overflow-hidden border-t border-border bg-primary p-5 text-primary-foreground sm:p-7 lg:border-l lg:border-t-0 lg:p-10 xl:p-12">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary-foreground/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-64 sm:w-64" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/65 sm:text-xs sm:tracking-[0.18em]">
                    Go deeper
                  </p>

                  <h3 className="mt-2 text-xl font-medium sm:mt-3 sm:text-2xl">
                    Understand your property
                  </h3>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 sm:h-10 sm:w-10">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
              </div>

              <ul className="mt-6 space-y-3 sm:mt-7 sm:space-y-3.5 lg:mt-8 lg:space-y-4">
                {personalizedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-primary-foreground/85 sm:gap-3 sm:text-sm"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/consultation"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-xs font-medium text-primary transition-all hover:bg-brand-cream sm:mt-8 sm:px-6 sm:py-3 sm:text-sm"
              >
                Get My Property Reviewed
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          The compass provides general directional knowledge. Property-specific
          interpretation may consider the complete and accurate layout.
        </p>
      </div>
    </section>
  );
}

export default FreeVsPersonalized;
