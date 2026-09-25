import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from 'lucide-react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP;
const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL;

function Footer() {
  const message = "Hi Vastu Guru! I have a vastu query.."
  const encodedMessage = encodeURIComponent(message.trim());

  return (
    <footer className="border-t border-border/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
      {/* Logo & Brand Name */}
      <Link href="/" className="flex items-center gap-1">
        <Image 
          src="/plant.png" 
          alt="A kalash with a coconut and plant" 
          width={30} 
          height={30} 
        />
        <span className="text-gradient-logo text-2xl font-heading font-semibold tracking-tight">
          VastuGuru
        </span>
      </Link>

      {/* Brief Description */}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Ancient Vastu wisdom for modern, harmonious living. Tools,
        learning, and expert guidance for every home.
      </p>

      {/* Contact Icons Section */}
      <div className="mt-5 flex items-center gap-3">
        {/* Phone / Call Icon */}
        <a
          href={`tel:${WHATSAPP_NUMBER}`}
          aria-label="Call Us"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-900/10 bg-amber-50/50 text-amber-900 transition-all hover:bg-amber-600 hover:text-white hover:shadow-md"
        >
          <Phone className="h-4 w-4" />
        </a>

        {/* WhatsApp Icon */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-900/10 bg-emerald-50/50 text-emerald-600 transition-all hover:bg-emerald-600 hover:text-white hover:shadow-md"
        >
          {/* WhatsApp Custom SVG for Brand Accuracy */}
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>

        {/* Email Icon */}
        <a
          href={`${EMAIL_ADDRESS}`}
          aria-label="Send Email"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-900/10 bg-amber-50/50 text-amber-900 transition-all hover:bg-amber-600 hover:text-white hover:shadow-md"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Tools
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/tools/compass" className="hover:text-primary">
                  Vastu Compass
                </a>
              </li>
              <li>
                <a href="/tools/vastu-map" className="hover:text-primary">
                  Interactive Vastu Map
                </a>
              </li>
              <li>
                <a href="/tools/mandala" className="hover:text-primary">
                  Mandala
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Learn
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/learn/fundamentals" className="hover:text-primary">
                  Fundamentals
                </Link>
              </li>
              <li>
                <a href="/learn/five-elements" className="hover:text-primary">
                  Five Elements
                </a>
              </li>
              <li>
                <a href="/learn/directions" className="hover:text-primary">
                  Directions
                </a>
              </li>
                <li>
                <a href="/learn/spaces" className="hover:text-primary">
                  Spaces
                </a>
              </li>
              <li>
                <Link href="/learn/rooms" className="hover:text-primary">
                  Rooms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
               <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/consultation" className="hover:text-primary">
                  Consultations
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VastuVeda. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-primary">
              Privacy
            </a>
            <a href="/terms-and-conditions" className="hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
