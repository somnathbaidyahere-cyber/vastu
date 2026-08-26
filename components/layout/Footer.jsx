import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-1">
           <Image src="/plant.png" alt="A kalash with a coconut and plant" width={30} height={30}/>
          <span className="text-gradient-brand text-2xl font-semibold tracking-tight">
            VastuGuru
          </span>
        </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Ancient Vastu wisdom for modern, harmonious living. Tools,
              learning, and expert guidance for every home.
            </p>
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
                <a href="/learn/fundamentals" className="hover:text-primary">
                  Fundamentals
                </a>
              </li>
              <li>
                <a href="/learn/elements" className="hover:text-primary">
                  Five Elements
                </a>
              </li>
              <li>
                <a href="/learn/directions" className="hover:text-primary">
                  Directions
                </a>
              </li>
              <li>
                <a href="/learn/rooms" className="hover:text-primary">
                  Rooms
                </a>
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
                <a href="/blog" className="hover:text-primary">
                  Blog
                </a>
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
            <a href="/privacy" className="hover:text-primary">
              Privacy
            </a>
            <a href="/terms" className="hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
