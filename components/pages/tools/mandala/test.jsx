import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CircleDot,
  Grid3X3,
  Home,
  Layers3,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "Vastu Purusha Mandala — Spatial Philosophy | VastuVeda";
const description =
  "Explore the Vastu Purusha Mandala as a contemplative framework connecting direction, elements, spatial zones, and the center of the home.";

export const Route = createFileRoute("/tools/mandala")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MandalaPage,
});

const zones = [
  {
    id: "NW",
    direction: "North-West",
    deity: "Vayu",
    element: "Air",
    quality: "Movement",
    meaning: "A transitional field associated with exchange, rhythm, guests, and circulation.",
    position: "col-start-1 row-start-1",
  },
  {
    id: "N",
    direction: "North",
    deity: "Kubera",
    element: "Water",
    quality: "Flow",
    meaning: "A receptive edge traditionally connected with opportunity, continuity, and movement.",
    position: "col-start-2 row-start-1",
  },
  {
    id: "NE",
    direction: "North-East",
    deity: "Ishana",
    element: "Water",
    quality: "Clarity",
    meaning: "The meeting of northern flow and eastern light; a quiet zone for reflection and focus.",
    position: "col-start-3 row-start-1",
  },
  {
    id: "W",
    direction: "West",
    deity: "Varuna",
    element: "Space",
    quality: "Depth",
    meaning: "A consolidating field associated with completion, inwardness, and gathered experience.",
    position: "col-start-1 row-start-2",
  },
  {
    id: "CENTER",
    direction: "Brahmasthan",
    deity: "Brahma",
    element: "Space",
    quality: "Balance",
    meaning: "The still center that holds the spatial order together; traditionally kept light and legible.",
    position: "col-start-2 row-start-2",
  },
  {
    id: "E",
    direction: "East",
    deity: "Indra",
    element: "Air",
    quality: "Renewal",
    meaning: "The field of arrival and morning light, associated with vitality, attention, and beginnings.",
    position: "col-start-3 row-start-2",
  },
  {
    id: "SW",
    direction: "South-West",
    deity: "Nirriti",
    element: "Earth",
    quality: "Grounding",
    meaning: "The most settled field of the diagram, associated with weight, continuity, and stability.",
    position: "col-start-1 row-start-3",
  },
  {
    id: "S",
    direction: "South",
    deity: "Yama",
    element: "Earth",
    quality: "Structure",
    meaning: "A contained zone associated with discipline, boundaries, responsibility, and endurance.",
    position: "col-start-2 row-start-3",
  },
  {
    id: "SE",
    direction: "South-East",
    deity: "Agni",
    element: "Fire",
    quality: "Transformation",
    meaning: "The energetic fire field, traditionally related to heat, preparation, and purposeful change.",
    position: "col-start-3 row-start-3",
  },
];

const elements = [
  ["Earth", "Weight · support", "Grounding and physical stability within the spatial field."],
  ["Water", "Flow · receptivity", "Movement, continuity, and the ability of a space to receive."],
  ["Fire", "Heat · change", "Transformation, activity, and focused energetic expression."],
  ["Air", "Motion · exchange", "Circulation, contact, and the movement of life through space."],
  ["Space", "Openness · relation", "The field that allows every other element and zone to coexist."],
];

const faqs = [
  [
    "Is the Vastu Purusha Mandala always an 81-square grid?",
    "Traditional texts describe several grid forms for different contexts. The 9×9 or 81-pada form is widely used for domestic study; this page simplifies its outer relationships into nine readable fields.",
  ],
  [
    "Does every square prescribe a specific room?",
    "No. The Mandala expresses qualities and relationships before room labels. A thoughtful reading considers the complete plan, proportions, openings, use, and lived context.",
  ],
  [
    "What is a pada?",
    "Pada means a step or portion. In the Mandala it refers to one unit of the underlying grid, helping translate a continuous space into an ordered field.",
  ],
  [
    "Why are deities associated with the zones?",
    "The names personify observable spatial qualities—light, movement, heat, stability, or openness. They are a traditional vocabulary for remembering relationships within the whole.",
  ],
  [
    "Can I overlay the Mandala on any floor plan?",
    "It can be used as an interpretive layer after the plan is oriented and mapped. Irregular plots and complex layouts need thoughtful adjustment rather than a rigid, automatic overlay.",
  ],
];
 
function MandalaPage() {
  const [selectedZone, setSelectedZone] = useState("CENTER");
  const [selectedElement, setSelectedElement] = useState("Space");
  const activeZone = zones.find((zone) => zone.id === selectedZone) || zones[4];

  return (
    <div className="min-h-screen overflow-hidden bg-background">
        {/* hero */}
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-border/60 bg-ivory-pattern px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 border-b border-primary/30 pb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Grid3X3 className="h-4 w-4" /> Vastu Purusha Mandala
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-medium leading-[1.08] text-foreground sm:text-6xl lg:text-7xl">
              The geometry behind Vastu
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Beyond direction and placement lies a deeper idea: space as a field of relationships,
              ordered around a living center.
            </p>
            <Button asChild size="lg" className="mt-9 rounded-full px-7">
              <a href="#mandala-introduction">
                Explore the Mandala <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="relative h-[420px] sm:h-[560px] lg:col-span-6 lg:h-[650px]" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[610px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-primary/20 sm:w-[760px] lg:left-[62%] lg:w-[880px]">
              <div className="absolute inset-[8%] border border-primary/20" />
              <div className="absolute inset-[19%] border border-accent/25" />
              <div className="absolute inset-[31%] border border-primary/25" />
              <div className="absolute inset-[42%] bg-primary/10" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-primary/15" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-primary/15" />
            </div>
            <div className="absolute left-1/2 top-1/2 grid aspect-square w-[330px] -translate-x-1/2 -translate-y-1/2 grid-cols-3 border border-primary/25 bg-background/70 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:w-[430px] lg:left-[62%] lg:w-[500px]">
              {zones.map((zone) => (
                <div
                  key={zone.id}
                  className={`flex items-center justify-center border border-primary/15 text-xs font-semibold text-primary/60 ${zone.position} ${zone.id === "CENTER" ? "bg-primary text-primary-foreground" : ""}`}
                >
                  {zone.id === "CENTER" ? <CircleDot className="h-7 w-7" /> : zone.id}
                </div>
              ))}
            </div>
            <p className="absolute bottom-2 right-0 text-xs uppercase tracking-widest text-muted-foreground sm:right-8 lg:right-0">
              A whole revealed through its centre
            </p>
          </div>
        </div>
      </section>
{/* intro */}
      <section id="mandala-introduction" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">01 · The framework</span>
              <h2 className="section-heading">
                Space understood as relationship
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="section-description">
                The Vastu Purusha Mandala is a traditional diagram for reading an oriented site as
                an interconnected whole. It brings direction, natural qualities, spatial zones,
                and the lived use of space into one ordered framework.
              </p>
              <div className="mt-10 grid border-y border-border sm:grid-cols-4">
                {["Direction", "Element", "Zone", "Space"].map((item, index) => (
                  <div key={item} className="relative border-b border-border px-5 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                    <span className="text-[10px] font-semibold text-primary/45">0{index + 1}</span>
                    <p className="mt-2 font-heading text-xl text-foreground">{item}</p>
                    {index < 3 && <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 bg-background text-primary sm:block" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* interactive mandala */}
      <section id="interactive-mandala" className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">02 · Interactive Mandala</span>
              <h2 className="mt-5 text-3xl font-medium text-foreground sm:text-5xl">Read the whole through each part</h2>
            </div>
            <p className="max-w-xl leading-relaxed text-muted-foreground lg:col-span-5">
              Select a field within the Mandala. The diagram is the navigation: each zone reveals
              a traditional association, elemental relationship, and spatial character.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="relative mx-auto aspect-square w-full max-w-[680px] p-[7%]">
                <div className="absolute inset-0 rotate-45 border border-primary/20" aria-hidden="true" />
                <div className="absolute inset-[5%] rotate-45 border border-accent/20" aria-hidden="true" />
                <div className="relative grid h-full w-full grid-cols-3 overflow-hidden border-2 border-primary/30 bg-background divine-shadow">
                  {zones.map((zone) => {
                    const isActive = activeZone.id === zone.id;
                    return (
                      <Button
                        key={zone.id}
                        type="button"
                        variant="ghost"
                        onMouseEnter={() => setSelectedZone(zone.id)}
                        onFocus={() => setSelectedZone(zone.id)}
                        onClick={() => setSelectedZone(zone.id)}
                        aria-pressed={isActive}
                        aria-label={`Explore ${zone.direction}`}
                        className={`group h-auto min-w-0 rounded-none border border-primary/15 p-2 transition-all sm:p-4 ${zone.position} ${
                          isActive
                            ? "z-10 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary hover:text-primary-foreground"
                            : "bg-card/75 text-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        <span className="flex min-w-0 flex-col items-center text-center">
                          <span className="font-heading text-xl sm:text-3xl">{zone.id === "CENTER" ? "◉" : zone.id}</span>
                          <span className={`mt-1 hidden text-[10px] uppercase tracking-widest sm:block ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                            {zone.quality}
                          </span>
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5" aria-live="polite">
              <div className="min-h-[390px] border-l-2 border-primary pl-6 sm:pl-9">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-heading text-6xl text-primary/20">{activeZone.id}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">{activeZone.element}</span>
                </div>
                <p className="mt-4 text-sm italic text-primary">{activeZone.deity} · traditional association</p>
                <h3 className="mt-2 text-3xl font-medium text-foreground">{activeZone.direction}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-accent">{activeZone.quality}</p>
                <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">{activeZone.meaning}</p>
                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Spatial reading</p>
                  <p className="mt-3 leading-relaxed text-foreground/80">
                    Read this quality in relation to the center and neighboring fields—not as an isolated prescription.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* directional framework */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">03 · Directional framework</span>
            <h2 className="mt-5 text-3xl font-medium text-foreground sm:text-5xl">Eight characters around one center</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The directions no longer act as compass points alone. In the Mandala, they become
              distinct spatial characters—flowing, radiant, active, settled—held in balance by the center.
            </p>
            <p className="mt-6 border-l border-accent pl-5 text-sm leading-relaxed text-foreground/75">
              Return to the interactive Mandala above to compare each field. One diagram replaces eight disconnected rules.
            </p>
          </div>
          <div className="relative lg:col-span-7">
            <div className="grid aspect-square max-w-2xl grid-cols-3 border border-primary/25 bg-card divine-shadow">
              {zones.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => {
                    setSelectedZone(zone.id);
                    document.getElementById("interactive-mandala")?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className={`flex flex-col items-center justify-center border border-primary/15 p-3 text-center transition-colors ${zone.position} ${zone.id === "CENTER" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
                >
                  <span className="font-heading text-lg sm:text-2xl">{zone.id === "CENTER" ? "Brahmasthan" : zone.quality}</span>
                  <span className={`mt-1 text-[10px] uppercase tracking-widest sm:text-xs ${zone.id === "CENTER" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{zone.id}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* elements */}
      <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">04 · Pancha Mahabhuta</span>
              <h2 className="mt-5 text-3xl font-medium text-foreground sm:text-5xl">Five elements, one field</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Select an element to see where its quality becomes most legible in this simplified Mandala.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {elements.map(([name]) => (
                  <Button
                    key={name}
                    type="button"
                    variant={selectedElement === name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedElement(name)}
                    className="rounded-full"
                  >
                    {name}
                  </Button>
                ))}
              </div>
              <div className="mt-8 min-h-32 border-t border-border pt-6" aria-live="polite">
                <p className="font-heading text-2xl text-foreground">{selectedElement}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
                  {elements.find(([name]) => name === selectedElement)?.[1]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {elements.find(([name]) => name === selectedElement)?.[2]}
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="relative mx-auto grid aspect-square max-w-2xl grid-cols-3 border-2 border-primary/25 bg-background p-[7%] divine-shadow">
                <div className="absolute inset-[7%] grid grid-cols-3">
                  {zones.map((zone) => {
                    const isRelated = zone.element === selectedElement;
                    return (
                      <div
                        key={zone.id}
                        className={`flex flex-col items-center justify-center border border-primary/15 text-center transition-all duration-500 ${zone.position} ${
                          isRelated ? "bg-primary text-primary-foreground shadow-lg shadow-primary/15" : "bg-card/55 text-muted-foreground opacity-45"
                        }`}
                      >
                        <span className="font-heading text-xl sm:text-3xl">{zone.id === "CENTER" ? "◉" : zone.id}</span>
                        <span className={`mt-1 hidden text-[10px] uppercase tracking-widest sm:block ${isRelated ? "text-primary-foreground/70" : ""}`}>{zone.quality}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary px-4 py-24 text-primary-foreground sm:px-6 lg:px-8 lg:py-36">
        <div className="absolute left-1/2 top-1/2 aspect-square w-[540px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-primary-foreground/10" aria-hidden="true">
          <div className="absolute inset-[16%] border border-primary-foreground/10" />
          <div className="absolute inset-[34%] border border-primary-foreground/15" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <CircleDot className="mx-auto h-9 w-9 text-primary-foreground/70" />
          <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">05 · Brahmasthan</span>
          <h2 className="mt-5 text-4xl font-medium sm:text-6xl">The quiet center</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            Brahmasthan is the Mandala’s central field—the place from which every relationship can
            be understood. Tradition associates it with openness, balance, and the clarity of an
            unburdened center.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">06 · Mandala principles</span>
              <h2 className="mt-5 text-3xl font-medium text-foreground sm:text-5xl">From orientation to harmony</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-col border-y border-border sm:flex-row sm:items-stretch">
                {["Orientation", "Mandala", "Elements", "Spatial zones", "Harmony"].map((item, index) => (
                  <div key={item} className="relative flex flex-1 items-center justify-between gap-3 border-b border-border px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                    <span className="text-sm font-medium text-foreground">{item}</span>
                    {index < 4 && <ArrowRight className="h-4 w-4 shrink-0 text-primary/50 sm:absolute sm:-right-2 sm:z-10 sm:bg-background" />}
                  </div>
                ))}
              </div>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                {[
                  ["Orientation", "Establishes how the spatial field meets light, movement, and the wider site."],
                  ["Balance", "Reads every zone in relation to its opposite, its neighbors, and the center."],
                  ["Harmony", "Emerges from relationships that support the real life unfolding within the plan."],
                ].map(([heading, copy], index) => (
                  <div key={heading} className="border-t-2 border-primary/30 pt-5">
                    <span className="text-xs text-primary/50">0{index + 1}</span>
                    <h3 className="mt-3 text-xl font-medium text-foreground">{heading}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Mandala Overview */}
      <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">07 · Mandala in one view</span>
          <h2 className="mt-5 text-3xl font-medium text-foreground sm:text-5xl">One center. Eight fields. Five elements.</h2>
          <div className="relative mx-auto mt-14 aspect-square w-full max-w-3xl p-[6%]">
            <div className="absolute inset-0 rotate-45 border border-primary/20" aria-hidden="true" />
            <div className="relative grid h-full grid-cols-3 border-2 border-primary/30 bg-background divine-shadow">
              {zones.map((zone) => (
                <div key={zone.id} className={`flex flex-col items-center justify-center border border-primary/15 p-3 text-center ${zone.position} ${zone.id === "CENTER" ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                  <span className="font-heading text-xl sm:text-4xl">{zone.id === "CENTER" ? "Center" : zone.id}</span>
                  <span className={`mt-2 text-[10px] uppercase tracking-widest sm:text-xs ${zone.id === "CENTER" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{zone.element}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-3xl font-heading text-xl leading-relaxed text-foreground sm:text-2xl">
            Compass helps me find. Home Map helps me apply. Mandala helps me understand.
          </p>
        </div>
      </section>
{/* vastu Perspective */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Sparkles className="h-7 w-7 text-primary" />
            <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-primary">08 · Vastu perspective</span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-3xl text-4xl font-medium text-foreground sm:text-6xl">A traditional framework, not a rulebook.</h2>
            <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              <p className="text-lg leading-relaxed text-muted-foreground">
                The Mandala offers a language for noticing order, emphasis, and relationship. It is
                most useful when it sharpens observation—not when it replaces judgment.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Real homes hold constraints, histories, and people. Thoughtful interpretation seeks
                balance within that reality rather than creating fear around imperfect geometry.
              </p>
            </div>
          </div>
        </div>
      </section>

 {/* FAQ */}
      <section className="border-t border-border/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Layers3 className="h-7 w-7 text-primary" />
            <h2 className="mt-5 text-3xl font-medium text-foreground sm:text-4xl">Mandala questions</h2>
            <p className="mt-4 text-muted-foreground">A few clarifications for reading the framework thoughtfully.</p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible defaultValue="faq-0" className="border-t border-border">
              {faqs.map(([question, answer], index) => (
                <AccordionItem key={question} value={`faq-${index}`}>
                  <AccordionTrigger className="py-6 text-base text-foreground hover:no-underline">{question}</AccordionTrigger>
                  <AccordionContent className="min-h-28 max-w-2xl pr-8 text-sm leading-relaxed text-muted-foreground">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
     {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/60 bg-secondary/40 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute bottom-[-18rem] left-1/2 aspect-square w-[620px] -translate-x-1/2 rotate-45 border border-primary/15 sm:w-[760px] lg:left-[75%] lg:w-[900px]" aria-hidden="true">
          <div className="absolute inset-[12%] grid grid-cols-3 border border-primary/15">
            {Array.from({ length: 9 }).map((_, index) => <div key={index} className="border border-primary/10" />)}
          </div>
          <div className="absolute left-[18%] top-[18%] h-[64%] w-[64%] -rotate-45 border-2 border-primary/20">
            <div className="absolute left-[12%] top-[12%] h-[36%] w-[40%] border border-primary/15" />
            <div className="absolute bottom-[12%] right-[12%] h-[36%] w-[40%] border border-primary/15" />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Home className="h-8 w-8 text-primary" />
            <h2 className="mt-7 text-4xl font-medium text-foreground sm:text-6xl">See your home with a deeper understanding.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Carry this spatial perspective into the plan you have already explored.
            </p>
            <Button asChild size="lg" className="mt-9 rounded-full px-7">
              <a href="/tools/map">
                Explore My Home Map <MoveUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
