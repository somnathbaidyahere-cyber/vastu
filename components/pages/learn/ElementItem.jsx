export default function ElementItem({ element }) {
  const Icon = element.icon;

  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/30">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        {Icon === "water" ? (
          <span className="h-4 w-4 rounded-full border-2 border-current" />
        ) : (
          <Icon className="h-5 w-5" />
        )}
      </span>

      <p className="mt-4 text-lg font-medium text-foreground">
        {element.label}
      </p>

      <p className="text-sm italic text-primary">
        {element.sanskrit}
      </p>

      <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {element.zone}
      </p>
    </div>
  );
}