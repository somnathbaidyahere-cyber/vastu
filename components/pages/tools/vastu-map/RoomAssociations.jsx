import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../../../ui/SectionLabel";


const associations = [
  {
    direction: "NE",
    name: "Northeast",
    space: "Pooja / Meditation",
    note: "Traditionally associated with clarity, knowledge and contemplative spaces.",
  },
  {
    direction: "E",
    name: "East",
    space: "Living / Study",
    note: "Often associated with vitality, openness and new beginnings.",
  },
  {
    direction: "SE",
    name: "Southeast",
    space: "Kitchen",
    note: "Traditionally connected with fire, activity and transformation.",
  },
  {
    direction: "SW",
    name: "Southwest",
    space: "Primary Bedroom",
    note: "Often associated with grounding, stability and weight.",
  },
  {
    direction: "NW",
    name: "Northwest",
    space: "Guest / Utility",
    note: "Traditionally associated with movement, change and transition.",
  },
  {
    direction: "N",
    name: "North",
    space: "Living / Study",
    note: "Commonly associated with movement, opportunities and career-related themes.",
  },
];

export default function RoomAssociations() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel number="04">
              Apply the framework
            </SectionLabel>

            <h2 className="section-heading">
              Where do common spaces fit?
            </h2>
          </div>

          <p className="max-w-xl text-sm md:text-base text-foreground-muted leading-relaxed lg:col-span-5">
            Vastu traditionally associates certain spaces and activities with
            particular zones. Use these as broad reference points, not fixed
            rules for every home.
          </p>
        </div>

        {/* Associations */}
        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
  {associations.map((item) => (
    <article
      key={item.direction}
      className="group relative overflow-hidden rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-divine-glow sm:rounded-[1.25rem] sm:p-6 md:p-7"
    >
      {/* Direction */}
      <div className="flex items-start justify-between">
        <span className="font-heading text-3xl text-primary/25 transition-colors group-hover:text-primary/60 sm:text-4xl">
          {item.direction}
        </span>

        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:h-4 sm:w-4" />
      </div>

      {/* Content */}
      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary sm:mt-6 sm:text-xs sm:tracking-[0.16em]">
        {item.name}
      </p>

      <h3 className="mt-1.5 text-lg font-medium text-foreground sm:mt-2 sm:text-xl">
        {item.space}
      </h3>

      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
        {item.note}
      </p>
    </article>
  ))}
</div>

        {/* Context note */}
        <div className="mt-8 border-l-2 border-accent/40 pl-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">
              Remember:
            </span>{" "}
            these are traditional associations. Actual placement should be
            interpreted in the context of the complete property layout.
          </p>
        </div>

      </div>
    </section>
  );
}