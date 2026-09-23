import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceHolder";


export default function ConversionOne() {
  return (
    <section className="relative overflow-hidden border-y border-border/60">
      <ImagePlaceholder
        src="/about/srilankan-house.jpg"
        alt="srilankan contemporary house courtyard"
        label="Editorial photograph"
        ratio="aspect-[16/10] sm:aspect-[21/9]"
        className="border-0"
      />
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/90 via-foreground/50 to-transparent px-4 pb-10 pt-24 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl text-primary-foreground">
          <h2 className="section-heading text-surface-muted">
            Have a space in mind?
          </h2>
          <p className="section-description text-primary-foreground/80">
            Whether you&apos;re planning, building, renovating or simply trying
            to understand your space better, we&apos;d be happy to hear from
            you.
          </p>
          <Link
            href="/contact"
            className="group mt-7 rounded-2xl py-1.5 px-3 inline-flex items-center gap-2 text-sm font-medium border border-border-muted bg-surface-muted/15 text-primary-foreground decoration-primary-foreground/40 underline-offset-4 transition-colors hover:decoration-primary-foreground hover:shadow-divine-glow"
          >
            Discuss your space{" "}
            <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
