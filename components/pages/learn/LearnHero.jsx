import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";

const libraryStats = [
  ["04", "Core chapters"],
  ["16", "Directional zones"],
  ["81", "Mandala padas"],
  ["05", "Elements"],
];

export default function LearnHero() {
  return (
    <section className="relative overflow-hidden bg-ivory-pattern px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            <Sun className="h-3.5 w-3.5" />
            The Learning Path
          </span>

          <h1 className="hero-heading">
            Learn Vastu the way it was{" "}
            <span className="text-gradient-brand">meant to be taught</span>
          </h1>

          <p className="hero-description">
            Four connected chapters — principles, elements, directions, and
            rooms. Read them in order for a complete foundation, or jump to the
            question in front of you today.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/learn/fundamentals"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Begin with fundamentals
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Open the toolkit
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-divine">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              In this library
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-6">
              {libraryStats.map(([number, label]) => (
                <div key={label}>
                  <dt className="text-3xl font-medium text-foreground">
                    {number}
                  </dt>

                  <dd className="mt-1 text-sm text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
