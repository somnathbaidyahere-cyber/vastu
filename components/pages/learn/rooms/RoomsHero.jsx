import Image from "next/image";
import Link from "next/link";
import { ArrowDown,ChevronRight } from "lucide-react";


export default function RoomsHero() {
  return (
    <header className="relative min-h-168 overflow-hidden border-y border-border/60 sm:min-h-184">
  <Image
    src="/rooms/dine-living-area.webp"
    alt="A sequence of warm stone doorways leading through naturally lit rooms"
    width={1536}
    height={1024}
    fetchPriority="high"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-linear-to-r from-foreground/30 via-foreground/50 to-transparent" />

  <div className="relative mx-auto flex min-h-168 max-w-7xl flex-col px-4 sm:min-h-184 sm:px-6 lg:px-8">

    {/* Breadcrumb */}
    <nav
      aria-label="Breadcrumb"
      className="pt-6 text-sm text-primary-foreground/75 sm:pt-8"
    >
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-primary-foreground"
          >
            Home
          </Link>
        </li>

        <li aria-hidden="true">›</li>

        <li>
          <a
            href="/learn"
            className="transition-colors hover:text-primary-foreground"
          >
            Learn
          </a>
        </li>

        <li aria-hidden="true">›</li>

        <li
          aria-current="page"
          className="font-medium text-primary-foreground"
        >
          Rooms
        </li>
      </ol>
    </nav>

    {/* Hero Content */}
    <div className="flex flex-1 items-end pb-16 sm:pb-20">
      <div className="max-w-2xl text-primary-foreground">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">
         CHAPTER FIVE
        </p>

        <h1 className="hero-heading text-surface">
          Every{" "} <span className="text-gradient-brand">Room</span>  has a role.
        </h1>

        <p className="hero-description text-surface-accent">
          Explore how different spaces support rest, nourishment, work,
          connection and renewal.
        </p>

        <a
          href="#room-explorer"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 font-medium text-primary transition-colors duration-100 hover:bg-brand-cream hover:shadow-divine-lg hover:shadow-divine-glow"
        >
          Walk through the home

          <ArrowDown className="h-4 w-4 transition-all duration-100 group-hover:translate-y-0.5" />
        </a>

      </div>
    </div>

  </div>
</header>
  );
}