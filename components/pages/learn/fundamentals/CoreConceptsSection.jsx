import SectionHeader from "./SectionHeader";
import { concepts } from "@/data/fundamentals";

export default function CoreConceptsSection() {
  return (
<section
  id="core-concepts"
  className="scroll-mt-20 border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
>
  <div className="mx-auto max-w-7xl">
    {/* Section heading */}
    <div className="max-w-2xl">
      <span className="section-badge">Core concepts</span>

      <h2 className="section-heading">
        Six ideas the rest of Vastu rests on
      </h2>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
        These are the principles that give Vastu its structure. Understand
        them first, and the rules that follow become much easier to read.
      </p>
    </div>

    {/* Concept cards */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
      {concepts.map(({ icon: Icon, name, sanskrit, body }) => (
        <article
          key={name}
          className="group flex min-h-[250px] flex-col rounded-2xl border border-border/70 bg-suraface-accent p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-divine-glow sm:p-8 "
        >
          {/* Icon */}
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-surface text-primary transition-colors duration-300 group-hover:border-primary/20 group-hover:bg-primary/5"
          >
            <Icon
              className="h-[18px] w-[18px]"
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="mt-6">
            <h3 className="text-lg font-medium tracking-tight text-foreground">
              {name}
            </h3>

            <p className="mt-1 text-sm italic text-primary/80">
              {sanskrit}
            </p>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {body}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

  );
}
