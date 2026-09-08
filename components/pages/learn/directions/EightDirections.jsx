import { directions, cardinal, intercardinal } from "@/data/directions";

export default function EightDirections() {
  return (
    <section
      id="the-eight"
      className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            The system
          </span>

          <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
            Four cardinal, four intercardinal
          </h2>

          <p className="mt-5 text-muted-foreground">
            The four cardinal directions mark the plot&apos;s main faces. The
            four intercardinal directions occupy the corners between them and
            carry their own traditional significance.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-8">
            <DirectionGroup title="Cardinal" items={cardinal} />
            <DirectionGroup title="Intercardinal" items={intercardinal} />
          </div>
        </div>

        <div className="lg:col-span-7">
          <EightDirectionDiagram />
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

function EightDirectionDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none">
        <circle
          cx="100"
          cy="100"
          r="90"
          className="stroke-border"
          strokeWidth="1"
        />

        {cardinal.map((direction) => (
          <line
            key={direction.code}
            x1="100"
            y1="100"
            x2={(direction.pos.x / 100) * 200}
            y2={(direction.pos.y / 100) * 200}
            className="stroke-primary/40"
            strokeWidth="1.5"
          />
        ))}

        {intercardinal.map((direction) => (
          <line
            key={direction.code}
            x1="100"
            y1="100"
            x2={(direction.pos.x / 100) * 200}
            y2={(direction.pos.y / 100) * 200}
            className="stroke-primary/20"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
        ))}

        <circle cx="100" cy="100" r="2.5" className="fill-primary" />
      </svg>

      {directions.map((direction) => (
        <span
          key={direction.code}
          style={{
            left: `${direction.pos.x}%`,
            top: `${direction.pos.y}%`,
          }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-xs ${
            direction.code.length === 1
              ? "font-medium text-foreground"
              : "text-muted-foreground"
          }`}
        >
          {direction.name}
        </span>
      ))}
    </div>
  );
}