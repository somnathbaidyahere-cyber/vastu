"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  CircleDot,
  Compass,
  Droplets,
  Flame,
  Mountain,
  Wind,
} from "lucide-react";

/* -------------------------------------------------------------------------
 * Shared helpers
 * ---------------------------------------------------------------------- */

/** Fires `active = true` once the element scrolls into view, then stays true. */
function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, active];
}

import Image from "next/image";

/**
 * Renders a real photo via next/image when `src` is provided.
 * Falls back to the editorial placeholder otherwise, so you can
 * migrate section by section instead of all at once.
 */
function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  ratio = "aspect-[4/3]",
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden border border-border/60 ${ratio} ${className}`}
      >
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-border/60 bg-secondary/40 ${ratio} ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.12), transparent 55%), radial-gradient(circle at 75% 80%, hsl(var(--primary) / 0.10), transparent 50%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-6 border border-primary/15"
      />
      {label && (
        <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Section data
 * ---------------------------------------------------------------------- */

const reframedWords = [
  "SPACE",
  "ORIENTATION",
  "ELEMENTS",
  "LIGHT",
  "MOVEMENT",
  "RELATIONSHIP",
];

const fiveElements = [
  { name: "Earth", icon: Mountain, quality: "Stability" },
  { name: "Water", icon: Droplets, quality: "Flow" },
  { name: "Fire", icon: Flame, quality: "Transformation" },
  { name: "Air", icon: Wind, quality: "Movement" },
  { name: "Space", icon: CircleDot, quality: "Possibility" },
];

const approachStages = [
  {
    number: "01",
    name: "Understand",
    copy: "We start with how you actually live — the light you rely on, the rooms you gather in, the questions you're carrying about your space.",
  },
  {
    number: "02",
    name: "Interpret",
    copy: "Vastu principles are read against your specific plot, orientation and constraints, not applied as a fixed template.",
  },
  {
    number: "03",
    name: "Apply",
    copy: "Recommendations are practical and proportionate — small adjustments where they matter, and clarity on what can be left alone.",
  },
];

const standAgainst = [
  {
    statement: "Fear-based advice",
    stance: "We prefer understanding.",
  },
  {
    statement: "Absolute promises",
    stance: "We prefer thoughtful interpretation.",
  },
  {
    statement: "Rigid formulas",
    stance: "We consider context.",
  },
];

const spacesWeExplore = [
  "Home",
  "Work",
  "Entrance",
  "Courtyard",
  "Personal space",
];

const exploreLinks = [
  { label: "Five Elements", href: "/learn/elements" },
  { label: "Directions", href: "/learn/directions" },
  { label: "Spaces", href: "/learn/spaces" },
];

/* -------------------------------------------------------------------------
 * Page
 * ---------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav aria-label="Breadcrumb" className="px-4 pt-7 sm:px-6 lg:px-8">
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight
              className="h-3.5 w-3.5 opacity-50"
              aria-hidden="true"
            />
          </li>
          <li aria-current="page" className="font-medium text-foreground">
            About
          </li>
        </ol>
      </nav>

      <Hero />
      <OurBeginning />
      <VastuReframed />
      <FiveElementsSpectrum />
      <OurApproach />
      <ConversionOne />
      <AncientContemporary />
      <Philosophy />
      <WhatWeStandAgainst />
      <SpacesWeExplore />
      <ContinueExploring />
      <FinalConversion />
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 01 — Hero
 * ---------------------------------------------------------------------- */

function Hero() {
  return (
    <header className="px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About us
          </p>
          <h1 className="hero-heading">Understanding the space around us.</h1>
          <p className="hero-description">
            We look at homes and workplaces as living systems — where direction,
            light and movement meet the people who use them every day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/learn"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore Vastu{" "}
              <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Discuss your space
            </Link>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <ImagePlaceholder
            src="/about/old-building-varanda.webp"
            alt="Old indian building varanda"
            label="Architectural photograph"
            ratio="aspect-[4/3]"
            className="rounded-2xl divine-shadow"
          />
          <div
            aria-hidden="true"
            className="absolute right-8 top-8 h-10 w-10 rounded-full border border-primary/30"
          >
            <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-primary/40" />
            <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-primary/40" />
          </div>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------
 * 02 — Our Beginning
 * ---------------------------------------------------------------------- */

function OurBeginning() {
  return (
    <section className="border-y border-border/60 bg-secondary/25 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-badge">
          Why we exist
        </p>
        <h2 className="section-heading">
          We believe a space is more than walls, rooms and directions.
        </h2>
        <p className="section-description">
          It is where life unfolds.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We started by asking a simple question: why does one room feel settled
          while another, built the same way, never quite feels right? The answer
          was rarely a single wall or a single direction — it was the
          relationship between all of them. That question is still what shapes
          how we work today.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl">
        <ImagePlaceholder
          src="/section-images/dark-courtyard.webp"
          alt="dark Indian house courtyard"
          label="Threshold / courtyard"
          ratio="aspect-[16/8]"
          className="relative z-0 rounded-xl"
        />

        <div
          className="
      absolute
      left-4
      bottom-0
      z-20
      max-w-xs
      translate-y-1/2
      border
      border-border/60
      bg-surface
      px-5
      py-4
      shadow-sm
      sm:left-8
      lg:left-12
    "
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            The threshold between inside and outside — often the first place a
            space starts to make sense.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 03 — Vastu, Reframed
 * ---------------------------------------------------------------------- */

function VastuReframed() {
  const [ref, active] = useInView(0.4);

  return (
    <section ref={ref} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-badge">
          Vastu, reframed
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:gap-4">
          {reframedWords.map((word, index) => (
            <span
              key={word}
              className={`text-2xl font-medium tracking-tight text-foreground transition-all duration-700 ease-out sm:text-3xl lg:text-4xl ${
                active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: active ? `${index * 110}ms` : "0ms" }}
            >
              {word}
              {index < reframedWords.length - 1 && (
                <span className="mt-3 block text-primary/40" aria-hidden="true">
                  ↓
                </span>
              )}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-xl text-lg leading-relaxed text-muted-foreground">
          We explore Vastu as a system of relationships rather than a collection
          of isolated rules.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 04 — The Five Elements
 * ---------------------------------------------------------------------- */

function FiveElementsSpectrum() {
  const [active, setActive] = useState(0);
  const current = fiveElements[active];
  const Icon = current.icon;

  return (
    <section className="border-y border-border/60 bg-secondary/25 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-badge">
            The five elements
          </p>
          <h2 className="section-heading">
            Everything begins with the elements.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div
            className="grid grid-cols-5 border-y border-border/60 lg:col-span-8"
            role="tablist"
            aria-label="Five elements"
          >
            {fiveElements.map((element, index) => {
              const ElIcon = element.icon;
              const isActive = index === active;
              return (
                <button
                  key={element.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className={`flex flex-col items-center gap-3 border-r border-border/60 py-8 text-center transition-colors last:border-r-0 sm:py-12 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-card"
                  }`}
                >
                  <ElIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-widest sm:text-sm">
                    {element.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-4" aria-live="polite">
            <div className="flex items-baseline gap-4 border-b border-border/60 pb-5">
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="text-2xl font-medium text-foreground">
                {current.quality}
              </h3>
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {current.name} shapes how a space holds{" "}
              {current.quality.toLowerCase()} — one part of a balance that only
              makes sense alongside the other four.
            </p>
          </div>
        </div>

        <Link
          href="/learn/elements"
          className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
        >
          Explore the five elements <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 05 — Our Approach
 * ---------------------------------------------------------------------- */

function OurApproach() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-badge">
            Our approach
          </p>
          <h2 className="section-heading">
            Understand, interpret, apply.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-0">
          {approachStages.map((stage, index) => (
            <div
              key={stage.number}
              className={`relative border-t border-border/60 pt-6 lg:pt-8 ${
                index > 0 ? "lg:border-l lg:border-t-0 lg:pl-10" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-primary">
                  {stage.number}
                </span>
                <span
                  className="h-px flex-1 bg-border/60 lg:hidden"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 text-xl font-medium text-foreground">
                {stage.name}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {stage.copy}
              </p>
              {index < approachStages.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="mt-6 hidden h-4 w-4 text-primary/40 lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 06 — Conversion section
 * ---------------------------------------------------------------------- */

function ConversionOne() {
  return (
    <section className="relative overflow-hidden border-y border-border/60">
      <ImagePlaceholder
        label="Editorial photograph"
        ratio="aspect-[16/10] sm:aspect-[21/9]"
        className="border-0"
      />
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/85 via-foreground/40 to-transparent px-4 pb-10 pt-24 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl text-primary-foreground">
          <h2 className="section-heading text-surface-muted">
            Have a space in mind?
          </h2>
          <p className="section-description text-primary-foreground/80">
            Whether you&apos;re planning, building, renovating or simply trying
            to understand your space better, we&apos;d be happy to hear from
            you.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground underline decoration-primary-foreground/40 underline-offset-4 transition-colors hover:decoration-primary-foreground"
          >
            Discuss your space <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 07 — Ancient × Contemporary
 * ---------------------------------------------------------------------- */

function AncientContemporary() {
  const [split, setSplit] = useState(50);

  const then = [
    "Traditional courtyard",
    "Natural materials",
    "Open-to-sky spaces",
    "Sunlight",
    "Orientation",
  ];
  const now = [
    "Apartments",
    "Workspaces",
    "Urban homes",
    "Modern architecture",
    "Changing lifestyles",
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Then and now
          </p>
          <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
            The spaces have changed. The questions remain.
          </h2>
        </div>

        <div className="relative mt-12 aspect-video overflow-hidden rounded-xl border border-border/60">
          <div className="absolute inset-0">
            <ImagePlaceholder
              label="Traditional courtyard"
              ratio="h-full"
              className="h-full rounded-none border-0"
            />
          </div>
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
          >
            <ImagePlaceholder
              label="Contemporary interior"
              ratio="h-full"
              className="h-full rounded-none border-0 bg-primary/10"
            />
          </div>
          <div
            className="absolute inset-y-0 w-px bg-primary-foreground"
            style={{ left: `${split}%` }}
            aria-hidden="true"
          />
          <input
            type="range"
            min={0}
            max={100}
            value={split}
            onChange={(event) => setSplit(Number(event.target.value))}
            aria-label="Compare traditional and contemporary spaces"
            className="absolute inset-x-0 bottom-4 mx-auto w-2/3 accent-primary"
          />
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Then
            </p>
            <ul className="mt-4 space-y-3 border-t border-border/60 pt-4">
              {then.map((item) => (
                <li key={item} className="text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              Now
            </p>
            <ul className="mt-4 space-y-3 border-t border-border/60 pt-4">
              {now.map((item) => (
                <li key={item} className="text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 08 — Our Philosophy
 * ---------------------------------------------------------------------- */

function Philosophy() {
  return (
    <section className="border-y border-border/60 bg-secondary/25 px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Our philosophy
        </p>
        <p className="mt-8 text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
          Vastu should create awareness, not anxiety.
        </p>
        <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
          We believe Vastu is best approached with curiosity rather than fear.
          It should encourage us to observe our spaces more carefully and make
          intentional choices — not turn everyday living into a list of things
          to worry about.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 09 — What We Stand Against
 * ---------------------------------------------------------------------- */

function WhatWeStandAgainst() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          What we stand against
        </p>
        <h2 className="mt-4 text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          No fear. No shortcuts. No one-size-fits-all answers.
        </h2>

        <dl className="mt-14 divide-y divide-border/60 border-t border-border/60">
          {standAgainst.map((item) => (
            <div
              key={item.statement}
              className="grid gap-2 py-6 sm:grid-cols-2 sm:gap-6"
            >
              <dt className="text-lg text-muted-foreground line-through decoration-1">
                {item.statement}
              </dt>
              <dd className="text-lg font-medium text-foreground">
                {item.stance}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 10 — Spaces We Explore
 * ---------------------------------------------------------------------- */

function SpacesWeExplore() {
  return (
    <section className="border-y border-border/60 bg-secondary/25 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Spaces we explore
          </p>
          <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
            Different spaces ask different questions.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {spacesWeExplore.map((space) => (
            <div key={space} className="relative">
              <ImagePlaceholder ratio="aspect-square" className="rounded-md" />
              <span className="mt-3 block text-sm font-medium text-foreground">
                {space}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/rooms"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
        >
          Explore all spaces <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 11 — Continue Exploring
 * ---------------------------------------------------------------------- */

function ContinueExploring() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Continue exploring
        </p>
        <ul className="mt-8 divide-y divide-border/60 border-t border-border/60">
          {exploreLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center justify-between py-8 text-3xl font-medium text-foreground transition-colors hover:text-primary sm:text-5xl"
              >
                {link.label}
                <ArrowRight className="h-6 w-6 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 12 — Final Conversion
 * ---------------------------------------------------------------------- */

function FinalConversion() {
  return (
    <section className="relative overflow-hidden">
      <ImagePlaceholder
        label="Full-bleed architectural photograph"
        ratio="aspect-[4/5] sm:aspect-[16/9]"
        className="border-0"
      />
      <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <p className="max-w-2xl text-3xl font-medium leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          Your space is unique. Your questions should be too.
        </p>
        <p className="mt-6 max-w-md text-primary-foreground/80">
          Tell us about your space and where you&apos;d like to begin.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 font-medium text-foreground transition-colors hover:bg-brand-cream"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/learn"
            className="text-sm font-medium text-primary-foreground underline decoration-primary-foreground/40 underline-offset-4 transition-colors hover:decoration-primary-foreground"
          >
            Explore Vastu
          </Link>
        </div>
      </div>
    </section>
  );
}
