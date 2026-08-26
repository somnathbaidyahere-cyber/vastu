import React from "react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative isolate px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-primary-foreground ">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/backgrounds/early-morning.webp"
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
<div className="relative overflow-hidden rounded-4xl border border-white/35 bg-primary/40 px-6 py-16 text-center shadow-xl backdrop-blur-md backdrop-saturate-150 sm:px-12 lg:py-20">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.917_0.032_82.8/0.12),transparent_50%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,oklch(0.644_0.111_55/0.12),transparent_50%)]" />
          <div className="relative">
            <h2 className="text-3xl font-heading font-medium text-primary-foreground sm:text-4xl">
              Begin your journey toward harmony
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Explore our free Vastu tools, read curated articles, or book a
              consultation with an expert.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-7 py-3.5 text-base font-medium text-primary transition-all hover:bg-brand-cream"
              >
                Book a Consultation
              </a>
              <a
                href="/blog"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-base font-medium text-primary-foreground transition-colors bg-foreground  hover:bg-primary-foreground/10 hover:text-foreground"
              >
                Read the Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
