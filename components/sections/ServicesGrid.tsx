import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionWave } from "@/components/SectionWave";
import { services } from "@/lib/site";
import { serviceImages } from "@/lib/visuals";

const icons = [
  "globe",
  "layers",
  "pipeline",
  "megaphone",
  "script",
  "search",
] as const;

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-era-cream-deep">
      <div className="container-site section-y">
        <RevealOnScroll className="reveal-fade">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-era-accent">
            Our Services
          </p>
        </RevealOnScroll>
        <RevealOnScroll className="reveal-fade" delayMs={80}>
          <h2 className="mx-auto mt-3 max-w-3xl text-center font-display text-2xl font-bold leading-tight tracking-tight text-era-ink md:text-3xl lg:text-4xl">
            How we make your business work for you.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll className="reveal-fade" delayMs={150}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-era-muted">
            Websites, CRM, ads, SEO, and scripts—built for operators who need
            pipeline, not noise.
          </p>
        </RevealOnScroll>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((s, i) => {
            const visual = serviceImages[s.slug];
            return (
              <RevealOnScroll
                key={s.slug}
                className="reveal-card mx-auto h-full w-full max-w-[23rem]"
                delayMs={110 + i * 70}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-era-card transition-all duration-300 hover:-translate-y-0.5 hover:border-black/[0.1] hover:shadow-[0_26px_60px_rgba(26,26,28,0.12)]">
                  <div className="relative aspect-[2/1] overflow-hidden bg-era-cream-deep">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`${visual.imageClassName ?? "object-cover"} transition-transform duration-500 ${visual.imageHoverClassName ?? "group-hover:scale-[1.04]"}`}
                    />
                    {visual.imageGradient !== false ? (
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"
                      aria-hidden
                    />
                    ) : null}
                    <div className="absolute bottom-2.5 left-2.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/25 bg-white/95 text-era-accent shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                      <ServiceIcon name={icons[i]} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-3.5 md:p-4">
                    <h3 className="font-display text-[0.98rem] font-bold leading-snug text-era-ink md:text-base">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 flex-1 line-clamp-3 text-sm leading-relaxed text-era-muted">
                      {s.description}
                    </p>
                    <Link
                      href={`/services/${s.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-era-accent transition-all group-hover:gap-2"
                    >
                      Learn more <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
      <SectionWave
        fill="cream-deep"
        curve="pronounced"
        className="h-[min(13vw,6.25rem)] md:h-[min(12vw,6.75rem)]"
      />
    </section>
  );
}

function ServiceIcon({ name }: { name: (typeof icons)[number] }) {
  const className = "h-6 w-6";
  switch (name) {
    case "globe":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "layers":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pipeline":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 19V5M8 19v-6M12 19V9M16 19v-4M20 19v-8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "megaphone":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 11v2h4l5 4V7L7 11H3zM16 8.5a1 1 0 011 1v5a1 1 0 01-1 1M19 6a2 2 0 012 2v8a2 2 0 01-2 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "script":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 6h12M8 12h12M8 18h8M4 6h.01M4 12h.01M4 18h.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "search":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M20 20l-3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
