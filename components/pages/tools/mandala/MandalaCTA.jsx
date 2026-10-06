// components/mandala/mandala-cta.jsx
import Link from "next/link";
import Image from "next/image";
import { Home, MoveUpRight } from "lucide-react";

export default function MandalaCTA() {
  return (
   <section className="relative isolate overflow-hidden border-t border-border/60 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
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

  <div className="mx-auto max-w-5xl">

    {/* CTA panel */}
    <div className="relative flex overflow-hidden rounded-[1.5rem] border border-primary/20 bg-background/15 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.35)] backdrop-blur-md sm:rounded-[1.75rem] lg:rounded-4xl">

      {/* Content */}
      <div className="relative z-10 w-full px-5 py-8 sm:px-8 sm:py-10 lg:max-w-[64%] lg:px-16 lg:py-20">

        <span className="inline-flex items-center text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-muted sm:text-[10px] sm:tracking-[0.2em]">
          Ready for your property?
        </span>

        <h2 className="cta-heading mt-1 text-primary-foreground">
          See your home with a deeper understanding.
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-surface sm:mt-4 sm:text-base">
          Carry this spatial perspective into the plan you have already
          explored.
        </p>

        <Link
          href="/tools/vastu-map"
          className="group mt-6 inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-5 text-xs font-medium text-primary-foreground shadow transition-colors duration-100 hover:bg-primary/90 hover:shadow-divine-glow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:mt-7 sm:h-10 sm:px-6 sm:text-sm"
        >
          Explore My Home Map
          <MoveUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
        </Link>
      </div>

      {/* Vastu Purush image */}
      <div className="pointer-events-none hidden lg:block">
        <Image
          src="/backgrounds/vastuPurush.webp"
          alt=""
          width={700}
          height={700}
          className="h-auto w-full object-contain"
        />
      </div>

    </div>
  </div>
</section>
  );
}

// NAMED EXPORT
