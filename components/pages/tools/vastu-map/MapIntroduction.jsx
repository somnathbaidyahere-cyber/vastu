import SectionLabel from "./SectionLabel";

export default function MapIntroduction() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          
          {/* Heading */}
          <div className="lg:col-span-7">
            <SectionLabel number="01">
              Understand the framework
            </SectionLabel>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-[1.1] text-foreground sm:text-4xl">
              One home. Eight directions.
            </h2>
          </div>

          {/* Description */}
          <div className="lg:col-span-5">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Once North is established, the remaining directions can be
              mapped around your home. This creates a simple spatial framework
              for exploring traditional Vastu principles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}