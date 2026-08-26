import {
  ArrowRight,
  Mountain,
  Flame,
  Wind,
  Moon,
  Compass,
  Home,
  BookOpen,
  Map,
  Grid3X3,
} from "lucide-react";

const iconMap = {
  earth: Mountain,
  fire: Flame,
  air: Wind,
  space: Moon,
  compass: Compass,
  home: Home,
  book: BookOpen,
  map: Map,
  mandala: Grid3X3,
};

export default function ToolCard({
  href,
  icon,
  name,
  sanskrit,
  description,
  highlights,
  badge,
}) {
  
  const Icon = iconMap[icon];

  return (
    <a
      href={href}
      className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-7 transition-all hover:border-primary/30 hover:bg-secondary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      {badge && (
        <span className="absolute right-6 top-6 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-primary">
          {badge}
        </span>
      )}

      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon name={icon} className="h-6 w-6" />
      </div>

      <h3 className="mt-5 text-xl font-medium text-foreground">{name}</h3>
      <p className="mt-1 text-sm italic text-muted-foreground">{sanskrit}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <ul className="mt-5 space-y-1.5">
        {highlights.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-foreground/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {item}
          </li>
        ))}
      </ul>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Open tool
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}
