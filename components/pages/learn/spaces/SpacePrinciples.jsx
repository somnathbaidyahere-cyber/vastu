import Image from "next/image";
import { spacePrinciples } from "@/data/spacesData";

export default function SpacePrinciples() {
  return (
    <section
      id="principles"
      className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-border/60">
            <Image
              src="/section-images/sunlight-on-wall.webp"
              alt="Natural light moving through an architectural interior"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="section-badge">
            What makes a space?
          </p>

          <h2 className="section-heading">
            The relationships between things
          </h2>

          <p className="section-description">
            Space is not simply a collection of objects. Its character
            emerges from how direction, light, movement, elements,
            proportion and openness meet.
          </p>

          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {spacePrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.name}
                  className="flex gap-4 border-t border-border/60 pt-5"
                >
                  <Icon className="h-5 w-5 shrink-0 text-primary" />

                  <div>
                    <h3 className="font-medium">
                      {principle.name}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {principle.note}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}