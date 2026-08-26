import React from "react";
import ToolCard from "./ToolCard";

const tools = [
  {
    slug: "compass",
    href: "/tools/compass",
    icon: "compass",
    name: "Vastu Compass",
    sanskrit: "Dik Nirnaya",
    description:
      "Find and understand the directions of your property — true north and the sixteen directional zones, read from a calibrated digital compass.",
    highlights: ["16-zone overlay", "True vs magnetic north", "Save readings"],
    badge: "Most used",
  },
  {
    slug: "map",
    href: "/tools/map",
    icon: "map",
    name: "Interactive Vastu Map",
    sanskrit: "Kshetra Darshana",
    description:
      "Explore Vastu zones across your property on an interactive plan and see which rooms fall in auspicious or afflicted sectors.",
    highlights: [
      "Zone-wise overlay",
      "Room placement hints",
      "Works on your floor plan",
    ],
  },
  {
    slug: "mandala",
    href: "/tools/mandala",
    icon: "mandala",
    name: "Mandala",
    sanskrit: "Vastu Purusha Mandala",
    description:
      "Understand the Vastu Purusha Mandala — the 81-pada grid, its presiding deities, and how the body of Vastu Purusha maps onto your home.",
    highlights: ["81-pada grid", "Deity of each pada", "Marma-point guidance"],
  },
];

export default function Tools() {
  return (
    <section className=" px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-primary-foreground">

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Three core tools
          </span>
          <h2 className="mt-3 text-3xl font-heading font-medium text-foreground sm:text-4xl">
            Everything you need for a balanced home
          </h2>
          <p className="mt-4 text-muted-foreground">
            Use them in any order, or follow the recommended flow below.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard
              key={tool.slug}
              href={tool.href}
              icon={tool.icon}
              name={tool.name}
              sanskrit={tool.sanskrit}
              description={tool.description}
              highlights={tool.highlights}
              badge={"badge" in tool ? tool.badge : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
