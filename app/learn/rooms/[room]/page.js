import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Compass,
  Eye,
  Home,
  Sparkles,
} from "lucide-react";

import { getRoom, rooms } from "@/data/roomsData";

// Generate all room pages at build time
export function generateStaticParams() {
  return rooms.map((room) => ({
    room: room.slug,
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { room: slug } = await params;
  const room = getRoom(slug);

  if (!room) {
    return {
      title: "Room guide unavailable | VastuVeda",
      description: "Explore thoughtful Vastu guidance for the rooms of a home.",
    };
  }

  const pageTitle = `${room.name} in Vastu — Room Guide | VastuVeda`;
  const pageDescription =
    room.introduction ||
    "Explore thoughtful Vastu guidance for the rooms of a home.";

  return {
    title: pageTitle,
    description: pageDescription,

    alternates: {
      canonical: `/learn/rooms/${room.slug}`,
    },

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "article",
      url: `/learn/rooms/${room.slug}`,
    },

    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function RoomDetailPage({ params }) {
  const { room: slug } = await params;

  const room = getRoom(slug);

  if (!room) {
    notFound();
  }

  const index = rooms.findIndex((item) => item.slug === room.slug);

  const nextRoom = rooms[(index + 1) % rooms.length];

  const pageUrl = `/learn/rooms/${room.slug}`;

  const steps = [
    ["Observe", room.observe, Eye],
    [
      "Understand",
      "Read this room through its function, daylight, movement and relationship to adjoining spaces.",
      Compass,
    ],
    ["Refine", room.consider, Sparkles],
  ];

  return (
    <article className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-4 py-5 sm:px-6 lg:px-8">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>

          <li>
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
          </li>

          <li>
            <Link href="/learn" className="hover:text-primary">
              Learn
            </Link>
          </li>

          <li>
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
          </li>

          <li>
            <Link href="/learn/rooms" className="hover:text-primary">
              Rooms
            </Link>
          </li>

          <li>
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
          </li>

          <li aria-current="page" className="font-medium text-foreground">
            {room.name}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          {/* Content */}
          <div className="lg:col-span-5">
            <div>
              <p className="section-badge">{room.purpose}</p>

              <h1 className="section-heading">{room.name}</h1>

              <p className="section-description">{room.introduction}</p>
            </div>

            {/* Qualities */}
            <div className="mt-8 flex flex-wrap gap-2">
              {room.qualities.map((quality, index) => (
                <span
                  key={quality}
                  className="group relative overflow-hidden rounded-full border border-border bg-surface-muted px-4 py-2 text-xs text-primary"
                  style={{
                    "--shimmer-delay": `${index * 0.8}s`,
                  }}
                >
                  {/* Shimmer */}
                  <span
                    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/30 to-transparent animate-pill-shimmer"
                    style={{
                      animationDelay: "var(--shimmer-delay)",
                    }}
                  />

                  {/* Text */}
                  <span className="relative z-10">{quality}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden border border-border/60 rounded-2xl divine-shadow lg:col-span-7">
            <Image
              src={room.imageUrl}
              alt={room.alt}
              width={1536}
              height={1024}
              priority
              className="aspect-4/3 w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </header>

      {/* Reading Framework */}
      <section className="border-y border-border/60 bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Step Cards Container */}
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map(([heading, body, Icon], index) => {
              const isLast = index === steps.length - 1;

              return (
                <div key={heading} className="relative group">
                  {/* Individual Card */}
                  <section
                    className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-divine p-7 sm:p-9 backdrop-blur-sm 
                         transition-all duration-300 ease-out 
                         hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
                  >
                    {/* Subtle Glow Layer on Hover */}
                    <div className="pointer-events-none absolute -inset-px bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          0{index + 1}
                        </span>

                        <div className="rounded-xl bg-primary/5 p-2.5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h2 className="mt-8 text-2xl font-medium text-foreground transition-colors group-hover:text-primary">
                        {heading}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {body}
                      </p>
                    </div>
                  </section>

                  {/* Animated Arrow Connector */}
                  {!isLast && (
                    <div className="absolute -right-4 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background p-2 text-muted-foreground shadow-md transition-all duration-300 group-hover:translate-x-2 group-hover:border-primary group-hover:text-primary md:flex">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Principle Section */}
          <div className="mt-16 grid gap-8 border-l-2 border-primary/40 pl-6 sm:grid-cols-2 sm:pl-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Keep in mind
              </p>

              <h2 className="mt-3 text-2xl font-medium text-foreground">
                A principle is a lens, not a verdict.
              </h2>
            </div>

            <p className="leading-relaxed text-muted-foreground">
              Climate, structure, family routines and the constraints of an
              existing home all matter. Use these ideas to notice the room more
              clearly before deciding what should change.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="px-4 py-16 sm:px-6 lg:px-8 bg-surface-accent/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* All Rooms */}
          <Link
            href="/learn/rooms#room-explorer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            All rooms
          </Link>

          {/* Next Room */}
          <Link
            href={`/learn/rooms/${nextRoom.slug}`}
            className="group flex items-center gap-5 border-l border-border pl-5"
          >
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Next room
              </p>

              <p className="mt-1 font-medium text-foreground">
                {nextRoom.name}
              </p>
            </div>

            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Learn",
                    item: "/learn",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Rooms",
                    item: "/learn/rooms",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: room.name,
                    item: pageUrl,
                  },
                ],
              },
              {
                "@type": "Article",
                headline: `${room.name} in Vastu`,
                description:
                  room.introduction ||
                  "Explore thoughtful Vastu guidance for the rooms of a home.",
                url: pageUrl,
              },
            ],
          }),
        }}
      />
    </article>
  );
}
