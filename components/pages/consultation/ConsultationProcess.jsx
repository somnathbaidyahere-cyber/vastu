const process = [
  [
    "01",
    "Tell us",
    "Share the space and what you would like to understand.",
  ],
  [
    "02",
    "We understand",
    "We review your request and identify what the session should focus on.",
  ],
  [
    "03",
    "Consultation",
    "We walk through the plan, context, and your priorities together.",
  ],
  [
    "04",
    "Next steps",
    "You receive a practical direction for the decisions that follow.",
  ],
];

export default function ConsultationProcess() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <p className="section-badge">
            How it works
          </p>

          <h2 className="section-heading">
            A simple path from question to next step.
          </h2>
        </div>

        <ol className="mt-14 border-l border-primary/35 sm:grid sm:grid-cols-4 sm:border-l-0 sm:border-t">
          {process.map(([number, name, body]) => (
            <li
              key={number}
              className="relative py-7 pl-8 sm:px-5 sm:pb-0 sm:pt-9 sm:first:pl-0"
            >
              <span
                className="absolute -left-1.5 top-9 h-3 w-3 rounded-full border-2 border-primary bg-background sm:-top-1.5 sm:left-5 sm:first:left-0"
                aria-hidden="true"
              />

              <span className="text-xs font-semibold text-primary">
                {number}
              </span>

              <h3 className="mt-4 text-xl font-medium text-foreground">
                {name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}