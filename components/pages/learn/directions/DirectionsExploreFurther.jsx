import Link from "next/link";
import { ArrowRight } from "lucide-react";

const links = [
  {
    href: "/tools/compass",
    label: "Vastu Compass",
  },
  {
    href: "/learn/five-elements",
    label: "Panchabhuta",
  },
  {
    href: "/learn/fundamentals",
    label: "Vastu Fundamentals",
  },
];

export default function DirectionsExploreFurther() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">
          Explore further
        </span>

        <ul className="mt-6 divide-y divide-border/60 border-t border-border/60">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center justify-between py-5 text-lg font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}