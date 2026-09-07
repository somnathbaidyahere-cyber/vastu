import Link from "next/link";
import { Home } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-medium sm:text-4xl"><Home className="mx-auto mb-6 h-7 w-7 opacity-80" aria-hidden="true" />Now read it on your own home</h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">The fundamentals only settle once you apply them. Open the toolkit and walk your plan with the compass and the mandala.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/tools" className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-7 py-3.5 text-base font-medium text-primary transition-colors hover:bg-brand-cream">Explore the tools</Link>
          <Link href="/learn" className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10">Back to Learn</Link>
        </div>
      </div>
    </section>
  );
}
