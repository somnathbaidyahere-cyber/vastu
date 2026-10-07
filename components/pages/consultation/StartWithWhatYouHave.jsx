import { HelpCircle, MapPin, Home } from "lucide-react";

const startWith = [
  {
    title: "Your question",
    text: "What you most want to understand or resolve about the space.",
    icon: HelpCircle,
  },
  {
    title: "Your location",
    text: "The city and local context the home sits within.",
    icon: MapPin,
  },
  {
    title: "Your space",
    text: "A new build, a renovation, a move, or the home you already live in.",
    icon: Home,
  },
];

export default function StartWithWhatYouHave() {
  return (
    <section className="border-t border-border/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="section-badge">Start with what you have</span>

          <h2 className="section-heading">
            You don&apos; need everything ready.
          </h2>

          <p className="section-description">
            A conversation is enough to begin. Floor plans, photos, and
            orientation details can be shared later, once we know what your
            consultation should focus on.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {startWith.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border/60 bg-linear-to-br from-primary/6 to-secondary/30 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <h3 className="text-xl font-medium text-foreground">
                    {item.title}
                  </h3>
                </div>

                <p className="section-para mt-4">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
