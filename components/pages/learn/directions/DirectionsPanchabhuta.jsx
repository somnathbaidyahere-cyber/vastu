import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DirectionsPanchabhuta() {
  return (
    <section className="relative isolate border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/section-images/calm-lake.jpg"
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <div className="mx-auto flex max-w-xs flex-col items-center gap-3 text-center">
            <span className="rounded-full border border-border bg-[rgba(0,0,0,0.50)] px-5 py-2 text-sm font-medium text-surface">
              Directions
            </span>

            <div className="animate-bounce [animation-duration:2.5s]">
              <ArrowRight
                className="h-4 w-4 rotate-90 text-surface"
                aria-hidden="true"
              />
            </div>

            <span className="rounded-full border border-border bg-[rgba(0,0,0,0.50)] px-5 py-2 text-sm font-medium text-surface">
              Five Elements
            </span>

            <div className="animate-bounce [animation-duration:2.5s]">
              <ArrowRight
                className="h-4 w-4 rotate-90 text-surface"
                aria-hidden="true"
              />
            </div>

            <span className="rounded-full border border-primary bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">
              Qualities
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="section-badge text-primary">
            How this connects
          </span>

          <h2 className="section-heading">
            Directions &amp; the five elements
          </h2>

          <p className="section-description text-surface-muted">
            Direction provides the spatial framework, while the five elements
            provide another layer for understanding the qualities traditionally
            associated with different zones.
          </p>

          <Link
            href="/learn/five-elements"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-surface hover:underline"
          >
            Explore Panchabhuta
            <ArrowRight className="h-4 w-4 transition-all duration-100 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
