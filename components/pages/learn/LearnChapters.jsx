import LearnChapterCard from "./LearnChapterCard";
import { learnChapters } from "@/data/learnData";

export default function LearnChapters() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            The four chapters
          </span>

          <h2 className="section-heading">
            From first principles to the room you sleep in
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {learnChapters.map((chapter, index) => (
            <LearnChapterCard
              key={chapter.href}
              chapter={chapter}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}