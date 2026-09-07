import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { directions } from "@/data/fundamentals";

export default function DirectionsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Orientation</span>
          <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">Eight directions, one reference</h2>
          <p className="mt-4 text-muted-foreground">Fix north for the whole home first. Every zone below is read relative to that single axis — never from a single room or the front door.</p>
          <Link href="/tools/compass" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">Learn to establish north <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="lg:col-span-8">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4">
            {directions.map((d) => <div key={d.code} className="bg-card p-6"><dt className="text-2xl font-medium tracking-tight text-foreground">{d.code}</dt><dd className="mt-1 text-sm font-medium text-primary">{d.name}</dd><dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{d.note}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  );
}
