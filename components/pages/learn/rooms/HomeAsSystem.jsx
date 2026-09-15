import Image from "next/image";

import systemImage from "@/public/spaces/bedroom.jpg";

export default function HomeAsSystem() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <p className="section-badge">
            The home as a system
          </p>

          <h2 className="section-heading">
            A home is more than a collection of rooms.
          </h2>

          <p className="section-description">
            Rooms inherit meaning from what comes before and after them.
            Movement, daylight, privacy and activity pass across thresholds,
            joining separate spaces into one lived experience.
          </p>

          <div className="mt-9 space-y-4 border-l border-primary/35 pl-6 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Movement</span>{" "}
              connects arrival to daily routines.
            </p>

            <p>
              <span className="font-medium text-foreground">Light</span>{" "}
              carries time through the plan.
            </p>

            <p>
              <span className="font-medium text-foreground">Privacy</span>{" "}
              deepens as the home grows quieter.
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="overflow-hidden border border-border/60 bg-background p-3 divine-shadow">
            <Image
              src="/rooms/floor-plan.jpg"
              alt="Architectural floor plan and material study on a drafting table"
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[4/3] w-full object-cover opacity-90"
            />
          </div>

          <div
            className="absolute inset-8 grid grid-cols-3 grid-rows-3 border border-primary-foreground/60"
            aria-hidden="true"
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((cell) => (
              <div
                key={cell}
                className="border border-primary-foreground/35"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}