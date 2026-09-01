import React from "react";
import { HelpCircle } from "lucide-react";

function FAQ({ faqs }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Intro */}
        <div className="lg:col-span-4">
          <HelpCircle className="mt-7 h-7 w-7 text-primary" />

          <h2 className="section-heading">Questions, answered</h2>

          <p className=" max-w-sm leading-relaxed section-description">
            Practical notes to keep in mind before you explore VastuGuru.
          </p>
        </div>

        {/* FAQ */}
        <div className="lg:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center gap-5 py-4 sm:py-5 md:py-6 text-left">
                  {/* Number */}
                  <span className="w-7 shrink-0 font-heading text-sm md:text-base text-primary/30 transition-colors group-open:text-primary">
                    0{index + 1}
                  </span>

                  {/* Question */}
                  <span className="flex-1 font-medium text-foreground text-sm md:text-base">
                    {faq.question}
                  </span>

                  {/* Toggle */}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-light text-primary transition-all group-open:rotate-45 group-open:border-primary/30">
                    +
                  </span>
                </summary>

                <div className="pb-6 pl-12 pr-10">
                  <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
