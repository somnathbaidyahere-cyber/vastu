import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


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

function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  ratio = "aspect-[4/3]",
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden border border-border/60 ${ratio} ${className}`}
      >
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-border/60 bg-secondary/40 ${ratio} ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.12), transparent 55%), radial-gradient(circle at 75% 80%, hsl(var(--primary) / 0.10), transparent 50%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-6 border border-primary/15"
      />
      {label && (
        <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}