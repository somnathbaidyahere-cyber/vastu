import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Compass,
  Grid3x3,
  Home,
  Layers,
  Ruler,
  Scale,
  Sun,
  Wind,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import courtyardImg from "@/assets/learn-courtyard.jpg";
import thresholdImg from "@/assets/learn-threshold.jpg";
import planImg from "@/assets/learn-plan.jpg";
import Image from "next/image";

const title = "Vastu Fundamentals — Principles, Directions & Core Concepts | VastuVeda";
const description =
  "A beginner's guide to Vastu Shastra fundamentals: what Vastu is, the five elements, the eight directions, the brahmasthan, and how to read a home plan with clarity.";

const faqs = [
  {
    q: "What is Vastu Shastra in simple terms?",
    a: "Vastu Shastra is a traditional Indian body of knowledge about building and arranging spaces. It studies how orientation, light, air movement, weight distribution and proportion affect the way a dwelling feels and functions. Most of its rules were written for a specific climate and building method, so they are best read as principles rather than fixed commandments.",
  },
  {
    q: "Do I need to change my house to follow Vastu?",
    a: "Rarely. Most fundamentals are about placement and use — which corner stays heavy, where light enters first, which zone stays uncluttered. Understanding the reasoning usually leads to small, reversible adjustments rather than structural work.",
  },
  {
    q: "What is the brahmasthan?",
    a: "The brahmasthan is the approximate geometric centre of a plan. Traditionally it is kept open and unburdened — no heavy structure, no clutter, no service function — so the plan has a calm middle that the rest of the layout can breathe around.",
  },
  {
    q: "Which direction should I learn first?",
    a: "North. Once true north is established for the whole home, every other zone is understood relative to it. Learning a single room's direction before fixing the reference point is the most common beginner mistake.",
  },
  {
    q: "Is Vastu the same as Feng Shui?",
    a: "No. Both study space and orientation, but they come from different traditions with different vocabularies, diagrams and rules. Mixing the two usually produces contradictions, so it is better to study one framework at a time.",
  },
  {
    q: "Can I learn Vastu without a consultant?",
    a: "The fundamentals — directions, elements, zoning and the logic behind them — are entirely learnable on your own. A consultant becomes useful when a specific property has constraints that the general principles do not resolve.",
  },
];

const learningPath = [
  {
    n: "01",
    title: "What Vastu actually claims",
    body: "Separate the shastra's structural logic from later folklore. Learn what the texts say about light, air, weight and proportion — and what they never claimed at all.",
    meta: "6 min read · Orientation",
  },
  {
    n: "02",
    title: "The five elements in a plan",
    body: "Earth, water, fire, air and space are placed by nature, not preference. See where each belongs and why the south-east resists water and the north-east resists weight.",
    meta: "8 min read · Pancha Bhuta",
  },
  {
    n: "03",
    title: "Fixing true north",
    body: "Every reading depends on one reference. Learn the difference between magnetic and true north, and how to establish the axis of a home before judging any room.",
    meta: "5 min read · Dik Nirnaya",
  },
  {
    n: "04",
    title: "Reading the grid",
    body: "The plan is divided into padas — a grid that turns a vague floor plan into readable zones. Understand the 9×9 division and the sensitive joints within it.",
    meta: "9 min read · Mandala",
  },
  {
    n: "05",
    title: "Applying it room by room",
    body: "Kitchen, bed, prayer, storage, stairs. The order a consultant walks a home, and which corrections genuinely matter first.",
    meta: "10 min read · Griha Vinyasa",
  },
];

const concepts = [
  {
    icon: Grid3x3,
    name: "Pada",
    sanskrit: "The grid module",
    body: "The unit square that divides a plan into readable zones. Everything in Vastu is measured against this division rather than against walls.",
  },
  {
    icon: Sun,
    name: "Brahmasthan",
    sanskrit: "The open centre",
    body: "The plan's geometric middle, kept light and unobstructed so the layout has a calm core.",
  },
  {
    icon: Scale,
    name: "Weight balance",
    sanskrit: "Bhara Vinyasa",
    body: "Mass belongs in the south and west; openness belongs in the north and east. Most discomfort in a plan traces back to this being reversed.",
  },
  {
    icon: Wind,
    name: "Air and light path",
    sanskrit: "Vayu Marga",
    body: "How morning light enters and how cross-ventilation moves decides the mood of a room long before any remedy does.",
  },
  {
    icon: Ruler,
    name: "Proportion",
    sanskrit: "Ayadi",
    body: "Traditional measure systems relate a building's dimensions to each other, so rooms feel resolved rather than arbitrary.",
  },
  {
    icon: Layers,
    name: "Marma points",
    sanskrit: "Sensitive joints",
    body: "Intersections in the grid treated as structurally sensitive — kept free of heavy columns, beams and cuts.",
  },
];

const directions = [
  { code: "N", name: "North", note: "Opportunity, flow, openness" },
  { code: "NE", name: "North-East", note: "Water, light, stillness" },
  { code: "E", name: "East", note: "Morning sun, beginnings" },
  { code: "SE", name: "South-East", note: "Fire, the kitchen zone" },
  { code: "S", name: "South", note: "Rest, weight, retreat" },
  { code: "SW", name: "South-West", note: "Earth, stability, mass" },
  { code: "W", name: "West", note: "Gain, evening, storage" },
  { code: "NW", name: "North-West", note: "Air, movement, guests" },
];

const articles = [
  {
    img: courtyardImg,
    alt: "Sunlit ivory Indian courtyard with clean stone paving",
    kicker: "Space",
    title: "Why the centre is kept empty",
    body: "The courtyard house explains the brahmasthan better than any diagram — an open middle that lets light and air reach every room around it.",
  },
  {
    img: thresholdImg,
    alt: "Carved wooden doorway with a traditional stone threshold",
    kicker: "Entrance",
    title: "The threshold as a decision",
    body: "Entrance placement carries more weight in the texts than almost any interior rule. Here is the reasoning behind it, stated plainly.",
  },
  {
    img: planImg,
    alt: "Hand-drawn architectural floor plan on cream paper with a brass ruler",
    kicker: "Method",
    title: "Reading a floor plan honestly",
    body: "Before applying a single rule, learn to find the true outline, the centre and the axis of the plan you actually have.",
  },
];

export const Route = createFileRoute("/learn/fundamentals")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/learn/fundamentals" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/learn/fundamentals" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Learn", item: "/learn" },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Fundamentals",
                  item: "/learn/fundamentals",
                },
              ],
            },
            {
              "@type": "CollectionPage",
              name: "Vastu Fundamentals",
              description,
              url: "/learn/fundamentals",
              hasPart: learningPath.map((s) => ({
                "@type": "Article",
                headline: s.title,
                description: s.body,
              })),
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: FundamentalsPage,
});

function FundamentalsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-4 pt-8 sm:px-6 lg:px-8">
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="transition-colors hover:text-primary">
              Home
            </Link>
          </li>
          <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
          <li>
            <Link to="/learn" className="transition-colors hover:text-primary">
              Learn
            </Link>
          </li>
          <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
          <li aria-current="page" className="font-medium text-foreground">
            Fundamentals
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Chapter one
            </span>
            <h1 className="mt-5 text-4xl font-medium leading-[1.12] text-foreground sm:text-5xl lg:text-6xl">
              Vastu Fundamentals
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              The vocabulary and reasoning behind Vastu Shastra, explained without mystification.
              Start here to understand orientation, the five elements, the grid of padas and the
              open centre — the ideas every other chapter depends on.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#start-learning"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Start the path
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#core-concepts"
                className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Jump to concepts
              </a>
            </div>
          </div>

          {/* Abstract geometric accent — deliberately not a mandala */}
          <div className="lg:col-span-5">
            <div
              aria-hidden="true"
              className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border/60 bg-secondary/40"
            >
              <div className="absolute inset-10 rounded-2xl border border-primary/25" />
              <div className="absolute inset-20 rounded-xl border border-primary/20" />
              <div className="absolute inset-x-10 top-1/2 h-px bg-primary/20" />
              <div className="absolute inset-y-10 left-1/2 w-px bg-primary/20" />
              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10" />
              <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-medium text-foreground sm:text-4xl">
              What Vastu Shastra is
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8">
            <p>
              Vastu Shastra is India&apos;s traditional discipline of building. Written across texts
              such as the <em>Mayamatam</em> and the <em>Manasara</em>, it describes how a dwelling
              should meet its site: where light should enter, where mass should sit, how air should
              move through it, and how its dimensions should relate to one another.
            </p>
            <p>
              Read closely, most of its rules are climate-responsive architecture. A heavy
              south-west wall shields the harshest afternoon sun. An open north-east admits gentle
              morning light. A kitchen in the south-east catches the prevailing draught away from
              the sleeping quarters. The reasoning is physical before it is symbolic.
            </p>
            <p>
              The fundamentals below give you enough grounding to read a plan for yourself — to see
              why a room feels wrong before anyone tells you it does. That is the whole purpose of
              this chapter: judgement, not superstition.
            </p>
          </div>
        </div>
      </section>

      {/* Start learning */}
      <section id="start-learning" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              The learning path
            </span>
            <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
              Five readings, in order
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each one builds on the last. Together they take roughly an evening and leave you able
              to hold a conversation about any plan.
            </p>
          </div>

          <ol className="mt-12 border-t border-border/60">
            {learningPath.map((s) => (
              <li
                key={s.n}
                className="group grid gap-4 border-b border-border/60 py-8 transition-colors hover:bg-secondary/40 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:px-4"
              >
                <span className="text-sm font-medium tracking-widest text-primary sm:col-span-1">
                  {s.n}
                </span>
                <h3 className="text-xl font-medium text-foreground sm:col-span-4">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-5">
                  {s.body}
                </p>
                <span className="text-xs uppercase tracking-widest text-muted-foreground sm:col-span-2 sm:text-right">
                  {s.meta}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Core concepts */}
      <section
        id="core-concepts"
        className="scroll-mt-20 border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Core concepts
            </span>
            <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
              Six ideas the rest of Vastu rests on
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((c) => {
              const Icon = c.icon;
              return (
                <article key={c.name} className="bg-card p-8">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-medium text-foreground">{c.name}</h3>
                  <p className="text-sm italic text-primary">{c.sanskrit}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore directions */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Orientation
            </span>
            <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
              Eight directions, one reference
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fix north for the whole home first. Every zone below is read relative to that single
              axis — never from a single room or the front door.
            </p>
            <Link
              to="/tools/compass"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Learn to establish north
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4">
              {directions.map((d) => (
                <div key={d.code} className="bg-card p-6">
                  <dt className="text-2xl font-medium tracking-tight text-foreground">{d.code}</dt>
                  <dd className="mt-1 text-sm font-medium text-primary">{d.name}</dd>
                  <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{d.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Interactive tools */}
      <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Put it to work
            </span>
            <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
              Two tools that make the theory visible
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                to: "/tools/compass",
                icon: Compass,
                name: "Vastu Compass",
                body: "A guided way to find your home's centre and establish true north before reading any zone.",
              },
              {
                to: "/tools/mandala",
                icon: Grid3x3,
                name: "Mandala",
                body: "The 81-pada grid laid over a plan, with the padas, deities and sensitive marma points explained.",
              },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <Link
                  key={t.to}
                  to={t.to}
                  className="group flex items-start gap-5 rounded-2xl border border-border/60 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-lg font-medium text-foreground">{t.name}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {t.body}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Open tool
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* More fundamentals */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                More fundamentals
              </span>
              <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
                Short reads around the basics
              </h2>
            </div>
            <Link
              to="/learn"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              All chapters
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {articles.map((a) => (
              <article key={a.title} className="group">
                <div className="overflow-hidden rounded-2xl border border-border/60">
                  <Image
                    src={a.img}
                    alt={a.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
                  {a.kicker}
                </p>
                <h3 className="mt-2 text-lg font-medium text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-ivory-pattern px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">FAQ</span>
            <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
              Questions beginners ask
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-0"
              className="border-t border-border"
            >
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="py-6 text-left text-base text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="min-h-28 max-w-2xl pr-8 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium sm:text-4xl">
            <Home className="mx-auto mb-6 h-7 w-7 opacity-80" aria-hidden="true" />
            Now read it on your own home
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            The fundamentals only settle once you apply them. Open the toolkit and walk your plan
            with the compass and the mandala.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/tools"
              className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-7 py-3.5 text-base font-medium text-primary transition-colors hover:bg-brand-cream"
            >
              Explore the tools
            </Link>
            <Link
              to="/learn"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Back to Learn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
