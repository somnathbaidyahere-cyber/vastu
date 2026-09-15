import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { rooms } from "@/data/roomsData";

export default function RoomDeepDive() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Go deeper
            </p>

            <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
              Room by room
            </h2>
          </div>

          <a
            href="#room-explorer"
            className="hidden items-center gap-1.5 text-sm font-medium text-primary hover:underline sm:inline-flex"
          >
            View all rooms
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.slice(0, 4).map((room) => (
            <Link
              key={room.slug}
              href={`/learn/rooms/${room.slug}`}
              className="group bg-card p-7 transition-colors hover:bg-secondary"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {room.purpose}
              </p>

              <h3 className="mt-8 text-xl font-medium text-foreground">
                {room.name}
              </h3>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}