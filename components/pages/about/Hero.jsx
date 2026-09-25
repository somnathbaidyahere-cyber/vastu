import Link from "next/link";
import Image from "next/image";
import { ChevronRight,Info,ArrowRight } from "lucide-react";
export default function Hero() {
  return (
    <header className="relative isolate px-4 pb-20 pt-7 sm:px-6 lg:px-8 lg:pb-28 min-h-170">
      <div className="absolute inset-0 bg-linear-to-r -z-5 from-foreground/90 via-foreground/55 to-foreground/10" />

      <nav aria-label="Breadcrumb" className="px-4 pb-10 sm:px-6 lg:px-8">
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link
              href="/"
              className="text-primary-foreground/80 hover:text-accent-muted transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <ChevronRight
              className="h-3 w-3 text-primary-foreground hover:text-accent-muted"
              aria-hidden="true"
            />
          </li>
          <li
            aria-current="page"
            className="font-medium text-primary-foreground hover:text-accent-muted"
          >
            About
          </li>
        </ol>
      </nav>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about/old-building-varanda.webp"
          alt="Old indian building varanda"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="mx-auto max-w-7xl mt-5">
        {/* Editorial Subtitle Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-border-muted bg-card/60 px-4 py-1.5 text-[10px] font-medium uppercase tracking-widest text-surface-muted mt-6">
          <Info className="h-3.5 w-3.5" />
          About Us
        </span>

        {/* Serif Headline */}
        <h1 className="hero-heading text-surface">
          Understanding the <span className="text-gradient-brand">space</span>{" "}
          around us.
        </h1>

        <p className="mt-6 hero-description text-surface max-w-2xl">
          We look at homes and workplaces as living systems — where direction,
          light and movement meet the people who use them every day.
        </p>

        {/* Quick Contact Bar */}
        <div className="mt-35 flex flex-wrap items-center gap-6">
          <Link
            href="/learn"
            className="group inline-flex items-center gap-2 rounded-full bg-primary hero-btn font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Explore Vastu{" "}
            <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-1" />
          </Link>
          {/* <Link
            href="/contact"
            className="text-sm font-medium text-primary-foreground underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-surface hover:decoration-primary  "
          >
            Discuss your space
          </Link> */}
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card hero-btn font-medium text-surface-muted lg:text-surface/60 transition-colors hover:bg-secondary hover:text-foreground"
          >
            Discuss your space
          </Link>
        </div>
      </div>
    </header>
  );
}