import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { elements } from "@/data/learnData";
import ElementItem from "./ElementItem";

export default function ElementsReference() {
  return (
    <section className="border-y border-border/60 bg-secondary/40 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Quick reference
            </span>

            <h2 className="section-heading">
              The five elements and their homes
            </h2>
          </div>

          <Link
            href="/learn/elements"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Full element guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {elements.map((element) => (
            <ElementItem
              key={element.label}
              element={element}
            />
          ))}
        </div>
      </div>
    </section>
  );
}