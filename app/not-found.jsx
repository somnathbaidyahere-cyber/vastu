import Link from "next/link";
import CompassStage from "@/components/ui/CompassStage";

export const metadata = {
  title: "404 — Page not found | VastuGuru",
  robots: { index: false },
};

function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1 group-focus-visible/cta:translate-x-1 group-data-[aligned=true]/stage:translate-x-1 motion-reduce:transition-none"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF8E7] px-6 py-16">
      {/* Soft natural light */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="vg-drift absolute -top-1/4 left-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(240,205,140,0.35),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#F6E9CC]/60 to-transparent" />
      </div>

      <div className="w-full max-w-xl text-center">
        <p className="mb-8 font-serif text-sm tracking-[0.32em] text-[#8B5E2B]">
          VASTUGURU
        </p>

        <CompassStage>
          <p
            aria-hidden="true"
            className="mt-6 bg-gradient-to-b from-[#4A3728] to-[#A9825A] bg-clip-text font-serif text-[clamp(6rem,22vw,11rem)] leading-none text-transparent"
          >
            404
          </p>

          <h1 className="mt-4 font-serif text-3xl text-[#4A3728] sm:text-4xl">
            <span className="sr-only">Error 404. </span>
            A little off direction?
          </h1>

          <p className="mt-3 text-lg text-[#7A6650]">
            Let&rsquo;s find your way back.
          </p>

          <div className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <Link
              href="/"
              data-compass-target="home"
              className="group/cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#8B5E2B] px-8 text-base font-medium text-[#FFF8E7] shadow-[0_10px_24px_-10px_rgba(139,94,43,0.7)] transition-colors hover:bg-[#764C20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5E2B]"
            >
              Go Home
              <Arrow />
            </Link>

            <Link
              href="/tools"
              data-compass-target="tools"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#8B5E2B]/35 px-8 text-base font-medium text-[#4A3728] transition-colors hover:border-[#8B5E2B] hover:bg-[#8B5E2B]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5E2B]"
            >
              Explore Tools
            </Link>
          </div>
        </CompassStage>
      </div>
    </main>
  );
}