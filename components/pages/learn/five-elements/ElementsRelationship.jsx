export default function ElementsRelationship() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          {/* Existing relationship SVG */}
        </div>

        <div className="lg:col-span-6">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            How they relate
          </span>

          <h2 className="mt-3 text-3xl font-medium sm:text-4xl">
            One system, not five parts
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            The elements are traditionally described as nesting inside one
            another — space gives rise to air, air to fire, fire to water,
            water to earth.
          </p>
        </div>
      </div>
    </section>
  );
}