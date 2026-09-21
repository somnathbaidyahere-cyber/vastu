import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bath,
  BedDouble,
  BookOpen,
  CookingPot,
  DoorOpen,
  HandPlatter,
  Home,
  Sofa,
  Sparkles,
  Sun,
} from "lucide-react";

import { rooms } from "@/data/roomsData";

const roomIcons = {
  bedroom: BedDouble,
  kitchen: CookingPot,
  "living-room": Sofa,
  study: BookOpen,
  dining: HandPlatter,
  "prayer-quiet-space": Sparkles,
  entrance: DoorOpen,
  bathroom: Bath,
  "courtyard-open-space": Sun,
};

export default function RoomExplorer() {
  return (
    <section
      id="room-explorer"
      className="scroll-mt-24 border-y border-border/60 bg-secondary/25 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-badge">
              Room explorer
            </p>

            <h2 className="section-heading">
              Explore the rooms
            </h2>
          </div>

          <p className="section-description">
            Begin with the space you use every day, then notice how it connects
            to the rest of your home.
          </p>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => {
            const Icon = roomIcons[room.slug] || Home;

            return (
              <Link
                key={room.slug}
                href={`/learn/rooms/${room.slug}`}
                className="group block"
              >
                <article>
                  <div className="relative overflow-hidden border border-border/60 bg-card">
                    <Image
                      src={room.imageUrl}
                      alt={room.alt}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="aspect-4/3 w-full object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.025]"
                    />

                    <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-primary backdrop-blur-sm">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="border-b border-border/60 py-5">
                    <h3 className="text-xl font-medium text-foreground">
                      {room.name}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {room.purpose}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}