import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FiveElementsHero() {
  return (
    <header className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Fundamentals
          </span>

          <h1 className="mt-5 text-4xl font-medium leading-[1.12] sm:text-5xl lg:text-6xl">
            Five Elements
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Panchabhutas — earth, water, fire, air and space. Vastu reads a
            building through the qualities these five elements represent.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#elements"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground"
            >
              Meet the elements
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#in-vastu"
              className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium"
            >
              See it in a plan
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          {/* Keep your existing elemental SVG here */}
        </div>
      </div>
    </header>
  );
}