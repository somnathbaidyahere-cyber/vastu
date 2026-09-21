import {
  Building2,
  FileUp,
  HelpCircle,
  Image,
  MapPin,
} from "lucide-react";

const preparation = [
  [MapPin, "Location", "City and local context"],
  [FileUp, "Floor plan", "A clear plan, if available"],
  [Building2, "Orientation", "A north mark or compass reference"],
  [Image, "Photos", "Useful views of key spaces"],
  [HelpCircle, "Questions", "What you most want to resolve"],
];

export default function ConsultationPreparation() {
  return (
    <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative lg:col-span-7">
          <img
            src="/rooms/floor-plan.webp"
            alt="Architectural floor plan with drawing tools and material references"
            loading="lazy"
            width={1024}
            height={768}
            className="aspect-[4/3] w-full object-cover"
          />

          <div
            className="absolute inset-5 border border-primary-foreground/60"
            aria-hidden="true"
          />

          <span
            className="absolute left-[18%] top-[24%] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary-foreground/70"
            aria-hidden="true"
          />

          <span
            className="absolute bottom-[22%] right-[24%] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary-foreground/70"
            aria-hidden="true"
          />
        </div>

        <div className="lg:col-span-5">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What to prepare
          </p>

          <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
            A few references help us see clearly.
          </h2>

          <ul className="mt-9 border-t border-border/70">
            {preparation.map(([Icon, name, note]) => (
              <li
                key={name}
                className="grid grid-cols-[auto_1fr] gap-x-4 border-b border-border/70 py-4"
              >
                <Icon
                  className="mt-0.5 h-4 w-4 text-primary"
                  aria-hidden="true"
                />

                <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                  <span className="font-medium text-foreground">
                    {name}
                  </span>

                  <span className="text-sm text-muted-foreground">
                    {note}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-7 border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">
              Don’t have everything ready?
            </span>{" "}
            That’s okay. Start with what you have.
          </p>
        </div>
      </div>
    </section>
  );
}