export default function FiveElementsIntro() {
  return (
    <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="section-hero">
            Five substances, one home
          </h2>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8">
          <p>
            Classical Indian thought describes the physical world as a
            combination of five elements — earth, water, fire, air and space.
            Vastu uses this vocabulary to understand qualities within a
            building.
          </p>

          <p>
            Earth gives mass and stability. Water gives coolness and flow.
            Fire gives heat and transformation. Air gives circulation. Space
            gives a building room to breathe.
          </p>

          <p>
            None of the five works in isolation. A home is read by how they
            balance against each other.
          </p>
        </div>
      </div>
    </section>
  );
}