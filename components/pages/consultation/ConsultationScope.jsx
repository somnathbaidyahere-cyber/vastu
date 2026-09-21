import { ArrowRight } from "lucide-react";

const scope = [
  "Space",
  "Orientation",
  "Layout",
  "Elements",
  "Context",
];

export default function ConsultationScope() {
  return (
    <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl text-center">
        <p className="section-badge">
          What the consultation covers
        </p>

        <h2 className="section-heading">
          A connected reading of your space.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          We look at each layer in relation to the next. Context determines
          which observations matter and how they can be applied responsibly.
        </p>

        <div className="mx-auto mt-14 flex max-w-5xl flex-col items-stretch justify-center gap-2 sm:flex-row sm:items-center">
          {scope.map((item, index) => (
            <div key={item} className="contents">
              <div
                className={`flex min-h-24 flex-1 items-center justify-center border px-5 text-base font-medium ${
                  item === "Context"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/70 bg-background text-foreground"
                }`}
              >
                {item}
              </div>

              {index < scope.length - 1 && (
                <ArrowRight
                  className="mx-auto h-4 w-4 rotate-90 text-primary/55 sm:rotate-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}