import { ArrowRight } from "lucide-react";

const relevance = [
  [
    "Building",
    "Shape a new home with orientation and daily life considered from the beginning.",
  ],
  [
    "Planning",
    "Read a proposed layout before important spatial decisions become fixed.",
  ],
  [
    "Moving",
    "Understand how a new property supports your needs before or after the move.",
  ],
  [
    "Renovating",
    "Identify practical priorities without treating every wall as a problem.",
  ],
  [
    "Understanding an existing space",
    "Make sense of what is already working and where small changes may help.",
  ],
];

export default function ConsultationRelevance() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <p className="section-badge">
            Is this for you?
          </p>

          <h2 className="section-heading">
            Useful at moments of decision.
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            A consultation is most valuable when you have a real space and a
            clear question—not when you are looking for a generic checklist.
          </p>
        </div>

        <div className="border-t border-border/70 lg:col-span-8">
          {relevance.map(([name, note]) => (
            <a
              key={name}
              href="#booking"
              className="group grid gap-2 border-b border-border/70 py-6 transition-colors hover:text-primary sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.3fr)_auto] sm:items-center"
            >
              <h3 className="text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                {name}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {note}
              </p>

              <ArrowRight
                className="hidden h-4 w-4 transition-transform group-hover:translate-x-1 sm:block"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}