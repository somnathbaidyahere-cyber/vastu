
export default function SectionLabel({ number, children }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest ">
      <span className="section-badge text-foreground-subtle ">{number}</span>
      <span className="h-px w-8 bg-primary/30 text-primary" />
      {children}
    </span>
  );
}