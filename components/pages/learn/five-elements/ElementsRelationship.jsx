export default function ElementsRelationship() {
  return (
    <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex flex-col justify-center items-center text-center max-w-7xl ">
        <div className="lg:col-span-6">
          {/* Existing relationship SVG */}
        </div>

        <div className="lg:col-span-6">
          <span className="section-badge">
            How they relate
          </span>

          <h2 className="section-heading">
            One system, not five parts
          </h2>

          <p className="section-description">
            The elements are traditionally described as nesting inside one
            another — space gives rise to air, air to fire, fire to water,
            water to earth.
          </p>
        </div>
      </div>
    </section>
  );
}