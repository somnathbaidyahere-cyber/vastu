import SectionHeader from "./SectionHeader";
import { concepts } from "@/data/fundamentals";

export default function CoreConceptsSection() {
  return (
    <section id="core-concepts" className="scroll-mt-20 border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Core concepts" title="Six ideas the rest of Vastu rests on" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map(({ icon: Icon, name, sanskrit, body }) => (
            <article key={name} className="bg-card p-8">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-medium text-foreground">{name}</h3>
              <p className="text-sm italic text-primary">{sanskrit}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
