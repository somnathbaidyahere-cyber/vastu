const principles = [
  "Context over assumptions",
  "Practicality over complexity",
  "Understanding over fear",
];

export default function ConsultationTrust() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-4xl text-4xl font-medium leading-tight sm:text-5xl">
          No fear. No unnecessary complexity.
        </h2>

        <div className="mt-12 grid gap-px border-y border-primary-foreground/25 bg-primary-foreground/25 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle}
              className="bg-primary px-0 py-6 text-sm font-medium md:px-6 md:first:pl-0"
            >
              {principle}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}