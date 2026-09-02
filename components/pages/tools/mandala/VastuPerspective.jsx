// components/mandala/vastu-perspective.jsx

import { Sparkles } from "lucide-react";

export default function VastuPerspective() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Sparkles className="h-7 w-7 text-primary" />

          <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-primary">
            08 · Vastu perspective
          </span>
        </div>

        <div className="lg:col-span-8">
          <h2 className="max-w-3xl text-4xl font-medium text-foreground sm:text-6xl">
            A traditional framework, not a rulebook.
          </h2>

          <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              The Mandala offers a language for noticing order, emphasis, and
              relationship. It is most useful when it sharpens
              observation—not when it replaces judgment.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Real homes hold constraints, histories, and people. Thoughtful
              interpretation seeks balance within that reality rather than
              creating fear around imperfect geometry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// NAMED EXPORT