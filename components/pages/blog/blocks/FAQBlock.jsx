"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQBlock({ value }) {
  const items = value?.items ?? [];
  const [openIndex, setOpenIndex] = useState(null);

  if (items.length === 0) {
    return null;
  }

  function toggleItem(index) {
    setOpenIndex((previous) => (previous === index ? null : index));
  }

  return (
    <section
      className="my-12 mx-auto max-w-4xl space-y-6"
      aria-label={value.title || "Frequently asked questions"}
    >
      {value.title && (
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {value.title}
        </h2>
      )}

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const itemId = item._key || `faq-${index}`;
          const triggerId = `${itemId}-trigger`;
          const panelId = `${itemId}-panel`;

          return (
            <div
              key={itemId}
              className={`group overflow-hidden rounded-xl border border-border-strong transition-all duration-200 ${
                isOpen
                  ? "border-border/50 bg-primary-foreground/70 shadow-sm"
                  : "border-border/30 bg-accent-muted/40 hover:border-border/40 hover:bg-primary-foreground"
              }`}
            >
              <h3>
                <button
                  id={triggerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-semibold leading-6 text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:p-5 md:text-base"
                >
                  <span
                    className={`flex-1 text-foreground/80 transition-colors group-hover:text-primary ${
                      isOpen ? "text-primary" : ""
                    }`}
                  >
                    {item.question}
                  </span>

                  <div
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-primary text-surface"
                        : "bg-accent text-white"
                    }`}
                  >
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4"
                    />
                  </div>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isOpen}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="px-4 pb-5 pt-0 text-sm leading-relaxed text-foreground-muted sm:px-5 sm:pb-5 sm:text-base">
                    <p className="whitespace-pre-line border-t border-border pt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}