import { HelpCircle } from "lucide-react";
import SectionLabel from "../../../ui/SectionLabel";


const faqs = [
  {
    question: "What is a Vastu map?",
    answer:
      "A Vastu map is a simplified visual framework for understanding the directional zones of a home once North has been established.",
  },
  {
    question: "Do I need to know North before using the map?",
    answer:
      "Yes. North provides the reference from which the remaining directional zones can be understood. Use the Vastu Compass first if you are unsure of your home's orientation.",
  },
  {
    question: "Where is the center of the Vastu map?",
    answer:
      "The center represents the central area of the layout, traditionally referred to as the Brahmasthan. The eight directional zones are arranged around this central reference.",
  },
  {
    question: "Does every home follow the same Vastu map?",
    answer:
      "The eight-direction framework provides a consistent reference, but actual properties can have different shapes, extensions, entrances and layouts. These details can affect interpretation.",
  },
  {
    question: "Can the Vastu map identify Vastu defects?",
    answer:
      "No. The map is an educational tool for understanding directional relationships. A property-specific assessment requires looking at the actual floor plan and its context.",
  },
];

export default function VastuMapFAQ() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">

        {/* Intro */}
        <div className="lg:col-span-4">
          {/* <SectionLabel number="09">
            Questions, answered
          </SectionLabel> */}

          <HelpCircle className="mt-7 h-7 w-7 text-primary" />

          <h2 className="mt-5 max-w-sm text-3xl font-medium leading-[1.1] text-foreground sm:text-4xl">
            Practical notes before you explore
          </h2>

          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            A few things to keep in mind when using the Vastu Map as an
            educational guide.
          </p>
        </div>

        {/* FAQ */}
        <div className="lg:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group"
              >
                <summary className="flex cursor-pointer list-none items-center gap-5 py-6 text-left">
                  
                  {/* Number */}
                  <span className="w-7 shrink-0 font-heading text-lg text-primary/30 transition-colors group-open:text-primary">
                    0{index + 1}
                  </span>

                  {/* Question */}
                  <span className="flex-1 font-medium text-foreground sm:text-lg">
                    {faq.question}
                  </span>

                  {/* Toggle */}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-light text-primary transition-all group-open:rotate-45 group-open:border-primary/30">
                    +
                  </span>
                </summary>

                <div className="pb-6 pl-12 pr-10">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
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