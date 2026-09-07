import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="px-4 pt-8 sm:px-6 lg:px-8">
      <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-sm text-muted-foreground">
        <li><Link href="/" className="transition-colors hover:text-primary">Home</Link></li>
        <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
        <li><Link href="/learn" className="transition-colors hover:text-primary">Learn</Link></li>
        <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
        <li aria-current="page" className="font-medium text-foreground">Fundamentals</li>
      </ol>
    </nav>
  );
}
