const factors = [
  "Direction",
  "Elements",
  "Light",
  "Movement",
];

export default function SpaceSystem() {
  return (
    <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl text-center">
        <p className="section-badge">
          Space as a system
        </p>

        <h2 className="section-heading">
          Experience is the outcome, not the ingredient
        </h2>

        <div className="mt-14 grid gap-3 sm:grid-cols-4">
          {factors.map((factor) => (
            <div
              key={factor}
              className="border border-border/60 bg-card px-5 py-7 text-sm font-medium"
            >
              {factor}
            </div>
          ))}
        </div>

        <div className="mx-auto h-12 w-px bg-primary/35" />

        <div className="mx-auto max-w-xl border border-primary/35 bg-card px-8 py-8">
          <p className="text-xs uppercase tracking-widest text-primary">
            Held together as
          </p>

          <p className="mt-2 text-2xl font-medium">
            Space
          </p>
        </div>

        <div className="mx-auto h-12 w-px bg-primary/35" />

        <p className="text-3xl font-medium sm:text-4xl">
          Human experience
        </p>
      </div>
    </section>
  );
}