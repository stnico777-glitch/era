"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { site, services } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/referral-program", label: "Referral Program" },
];

/** Stagger for `.header-nav-item-animated` (ms between each item). */
const NAV_STAGGER_MS = 70;

function navAnimDelay(step: number) {
  return { animationDelay: `${step * NAV_STAGGER_MS}ms` } as const;
}

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Home is never shown as the “current” nav item — same styling as siblings. */
function navItemActive(pathname: string, href: string) {
  return href !== "/" && pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  const overHero = isHome && !pastHero;

  useEffect(() => {
    if (!isHome) return;

    const hero = document.getElementById("home-hero");
    if (!hero) return;

    const headerHeight = window.matchMedia("(min-width: 768px)").matches
      ? 80
      : 64;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome, pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      key={pathname}
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out",
        overHero
          ? "border-transparent bg-transparent shadow-none backdrop-blur-none"
          : "border-b border-black/[0.06] bg-[#F8EFE5] shadow-sm shadow-black/[0.03]",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="ERA Solutions home"
        >
          <Logo
            priority
            variant={overHero ? "overlay" : "header"}
            wordmark="era-solutions"
          />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main"
        >
          {/* Home first */}
          <Link
            href={nav[0].href}
            className={cn(
              "header-nav-item-animated rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              overHero
                ? "text-white/90 hover:text-era-accent-on-dark"
                : "text-era-ink hover:text-era-accent",
            )}
            style={navAnimDelay(0)}
          >
            {nav[0].label}
          </Link>

          {/* Services next to Home */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "header-nav-item-animated flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                overHero
                  ? pathname.startsWith("/services")
                    ? "text-era-accent-on-dark hover:text-era-accent-on-dark-hover"
                    : "text-white/90 hover:text-era-accent-on-dark"
                  : pathname.startsWith("/services")
                    ? "text-era-accent hover:text-era-accent"
                    : "text-era-ink hover:text-era-accent",
              )}
              style={navAnimDelay(1)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown className="h-3 w-3" />
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 top-full pt-1"
                role="menu"
              >
                <div className="min-w-[220px] rounded-xl border border-black/[0.08] bg-white py-2 shadow-era-card">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-4 py-2 text-sm text-era-ink hover:bg-era-surface hover:text-era-accent"
                      role="menuitem"
                    >
                      {s.shortTitle}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block border-t border-black/5 px-4 py-2 text-sm font-medium text-era-accent hover:bg-era-surface"
                    role="menuitem"
                  >
                    All services
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Remaining links */}
          {nav.slice(1).map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "header-nav-item-animated rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                overHero
                  ? navItemActive(pathname, item.href)
                    ? "text-era-accent-on-dark hover:text-era-accent-on-dark-hover"
                    : "text-white/90 hover:text-era-accent-on-dark"
                  : navItemActive(pathname, item.href)
                    ? "text-era-accent hover:text-era-accent"
                    : "text-era-ink hover:text-era-accent",
              )}
              style={navAnimDelay(i + 1)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className={cn(
              "header-nav-item-animated hidden rounded-full border px-4 py-2 text-sm font-semibold transition-colors xl:inline-flex",
              overHero
                ? "border-white/30 text-white hover:border-era-accent-on-dark hover:text-era-accent-on-dark"
                : "border-era-dark/15 text-era-ink hover:border-era-accent hover:text-era-accent",
            )}
            style={navAnimDelay(nav.length + 1)}
          >
            Search
          </Link>
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "header-nav-item-animated inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors",
              overHero
                ? "bg-white text-era-ink hover:bg-white/90"
                : "bg-era-ink text-era-cream hover:bg-era-ink-hover",
            )}
            style={navAnimDelay(nav.length + 2)}
          >
            Book Now
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className={cn(
              "header-nav-item-animated hidden items-center gap-2 text-sm font-semibold lg:inline-flex",
              overHero ? "text-white" : "text-era-ink",
            )}
            style={navAnimDelay(nav.length + 3)}
          >
            <PhoneIcon
              className={cn(
                "h-4 w-4",
                overHero ? "text-era-accent-on-dark" : "text-era-accent",
              )}
            />
            {site.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-lg p-2 lg:hidden",
            overHero ? "text-white" : "text-era-ink",
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-black/[0.06] bg-[#F8EFE5] lg:hidden"
        >
          <div className="container-site flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-era-ink hover:bg-era-surface"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-era-muted">
              Services
            </p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-lg px-3 py-2 pl-6 text-base text-era-ink hover:bg-era-surface"
              >
                {s.shortTitle}
              </Link>
            ))}
            <Link
              href="/services"
              className="rounded-lg px-3 py-2 pl-6 text-base font-medium text-era-accent hover:bg-era-surface"
            >
              All services
            </Link>
            <div className="mt-4 flex flex-col gap-3 border-t border-black/5 pt-4">
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-era-ink px-5 py-3 text-center text-sm font-semibold text-era-cream"
              >
                Book Now
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <PhoneIcon className="h-4 w-4 text-era-accent" />
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDown(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 3 14.93 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}
