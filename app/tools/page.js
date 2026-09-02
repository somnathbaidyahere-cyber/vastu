import ToolsHero from "@/components/pages/tools/ToolsHero";

import Features from "@/components/pages/tools/Features";
import Tools from "@/components/pages/tools/Tools";

export const metadata = {
  title: "Learn Vastu — Fundamentals, Elements, Directions & Rooms | VastuVeda",
  description:
    "A guided path through Vastu Shastra: core principles, the five elements, the meaning of each direction, and room-by-room guidance for the modern Indian home.",
};

export const tools = [
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

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ToolsHero />

      <Tools />

      <Features />
    </div>
  );
}
