import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { site } from "@/lib/site";

/** Brand marks via Simple Icons CDN (SVG); decorative trust strip only. */
const platforms: { name: string; src: string; width: number; height: number }[] =
  [
    { name: "Google", src: "https://cdn.simpleicons.org/google/4285F4", width: 96, height: 32 },
    {
      name: "Trustpilot",
      src: "https://cdn.simpleicons.org/trustpilot/00B67A",
      width: 120,
      height: 32,
    },
    { name: "Yelp", src: "https://cdn.simpleicons.org/yelp/FF1A1A", width: 80, height: 32 },
    {
      name: "HomeAdvisor",
      src: "https://cdn.simpleicons.org/homeadvisor/3581FF",
      width: 140,
      height: 32,
    },
    {
      name: "Facebook",
      src: "https://cdn.simpleicons.org/facebook/1877F2",
      width: 96,
      height: 32,
    },
  ];

function FiveStars() {
  return (
    <span
      className="inline-flex shrink-0 items-center gap-px text-era-accent"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-2.5 w-2.5 fill-current sm:h-3 sm:w-3"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function LogoStarsGroup({
  duplicate,
}: {
  duplicate?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-x-8 pr-8 sm:gap-x-10 sm:pr-10 md:gap-x-12 md:pr-12"
      aria-hidden={duplicate}
    >
      {platforms.map((p) => (
        <div
          key={duplicate ? `${p.name}-dup` : p.name}
          className="flex min-w-0 flex-row items-center gap-1 sm:gap-1.5"
        >
          <Image
            src={p.src}
            alt={duplicate ? "" : `${p.name} logo`}
            width={p.width}
            height={p.height}
            unoptimized
            className="h-5 w-auto max-w-full object-contain opacity-90 sm:h-6 md:h-7"
          />
          <FiveStars />
        </div>
      ))}
    </div>
  );
}

export function TrustedBy() {
  return (
    <section
      className="relative border-y border-black/[0.06] bg-era-cream py-6 md:py-8"
      aria-label="Platforms where businesses build reputation"
    >
      <div className="container-site">
        <RevealOnScroll>
          <p className="text-center text-sm font-medium text-era-muted">
            Trusted by service businesses across trades, home services, and
            professional teams working with {site.name}
          </p>
        </RevealOnScroll>
        <RevealOnScroll className="mt-5 md:mt-6" delayMs={90}>
          <p className="text-center text-xs font-medium uppercase tracking-wider text-era-muted">
            Ratings &amp; reviews
          </p>
        </RevealOnScroll>
        <RevealOnScroll className="mx-auto mt-4 w-full max-w-xl sm:max-w-2xl md:mt-5" delayMs={180}>
          <div className="trusted-marquee overflow-hidden px-1 sm:px-2">
            <div className="trusted-ratings-marquee-track flex w-max">
              <LogoStarsGroup />
              <LogoStarsGroup duplicate />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
