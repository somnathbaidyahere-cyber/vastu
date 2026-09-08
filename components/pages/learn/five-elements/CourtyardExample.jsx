export default function CourtyardExample() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-border/60">
            {/* Use your optimized local Image here */}
          </div>
        </div>

        <div className="lg:col-span-6">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            In practice
          </span>

          <h2 className="mt-3 text-3xl font-medium sm:text-4xl">
            The courtyard house
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Nowhere are the five elements easier to see than in the traditional
            courtyard home. An open centre holds space. Verandas let air move
            freely. Water, fire and earth each have their own physical role.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            The courtyard form gives each element room to perform its role
            without turning the house into a collection of isolated rules.
          </p>
        </div>
      </div>
    </section>
  );
}