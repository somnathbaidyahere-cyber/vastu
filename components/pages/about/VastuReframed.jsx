'use client'
import { useState, useRef, useEffect } from "react";

const reframedWords = [
  "SPACE",
  "ORIENTATION",
  "ELEMENTS",
  "LIGHT",
  "MOVEMENT",
  "RELATIONSHIP",
];

function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, active];
}

 
export default function VastuReframed() {
  const [ref, active] = useInView(0.4);

  return (
    <section ref={ref} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-badge">Vastu, reframed</p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:gap-4">
          {reframedWords.map((word, index) => (
            <span
              key={word}
              className={`text-2xl font-medium tracking-tight text-foreground transition-all duration-700 ease-out sm:text-3xl lg:text-4xl ${
                active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: active ? `${index * 110}ms` : "0ms" }}
            >
              {word}
              {index < reframedWords.length - 1 && (
                <span className="mt-3 block text-primary/40" aria-hidden="true">
                  ↓
                </span>
              )}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-xl text-lg leading-relaxed text-muted-foreground">
          We explore Vastu as a system of relationships rather than a collection
          of isolated rules.
        </p>
      </div>
    </section>
  );
}