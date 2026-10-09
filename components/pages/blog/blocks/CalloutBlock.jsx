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
    container: "border-border/70 bg-muted/40",
    iconStyle: "text-muted-foreground",
  },
  tip: {
    icon: Lightbulb,
    label: "Tip",
    container: "border-primary/20 bg-primary/5",
    iconStyle: "text-primary",
  },
  important: {
    icon: ShieldAlert,
    label: "Important",
    container: "border-amber-500/30 bg-amber-500/5",
    iconStyle: "text-amber-700 dark:text-amber-400",
  },
  warning: {
    icon: AlertTriangle,
    label: "Warning",
    container: "border-destructive/25 bg-destructive/5",
    iconStyle: "text-destructive",
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
      className={`my-8 flex gap-4 rounded-xl border p-5 sm:p-6 ${style.container}`}
      aria-label={value.title || style.label}
    >
      <Icon
        aria-hidden="true"
        className={`mt-0.5 size-5 shrink-0 ${style.iconStyle}`}
        strokeWidth={1.8}
      />

      <div className="min-w-0 flex-1">
        <h3 className="mb-2 text-base font-semibold leading-6 text-foreground">
          {value.title || style.label}
        </h3>

        <p className="whitespace-pre-line text-base leading-7 text-foreground/80">
          {value.text}
        </p>
      </div>
    </aside>
  );
}