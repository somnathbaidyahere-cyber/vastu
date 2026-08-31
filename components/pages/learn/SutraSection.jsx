import { sutras } from "@/data/learnData";

export default function SutraSection() {
  return (
    <section className="bg-ivory-pattern px-4 py-20 sm:px-6 lg:px-8 lg:py-24 bg-surface">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2">
          {sutras.map((sutra, i) => (
            <figure
              key={sutra.source}
              className={`rounded-3xl border border-border/60 p-8 shadow-divine ${i == 0 ? "bg-surface-accent/40" : ""}`}
            >
              <blockquote className="text-lg font-medium leading-relaxed text-foreground">
                “{sutra.text}”
              </blockquote>

              <figcaption className="mt-5 text-sm text-muted-foreground">
                — {sutra.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
