import { Compass, Eye, Sparkles } from "lucide-react";

const readingSteps = [
  {
    number: "01",
    title: "Observe",
    body: "Where does the room sit?",
    icon: Eye,
  },
  {
    number: "02",
    title: "Understand",
    body: "How does it relate to light, movement and direction?",
    icon: Compass,
  },
  {
    number: "03",
    title: "Refine",
    body: "What practical adjustments are possible?",
    icon: Sparkles,
  },
];

export default function PracticalReading() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <p className="section-badge">
            Practical reading
          </p>

          <h2 className="section-heading">
            Read any room in three passes.
          </h2>
        </div>

        <ol className="mt-12 border-t border-border/60">
          {readingSteps.map((step) => {
            const Icon = step.icon;

            return (
              <li
                key={step.number}
                className="grid gap-5 border-b border-border/60 py-8 sm:grid-cols-12 sm:items-center"
              >
                <span className="text-xs font-medium text-primary sm:col-span-1">
                  {step.number}
                </span>

                <Icon
                  className="h-5 w-5 text-primary sm:col-span-1"
                  aria-hidden="true"
                />

                <h3 className="text-xl font-medium text-foreground sm:col-span-3">
                  {step.title}
                </h3>

                <p className="leading-relaxed text-muted-foreground sm:col-span-7">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}