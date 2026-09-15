import Link from "next/link";
import { ArrowRight, Compass, Home, Leaf } from "lucide-react";

export default function LearnNavigation() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
          Continue exploring
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-medium sm:text-4xl">
          See how orientation and elemental qualities become everyday space.
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden border border-primary-foreground/20 bg-primary-foreground/20 md:grid-cols-3">
          <Link
            href="/learn/spaces#direction-space"
            className="group bg-primary p-6 transition-colors hover:bg-primary-foreground/10"
          >
            <Compass className="h-5 w-5" />

            <h3 className="mt-7 text-lg font-medium">Directions</h3>

            <p className="mt-2 text-sm text-primary-foreground/70">
              Understand spatial orientation
            </p>
          </Link>

          <Link
            href="/learn/fundamentals#core-concepts"
            className="group bg-primary p-6 transition-colors hover:bg-primary-foreground/10"
          >
            <Leaf className="h-5 w-5" />

            <h3 className="mt-7 text-lg font-medium">Five Elements</h3>

            <p className="mt-2 text-sm text-primary-foreground/70">
              Understand the qualities of space
            </p>
          </Link>

          <a
            href="#room-explorer"
            className="group bg-primary-foreground p-6 text-primary"
          >
            <Home className="h-5 w-5" />

            <h3 className="mt-7 text-lg font-medium">Rooms</h3>

            <p className="mt-2 text-sm text-primary/70">
              Apply these ideas to everyday spaces
            </p>
          </a>
        </div>

        <Link
          href="/learn"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 font-medium text-primary transition-colors hover:bg-brand-cream"
        >
          Continue exploring
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}