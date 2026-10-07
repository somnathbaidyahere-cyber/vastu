import Image from "next/image";
import { ArrowRight } from "lucide-react";

const whatsappUrl =
  "https://wa.me/918017449616?text=" +
  encodeURIComponent(
    "Hello VastuGuru, I would like to start a consultation about my space."
  );

export default function ConsultationHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/heroImages/doorway.webp"
        alt="A calm doorway with natural light opening into a home"
        width={1536}
        height={1024}
        fetchPriority="high"
        preload
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-foreground/90 via-foreground/55 to-foreground/30" />


      <div className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-medium uppercase tracking-widest text-surface">
          Vastu Consultation
        </span>

        <h1 className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-3xl font-heading leading-[1.15] text-primary-foreground/80 md:text-5xl">
          Understand your home. Make decisions with confidence.
        </h1>

        <p className="mt-6 max-w-xl hero-description text-secondary">
          A one-on-one consultation that reads your space through orientation,
          layout, and context — and leaves you with clear, practical next
          steps.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-surface px-8 py-4 text-base font-medium text-brand-brown transition-all hover:bg-brand-cream hover:shadow-lg"
        >
          Start a consultation

          <ArrowRight
            className="h-4 w-4"
            aria-hidden="true"
          />
        </a>

        <p className="mt-5 text-sm text-secondary">
          No lengthy forms. Start with a conversation.
        </p>
      </div>
    </section>
  );
}