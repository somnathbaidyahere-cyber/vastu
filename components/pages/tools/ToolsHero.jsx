import Link from "next/link";
import { Compass } from "lucide-react";

export default function ToolsHero() {
  return (
          <section className=" bg-ivory-pattern pb-14 pt-16 lg:pb-16 lg:pt-24">

         
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[10px] md:text-xs font-medium uppercase tracking-widest text-accent-hover">
            <Compass className="h-3.5 w-3.5" />
            Vastu Toolkit
          </span>
          <h1 className="mt-6 text-4xl font-medium leading-[1.15] text-foreground sm:text-5xl">
            Tools that translate{" "}
            <span className="text-gradient-brand">shastra</span> into action
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Each tool follows classical Vastu Shastra rules — directions, zones,
            and the five elements — presented simply enough to use on your own
            floor plan today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center  gap-4">
            <Link
              href="/tools/compass"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-xs sm:text-sm md:text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Start with the compass
            </Link>
            <Link
              href="/learn/fundamentals"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-xs sm:text-sm md:text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Learn the basics
            </Link>
          </div>
        </div>
      </section>
  );
}