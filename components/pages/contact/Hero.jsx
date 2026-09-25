import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  MessageSquare,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle
} from "lucide-react";

const WHATSAPP_NUMBER =  process.env.NEXT_PUBLIC_WHATSAPP; // country code + number, digits only
const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL;
const RESPONSE_TIME = "24 hours";

export default function Hero() {
  return (
    <header className="relative isolate px-4 pb-20 pt-7 sm:px-6 lg:px-8 lg:pb-28 min-h-180">
      <div className="absolute inset-0 bg-linear-to-r -z-5 from-foreground/90 via-foreground/55 to-foreground/10" />

      <nav aria-label="Breadcrumb" className="px-4 pb-10 sm:px-6 lg:px-8">
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link
              href="/"
              className="text-primary-foreground/80 hover:text-accent-muted transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <ChevronRight
              className="h-3 w-3 text-primary-foreground hover:text-accent-muted"
              aria-hidden="true"
            />
          </li>
          <li
            aria-current="page"
            className="font-medium text-primary-foreground hover:text-accent-muted"
          >
            Contact
          </li>
        </ol>
      </nav>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact/threshold.webp"
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="mx-auto max-w-7xl mt-5">
        {/* Editorial Subtitle Badge */}
         <span className="inline-flex items-center gap-2 rounded-full border border-border-muted bg-card/60 px-4 py-1.5 text-[10px] md:text-xs font-medium uppercase tracking-widest text-surface-muted mt-6">
              <MessageCircle className="h-3.5 w-3.5" />
              Start a Conversation
            </span>

        {/* Serif Headline */}
        <h1 className="hero-heading text-surface">
          Let&rsquo;s{" "}<span className="text-gradient-brand">talk</span> about your space.
        </h1>

        <p className="mt-6 hero-description text-surface max-w-2xl">
          Have a question about Vastu, our analytical approach, or a specific
          property you are evaluating? We are here to listen without judgment or
          pre-packaged templates.
        </p>

        {/* Quick Contact Bar */}
        <div className="mt-30 flex flex-wrap items-center gap-y-3 text-sm text-[#5C554E] pt-8">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-secondary-hover hover:text-primary-foreground transition-colors group"
          >
            <MessageSquare className="w-4 h-4 text-accent group-hover:text-accent-muted" />
            <span className="font-medium">WhatsApp direct</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <span
            className="h-3.5 w-px bg-[#E2DACC] mx-4 hidden sm:inline-block"
            aria-hidden="true"
          />

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="inline-flex items-center space-x-2 text-secondary-hover hover:text-primary-foreground transition-colors group"
          >
            <Mail className="w-4 h-4 text-accent group-hover:text-accent-muted" />
            <span className="font-medium">{EMAIL_ADDRESS}</span>
          </a>

          <span
            className="h-3.5 w-px bg-[#E2DACC] mx-4 hidden sm:inline-block"
            aria-hidden="true"
          />

          <div className="flex items-center space-x-2 text-secondary-hover hover:text-accent-muted">
            <Clock className="w-4 h-4 text-accent group-hover:text-accent-muted" />
            <span>Response within {RESPONSE_TIME}</span>
          </div>
        </div>
      </div>
    </header>
  );
}