import { spaceMistakes } from "@/data/spacesData";

export default function SpaceMistakes() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="section-badge">
            Common mistakes
          </p>

          <h2 className="section-heading">
            When a principle becomes a shortcut
          </h2>

          <p className="section-description">
            Space needs to be read as a whole. These are common
            ways a thoughtful framework gets reduced to rigid rules.
          </p>
        </div>

        <ol className="border-t border-border/60 lg:col-span-8">
          {spaceMistakes.map((item, index) => (
            <li
              key={item.mistake}
              className="grid gap-3 border-b border-border/60 py-6 sm:grid-cols-12 sm:gap-6"
            >
              <span className="text-xs font-medium text-primary sm:col-span-1">
                0{index + 1}
              </span>

              <h3 className="font-medium sm:col-span-4">
                {item.mistake}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                {item.correction}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}