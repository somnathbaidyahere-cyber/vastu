import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SpacesCTA() {
  return (
  <section className="relative isolate bg-primary-foreground px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
  <div className="absolute inset-0 -z-10">
    <Image
      src="/ctas/house-entry.webp"
      alt=""
      fill
      preload
      fetchPriority="high"
      sizes="100vw"
      className="object-cover object-center"
    />
  </div>

  <div className="relative mx-auto max-w-5xl">
    <div
      className="
        relative overflow-hidden rounded-4xl
        border border-white/35
        bg-primary/10
        px-6 py-12
        shadow-xl
        backdrop-blur-sm
        backdrop-saturate-120
        sm:px-10
        lg:px-12 lg:py-14
      "
    >
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.917_0.032_82.8/0.12),transparent_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,oklch(0.644_0.111_55/0.12),transparent_100%)]" />

      {/* Content */}
      <div
        className="
          relative
          grid items-center
          gap-8
          lg:grid-cols-[1fr_auto]
          lg:gap-12
        "
      >
        {/* Left — Text */}
        <div className="text-left">
          <p className="cta-description m-0">
            Nature → Space → Direction → Experience → Rooms
          </p>

          <h2 className="cta-heading mt-3 max-w-3xl">
            The next question is practical: what belongs in each room?
          </h2>
        </div>

        {/* Right — CTA */}
        <div className="flex lg:justify-end">
          <Link
            href="/learn/rooms"
            className="
              group
              inline-flex shrink-0 items-center gap-2
              rounded-full
              border border-primary-foreground/30
              px-7 py-3.5
              font-medium
              transition
              text-surface-accent
              hover:bg-primary-foreground/10
            "
          >
            Explore Rooms
            <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
