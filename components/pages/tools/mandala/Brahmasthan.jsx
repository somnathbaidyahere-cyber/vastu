// components/mandala/brahmasthan-section.jsx

import { CircleDot } from "lucide-react";

export default function Brahmasthan() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-24 text-primary-foreground sm:px-6 lg:px-8 lg:py-36">
      <div
        className="absolute left-1/2 top-1/2 aspect-square w-[540px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-primary-foreground/10"
        aria-hidden="true"
      >
        <div className="absolute inset-[16%] border border-primary-foreground/10" />
        <div className="absolute inset-[34%] border border-primary-foreground/15" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <CircleDot className="mx-auto h-9 w-9 text-primary-foreground/70" />

        <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
          05 · Brahmasthan
        </span>

        <h2 className="mt-5 text-4xl font-medium sm:text-6xl">
          The quiet center
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
          Brahmasthan is the Mandala’s central field—the place from which
          every relationship can be understood. Tradition associates it with
          openness, balance, and the clarity of an unburdened center.
        </p>
      </div>
    </section>
  );
}

// NAMED EXPORT