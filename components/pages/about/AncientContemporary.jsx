import Image from "next/image";
import { useState } from "react";

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

        <div className="relative mt-12 aspect-video overflow-hidden rounded-xl border border-border/60">
          <div className="absolute inset-0">
            <ImagePlaceholder
              src="/about/modern-courtyard.webp"
              alt="contemporary courtyard"
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
              alt="indian ancient courtyard"
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

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Then
            </p>
            <ul className="mt-4 space-y-3 border-t border-border/60 pt-4">
              {then.map((item) => (
                <li key={item} className="text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              Now
            </p>
            <ul className="mt-4 space-y-3 border-t border-border/60 pt-4">
              {now.map((item) => (
                <li key={item} className="text-foreground">
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

function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  ratio = "aspect-[4/3]",
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden border border-border/60 ${ratio} ${className}`}
      >
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-border/60 bg-secondary/40 ${ratio} ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.12), transparent 55%), radial-gradient(circle at 75% 80%, hsl(var(--primary) / 0.10), transparent 50%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-6 border border-primary/15"
      />
      {label && (
        <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}