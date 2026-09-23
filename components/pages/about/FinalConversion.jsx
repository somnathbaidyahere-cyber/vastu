import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceHolder";

export default function FinalConversion() {
  return (
    <section className="relative overflow-hidden">
      <ImagePlaceholder
        src="/about/modern-villa.webp"
        alt="modern villa evening view"
        label="Full-bleed architectural photograph"
        ratio="aspect-[4/5] sm:aspect-[16/9]"
        className="border-0"
      />
      <div className="absolute inset-0 bg-foreground/25" aria-hidden="true" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <p className="max-w-2xl text-3xl font-medium leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          Your space is unique. Your questions should be too.
        </p>
        <p className="mt-6 max-w-md text-primary-foreground/80">
          Tell us about your space and where you&apos;d like to begin.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground/70 px-7 py-3.5 font-medium text-foreground transition-colors hover:bg-primary-foreground/50 "
          >
            Start a conversation{" "}
            <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/learn"
            className="text-sm font-medium text-primary-foreground underline decoration-primary-foreground/40 underline-offset-4 transition-colors hover:decoration-primary-foreground"
          >
            Explore Vastu
          </Link>
        </div>
      </div>
    </section>
  );
}
