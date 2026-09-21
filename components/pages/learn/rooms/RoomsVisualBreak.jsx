import Image from "next/image";

import breakImage from "@/public/spaces/living-space.jpg";

export default function RoomsVisualBreak() {
  return (
    <section className="relative min-h-128 overflow-hidden border-y border-border/60 sm:min-h-160">
      <Image
        src="/rooms/cozy-room.webp"
        alt="A calm living room opening onto a green courtyard"
        loading="lazy"
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-foreground/45" />

      <div className="relative mx-auto flex min-h-128 max-w-7xl items-end px-4 pb-12 sm:min-h-160 sm:px-6 sm:pb-16 lg:px-8">
        <h2 className="max-w-2xl text-3xl section-heading text-primary-foreground sm:text-5xl">
          A good room supports what happens inside it.
        </h2>
      </div>
    </section>
  );
}