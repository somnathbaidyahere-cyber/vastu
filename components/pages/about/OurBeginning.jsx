import Image from "next/image";

export default function OurBeginning() {
  return (
    <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-badge">Why we exist</p>
        <h2 className="section-heading">
          We believe a space is more than walls, rooms and directions.
        </h2>
        <p className="section-description">It is where life unfolds.</p>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We started by asking a simple question: why does one room feel settled
          while another, built the same way, never quite feels right? The answer
          was rarely a single wall or a single direction — it was the
          relationship between all of them. That question is still what shapes
          how we work today.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl">
        <ImagePlaceholder
          src="/section-images/dark-courtyard.webp"
          alt="dark Indian house courtyard"
          label="Threshold / courtyard"
          ratio="aspect-[16/8]"
          className="relative z-0 rounded-xl"
        />

        <div
          className="
      absolute
      left-3
      -bottom-6
      z-20
      max-w-xs
      translate-y-1/2
      border
      border-border/60
      bg-background/90
      px-5
      py-4
      shadow-sm
      sm:left-8
      lg:left-12
    "
        >
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            The threshold between inside and outside — often the first place a
            space starts to make sense.
          </p>
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
  ratio = "aspect-4/3",
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