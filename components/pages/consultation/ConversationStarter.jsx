"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const callUrl = "tel:+918017449616";

const emailUrl =
  "mailto:hello@vastuguru.in?subject=" +
  encodeURIComponent("Vastu consultation request");

const spaceTypes = [
  "New construction",
  "Renovation",
  "Moving into a new home",
  "Existing home",
  "Office or workspace",
  "Something else",
];

function buildWhatsappUrl({ name, spaceType, need }) {
  const lines = [
    "Hello VastuGuru, I would like to start a consultation.",
  ];

  if (name) {
    lines.push(`My name is ${name}.`);
  }

  if (spaceType) {
    lines.push(`My space: ${spaceType}.`);
  }

  if (need) {
    lines.push(`What I'd like guidance on: ${need}`);
  }

  return (
    "https://wa.me/918017449616?text=" +
    encodeURIComponent(lines.join("\n"))
  );
}

export default function ConversationStarter() {
  const [name, setName] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [need, setNeed] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = buildWhatsappUrl({
      name: name.trim().slice(0, 100),
      spaceType,
      need: need.trim().slice(0, 500),
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative bg-surface overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="section-badge">
            Start a conversation
          </span>

          <h2 className="section-heading">
            Tell us what you need — in one minute.
          </h2>

          <p className="section-description">
            Answer three quick questions and continue on WhatsApp. Nothing is
            submitted or stored — your words go straight into your own
            message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-8"
        >
          <div>
            <label
              htmlFor="consult-name"
              className="block text-sm font-medium text-foreground"
            >
              Your name{" "}
              <span className="text-muted-foreground">
                (optional)
              </span>
            </label>

            <input
              id="consult-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={100}
              placeholder="What should we call you?"
              className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="consult-space-type"
              className="block text-sm font-medium text-foreground"
            >
              What kind of space is it?
            </label>

            <select
              id="consult-space-type"
              value={spaceType}
              onChange={(event) => setSpaceType(event.target.value)}
              className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-base text-foreground focus:border-primary focus:outline-none"
            >
              <option value="">Choose one…</option>

              {spaceTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="consult-need"
              className="block text-sm font-medium text-foreground"
            >
              What would you like guidance on?
            </label>

            <textarea
              id="consult-need"
              value={need}
              onChange={(event) => setNeed(event.target.value)}
              maxLength={500}
              rows={3}
              placeholder="A sentence or two is enough."
              className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col items-center gap-5 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
            >
              <MessageCircle
                className="h-4 w-4"
                aria-hidden="true"
              />

              Continue on WhatsApp

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>

            <p className="text-sm text-muted-foreground">
              Prefer to reach us directly?{" "}
              <a
                href={callUrl}
                className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-accent"
              >
                Call us
              </a>{" "}
              or{" "}
              <a
                href={emailUrl}
                className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-accent"
              >
                email us
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}