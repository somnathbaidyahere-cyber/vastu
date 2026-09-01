import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

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
            <SectionLabel number="05">
              Apply the framework
            </SectionLabel>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-[1.1] text-foreground sm:text-4xl">
              Where do common spaces fit?
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-5">
            Vastu traditionally associates certain spaces and activities with
            particular zones. Use these as broad reference points, not fixed
            rules for every home.
          </p>
        </div>

        {/* Associations */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {associations.map((item) => (
            <article
              key={item.direction}
              className="group relative overflow-hidden rounded-[1.25rem] border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 sm:p-7"
            >
              {/* Direction */}
              <div className="flex items-start justify-between">
                <span className="font-heading text-4xl text-primary/25 transition-colors group-hover:text-primary/45">
                  {item.direction}
                </span>

                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>

              {/* Content */}
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {item.name}
              </p>

              <h3 className="mt-2 text-xl font-medium text-foreground">
                {item.space}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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