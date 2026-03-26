import Link from "next/link";
import { SectionWave } from "@/components/SectionWave";
import { site } from "@/lib/site";
import { SoftwareCtaOrbit } from "@/components/sections/SoftwareCtaOrbit";

export function SoftwareCta() {
  return (
    <section className="relative overflow-hidden">
      {/* Match Services section transition color to avoid a visible seam. */}
      <div className="relative z-[5] w-full leading-none">
        <SectionWave
          fill="cream-deep"
          curve="pronounced"
          className="h-[min(13vw,6.25rem)] origin-center scale-y-[-1] md:h-[min(12vw,6.75rem)]"
        />
      </div>
      <div
        className="software-cta-atmosphere pointer-events-none absolute inset-0 z-0"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <div className="absolute right-0 top-8 hidden h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.24),transparent_64%)] blur-2xl md:block lg:h-[24rem] lg:w-[24rem]" />
      </div>
      <div
        className="noise-overlay pointer-events-none absolute inset-0 z-0 opacity-[0.032]"
        aria-hidden
      />

      <div className="container-site relative z-10 px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="mx-auto max-w-xl text-center lg:col-span-6 lg:mx-0 lg:max-w-none lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-era-accent-on-dark/95 md:text-sm">
              Software development services
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold leading-[1.15] tracking-tight text-white md:text-3xl lg:text-4xl">
              Need custom software? We&apos;ve got you covered.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
              At {site.name}, we specialize in crafting custom software solutions
              tailored to your unique needs. Whether you&apos;re optimizing
              workflows, enhancing customer experiences, or building cutting-edge
              applications, our team delivers scalable software to help your
              business thrive. From concept to deployment, we focus on integration
              and usability so you can execute with precision.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-full bg-era-cream px-10 py-3.5 text-sm font-semibold text-era-ink shadow-lg shadow-black/25 transition-colors hover:bg-white"
              >
                Call Now
              </a>
              <Link
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-full border border-white/35 bg-white/12 px-10 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-era-accent-on-dark/90 hover:bg-white/18"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="relative z-[1] min-h-[280px] lg:col-span-6">
            <SoftwareCtaOrbit />
            <div
              className="pointer-events-none absolute inset-0 -z-10 mx-auto flex max-w-[280px] items-center justify-center opacity-90 md:hidden"
              aria-hidden
            >
              <div className="h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_68%)]" />
              <div className="absolute h-36 w-36 rounded-full border border-dashed border-white/10" />
              <div className="absolute flex gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm">
                  <IconCode className="h-5 w-5 text-era-accent-on-dark" />
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm">
                  <IconNodes className="h-5 w-5 text-sky-200/90" />
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm">
                  <IconSpark className="h-5 w-5 text-fuchsia-200" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6l-6 6 6 6M15 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconNodes({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="18" cy="6" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="12" cy="18" r="2.5" fill="currentColor" opacity="0.9" />
      <path
        d="M8 7.5l4 8M16 7.5l-4 8"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.5"
      />
    </svg>
  );
}

function IconSpark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2l1.2 4.2L12 12l-1.2-5.8L12 2zM12 12l4.2 1.2L22 12l-5.8-1.2L12 12zM12 12l-1.2 4.2L12 22l1.2-5.8L12 12zM12 12L7.8 10.8 2 12l5.8 1.2L12 12z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}
