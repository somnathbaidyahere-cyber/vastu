import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SpacesCTA() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Nature → Space → Direction → Experience → Rooms
          </p>

          <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
            The next question is practical: what belongs in each room?
          </h2>
        </div>

        <div className="lg:col-span-4 lg:text-right">
          <Link
            href="/learn/rooms"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 font-medium transition hover:bg-primary-foreground/10"
          >
            Explore Rooms
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}