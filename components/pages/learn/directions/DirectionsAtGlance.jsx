import { elementIcon, directions } from "@/data/directions";

export default function DirectionsAtGlance() {
  return (
    <section
      id="glance"
      className="scroll-mt-20 border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            At a glance
          </span>

          <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
            All eight, compared
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-border/60 bg-card">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border/60 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <th className="px-6 py-4">Direction</th>
                <th className="px-6 py-4">Sanskrit</th>
                <th className="px-6 py-4">Element</th>
                <th className="px-6 py-4">Quality</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border/60">
              {directions.map((direction) => {
                const Icon = elementIcon[direction.element];

                return (
                  <tr
                    key={direction.code}
                    className="transition-colors hover:bg-secondary/40"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {direction.name}
                    </td>

                    <td className="px-6 py-4 text-sm italic text-primary">
                      {direction.sanskrit}
                    </td>

                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                        {direction.element}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-muted-foreground">
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