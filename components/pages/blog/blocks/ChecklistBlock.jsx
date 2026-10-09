"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function ChecklistBlock({ value }) {
  const items = value?.items ?? [];

  const [checkedItems, setCheckedItems] = useState(() =>
    items.map((item) => Boolean(item.checked)),
  );

  if (items.length === 0) {
    return null;
  }

  const completedCount = checkedItems.filter(Boolean).length;
  const isComplete = completedCount === items.length;
  const progress = (completedCount / items.length) * 100;

  function toggleItem(index) {
    setCheckedItems((previous) =>
      previous.map((checked, i) => (i === index ? !checked : checked)),
    );
  }

  return (
    <section
      aria-label={value.title || "Interactive checklist"}
      className="my-6 rounded-2xl border border-border/70 bg-accent-muted/30 p-5 sm:my-8 sm:p-7 lg:my-10"
    >
      {value.title && (
        <h3 className="mb-5 text-xl font-medium leading-snug text-foreground sm:text-2xl">
          {value.title}
        </h3>
      )}

      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between gap-3 text-sm">
          <span className="text-muted-foreground">Your progress</span>

          <span className="font-medium tabular-nums text-foreground">
            {completedCount} of {items.length} completed
          </span>
        </div>

        <div
          className="h-1.5 overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-label="Checklist completion"
          aria-valuemin={0}
          aria-valuemax={items.length}
          aria-valuenow={completedCount}
        >
          <div
            className={`h-full rounded-full transition-[width,background-color] duration-500 ease-out ${
              isComplete ? "bg-emerald-500" : "bg-primary"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ul>
        {items.map((item, index) => {
          const isChecked = Boolean(checkedItems[index]);
          const checkboxId = `checklist-${value._key || "block"}-${index}`;

          return (
            <li key={item._key || checkboxId}>
              <label
                htmlFor={checkboxId}
                className="group flex cursor-pointer items-start gap-2 md:gap-3 rounded-xl p-1 md:p-2 lg:p-3 transition-colors hover:bg-muted/60"
              >
                <span className="relative mt-0.5 flex size-5 shrink-0 items-center justify-center">
                  <input
                    id={checkboxId}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleItem(index)}
                    className={`peer size-5 shrink-0 cursor-pointer appearance-none rounded-md border bg-white
    transition-colors duration-300
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-ring focus-visible:ring-offset-2
    ${
      isComplete
        ? "checked:border-emerald-500 checked:bg-emerald-500"
        : "checked:border-primary checked:bg-primary"
    }
    border-border`}
                  />

                  <Check
                    aria-hidden="true"
                    className="pointer-events-none absolute size-3.5 text-white
    opacity-0 transition-opacity duration-200
    peer-checked:opacity-100"
                    strokeWidth={2.5}
                  />
                </span>

                <span
                  className={`text-base leading-7 transition-colors duration-300 ${
                    isChecked
                      ? "text-slate-800/70 line-through decoration-border"
                      : "text-foreground/90"
                  }`}
                >
                  {item.text}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {/* Fixed-height slot prevents layout shift */}
      <div className="mt-2 md:mt-3 flex min-h-6 items-center">
        <p
          className={`text-sm font-medium transition-[opacity,color] duration-300 ${
            isComplete
              ? "text-primary-hover opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          role="status"
          aria-live="polite"
        >
          Checklist completed.
        </p>
      </div>
    </section>
  );
}
