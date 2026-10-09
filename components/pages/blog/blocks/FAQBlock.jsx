"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQBlock({ value }) {
  const items = value?.items ?? [];
  const [openItems, setOpenItems] = useState({});

  if (items.length === 0) {
    return null;
  }

  function toggleItem(index) {
    setOpenItems((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  }

  return (
    <section
      className="my-12"
      aria-label={value.title || "Frequently asked questions"}
    >
      {value.title && (
        <h2 className="mb-6 text-2xl font-medium leading-tight text-foreground sm:text-3xl">
          {value.title}
        </h2>
      )}

      <div className="divide-y divide-border/70 border-y border-border/70">
        {items.map((item, index) => {
          const isOpen = Boolean(openItems[index]);
          const itemId = item._key || `faq-${index}`;
          const triggerId = `${itemId}-trigger`;
          const panelId = `${itemId}-panel`;

          return (
            <div key={itemId}>
              <h3>
                <button
                  id={triggerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium leading-7 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-lg"
                >
                  <span>{item.question}</span>

                  <ChevronDown
                    aria-hidden="true"
                    className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>

              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="pb-5 pr-8 text-base leading-7 text-foreground/75"
                >
                  <p className="whitespace-pre-line">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}