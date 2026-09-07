import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tools } from "@/data/fundamentals";
import SectionHeader from "./SectionHeader";

export default function InteractiveToolsSection() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Put it to work" title="Two tools that make the theory visible" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tools.map(({ to, icon: Icon, name, body }) => (
            <Link key={to} href={to} className="group flex items-start gap-5 rounded-2xl border border-border/60 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-sm">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></span>
              <span>
                <span className="block text-lg font-medium text-foreground">{name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{body}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">Open tool <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
