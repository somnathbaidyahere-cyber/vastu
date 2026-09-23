import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceHolder";

const spacesWeExplore = [
  {
    name: "Home",
    imageAlt: "A thoughtfully designed Indian home interior",
    image: "/rooms/cozy-room.webp",
  },
  {
    name: "Work",
    imageAlt: "A calm contemporary workspace",
    image: "/spaces/work-station.jpg",
  },
  {
    name: "Entrance",
    imageAlt: "An Indian home entrance and threshold",
    image: "/spaces/home-entrance.jpg",
  },
  {
    name: "Courtyard",
    imageAlt: "A traditional Indian courtyard with natural light",
    image: "/section-images/chettinad-courtyard.webp",
  },
  {
    name: "Personal space",
    imageAlt: "A quiet personal space within a home",
    image: "/spaces/living-space.jpg",
  },
];

export default function SpacesWeExplore() {
  return (
    <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="section-badge">Spaces we explore</span>
          <h2 className="section-heading">
            Different spaces ask different questions.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {spacesWeExplore.map((space, index) => (
            <div key={index} className="relative">
              <ImagePlaceholder
                src={space.image}
                alt={space.imageAlt}
                ratio="aspect-square"
                className="rounded-md"
              />
              <span className="mt-3 block text-sm font-medium text-foreground">
                {space.name}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/rooms"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
        >
          Explore all spaces{" "}
          <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

