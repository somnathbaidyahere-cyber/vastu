import {
  Info,
  Lightbulb,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

const calloutStyles = {
  note: {
    icon: Info,
    label: "Note",
    container: "border-slate-600/30 bg-slate-100/50",
    iconStyle: "text-slate-600",
  },

  tip: {
    icon: Lightbulb,
    label: "Tip",
    container: "border-green-600/30 bg-green-100/50",
    iconStyle: "text-green-600",
  },

  important: {
    icon: ShieldAlert,
    label: "Important",
    container: "border-amber-600/30 bg-amber-500/5",
    iconStyle: "text-amber-700 dark:text-amber-400",
  },

  warning: {
    icon: AlertTriangle,
    label: "Warning",
    container: "border-red-600/30 bg-red-500/5",
    iconStyle: "text-red-700 dark:text-red-400",
  },
};

export default function CalloutBlock({ value }) {
  if (!value?.text) {
    return null;
  }

  const type = calloutStyles[value.type]
    ? value.type
    : "note";

  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <aside
      className={`my-8 flex gap-2 md:gap-3 lg:gap-4 rounded-xl border p-3 md:p-4 lg:p-5 sm:p-6 ${style.container}`}
      aria-label={value.title || style.label}
    >
      <Icon
        aria-hidden="true"
        className={`mt-0.5 size-5 shrink-0 ${style.iconStyle}`}
        strokeWidth={1.8}
      />

      <div className="min-w-0 flex-1">
        <h3 className="mb-1 md:mb-2 text-base font-semibold leading-6 text-foreground">
          {value.title || style.label}
        </h3>

        <p className="whitespace-pre-line section-para leading-tight text-foreground/80">
          {value.text}
        </p>
      </div>
    </aside>
  );
}