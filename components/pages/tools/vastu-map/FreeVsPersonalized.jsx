import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SectionLabel from "../../../ui/SectionLabel";


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
          {/* <SectionLabel number="08">
            Know the difference
          </SectionLabel> */}

          <h2 className="mt-5 text-3xl font-medium leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            The map gives you the framework.
            <span className="text-primary">
              {" "}Your home needs context.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Use the map to learn and explore. When you want to understand how
            these principles apply to your actual property, a personalized
            review goes further.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-border bg-background lg:grid-cols-2">

          {/* Free */}
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Explore for free
                </p>

                <h3 className="mt-3 text-2xl font-medium text-foreground">
                  Learn the Vastu framework
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary">
                <Check className="h-4 w-4" />
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {freeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Personalized */}
          <div className="relative overflow-hidden border-t border-border bg-primary p-7 text-primary-foreground sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/65">
                    Go deeper
                  </p>

                  <h3 className="mt-3 text-2xl font-medium">
                    Understand your property
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {personalizedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-primary-foreground/85"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/consultation"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-medium text-primary transition-all hover:bg-brand-cream"
              >
                Get My Property Reviewed

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          The map provides general educational guidance. Property-specific
          interpretation may consider the complete layout, orientation,
          entrance and other relevant details.
        </p>
      </div>
    </section>
  );
}