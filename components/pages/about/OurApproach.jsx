

const approachStages = [
  {
    number: "01",
    name: "Understand",
    copy: "We start with how you actually live — the light you rely on, the rooms you gather in, the questions you're carrying about your space.",
  },
  {
    number: "02",
    name: "Interpret",
    copy: "Vastu principles are read against your specific plot, orientation and constraints, not applied as a fixed template.",
  },
  {
    number: "03",
    name: "Apply",
    copy: "Recommendations are practical and proportionate — small adjustments where they matter, and clarity on what can be left alone.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="section-badge inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="section-badge" />
            Our approach
          </p>

          <h2 className="section-heading  ">Understand, interpret, apply.</h2>
        </div>

        {/* Approach Journey */}
        <div className="relative mt-16 lg:mt-20">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {approachStages.map((stage, index) => {
              const isLast = index === approachStages.length - 1;

              return (
                <div key={stage.number} className="group relative">
                  {/* Step marker */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className="
                        flex h-6 w-6 items-center justify-center
                        rounded-full
                        border border-border/80
                        bg-background
                        text-[10px]
                        font-medium
                        text-primary
                        transition-all duration-500
                        group-hover:scale-110
                        group-hover:border-primary/50
                        group-hover:bg-primary/5
                      "
                    >
                      {stage.number}
                    </div>

                    {/* Mobile connector */}
                    {!isLast && (
                      <div
                        className="ml-3 h-px flex-1 bg-border/60 lg:hidden"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-7 min-h-37.5">
                    <div className="flex items-baseline gap-3">
                      <h3
                        className="
        text-xl font-medium tracking-tight text-foreground
        transition-all duration-500
        group-hover:translate-x-1 group-hover:text-accent-hover
      "
                      >
                        {stage.name}
                      </h3>
                    </div>

                    <p
                      className="
      mt-3 max-w-sm text-sm leading-relaxed
      text-muted-foreground
      transition-colors duration-500
      group-hover:text-foreground/75
    "
                    >
                      {stage.copy}
                    </p>
                  </div>

                  {/* Bottom detail */}
                  <div className="mt-3 md:mt-4 flex items-center gap-2 lg:mt-8">
                    <span
                      className="
      h-px w-8 bg-border/70
      transition-all duration-500
      group-hover:w-12
      group-hover:bg-primary/50
    "
                    />

                    <span
                      className="
      text-[10px] uppercase tracking-[0.18em]
      text-muted-foreground/50
      transition-colors duration-500
      group-hover:text-primary/70
    "
                    >
                      {index === 0 && "Begin"}
                      {index === 1 && "Read"}
                      {index === 2 && "Respond"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}