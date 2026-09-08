import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function LearningNavigation() {
  return (
    <section className="border-t border-border/60 bg-secondary/30 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2">
        <Link
          href="/learn/fundamentals"
          className="group flex flex-col justify-center gap-2 bg-card p-8"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            <ArrowLeft className="mr-1 inline h-3.5 w-3.5" />
            Previous
          </span>

          <span className="text-lg font-medium">
            Vastu Fundamentals
          </span>
        </Link>

        <Link
          href="/learn/orientation"
          className="group flex flex-col justify-end gap-2 bg-card p-8 text-right sm:items-end"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Next
            <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
          </span>

          <span className="text-lg font-medium">
            Orientation & Direction
          </span>
        </Link>
      </div>
    </section>
  );
}