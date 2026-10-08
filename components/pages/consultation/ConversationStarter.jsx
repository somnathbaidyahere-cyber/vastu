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
    "",
    `My space: ${spaceType}.`,
    `What I'd like guidance on: ${need}`,
  ];

  if (name) {
    lines.splice(2, 0, `My name is ${name}.`);
  }

  return (
    "https://wa.me/918017449616?text=" + encodeURIComponent(lines.join("\n"))
  );
}

export default function ConversationStarter() {
  const [name, setName] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [spaceOpen, setSpaceOpen] = useState(false);
  const [need, setNeed] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanName = name.trim().slice(0, 100);
    const cleanSpaceType = spaceType.trim();
    const cleanNeed = need.trim().slice(0, 500);

    if (!cleanSpaceType || !cleanNeed) {
      return;
    }

    const url = buildWhatsappUrl({
      name: cleanName,
      spaceType: cleanSpaceType,
      need: cleanNeed,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="conversation" className="relative bg-surface overflow-hidden px-4 py-10 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="section-badge">Start a conversation</span>

          <h2 className="section-heading">
            Tell us what you need — in one minute.
          </h2>

          <p className="section-description">
            Answer three quick questions and continue on WhatsApp. Nothing is
            submitted or stored — your words go straight into your own message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 md:mt-10 lg:mt-12 space-y-4 md:space-y-6 lg:space-y-8">
          <div>
            <label
              htmlFor="consult-name"
              className="block section-para text-foreground"
            >
              Your name{" "}
              <span className="text-muted-foreground">(optional)</span>
            </label>

            <input
              id="consult-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={100}
              placeholder="What should we call you?"
              className="mt-1 md:mt-2 w-full border-0 border-b border-border bg-transparent py-1 md:py-2 lg:py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="consult-space-type"
              className="block section-para text-foreground"
            >
              What kind of space is it?
            </label>

            <button
              id="consult-space-type"
              type="button"
              onClick={() => setSpaceOpen((open) => !open)}
              className="mt-1 md:mt-2 flex w-full items-center justify-between rounded-md md:rounded-lg lg:rounded-xl border border-border/60 bg-surface/70 px-4 py-1 md:py-2 lg:py-3 text-left text-base text-foreground shadow-sm transition-all duration-200 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
              aria-haspopup="listbox"
              aria-expanded={spaceOpen}
            >
              <span
                className={
                  spaceType ? "text-foreground" : "text-muted-foreground"
                }
              >
                {spaceType || "Choose your space type"}
              </span>

              <svg
                className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                  spaceOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Rolling dropdown */}
            <div
              className={`absolute left-0 right-0 top-full z-20 mt-2 origin-top overflow-hidden rounded-xl border border-border/60 bg-surface shadow-lg transition-all duration-300 ease-out ${
                spaceOpen
                  ? "max-h-96 translate-y-0 scale-y-100 opacity-100"
                  : "pointer-events-none max-h-0 -translate-y-2 scale-y-95 opacity-0"
              }`}
            >
              <div className="p-1.5" role="listbox">
                {spaceTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    role="option"
                    aria-selected={spaceType === type}
                    onClick={() => {
                      setSpaceType(type);
                      setSpaceOpen(false);
                    }}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm transition-colors ${
                      spaceType === type
                        ? "bg-primary/8 text-foreground"
                        : "text-foreground hover:bg-primary/5"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="consult-need"
              className="block section-para text-foreground"
            >
              What would you like guidance on?
            </label>

            <textarea
              id="consult-need"
              value={need}
              onChange={(event) => setNeed(event.target.value)}
              required
              maxLength={500}
              rows={2}
              placeholder="A sentence or two is enough."
              className="mt-1 md:mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-1 md:py-2 lg:py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-5 pt-2">
            <button
              type="submit"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary hero-btn px-6 py-3 font-medium text-primary-foreground transition-colors duration-500 disabled:cursor-not-allowed disabled:opacity-50 hover:text-black/70"
            >
              {/* Rising Circle Fill */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-full aspect-square w-[150%] -translate-x-1/2 translate-y-0 rounded-full bg-[#23c75f] transition-transform duration-800 ease-in-out group-hover:translate-y-[-27%]"
              />

              {/* Button Contents */}
              <MessageCircle
                className="relative z-10 h-4 w-4"
                aria-hidden="true"
              />
              <span className="relative z-10">Continue on WhatsApp</span>
              <ArrowRight
                className="relative z-10 h-4 w-4  transition-all duration-400 group-hover:translate-x-1"
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
