import { HeroBackground } from "@/components/HeroBackground";
import { site } from "@/lib/site";

/** Pull hero under the sticky header so video fills the viewport behind a transparent bar. */
const HERO_UNDER_HEADER = "-mt-16 pt-16 md:-mt-20 md:pt-20";

export function Hero() {
  return (
    <section
      id="home-hero"
      className={`relative flex min-h-[100dvh] w-full flex-col overflow-hidden text-white ${HERO_UNDER_HEADER}`}
    >
      <HeroBackground />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/18 via-black/12 to-black/20" />
      <div className="container-site relative z-10 flex flex-1 flex-col justify-center pb-20 pt-8 md:pt-10">
        <h1 className="mx-auto max-w-4xl text-center font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          Scalable solutions for service-based businesses
        </h1>
        <div className="mt-10 flex justify-center">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/35 bg-white/12 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:border-era-accent-on-dark hover:text-era-accent-on-dark"
          >
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
