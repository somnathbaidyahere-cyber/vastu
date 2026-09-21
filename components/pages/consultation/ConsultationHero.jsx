import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function ConsultationHero() {
  return (
    <header className="relative min-h-[calc(100svh-5rem)] overflow-hidden border-b border-border/60">
      <Image
        src="/rooms/doorway-2.webp"
        alt="A sequence of quiet stone doorways illuminated by natural light"
        width={1536}
        height={1024}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-foreground/90 via-foreground/55 to-foreground/10" />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-end px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="max-w-2xl text-primary-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Consultation
          </p>

          <h1 className="mt-5 text-5xl font-medium leading-[1.06] sm:text-6xl lg:text-7xl">
            Have a space in mind?
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            Bring us the home you are planning, changing, or trying to
            understand. We’ll help you read it with clarity and practical
            context.
          </p>

          <a
            href="#booking"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 font-medium text-primary transition-colors hover:shadow-divine-glow"
          >
            Book a consultation
            <ArrowDown className="h-4 w-4 transition-all duration-150 group-hover:translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}