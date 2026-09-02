// components/mandala/mandala-cta.jsx
import Link from "next/link";
import Image from "next/image";
import { Home, MoveUpRight } from "lucide-react";

export default function MandalaCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

      {/* Background texture */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/backgrounds/vastu-purush.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </div>

      {/* Soft overlay */}
      {/* <div className="absolute inset-0 -z-10 bg-secondary/75 backdrop-blur-[1px]" /> */}

      <div className="mx-auto max-w-6xl">

        {/* CTA panel */}
        <div className="relative isolate overflow-hidden rounded-4xl border border-primary/20 bg-background/15 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.35)] backdrop-blur-md">

          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-lg" />
            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-lg" />
          </div>

       {/* Sacred Vastu Mandala Compass Decoration */}


          {/* Content */}
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-16 lg:max-w-[64%] lg:px-16 lg:py-20">

            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted">
              Ready for your property?
            </span>

            <h2 className="cta-heading mt-6 max-w-2xl text-primary-foreground">
              See your home with a deeper understanding.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-accent-muted sm:text-lg">
         Carry this spatial perspective into the plan you have already explored.
            </p>

              <Link
            href="/tools/vastu-map"
            className="group mt-9 inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow transition-colors duration-100 hover:bg-primary/90 hover:shadow-divine-glow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Explore My Home Map
            <MoveUpRight className="h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>


          </div>

        </div>
      </div>
    </section>
  );
}

// NAMED EXPORT
