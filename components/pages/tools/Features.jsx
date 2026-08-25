import React from "react";

export const toolSteps = [
  {
    number: "01",
    title: "Orient your space",
    description:
      "Start with the compass to lock the true directional axis of your home or plot.",
  },
  {
    number: "02",
    title: "Read your zones",
    description:
      "Open the interactive map to see how each room sits within the directional sectors of your property.",
  },
  {
    number: "03",
    title: "Study the mandala",
    description:
      "Overlay the Vastu Purusha Mandala to understand the padas, deities, and sensitive marma points.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                How it works
              </span>
              <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
                A calm, three-step ritual
              </h2>
              <p className="mt-4 text-muted-foreground">
                Orient, map, then remedy — the same sequence a traditional
                consultant follows on site.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {toolSteps.map((step) => (
                <FeatureRow key={step.number} {...step} />
              ))}
            </div>
          
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ number, title, description }) {
  return (
    <div className="flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-medium text-primary">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
