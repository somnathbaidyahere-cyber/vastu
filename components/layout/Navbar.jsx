"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const toolsLinks = [
  {
    label: "Vastu Compass",
    href: "/tools/compass",
    description: "Find and understand property directions",
  },
  {
    label: "Interactive Vastu Map",
    href: "/tools/vastu-map",
    description: "Explore Vastu zones across your property",
  },
  {
    label: "Mandala",
    href: "/tools/mandala",
    description: "Understand the Vastu Purusha Mandala",
  },
];

const learnLinks = [
  {
    label: "Fundamentals",
    href: "/learn/fundamentals",
    description: "Core principles of Vastu",
  },
  {
    label: "Five Elements",
    href: "/learn/elements",
    description: "Earth, Water, Fire, Air, Space",
  },
  {
    label: "Directions",
    href: "/learn/directions",
    description: "Significance of each direction",
  },
  {
    label: "Rooms",
    href: "/learn/rooms",
    description: "Vastu guidance for every room",
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={navRef}
      onClick={() => setActiveDropdown(null)}
      className="sticky top-0 z-50 w-full border-b border-border/60 bg-background backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/plant.png"
            alt="A kalash with a coconut and plant"
            width={30}
            height={30}
          />
          <span className="text-gradient-logo text-2xl font-heading font-semibold tracking-tight">
            VastuGuru
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink href="/">Home</NavLink>

          <Dropdown
            label="Tools"
            isOpen={activeDropdown === "tools"}
            onToggle={() =>
              setActiveDropdown(activeDropdown === "tools" ? null : "tools")
            }
            onMouseEnter={() => setActiveDropdown("tools")}
            links={toolsLinks}
          />

          <Dropdown
            label="Learn"
            isOpen={activeDropdown === "learn"}
            onToggle={() =>
              setActiveDropdown(activeDropdown === "learn" ? null : "learn")
            }
            onMouseEnter={() => setActiveDropdown("learn")}
            links={learnLinks}
          />

          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Request Reading
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>
              Home
            </MobileNavLink>

            <MobileDropdown
              label="Tools"
              links={toolsLinks}
              onNavigate={() => setMobileOpen(false)}
            />

            <MobileDropdown
              label="Learn"
              links={learnLinks}
              onNavigate={() => setMobileOpen(false)}
            />

            <MobileNavLink href="/about" onClick={() => setMobileOpen(false)}>
              About
            </MobileNavLink>

            <MobileNavLink href="/blog" onClick={() => setMobileOpen(false)}>
              Blog
            </MobileNavLink>

            <Link
              href="/consultation"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Request Reading
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, isOpen, onToggle, onMouseEnter, links }) {
  const router = useRouter();
  const href = `/${label.toLowerCase()}`;

  return (
    <div className="relative" onMouseEnter={onMouseEnter}>
      <button
        type="button"
        onClick={onToggle}
        className="group inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
        aria-expanded={isOpen}
      >
        <span
          onClick={(e) => {
            e.stopPropagation();
            router.push(href);
          }}
        >
          {" "}
          {label}
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="divine-shadow absolute left-0 top-full mt-1 w-72 overflow-hidden rounded-xl border border-border bg-surface p-2">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary"
              >
                <div className="text-sm font-medium text-foreground group-hover:text-primary">
                  {link.label}
                </div>

                <div className="text-xs text-muted-foreground">
                  {link.description}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-2 py-2 text-base font-medium text-foreground"
    >
      {children}
    </Link>
  );
}

function MobileDropdown({ label, links, onNavigate }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const href = `/${label.toLowerCase()}`;

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-2 py-2 text-base font-medium text-foreground"
      >
        <span
          onClick={(e) => {
            e.stopPropagation();
            router.push(href);
          }}
        >
          {label}
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="flex flex-col gap-1 border-l border-border pl-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="py-1.5 text-sm text-muted-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
