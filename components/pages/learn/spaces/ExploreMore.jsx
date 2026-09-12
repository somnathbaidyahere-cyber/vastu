import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Grid3X3,
  Leaf,
  DoorOpen,
} from "lucide-react";

const links = [
  {
    title: "Directions",
    description: "Understand orientation and spatial character.",
    href: "/learn/directions",
    icon: Compass,
  },
  {
    title: "Five Elements",
    description: "Explore elemental qualities within space.",
    href: "/learn/five-elements",
    icon: Leaf,
  },
  {
    title: "Rooms",
    description: "Apply spatial thinking to individual rooms.",
    href: "/learn/rooms",
    icon: DoorOpen,
  },
  {
    title: "Fundamentals",
    description: "Return to the principles beneath the plan.",
    href: "/learn/fundamentals",
    icon: Grid3X3,
  },
];

export default function ExploreMore() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Continue exploring
        </p>

        <h2 className="mt-3 max-w-2xl text-3xl font-medium sm:text-4xl">
          From an idea of space to the rooms you use
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-card p-7 transition-colors hover:bg-secondary"
              >
                <Icon className="h-5 w-5 text-primary" />

                <h3 className="mt-8 text-lg font-medium">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}