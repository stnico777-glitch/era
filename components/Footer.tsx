import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-era-void text-white">
      <div
        className="h-[3px] bg-gradient-to-r from-transparent via-era-accent/55 to-transparent"
        aria-hidden
      />
      <div className="container-site section-y">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block" aria-label={`${site.name} home`}>
              <Logo variant="light" wordmark="era-solutions" />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              {site.name} is a digital solutions provider specializing in custom
              website development, SEO, targeted ads, CRM automation, and
              branding for service-based businesses.
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-era-accent-on-dark hover:text-era-accent-on-dark-hover"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-2 text-sm text-white/60">Got questions? Call us 24/7</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Working Hours
              </h3>
              <p className="mt-3 text-sm text-white/80">{site.hours.weekdays}</p>
              <p className="text-sm text-era-accent-on-dark">{site.hours.weekdaysTime}</p>
              <p className="mt-3 text-sm text-white/80">{site.hours.sunday}</p>
              <p className="text-sm text-era-accent-on-dark">{site.hours.sundayTime}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Navigation
              </h3>
              <ul className="mt-3 space-y-2">
                {footerNav.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/80 hover:text-era-accent-on-dark"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Contact
              </h3>
              <p className="mt-3 text-sm font-medium text-white/80">Address</p>
              <p className="text-sm text-white/70">{site.addressLine}</p>
              <p className="mt-4 text-sm font-medium text-white/80">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-era-accent-on-dark hover:underline"
              >
                {site.email}
              </a>
              <div className="mt-6 flex gap-4">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-era-accent-on-dark"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-era-accent-on-dark"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="hover:text-era-accent-on-dark">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-era-accent-on-dark">
              Privacy Policy
            </Link>
          </div>
          <p>Copyright © {year} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
