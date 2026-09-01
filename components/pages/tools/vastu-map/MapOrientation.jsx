import Link from "next/link";
import { ArrowRight, Compass, Crosshair, Map } from "lucide-react";
import SectionLabel from "../../../ui/SectionLabel";


const steps = [
  {
    number: "01",
    icon: Crosshair,
    title: "Find the center",
    description:
      "Identify the approximate center of your home's floor plan.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Establish North",
    description:
      "Stand near the center and use your smartphone compass to find North.",
  },
  {
    number: "03",
    icon: Map,
    title: "Read the map",
    description:
      "Use North as your reference to understand the eight directional zones.",
  },
];

export default function MapOrientation() {
  return (
    <section className="border-y border-border/60 bg-secondary/35 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-20">

        {/* Introduction */}
        <div className="lg:col-span-5">
          <SectionLabel number="01">
            Understand the framework
          </SectionLabel>

          <h2 className="mt-5 max-w-lg text-3xl font-medium leading-[1.1] text-foreground sm:text-4xl">
            One home. Eight directions.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Once North is established, the remaining directions can be mapped
            around your home. The Vastu Map gives you a simple spatial
            framework for exploring traditional Vastu principles.
          </p>

          <div className="mt-7 border-l-2 border-accent/50 pl-5">
            <p className="text-sm font-medium text-foreground">
              Start with a reliable direction.
            </p>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              If you have not established North yet, use the Vastu Compass
              before exploring the map.
            </p>
          </div>

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
          <div className="overflow-hidden rounded-[1.5rem] border border-border bg-background">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`group flex gap-5 p-6 sm:p-7 ${
                    index !== steps.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-medium text-foreground">
                        {step.title}
                      </h3>

                      <span className="font-heading text-xl text-primary/25">
                        {step.number}
                      </span>
                    </div>

                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}