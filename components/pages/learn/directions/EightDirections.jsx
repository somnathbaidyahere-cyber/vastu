import Image from "next/image";
import { directions, cardinal, intercardinal } from "@/data/directions";

export default function EightDirections() {
  return (
   <section
  id="the-eight"
  className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
>
  <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">

    {/* Image */}
    <div className="lg:col-span-7">
      <DirectionSystemImage />
    </div>

    {/* Content */}
    <div className="lg:col-span-5">
      <span className="section-badge">
        The system
      </span>

      <h2 className="section-heading">
        Four cardinal, four intercardinal
      </h2>

      <p className="section-description">
        The four cardinal directions mark the plot&apos;s main faces. The
        four intercardinal directions occupy the corners between them and
        carry their own traditional significance.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-8">
        <DirectionGroup
          title="Cardinal"
          items={cardinal}
        />

        <DirectionGroup
          title="Intercardinal"
          items={intercardinal}
        />
      </div>
    </div>

  </div>
</section>
  );
}

function DirectionGroup({ title, items }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        {title}
      </p>

      <ul className="mt-3 space-y-2 text-sm text-foreground">
        {items.map((direction) => (
          <li key={direction.code}>{direction.name}</li>
        ))}
      </ul>
    </div>
  );
}

// function EightDirectionDiagram() {
//   return (
//     <div className="relative mx-auto aspect-square w-full max-w-sm">
//       <svg viewBox="0 0 200 200" className="h-full w-full" fill="none">
//         <circle
//           cx="100"
//           cy="100"
//           r="90"
//           className="stroke-border"
//           strokeWidth="1"
//         />

//         {cardinal.map((direction) => (
//           <line
//             key={direction.code}
//             x1="100"
//             y1="100"
//             x2={(direction.pos.x / 100) * 200}
//             y2={(direction.pos.y / 100) * 200}
//             className="stroke-primary/40"
//             strokeWidth="1.5"
//           />
//         ))}

//         {intercardinal.map((direction) => (
//           <line
//             key={direction.code}
//             x1="100"
//             y1="100"
//             x2={(direction.pos.x / 100) * 200}
//             y2={(direction.pos.y / 100) * 200}
//             className="stroke-primary/20"
//             strokeWidth="1"
//             strokeDasharray="2 3"
//           />
//         ))}

//         <circle cx="100" cy="100" r="2.5" className="fill-primary" />
//       </svg>

//       {directions.map((direction) => (
//         <span
//           key={direction.code}
//           style={{
//             left: `${direction.pos.x}%`,
//             top: `${direction.pos.y}%`,
//           }}
//           className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-xs ${
//             direction.code.length === 1
//               ? "font-medium text-foreground"
//               : "text-muted-foreground"
//           }`}
//         >
//           {direction.name}
//         </span>
//       ))}
//     </div>
//   );
// }


function DirectionSystemImage() {
  return (
    <div className="relative mx-auto aspect-4/3 w-full max-w-2xl">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-8 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Image */}
    <div className="relative h-full w-full overflow-hidden rounded-4xl border border-border/60 bg-surface-muted shadow-divine">
  <Image
    src="/section-images/eight-directions.webp"
    alt="Eight directions in Vastu showing cardinal and intercardinal directions"
    fill
    sizes="(max-width: 1024px) 100vw, 58vw"
    className="object-contain p-6 sm:p-8 lg:p-10"
  />
</div>
    </div>
  );
}