'use client'
import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Compass,
  Crosshair,
  HelpCircle,
  Home,
  LocateFixed,
  MoveUpRight,
  Smartphone,
  Sparkles,
  TriangleAlert,
  X,
} from "lucide-react";
import { directions, mistakes, faqs } from "@/data/vastuCompassData";
import CompassHero from "@/components/pages/tools/compass/CompassHero";
import FindCenterSection from "@/components/pages/tools/compass/FindCenterSection";
import CompassInstructions from "@/components/pages/tools/compass/CompassInstructions";
import DirectionExplorer from "@/components/pages/tools/compass/DirectionExplorer";
import HomeMap from "@/components/pages/tools/compass/HomeMap";
import CommonMistakes from "@/components/pages/tools/compass/CommonMistakes";
import FreeVsPersonalized from "@/components/pages/tools/compass/FreeVsPersonalized";

// export const metadata = {
//   title: "Vastu Compass Guide — Find Your Home's Directions | VastuGuru",
//   description:
//     "Learn how to find your home's center, establish North with your smartphone compass, and understand the eight Vastu directions.",
// };

export default function CompassPage() {
  const [selectedId, setSelectedId] = useState("N");
  const selected =
    directions.find((direction) => direction.id === selectedId) ||  
    directions[0];

  return (
    <div className="min-h-screen bg-background">
      {/* <section className="relative overflow-hidden border-b border-border/60 bg-ivory-pattern px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 border-b border-primary/30 pb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Compass className="h-4 w-4" />
              Vastu Direction Guide
            </div>
            <h1 className="mt-7 text-4xl font-medium leading-[1.12] text-foreground sm:text-5xl lg:text-6xl">
              Understand the Directions of Your Space
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Learn a simple, reliable method to locate your home&apos;s center,
              establish North using your smartphone, and read the eight
              traditional Vastu directions.
            </p>
            <div className="mt-5 flex items-start gap-3 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">
              <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              This is an educational guide. It does not access your phone
              sensors or provide a live compass reading.
            </div>
            <a
              href="#find-center"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Start the guide <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <CompassDiagram selectedId="" onSelect={null} decorative />
          </div>
        </div>
      </section> */}
      <CompassHero/>

      {/* <section
        id="find-center"
        className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <FloorPlanCenter />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel number="01">Begin at the source</SectionLabel>
            <h2 className="mt-4 text-3xl font-medium text-foreground sm:text-4xl">
              Find your home&apos;s center
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A whole-home direction reading begins at the approximate geometric
              center of the complete floor plan—traditionally understood as the
              Brahmasthan.
            </p>
            <ol className="mt-8 space-y-5">
              {[
                "Sketch the outer footprint of the whole home.",
                "Draw diagonal lines between opposite corners.",
                "Mark their meeting point as the practical center.",
              ].map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-foreground/80">{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 border border-primary/20 bg-secondary/45 p-5">
              <p className="font-medium text-foreground">
                Stand close to this point.
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Avoid taking the whole-home reading from an entrance, corner,
                balcony, or a random room simply because it is more convenient.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <FindCenterSection/>

      {/* <section className="border-y border-border/60 bg-secondary/35 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel number="02">Orient the plan</SectionLabel>
            <h2 className="mt-4 text-3xl font-medium text-foreground sm:text-4xl">
              How to find the directions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Use the compass app already available on your smartphone. The
              website does not read or display your device heading.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {[
              [
                Crosshair,
                "01",
                "Find center",
                "Move to the marked center of the complete home footprint.",
              ],
              [
                Smartphone,
                "02",
                "Open phone compass",
                "Keep the phone flat and complete calibration if prompted.",
              ],
              [
                LocateFixed,
                "03",
                "Establish North",
                "Note North; every other direction is understood relative to it.",
              ],
            ].map(([Icon, number, heading, copy]) => (
              <div key={number} className="bg-background p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <Icon className="h-7 w-7 text-primary" />
                  <span className="font-heading text-2xl text-primary/45">
                    {number}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-medium text-foreground">
                  {heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <CompassInstructions/>

      {/* <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel number="03">Explore the compass</SectionLabel>
              <h2 className="mt-4 text-3xl font-medium text-foreground sm:text-4xl">
                The eight Vastu directions
              </h2>
            </div>
            <p className="max-w-xl text-muted-foreground lg:col-span-5">
              Select a direction to explore its traditional association and
              broad planning guidance. These are educational principles, not a
              diagnosis of your home.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <CompassDiagram
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            </div>
            <div className="lg:col-span-5" aria-live="polite">
              <div className="border-l-2 border-primary pl-6 sm:pl-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-6xl text-primary/25">
                    {selected.id}
                  </span>
                  <span className="text-sm italic text-primary">
                    {selected.sanskrit}
                  </span>
                </div>
                <h3 className="mt-3 text-3xl font-medium text-foreground">
                  {selected.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-accent">
                  {selected.theme}
                </p>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {selected.association}
                </p>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    General guidance
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground/80">
                    {selected.guidance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <DirectionExplorer selected={selected} selectedId={selected} setSelectedId={setSelectedId}/>

      {/* <section className="border-y border-border/60 bg-secondary/35 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <DirectionalHomeMap />
          </div>
          <div className="lg:col-span-5">
            <SectionLabel number="04">Map the home</SectionLabel>
            <h2 className="mt-4 text-3xl font-medium text-foreground sm:text-4xl">
              North becomes your reference
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Once North is known, align it with the top of your floor-plan
              sketch. The remaining seven zones follow around the home relative
              to that axis.
            </p>
            <div className="mt-8 border-y border-border">
              <div className="grid grid-cols-[5rem_1fr] py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>Zone</span>
                <span>Common association</span>
              </div>
              {directions.map((direction) => (
                <div
                  key={direction.id}
                  className="grid grid-cols-[5rem_1fr] border-t border-border/60 py-3 text-sm"
                >
                  <span className="font-semibold text-primary">
                    {direction.id}
                  </span>
                  <span className="text-foreground/80">{direction.room}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Room associations are broad traditions. Plot shape, entrance,
              openings and the full layout all affect a complete assessment.
            </p>
          </div>
        </div>
      </section> */}
      <HomeMap/>

      {/* <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <TriangleAlert className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-3xl font-medium text-foreground">
                Common reading mistakes
              </h2>
              <p className="mt-4 text-muted-foreground">
                A careful starting point matters more than a complicated
                interpretation.
              </p>
            </div>
            <ul className="divide-y divide-border border-y border-border lg:col-span-8">
              {mistakes.map((mistake, index) => (
                <li key={mistake} className="flex items-center gap-5 py-5">
                  <span className="font-heading text-lg text-primary/45">
                    0{index + 1}
                  </span>
                  <X className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-foreground/85">{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}
      <CommonMistakes/>

      {/* <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
              Know the difference
            </span>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
              Free guidance vs personalized Vastu
            </h2>
          </div>
          <div className="mt-12 grid gap-10 border-y border-primary-foreground/20 py-10 md:grid-cols-2 md:gap-0">
            <div className="md:border-r md:border-primary-foreground/20 md:pr-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
                In this guide
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Direction identification",
                  "Eight-direction meanings",
                  "Basic room associations",
                  "General planning principles",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
                With a consultant
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Property-specific analysis",
                  "Entrance and layout assessment",
                  "Room-by-room guidance",
                  "Context-aware remedies",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/consultation"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 font-medium text-primary transition-colors hover:bg-brand-cream"
              >
                Get personalized Vastu guidance{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <FreeVsPersonalized/>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="mt-5 text-3xl font-medium text-foreground sm:text-4xl">
              Questions, answered
            </h2>
            <p className="mt-4 text-muted-foreground">
              Practical notes before you take your first reading.
            </p>
          </div>
          <div className="divide-y divide-border border-t border-border lg:col-span-8">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium text-foreground">
                  {question}
                  <span className="text-xl font-light text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl pr-8 text-sm leading-relaxed text-muted-foreground">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/45 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <MoveUpRight className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-6 text-3xl font-medium text-foreground sm:text-5xl">
            Know Your Direction. Understand Your Space.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Bring your floor plan and questions to a thoughtful,
            property-specific Vastu review.
          </p>
          <Link
            href="/consultation"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Book a Vastu consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectionLabel({ number, children }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary">
      <span className="font-heading text-lg text-primary/45">{number}</span>
      <span className="h-px w-8 bg-primary/30" />
      {children}
    </span>
  );
}

// function CompassDiagram({ selectedId, onSelect, decorative = false }) {
//   return (
//     <div className="relative mx-auto aspect-square w-full max-w-155">
//       <div className="vastu-compass-wheel absolute inset-[7%] rounded-full border border-primary/25 shadow-[0_28px_70px_-35px_var(--primary)]">
//         <div className="absolute inset-[10%] rounded-full border border-primary/20" />
//         <div className="absolute inset-[23%] rotate-45 border border-primary/20" />
//         <div className="absolute inset-[23%] border border-primary/20" />
//         <div className="absolute left-1/2 top-[14%] h-[72%] w-px -translate-x-1/2 bg-primary/20" />
//         <div className="absolute left-[14%] top-1/2 h-px w-[72%] -translate-y-1/2 bg-primary/20" />
//         <div className="absolute left-1/2 top-1/2 flex h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/35 bg-background text-center shadow-lg shadow-primary/10">
//           <Home className="h-5 w-5 text-primary" />
//           <span className="mt-1 text-xs font-semibold text-foreground">
//             Home Center
//           </span>
//           <span className="text-[10px] italic text-muted-foreground">
//             Brahmasthan
//           </span>
//         </div>
//       </div>
//       {directions.map((direction) => {
//         const isSelected = selectedId === direction.id;
//         const classes = `absolute z-10 flex h-12 w-12 items-center justify-center rounded-full border text-xs font-semibold transition-all sm:h-14 sm:w-14 ${direction.position} ${
//           isSelected
//             ? "scale-110 border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
//             : "border-primary/25 bg-background text-primary hover:border-primary hover:bg-secondary"
//         }`;
//         return decorative ? (
//           <span key={direction.id} className={classes}>
//             {direction.id}
//           </span>
//         ) : (
//           <button
//             key={direction.id}
//             type="button"
//             className={classes}
//             aria-label={`Explore ${direction.name}`}
//             aria-pressed={isSelected}
//             onClick={() => onSelect(direction.id)}
//           >
//             {direction.id}
//           </button>
//         );
//       })}
//       <span className="absolute -mt-2.5 left-1/2 top-0 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
//         North
//       </span>
//     </div>
//   );
// }

// function FloorPlanCenter() {
//   return (
//     <figure>
//       <div className="relative mx-auto aspect-[6/5] max-w-xl border-2 border-primary/35 bg-card p-[8%] divine-shadow">
//         <div className="absolute left-[8%] top-[8%] h-[34%] w-[38%] border border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
//           Living
//         </div>
//         <div className="absolute right-[8%] top-[8%] h-[34%] w-[38%] border border-border bg-background p-3 text-xs text-muted-foreground">
//           Bedroom
//         </div>
//         <div className="absolute bottom-[8%] left-[8%] h-[34%] w-[30%] border border-border bg-background p-3 text-xs text-muted-foreground">
//           Kitchen
//         </div>
//         <div className="absolute bottom-[8%] right-[8%] h-[34%] w-[46%] border border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
//           Dining
//         </div>
//         <div className="absolute left-[8%] top-[8%] h-px w-[112%] origin-left rotate-[39deg] bg-accent/65" />
//         <div className="absolute right-[8%] top-[8%] h-px w-[112%] origin-right -rotate-[39deg] bg-accent/65" />
//         <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-primary bg-background text-center shadow-lg shadow-primary/15">
//           <Crosshair className="h-5 w-5 text-primary" />
//           <span className="mt-1 text-[10px] font-semibold text-foreground">
//             CENTER
//           </span>
//         </div>
//       </div>
//       <figcaption className="mt-5 text-center text-xs uppercase tracking-widest text-muted-foreground">
//         Opposite corners meet near the geometric center
//       </figcaption>
//     </figure>
//   );
// }

function DirectionalHomeMap() {
  return (
    <figure>
      <div className="mx-auto max-w-2xl">
        <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
          <ArrowDown className="h-4 w-4 rotate-180" /> North reference
        </div>
        <div className="grid aspect-square grid-cols-3 overflow-hidden border-2 border-primary/30 bg-background divine-shadow">
          {[
            ["NW", "Guest / utility"],
            ["N", "Living / study"],
            ["NE", "Pooja / meditation"],
            ["W", "Dining / study"],
            ["CENTER", "Brahmasthan"],
            ["E", "Entrance / living"],
            ["SW", "Primary bedroom"],
            ["S", "Storage / work"],
            ["SE", "Kitchen"],
          ].map(([zone, room]) => (
            <div
              key={zone}
              className={`flex flex-col items-center justify-center border border-border p-3 text-center ${zone === "CENTER" ? "bg-primary text-primary-foreground" : "bg-card"}`}
            >
              <span className="font-heading text-xl sm:text-2xl">{zone}</span>
              <span
                className={`mt-1 text-[10px] sm:text-xs ${zone === "CENTER" ? "text-primary-foreground/75" : "text-muted-foreground"}`}
              >
                {room}
              </span>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-5 text-center text-xs uppercase tracking-widest text-muted-foreground">
        Simplified eight-zone educational overlay
      </figcaption>
    </figure>
  );
}
