import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ChevronRight } from "lucide-react";

export default function SpacesHero() {
  return (
    <section className="px-4 pb-20 pt-7 sm:px-6 lg:px-8 lg:pb-28">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto mb-12 max-w-7xl"
      >
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>

          <ChevronRight className="h-3.5 w-3.5 opacity-50" />

          <li>
            <Link href="/learn" className="hover:text-primary">
              Learn
            </Link>
          </li>

          <ChevronRight className="h-3.5 w-3.5 opacity-50" />

          <li
            aria-current="page"
            className="font-medium text-foreground"
          >
            Spaces
          </li>
        </ol>
      </nav>

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            CHAPTER FOUR
          </p>

          <h1 className="hero-heading">
           <span className="text-gradient-brand">Spaces{" "}</span> That Shape Experience
          </h1>

          <p className="hero-description">
            A space is more than its walls. Direction brings light,
            openings invite movement, and proportion shapes how we
            gather, focus or rest.
          </p>

          <a
            href="#principles"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Explore spatial character
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-border/60">
            <Image
              src="/section-images/varanda-plants.webp"
              alt="Contemporary Indian courtyard architecture"
              width={1536}
              height={1024}
              priority
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}