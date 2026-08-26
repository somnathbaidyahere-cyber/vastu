import React from 'react'
import { Moon, Wind, Flame, Mountain } from "lucide-react";

export default function Elements() {
  return (
          <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              The Panchabhutas
            </span>
            <h2 className="mt-3 text-3xl font-heading font-medium text-foreground sm:text-4xl">
              Balance the five elements
            </h2>
            <p className="mt-4 text-muted-foreground">
              Vastu teaches that harmony arises when Earth, Water, Fire, Air, and Space are in
              balance within your living environment.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <ElementCard
              icon={<Mountain className="h-6 w-6" />}
              title="Earth"
              subtitle="Prithvi"
              description="Stability, strength, and the foundation of every structure."
            />
            <ElementCard
              icon={<div className="h-6 w-6 rounded-full border-2 border-current" />}
              title="Water"
              subtitle="Jal"
              description="Flow, prosperity, and emotional calm in the north-east."
            />
            <ElementCard
              icon={<Flame className="h-6 w-6" />}
              title="Fire"
              subtitle="Agni"
              description="Energy, transformation, and the power of the south-east."
            />
            <ElementCard
              icon={<Wind className="h-6 w-6" />}
              title="Air"
              subtitle="Vayu"
              description="Movement, communication, and vitality from the north-west."
            />
            <ElementCard
              icon={<Moon className="h-6 w-6" />}
              title="Space"
              subtitle="Akash"
              description="Infinite potential and the consciousness of the brahasthan."
            />
          </div>
        </div>
      </section>
  )
}

function ElementCard({
  icon,
  title,
  subtitle,
  description,
}) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/30 hover:bg-secondary/50">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-medium text-foreground">
        {title}{" "}
        <span className="text-sm font-normal text-muted-foreground">({subtitle})</span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}