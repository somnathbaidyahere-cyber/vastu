'use client'
import { useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceHolder";

export default function AncientContemporary() {
  const [split, setSplit] = useState(50);

  const then = [
    "Traditional courtyard",
    "Natural materials",
    "Open-to-sky spaces",
    "Sunlight",
    "Orientation",
  ];
  const now = [
    "Apartments",
    "Workspaces",
    "Urban homes",
    "Modern architecture",
    "Changing lifestyles",
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-badge">Then and now</p>
          <h2 className="section-heading">
            The spaces have changed. The questions remain.
          </h2>
        </div>

       
<div className="relative mx-auto mt-8 aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-xl border border-border/60 sm:aspect-[16/9] lg:aspect-[16/7]">
  <div className="absolute inset-0">
    <ImagePlaceholder
      src="/about/modern-courtyard.webp"
      alt="Contemporary courtyard"
      label="Contemporary interior"
      ratio="h-full"
      className="h-full rounded-none border-0"
    />
  </div>

  <div
    className="absolute inset-0 overflow-hidden"
    style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
  >
    <ImagePlaceholder
      src="/about/traditional-courtyard.webp"
      alt="Indian ancient courtyard"
      label="Traditional courtyard"
      ratio="h-full"
      className="h-full rounded-none border-0 bg-primary/10"
    />
  </div>

  <div
    className="absolute inset-y-0 w-px bg-primary-foreground"
    style={{ left: `${split}%` }}
    aria-hidden="true"
  />

  <input
    type="range"
    min={0}
    max={100}
    value={split}
    onChange={(event) => setSplit(Number(event.target.value))}
    aria-label="Compare traditional and contemporary spaces"
    className="absolute inset-x-0 bottom-4 mx-auto w-2/3 accent-primary"
  />
</div>

       
<div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-2 lg:gap-12">
  {/* Then */}
  <div className="mx-auto w-full max-w-sm text-center">
    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
      Then
    </p>

    <ul className="mt-4 space-y-3 border-t border-border/60 pt-4 text-left">
      {then.map((item) => (
        <li key={item} className="text-sm text-foreground">
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Now */}
  <div className="mx-auto w-full max-w-sm text-center">
    <p className="text-xs font-medium uppercase tracking-widest text-primary">
      Now
    </p>

    <ul className="mt-4 space-y-3 border-t border-border/60 pt-4 text-left">
      {now.map((item) => (
        <li key={item} className="text-sm text-foreground">
          {item}
        </li>
      ))}
    </ul>
  </div>
</div>
      </div>
    </section>
  );
}
