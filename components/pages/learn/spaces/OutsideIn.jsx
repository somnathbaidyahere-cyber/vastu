import Image from "next/image";

export default function OutsideIn() {
  return (
    <section className="relative overflow-hidden border-y border-border/60">
      <Image
        src="/images/spaces/outside-in.jpg"
        alt="Architecture connecting landscape, exterior and interior space"
        width={1600}
        height={900}
        loading="lazy"
        className="h-[34rem] w-full object-cover sm:h-[42rem]"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 pb-10 pt-32 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
            From outside in
          </p>

          <h2 className="mt-3 max-w-xl text-3xl font-medium sm:text-4xl">
            A room begins before its walls
          </h2>

          <div className="mt-7 flex flex-wrap gap-4 text-sm">
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