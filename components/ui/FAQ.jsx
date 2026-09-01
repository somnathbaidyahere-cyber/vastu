import React from "react";
import { HelpCircle } from "lucide-react";
import { faqs } from "@/data/vastuCompassData";

function FAQ() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <HelpCircle className="h-7 w-7 text-primary mt-3" />
          <h2 className="section-heading">Questions, answered</h2>

          <p className="text-center lg:text-left section-description">
            Practical notes before you take your first reading.
          </p>
        </div>
        <div className="divide-y divide-border border-t border-border lg:col-span-8">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium text-foreground">
                {question}
                <span className="text-xl font-light text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl pr-8 text-sm leading-relaxed text-muted-foreground">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
