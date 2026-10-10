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
    href: "/tools/vastu-map",
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
    <section
      aria-labelledby="tools-section-heading"
      className="bg-primary-foreground px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Three core tools
          </span>

          <h2 id="tools-section-heading" className="section-heading">
            Everything you need for a balanced home
          </h2>

          <p className="section-description">
            Use them in any order, or follow the recommended flow below.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-6 p-0 sm:grid-cols-2">
          {tools.map((tool) => (
            <li key={tool.slug} className="min-w-0">
              <ToolCard
                href={tool.href}
                icon={tool.icon}
                name={tool.name}
                sanskrit={tool.sanskrit}
                description={tool.description}
                highlights={tool.highlights}
                badge={"badge" in tool ? tool.badge : undefined}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
