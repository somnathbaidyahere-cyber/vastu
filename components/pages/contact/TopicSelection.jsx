
"use client";

import { ArrowRight } from "lucide-react";
import { useContact } from "./ContactContext";

const TOPICS = [
  {
    id: "general",
    label: "General enquiry",
    prompt: "What would you like to ask us?",
    subtext:
      "For quick questions, methodology details, or general guidance.",
  },
  {
    id: "vastu",
    label: "Vastu question",
    prompt:
      "What specific aspect of Vastu would you like to explore?",
    subtext:
      "Clarification on principles, directions, or orientation concepts.",
  },
  {
    id: "space",
    label: "Discuss a space",
    prompt:
      "Tell us a little about the space you have in mind.",
    subtext:
      "For prospective homes, commercial spaces, or renovation plans.",
  },
  {
    id: "partnership",
    label: "Partnership or collaboration",
    prompt: "How can we collaborate together?",
    subtext:
      "For architects, interior designers, and real estate advisors.",
  },
  {
    id: "other",
    label: "Something else",
    prompt: "What would you like to discuss with us?",
    subtext:
      "Anything else that doesn't fit the categories above.",
  },
];

export default function TopicSelection() {
  const { topic, chooseTopic } = useContact();

  return (
    <section
      id="how-can-we-help"
      className="border-t border-border/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column Description */}
        <div className="space-y-4 lg:col-span-4">
          <p className="section-badge">
            TOPIC OF INQUIRY
          </p>

          <h2 className="section-heading">
            How can we help you today?
          </h2>

          <p className="max-w-xs text-sm leading-relaxed text-[#5C554E]">
            Select a subject below to tailor your query.
            This helps us direct your question to the right
            space specialist immediately.
          </p>
        </div>

        {/* Right Column Interactive List */}
        <div className="lg:col-span-8">
          <ul className="divide-y divide-[#E2DACC] border-t border-[#E2DACC]">
            {TOPICS.map((item) => {
              const isSelected = topic?.id === item.id;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => chooseTopic(item)}
                    aria-pressed={isSelected}
                    className={`group flex w-full items-start justify-between gap-6 rounded-sm px-3 py-6 text-left transition-all duration-200 sm:px-4 sm:py-7 ${
                      isSelected
                        ? "bg-[#F4EFE6]"
                        : "hover:bg-[#F7F2E9]"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <span
                          className={`font-serif text-lg font-medium transition-colors sm:text-xl ${
                            isSelected
                              ? "text-[#8C6A3C]"
                              : "text-[#2C2825] group-hover:text-[#8C6A3C]"
                          }`}
                        >
                          {item.label}
                        </span>

                        {isSelected && (
                          <span className="inline-flex items-center rounded-xs bg-[#8C6A3C] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[#FAF7F0]">
                            Selected
                          </span>
                        )}
                      </div>

                      <p className="text-xs font-light text-[#5C554E] sm:text-sm">
                        {item.subtext}
                      </p>
                    </div>

                    <div className="pt-1">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                          isSelected
                            ? "border-[#8C6A3C] bg-[#8C6A3C] text-[#FAF7F0]"
                            : "border-[#E2DACC] text-[#7A7268] group-hover:border-[#8C6A3C] group-hover:text-[#8C6A3C]"
                        }`}
                      >
                        <ArrowRight
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isSelected
                              ? "translate-x-0"
                              : "-translate-x-1 group-hover:translate-x-0"
                          }`}
                        />
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}