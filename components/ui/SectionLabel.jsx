
export default function SectionLabel({ number, children }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary">
      <span className="font-heading text-lg text-primary/45">{number}</span>
      <span className="h-px w-8 bg-primary/30" />
      {children}
    </span>
  );
}