import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FiveElementsHero() {
  return (
    <header className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <span className="section-badge">
            Fundamentals
          </span>

          <h1 className="hero-heading">
            Five {" "}<span className="text-gradient-brand">Elements</span>
          </h1>

          <p className="hero-description">
            Panchabhutas — earth, water, fire, air and space. Vastu reads a
            building through the qualities these five elements represent.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#elements"
               className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Meet the elements
              <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-1" />
            </a>

            <a
              href="#in-vastu"
              className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              See it in a plan
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Image
            src="/section-images/panchabhuta.webp"
            alt=""
            width={600}
            height={400}
            preload
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </header>
  );
}
