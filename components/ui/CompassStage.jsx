"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Where the needle rests before the visitor interacts: slightly "off direction".
const IDLE_ANGLE = -32;
const FOLLOW_MS = 500;
const SPIN_MS = 1400;

const TICKS = Array.from({ length: 24 }, (_, i) => i * 15);
const LETTERS = [
  { label: "N", x: 50, y: 17, strong: true },
  { label: "E", x: 83, y: 50 },
  { label: "S", x: 50, y: 83 },
  { label: "W", x: 17, y: 50 },
];

/**
 * Renders the compass, then any server-rendered children beneath it.
 * Anything inside with `data-compass-target="home"` (or any other value) is a
 * target the needle aligns to on hover, focus or touch. When the target is
 * "home", `data-aligned="true"` is set on the wrapper so CSS can nudge the
 * CTA arrow (see `group-data-[aligned=true]/stage` in not-found.js).
 */
export default function CompassStage({ children }) {
  const stageRef = useRef(null);
  const compassRef = useRef(null);
  const angleRef = useRef(IDLE_ANGLE);
  const frameRef = useRef(0);
  const reducedRef = useRef(false);
  const timerRef = useRef(0);

  const [angle, setAngle] = useState(IDLE_ANGLE);
  const [duration, setDuration] = useState(FOLLOW_MS);
  const [aligned, setAligned] = useState(false);

  // Rotate (via the shortest path) so the needle points at a screen coordinate.
  const pointAt = useCallback((x, y, extraTurn = 0) => {
    const el = compassRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const target = (Math.atan2(y - cy, x - cx) * 180) / Math.PI + 90; // needle art points up
    const prev = angleRef.current;
    const delta = ((target - prev + 540) % 360) - 180;
    angleRef.current = prev + delta + extraTurn;
    setAngle(angleRef.current);
  }, []);

  const pointAtElement = useCallback(
    (node, extraTurn = 0) => {
      const b = node.getBoundingClientRect();
      pointAt(b.left + b.width / 2, b.top + b.height / 2, extraTurn);
      setAligned(node.dataset.compassTarget === "home");
    },
    [pointAt]
  );

  const findHome = () =>
    stageRef.current?.querySelector('[data-compass-target="home"]');

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reducedRef.current = mq.matches;
      setDuration(mq.matches ? 0 : FOLLOW_MS);
    };
    sync();
    mq.addEventListener("change", sync);

    const aim = (e) => {
      const el = e.target instanceof Element ? e.target : null;
      if (el?.closest("[data-compass-spin]")) return; // handled by the compass itself
      const target = el?.closest("[data-compass-target]");
      const hasPoint = typeof e.clientX === "number";
      if (!target && !hasPoint) return;

      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        if (target) {
          pointAtElement(target);
        } else {
          pointAt(e.clientX, e.clientY);
          setAligned(false);
        }
      });
    };

    // When the pointer leaves the page, gently settle toward home.
    const settle = () => {
      const home = findHome();
      if (home) pointAtElement(home);
    };

    window.addEventListener("pointermove", aim, { passive: true });
    window.addEventListener("pointerdown", aim, { passive: true });
    window.addEventListener("focusin", aim);
    document.addEventListener("mouseleave", settle);

    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("pointermove", aim);
      window.removeEventListener("pointerdown", aim);
      window.removeEventListener("focusin", aim);
      document.removeEventListener("mouseleave", settle);
      cancelAnimationFrame(frameRef.current);
      clearTimeout(timerRef.current);
    };
  }, [pointAt, pointAtElement]);

  // Tap / click the compass: one gentle turn, then it settles toward home.
  const handleCompassPress = () => {
    const home = findHome();
    if (!home) return;
    if (reducedRef.current) {
      pointAtElement(home);
      return;
    }
    clearTimeout(timerRef.current);
    setDuration(SPIN_MS);
    pointAtElement(home, 360);
    timerRef.current = window.setTimeout(() => setDuration(FOLLOW_MS), SPIN_MS);
  };

  return (
    <div
      ref={stageRef}
      data-aligned={aligned}
      className="group/stage flex flex-col items-center text-center"
    >
      <div
        ref={compassRef}
        data-compass-spin
        onPointerDown={handleCompassPress}
        aria-hidden="true"
        className="relative h-28 w-28 cursor-pointer touch-manipulation select-none sm:h-32 sm:w-32"
      >
        {/* Ambient pulse */}
        <span className="vg-pulse absolute inset-0 rounded-full border border-[#8B5E2B]/30" />

        {/* Dial */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle cx="50" cy="50" r="47" fill="#FFFCF3" stroke="#8B5E2B" strokeOpacity="0.45" />
          <circle cx="50" cy="50" r="41" fill="none" stroke="#8B5E2B" strokeOpacity="0.18" />
          {TICKS.map((deg) => {
            const cardinal = deg % 90 === 0;
            return (
              <line
                key={deg}
                x1="50"
                y1="3"
                x2="50"
                y2={cardinal ? 8 : 6}
                stroke="#8B5E2B"
                strokeOpacity={cardinal ? 0.7 : 0.35}
                strokeWidth={cardinal ? 1.2 : 0.8}
                transform={`rotate(${deg} 50 50)`}
              />
            );
          })}
          {LETTERS.map(({ label, x, y, strong }) => (
            <text
              key={label}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="7"
              fontFamily="Georgia, 'Times New Roman', serif"
              fill="#8B5E2B"
              fillOpacity={strong ? 1 : 0.55}
            >
              {label}
            </text>
          ))}
        </svg>

        {/* Needle: outer div follows the pointer, inner div sways gently when idle */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotate(${angle}deg)`,
            transition: duration ? `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none",
          }}
        >
          <div className="vg-sway h-full w-full">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <polygon points="50,23 56.5,50 43.5,50" fill="#8B5E2B" />
              <polygon
                points="50,77 56.5,50 43.5,50"
                fill="#EADFC6"
                stroke="#8B5E2B"
                strokeOpacity="0.35"
                strokeWidth="0.6"
              />
              <circle cx="50" cy="50" r="3" fill="#FFFCF3" stroke="#8B5E2B" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}