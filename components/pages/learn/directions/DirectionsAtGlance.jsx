import { elementIcon, directions } from "@/data/directions";

// Define color styles for elements (used for both the pill and row hover effect)
const elementStyles = {
  Water: {
    badge: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    rowHover: "hover:bg-blue-500/5 hover:border-blue-500/30 hover:shadow-[0_4px_20px_-2px_rgba(59,130,246,0.15)]",
    cellGlow: "group-hover:text-blue-400",
  },
  Fire: {
    badge: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    rowHover: "hover:bg-amber-500/5 hover:border-amber-500/30 hover:shadow-[0_4px_20px_-2px_rgba(245,158,11,0.15)]",
    cellGlow: "group-hover:text-amber-400",
  },
  Earth: {
    badge: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    rowHover: "hover:bg-emerald-500/5 hover:border-emerald-500/30 hover:shadow-[0_4px_20px_-2px_rgba(16,185,129,0.15)]",
    cellGlow: "group-hover:text-emerald-400",
  },
  Air: {
    badge: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    rowHover: "hover:bg-cyan-500/5 hover:border-cyan-500/30 hover:shadow-[0_4px_20px_-2px_rgba(6,182,212,0.15)]",
    cellGlow: "group-hover:text-cyan-400",
  },
  Space: {
    badge: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    rowHover: "hover:bg-violet-500/5 hover:border-violet-500/30 hover:shadow-[0_4px_20px_-2px_rgba(139,92,246,0.15)]",
    cellGlow: "group-hover:text-violet-400",
  },
  Ether: {
    badge: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    rowHover: "hover:bg-violet-500/5 hover:border-violet-500/30 hover:shadow-[0_4px_20px_-2px_rgba(139,92,246,0.15)]",
    cellGlow: "group-hover:text-violet-400",
  },
};

export default function DirectionsAtGlance() {
  return (
    <section
      id="glance"
      className="scroll-mt-20 border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="section-badge">At a glance</span>

          <h2 className="section-heading">All eight, compared</h2>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-border/60 bg-card p-1">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border/60 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <th className="px-4 sm:px-6 py-4">Direction</th>
                <th className="hidden sm:table-cell px-6 py-4">Sanskrit</th>
                <th className="px-4 sm:px-6 py-4">Element</th>
                <th className="px-4 sm:px-6 py-4">Quality</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border/60">
              {directions.map((direction) => {
                const Icon = elementIcon[direction.element];
                const elementStyle = elementStyles[direction.element] || {
                  badge: "bg-primary/10 text-primary border-primary/20",
                  rowHover: "hover:bg-secondary/40",
                  cellGlow: "group-hover:text-primary",
                };

                return (
                  <tr
                    key={direction.code}
                    className={`group relative backdrop-blur-md transition-all duration-300 ${elementStyle.rowHover}`}
                  >
                    <td className="px-4 sm:px-6 py-4 text-sm font-medium text-foreground transition-colors duration-300">
                      {direction.name}
                    </td>

                    {/* Hidden on mobile, visible on sm screens and up */}
                    <td className={`hidden sm:table-cell px-6 py-4 text-sm italic text-primary transition-colors duration-300 ${elementStyle.cellGlow}`}>
                      {direction.sanskrit}
                    </td>

                    <td className="px-4 sm:px-6 py-4 text-sm">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${elementStyle.badge}`}
                      >
                        {Icon && <Icon className="h-3.5 w-3.5" />}
                        {direction.element}
                      </span>
                    </td>

                    <td className="px-4 sm:px-6 py-4 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
                      {direction.quality}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}