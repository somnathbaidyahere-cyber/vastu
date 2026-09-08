export default function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <span className="text-sm font-medium uppercase tracking-widest text-primary">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
      {action}
    </div>
  );
}
