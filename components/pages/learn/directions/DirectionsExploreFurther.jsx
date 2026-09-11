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

        <ul className="mt-6 divide-y divide-border/60 border-t border-border/60 perspective:[1000px]">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                className="group relative flex items-center justify-between rounded-lg px-4 py-5 text-lg font-medium text-foreground transition-all duration-300 ease-out [transform-style:preserve-3d] hover:z-20 hover:bg-surface hover:text-primary hover:shadow-xl hover:[transform:translateZ(12px)_rotateX(2deg)_scale(1.01)]"
              >
                <span className="transition-transform duration-300 transform-3d group-hover:[transform:translateZ(10px)]">
                  {link.label}
                </span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 [transform-style:preserve-3d] group-hover:translate-x-1.5 group-hover:[transform:translateZ(15px)]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
