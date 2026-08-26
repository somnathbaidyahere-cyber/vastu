import Image from "next/image";

export default function ElementItem({ element }) {
  const Icon = element.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface p-6 transition-colors hover:border-primary/30">
      
      {element.img && (
 <div
  className="
    absolute right-0 top-0 h-full w-full overflow-hidden pointer-events-none
    
    /* Mobile & Tablet: Fixed right-half covering */
    [clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%)]
    
    /* Desktop (lg and up): Start as diagonal triangle, reveal full half on hover */
    lg:[clip-path:polygon(50%_0,100%_0,100%_100%,100%_100%)]
    lg:transition-all lg:duration-700 lg:ease-[cubic-bezier(0.25,1,0.5,1)]
    lg:group-hover:[clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%)]
  "
>
  <Image
    src={element.img}
    alt={element.alt}
    fill
    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
    className="object-cover transition-transform duration-700 group-hover:scale-105"
  />

  <div 
    className="
      absolute inset-0 bg-linear-to-l from-transparent to-surface/80 
      transition-opacity duration-700 ease-out 
      lg:group-hover:opacity-0
    " 
  />
</div>
      )}

      <div className="relative z-10">
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
    </div>
  );
}