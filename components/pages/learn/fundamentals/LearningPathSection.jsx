import SectionHeader from "./SectionHeader";
import { learningPath } from "@/data/fundamentals";

export default function LearningPathSection() {
  return (
    <section id="start-learning" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="The learning path" title="Five readings, in order" description="Each one builds on the last. Together they take roughly an evening and leave you able to hold a conversation about any plan." />
        <ol className="mt-12 border-t border-border/60">
          {learningPath.map((item) => (
            <li key={item.n} className="group grid gap-4 border-b border-border/60 py-8 transition-colors hover:bg-secondary/40 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:px-4">
              <span className="text-sm font-medium tracking-widest text-primary sm:col-span-1">{item.n}</span>
              <h3 className="text-xl font-medium text-foreground sm:col-span-4">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-5">{item.body}</p>
              <span className="text-xs uppercase tracking-widest text-muted-foreground sm:col-span-2 sm:text-right">{item.meta}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
