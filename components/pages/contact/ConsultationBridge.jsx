import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConsultationBridge() {
  return (
    <section className="border-t border-border/70 bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="section-badge ">DEEP-DIVE CONSULTATIONS</span>
          </div>
          <h2 className="section-heading">
            Looking for a structured reading of your space?
          </h2>
          <p className="section-description">
            If you are evaluating a specific floorplan, navigating a renovation,
            or seeking holistic alignment for your residence, explore our full
            consultation methodology.
          </p>
        </div>

        <Link
          href="/consultation"
          className="inline-flex items-center space-x-3 bg-primary text-primary-foreground hover:text-surface text-sm font-medium px-8 py-4 rounded-sm transition-colors duration-200 shrink-0 group shadow-divine"
        >
          <span>Explore Consultation</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}