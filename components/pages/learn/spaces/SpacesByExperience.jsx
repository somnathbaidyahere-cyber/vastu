import Image from "next/image";
import { spaceExperiences } from "@/data/spacesData";

export default function SpacesByExperience() {
  return (
    <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-badge">
            Spaces by experience
          </p>

          <h2 className="section-heading">
            We remember how a space made us feel
          </h2>

          <p className="section-description">
            Function names the activity. Experience describes the
            conditions that allow it to happen well.
          </p>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {spaceExperiences.map((space) => (
            <article key={space.name} className="group">
              <div className="overflow-hidden rounded-lg border border-border/60">
                <Image
                  src={space.image}
                  alt={space.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-4 border-b border-border/60 pb-4">
                <h3 className="text-xl font-medium">
                  {space.name}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {space.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}