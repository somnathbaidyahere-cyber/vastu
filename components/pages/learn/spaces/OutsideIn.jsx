import Image from "next/image";

export default function OutsideIn() {
  return (
    <section className="relative overflow-hidden border-y border-border/60">
      <Image
        src="/spaces/varanda.webp"
        alt="Architecture connecting landscape, exterior and interior space"
        width={1600}
        height={900}
        loading="lazy"
        className="h-136 w-full object-cover sm:h-168"
      />

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/50 to-transparent px-4 pb-10 pt-32 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <p className="section-badge text-surface-muted">
            From outside in
          </p>

          <h2 className="section-heading text-surface">
            A room begins before its walls
          </h2>

          <div className="mt-7 flex flex-wrap gap-4 text-sm text-surface-muted">
            <span>Landscape</span>
            <span>→</span>
            <span>Building</span>
            <span>→</span>
            <span>Room</span>
            <span>→</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}