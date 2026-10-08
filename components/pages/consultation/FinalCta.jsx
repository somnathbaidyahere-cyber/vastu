import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

const whatsappUrl =
  "https://wa.me/918017449616?text=" +
  encodeURIComponent(
    "Hello VastuGuru, I would like to start a consultation about my space.",
  );

const callUrl = "tel:+918017449616";

const emailUrl =
  "mailto:hello@vastuguru.in?subject=" +
  encodeURIComponent("Vastu consultation request");

export default function FinalCta() {
  return (
    <section className="bg-cta-background py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-3xl font-heading leading-[1.15] text-surface-accent md:text-5xl">
          Let&apos;s understand your home together.
        </h2>

        <p className="mx-auto mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-surface md:text-surface-muted/85">
          Tell us about your space in your own words. We&apos;ll take it from
          there.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-background hero-btn shadow-divine font-medium transition-all duration-200 hover:bg-accent hover:shadow-divine-lg hover:text-primary-foreground"
        >
          Start a conversation
          <ArrowRight
            className="h-4 w-4 animate-[arrow-pendulum_1.8s_infinite]"
            aria-hidden="true"
          />
        </a>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-xs md:text-sm text-accent-muted/90 sm:flex-row sm:gap-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <MessageCircle
              className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-150 group-hover:scale-110 group-hover:text-[#25D366]"
              aria-hidden="true"
            />
            <span className=" transition-transform duration-150 group-hover:translate-x-1">
              WhatsApp
            </span>
          </a>

          <a
            href={callUrl}
            className="group inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone
              className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-150 group-hover:scale-110 group-hover:text-blue-500"
              aria-hidden="true"
            />
            <span className="transition-transform duration-150 group-hover:translate-x-1">
              Call us
            </span>
          </a>

          <a
            href={emailUrl}
            className="group inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail
              className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-150 group-hover:scale-110 group-hover:text-[#EF4444]"
              aria-hidden="true"
            />
            <span className="transition-transform duration-150 group-hover:translate-x-1">
              Email us
            </span>
          </a>
        </div>

        <p className="mt-10 text-xs sm:text-sm text-info-muted">
          No lengthy forms. No complicated intake.
        </p>

        <p className="mt-6 text-xs sm:text-sm text-info-muted">
          Not ready to book yet?{" "}
          <Link
            href="/learn"
            className="group relative font-medium text-accent-muted transition-colors hover:text-accent"
          >
            <span className="ml-1 group inline-flex items-center transition-transform duration-200 group-hover:-translate-y-0.5">
              Explore Vastu{" "}
              <ArrowRight className="w-4 h-4 ml-1 transition-translate duration-100 group-hover:translate-x-0.5" />
            </span>

            <span
              className="absolute -bottom-0.75 left-0 h-px w-full bg-current"
              aria-hidden="true"
            />
          </Link>
        </p>
      </div>
    </section>
  );
}
