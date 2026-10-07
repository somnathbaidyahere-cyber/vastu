import { ArrowRight } from "lucide-react";

const whatsappUrl =
  "https://wa.me/918017449616?text=" +
  encodeURIComponent(
    "Hello VastuGuru, I would like to start a consultation about my space."
  );

const whatYouGet = [
  {
    number: "01",
    title: "Understand",
    text: "Your space and your situation — the people using it, and the decisions in front of you.",
  },
  {
    number: "02",
    title: "Interpret",
    text: "The relevant Vastu relationships — direction, layout, light, and elements read together, not as isolated rules.",
  },
  {
    number: "03",
    title: "Apply",
    text: "Practical next steps, in a clear order, suited to the reality of your home.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="border-t border-border/70 bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="section-badge">
            What you get
          </span>

          <h2 className="section-heading">
            A consultation built around your space.
          </h2>

            <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-accent"
        >
          Start a conversation

          <ArrowRight
            className="h-4 w-4"
            aria-hidden="true"
          />
        </a>
        </div>

        <div className="mt-14 space-y-0">
          {whatYouGet.map((item) => (
            <div
              key={item.number}
              className="grid gap-3 border-t border-border py-8 sm:grid-cols-[80px_220px_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="text-sm font-medium text-primary">
                {item.number}
              </span>

              <h3 className="text-lg md:text-xl font-medium text-foreground">
                {item.title}
              </h3>

              <p className="max-w-xl section-para">
                {item.text}
              </p>
            </div>
          ))}

          <div className="border-t border-border" />
        </div>

      
      </div>
    </section>
  );
}