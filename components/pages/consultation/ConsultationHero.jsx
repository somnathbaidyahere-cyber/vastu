import Image from "next/image";
import { ArrowRight } from "lucide-react";

const whatsappUrl =
  "https://wa.me/918017449616?text=" +
  encodeURIComponent(
    "Hello VastuGuru, I would like to start a consultation about my space.",
  );

export default function ConsultationHero() {
  return (
    <section className="relative isolate h-[68svh] min-h-125 max-h-170 overflow-hidden">
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

<div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-medium uppercase tracking-widest text-surface">
          Vastu Consultation
        </span>

        <h1 className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-3xl font-heading leading-[1.15] text-primary-foreground/80 md:text-4xl md:max-w-lg lg:text-5xl lg:max-w-3xl">
          Understand your home. Make decisions with confidence.
        </h1>

        <p className="mt-6 max-w-xl hero-description text-secondary">
          A one-on-one consultation that reads your space through orientation,
          layout, and context — and leaves you with clear, practical next steps.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full bg-surface hero-btn px-6 py-3 font-medium transition-colors duration-500"
        >
          {/* Standard color test (bg-amber-200) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-full aspect-square w-[150%] -translate-x-1/2 translate-y-0 rounded-full bg-green-500 transition-transform duration-700 ease-in-out group-hover:translate-y-[-30%]"
          />

          {/* Content */}
          <span className="relative z-10">Start a consultation</span>
          <ArrowRight
            className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
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
