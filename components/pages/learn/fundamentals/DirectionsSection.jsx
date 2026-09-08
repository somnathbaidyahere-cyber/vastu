import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { directions } from "@/data/fundamentals";

export default function DirectionsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="section-badge">Orientation</span>
          <h2 className="section-heading">Eight directions, one reference</h2>
          <p className="section-description">
            Fix north for the whole home first. Every zone below is read
            relative to that single axis — never from a single room or the front
            door.
          </p>
          <Link
            href="/tools/compass"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Learn to establish north <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-8">
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {directions.map((d) => (
              <div
                key={d.code}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-lg`}
              >
                {/* Soft Colored Ambient Glow Underlayer */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${d.accentColor} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <dt className="text-2xl font-semibold tracking-tight text-foreground">
                        {d.code}
                      </dt>
                      {/* Subtle visual color pill */}
                      <span
                        className={`h-2 w-2 rounded-full bg-current ${d.accentColor.split(" ")[2]}`}
                      />
                    </div>

                    <dd className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/90">
                      {d.name}
                    </dd>
                  </div>

                  <dd className="mt-3 text-xs leading-relaxed text-muted-foreground/90">
                    {d.note}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
