const approach = [
  [
    "01",
    "Understand",
    "We begin with your questions, the people using the space, and the decisions in front of you.",
  ],
  [
    "02",
    "Interpret",
    "We read direction, plan, movement, light, and elemental relationships together—not as isolated rules.",
  ],
  [
    "03",
    "Apply",
    "You leave with a clear order of practical next steps suited to the reality of your home.",
  ],
];

export default function ConsultationApproach() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <p className="section-badge">
            Our approach
          </p>

          <h2 className="section-heading">
            Clarity before recommendation.
          </h2>
        </div>

        <ol className="relative mt-14 border-t border-border/70 lg:grid lg:grid-cols-3">
          {approach.map(([number, name, body], index) => (
            <li
              key={number}
              className="relative border-b border-border/70 py-9 lg:border-b-0 lg:border-r lg:px-10 lg:py-12 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span
                className="absolute -top-1.5 left-0 h-3 w-3 rounded-full border-2 border-primary bg-background lg:left-10 lg:first:left-0"
                aria-hidden="true"
              />

              <span className="text-xs font-semibold text-primary">
                {number}
              </span>

              <h3 className="mt-6 text-2xl font-medium text-foreground">
                {name}
              </h3>

              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
                {body}
              </p>

              {index < approach.length - 1 && (
                <span
                  className="absolute right-0 top-0 hidden h-px w-10 animate-pulse bg-primary/60 motion-reduce:animate-none lg:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}