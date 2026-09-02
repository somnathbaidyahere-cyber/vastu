"use client";

import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">

        {/* Intro */}
        <div className="lg:col-span-4">
          <HelpCircle className="mt-7 h-7 w-7 text-primary" />

          <h2 className="section-heading">
            Questions, answered
          </h2>

          <p className="section-description max-w-sm">
            Practical notes to keep in mind before you explore VastuGuru.
          </p>
        </div>

        {/* FAQ */}
        <div className="lg:col-span-8">
          <div className="divide-y divide-border border-y border-border">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index}>

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 py-4 text-left sm:py-5 md:py-6"
                  >
                    {/* Number */}
                    <span
                      className={`w-7 shrink-0 font-heading text-sm transition-colors md:text-base ${
                        isOpen
                          ? "text-primary"
                          : "text-primary/30"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span className="flex-1 text-sm font-medium text-foreground md:text-base">
                      {faq.question}
                    </span>

                    {/* Toggle */}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-light text-primary transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Reserved answer space */}
                  <div
                    className={`grid transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-6 pl-12 pr-10">
                        <p
                          className={`max-w-2xl text-xs leading-relaxed text-muted-foreground transition-opacity duration-200 sm:text-sm ${
                            isOpen ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
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

export default FAQ;