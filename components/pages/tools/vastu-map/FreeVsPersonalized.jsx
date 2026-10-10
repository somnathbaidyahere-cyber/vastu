import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const freeItems = [
  "Understand the eight directional zones",
  "Explore traditional Vastu associations",
  "Learn common room-direction relationships",
  "Apply the framework to your floor plan",
];

const personalizedItems = [
  "Review your actual floor plan",
  "Assess entrance and overall layout",
  "Interpret room placement in context",
  "Receive property-specific guidance",
];

export default function FreeVsPersonalized() {
  return (
    <section className="border-y border-border/60 bg-secondary/35 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="section-heading">
            The map gives you the framework.
            <span className="text-primary"> Your home needs context.</span>
          </h2>

          <p className="section-description">
            Use the map to learn and explore. When you want to understand how
            these principles apply to your actual property, a personalized
            review goes further.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-8 grid overflow-hidden rounded-2xl border border-border bg-background sm:mt-10 sm:rounded-3xl lg:mt-12 lg:grid-cols-2 lg:rounded-[1.75rem]">
          {/* Free */}
          <div className="p-5 sm:p-7 md:p-8 lg:p-12">
            <div className="flex items-center justify-between gap-4">
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
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Personalized */}
          <div className="relative overflow-hidden border-t border-border bg-primary p-5 text-primary-foreground sm:p-7 md:p-8 lg:border-l lg:border-t-0 lg:p-12">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary-foreground/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-64 sm:w-64" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/65 sm:text-xs sm:tracking-[0.18em]">
                    Go deeper
                  </p>

                  <h3 className="mt-2 text-xl font-medium sm:mt-3 sm:text-2xl">
                    Understand your property
                  </h3>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 sm:h-10 sm:w-10">
                  <Sparkles
                    aria-hidden="true"
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  />
                </div>
              </div>

              <ul className="mt-6 space-y-3 sm:mt-7 sm:space-y-3.5 lg:mt-8 lg:space-y-4">
                {personalizedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-primary-foreground/85 sm:gap-3 sm:text-sm"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/consultation"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-xs font-medium text-primary transition-all hover:bg-brand-cream sm:mt-8 sm:px-6 sm:py-3.5 sm:text-sm lg:mt-9"
              >
                Get My Property Reviewed
                <ArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 max-w-3xl text-xs md:text-sm leading-relaxed text-muted-foreground">
          The map provides general educational guidance. Property-specific
          interpretation may consider the complete layout, orientation, entrance
          and other relevant details.
        </p>
      </div>
    </section>
  );
}
