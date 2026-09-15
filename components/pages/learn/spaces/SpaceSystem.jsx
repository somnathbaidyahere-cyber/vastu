import React from "react";

export default function SpaceSystem() {
  return (
    <section className="border-y border-primary-foreground/10 bg-primary px-3 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          
          {/* ───────────────── Left: Content ───────────────── */}
          <div className="max-w-xl lg:col-span-5">
            <p className="section-badge text-primary-foreground/60">
              Space as a system
            </p>

            <h2 className="section-heading text-primary-foreground ">
              Space is where the principles come together
            </h2>

            <p className="section-description text-primary-foreground/70">
              Before looking at a room or making a Vastu assessment, understand
              the relationships that shape a space — direction, elements, light
              and movement.
            </p>
          </div>

          {/* ───────────────── Right: System Diagram ───────────────── */}
          <div className="overflow-hidden lg:col-span-7">
            <div className="mx-auto max-w-120">
              
              {/* Responsive Container: Scales cleanly on sub-400px screens */}
              <div className="relative mx-auto aspect-square w-full max-w-85 min-w-75 scale-[0.82] min-[380px]:scale-90 min-[430px]:scale-100 sm:max-w-105">

                {/* ───────── Animated Connections (Flowing SVG) ───────── */}
                <svg
                  viewBox="0 0 400 400"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <marker
                      id="space-arrow"
                      markerWidth="6"
                      markerHeight="6"
                      refX="5"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M 0 0 L 6 3 L 0 6 Z" fill="currentColor" />
                    </marker>
                  </defs>

                  {/* Top (Direction) → Center */}
                  <path
                    d="M 200 65 L 200 140"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    strokeDasharray="4 6"
                    markerEnd="url(#space-arrow)"
                    className="text-primary-foreground"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="20"
                      to="0"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Bottom (Movement) → Center */}
                  <path
                    d="M 200 335 L 200 260"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    strokeDasharray="4 6"
                    markerEnd="url(#space-arrow)"
                    className="text-primary-foreground"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="20"
                      to="0"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Left (Elements) → Center */}
                  <path
                    d="M 85 200 L 140 200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    strokeDasharray="4 6"
                    markerEnd="url(#space-arrow)"
                    className="text-primary-foreground"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="20"
                      to="0"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Right (Light) → Center */}
                  <path
                    d="M 315 200 L 260 200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    strokeDasharray="4 6"
                    markerEnd="url(#space-arrow)"
                    className="text-primary-foreground"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="20"
                      to="0"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>

                {/* ───────── Direction (Top) ───────── */}
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2">
                  <SystemNode label="Direction" description="Orientation" />
                </div>

                {/* ───────── Movement (Bottom) ───────── */}
                <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2">
                  <SystemNode label="Movement" description="Flow" />
                </div>

                {/* ───────── Elements (Left) ───────── */}
                <div className="absolute left-[-2%] top-1/2 -translate-y-1/2">
                  <SystemNode label="Elements" description="Qualities" />
                </div>

                {/* ───────── Light (Right) ───────── */}
                <div className="absolute right-[-2%] top-1/2 -translate-y-1/2">
                  <SystemNode label="Light" description="Perception" />
                </div>

                {/* ───────── Central Space Circle ───────── */}
                <div
                  className="
                    absolute left-1/2 top-1/2
                    flex h-28 w-28 sm:h-36 sm:w-36
                    -translate-x-1/2 -translate-y-1/2
                    items-center justify-center
                    overflow-hidden
                    rounded-full
                    border border-primary-foreground/45
                    bg-primary
                    shadow-[0_0_0_6px_rgba(255,255,255,0.04)]
                  "
                >
                  {/* Subtle Expanding Ripple */}
                  <svg
                    viewBox="0 0 100 100"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-primary-foreground"
                    >
                      <animate
                        attributeName="r"
                        from="2"
                        to="48"
                        dur="3.2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="stroke-opacity"
                        values="0.35;0.15;0"
                        keyTimes="0;0.75;1"
                        dur="3.2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>

                  {/* Central Text Content */}
                  <div className="relative z-10 text-center px-1">
                    <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-primary-foreground/60 sm:text-[10px]">
                      The field
                    </p>
                    <p className="mt-0.5 text-lg font-medium text-primary-foreground sm:text-2xl">
                      Space
                    </p>
                    <p className="mx-auto mt-0.5 max-w-21.25 text-[8px] leading-tight text-primary-foreground/60 sm:max-w-25 sm:text-[10px]">
                      Where relationships meet
                    </p>
                  </div>
                </div>

              </div>

              {/* ───────── Outcome Section ───────── */}
              <div className="mt-2 border-t border-primary-foreground/15 pt-5 sm:mt-6 sm:pt-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
                  What emerges
                </p>
                <h3 className="section-heading text-primary-foreground">
                  Human experience
                </h3>
                <p className="mt-2.5 max-w-md text-xs leading-relaxed text-primary-foreground/65 sm:text-sm">
                  A space is experienced as a whole — not as a collection of isolated principles.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SystemNode({ label, description }) {
  return (
    <div
      className="
        z-10 w-24 rounded-full border border-primary-foreground/25 
        bg-primary-foreground/8 px-2 py-2 text-center 
        text-primary-foreground backdrop-blur-sm sm:w-32 sm:px-2.5 sm:py-2.5
      "
    >
      <p className="text-[11px] font-medium leading-tight sm:text-sm">{label}</p>
      <p className="mt-0.5 text-[8px] text-primary-foreground/60 sm:text-[10px]">
        {description}
      </p>
    </div>
  );
}