import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/918017449616?text=" +
  encodeURIComponent(
    "Hello VastuGuru, I would like to start a consultation about my space."
  );

const callUrl = "tel:+918017449616";

const emailUrl =
  "mailto:hello@vastuguru.in?subject=" +
  encodeURIComponent("Vastu consultation request");

export default function FinalCta() {
  return (
    <section className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="section-heading text-surface">
          Let&apos;s understand your home together.
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-brand-ivory/80">
          Tell us about your space in your own words. We&apos;ll take it from
          there.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-ivory px-9 py-4 text-base font-medium text-brand-brown transition-all hover:bg-brand-cream hover:shadow-lg"
        >
          Start a conversation

          <ArrowRight
            className="h-4 w-4"
            aria-hidden="true"
          />
        </a>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-brand-ivory/75 sm:flex-row sm:gap-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-brand-ivory"
          >
            <MessageCircle
              className="h-4 w-4"
              aria-hidden="true"
            />
            WhatsApp
          </a>

          <a
            href={callUrl}
            className="inline-flex items-center gap-2 transition-colors hover:text-brand-ivory"
          >
            <Phone
              className="h-4 w-4"
              aria-hidden="true"
            />
            Call us
          </a>

          <a
            href={emailUrl}
            className="inline-flex items-center gap-2 transition-colors hover:text-brand-ivory"
          >
            <Mail
              className="h-4 w-4"
              aria-hidden="true"
            />
            Email us
          </a>
        </div>

        <p className="mt-10 text-sm text-brand-ivory/60">
          No lengthy forms. No complicated intake.
        </p>

        <p className="mt-6 text-sm text-brand-ivory/60">
          Not ready to book yet?{" "}
          <Link
            href="/learn"
            className="font-medium text-brand-ivory underline underline-offset-4 transition-colors hover:text-brand-cream"
          >
            Explore Vastu →
          </Link>
        </p>
      </div>
    </section>
  );
}