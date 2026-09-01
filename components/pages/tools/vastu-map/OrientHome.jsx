import Link from "next/link";
import { ArrowRight, Compass, Crosshair, Map } from "lucide-react";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    number: "01",
    icon: Crosshair,
    title: "Locate",
    description: "Identify the approximate center of your home's floor plan.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Orient",
    description: "Use your smartphone compass to establish North.",
  },
  {
    number: "03",
    icon: Map,
    title: "Map",
    description: "Use North as the reference for the eight directional zones.",
  },
];

export default function OrientHome() {
  return (
    <section className="border-y border-border/60 bg-secondary/35 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-20">

        {/* Intro */}
        <div className="lg:col-span-5">
          <SectionLabel number="02">
            Orient your home
          </SectionLabel>

          <h2 className="mt-4 max-w-lg text-3xl font-medium leading-[1.1] text-foreground sm:text-4xl">
            Start with North
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            A Vastu map needs a directional reference. Establish North first,
            then use it to orient the map of your home.
          </p>

          <Link
            href="/tools/compass"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Use the Vastu Compass
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Process */}
        <div className="lg:col-span-7">
          <div className="grid overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="bg-background p-7 transition-colors hover:bg-secondary/40 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-primary" />

                    <span className="font-heading text-2xl text-primary/30">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-medium text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}