import React from 'react'
import Image from 'next/image'
import { Compass, BookOpen, Home, Sun } from "lucide-react";

export default function Hero() {
  return (
         <section className="relative isolate bg-accent-foreground overflow-hidden h-[75vh] md:h-[60vh] lg:h-[85vh] px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">

          {/* Background Image */}
             <div className="absolute inset-0 -z-10">
                  <Image
                    src="/backgrounds/morning-vibe.webp"
                    alt=""
                    fill
                    preload
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover object-center opacity-70"
                  />
                </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[10px] md:text-xs font-medium uppercase tracking-widest text-white">
                <Sun className="h-3.5 w-3.5" />
                Timeless Vastu Guidance
              </span>
              <h1 className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-3xl font-heading leading-[1.15] text-primary-foreground md:text-5xl lg:text-6xl">
                Align your space with{" "}
                <span className="text-gradient-brand">ancient wisdom</span>
              </h1>
              <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-surface-accent">
                VastuVeda blends traditional Indian Vastu Shastra with elegant, modern tools to help
                you create balanced, prosperous, and peaceful homes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/tools/compass"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-xs sm:text-sm md:text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  Explore Tools
                </a>
                <a
                  href="/learn/fundamentals"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-xs sm:text-sm md:text-base font-medium text-accent-muted transition-colors hover:bg-secondary hover:text-foreground"
                >
                  Learn Vastu
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-primary-foreground">
                <div className="flex flex-col  sm:flex-row sm:items-center gap-2">
                  <Compass className="h-4 w-4 text-primary" />
                  <span>Direction Analysis</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <Home className="h-4 w-4 text-primary" />
                  <span>Room Planning</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>Guided Courses</span>
                </div>
              </div>
            </div>
{/* 
            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-brand-cream/40 to-brand-gold/10 blur-2xl" />
              <Image
                src=""
                alt="Traditional Vastu Shastra mandala illustration with lotus and temple architecture"
                width={1344}
                height={896}
                className="relative rounded-2xl border border-border/60 divine-shadow hidden max[480px]:block "
                loading="eager"
              />
            </div> */}
          </div>
        </div>
      </section>
  )
}
