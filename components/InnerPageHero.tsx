import Image from "next/image";
import { innerHero } from "@/lib/visuals";

export function InnerPageHero({
  eyebrow,
  title,
  subtitle,
  variant = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
}) {
  if (variant === "dark") {
    return (
      <section className="relative overflow-hidden border-b border-white/10 bg-era-void">
        <div className="pointer-events-none absolute inset-0 glow-radial opacity-90" aria-hidden />
        <div className="absolute inset-0">
          <Image
            src={innerHero.defaultMesh.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-era-void via-era-void/95 to-era-void" />
          <div className="mesh-accent pointer-events-none absolute inset-0 opacity-35" />
          <div
            className="noise-overlay pointer-events-none absolute inset-0 opacity-30"
            aria-hidden
          />
        </div>
        <div className="container-site relative z-10 py-14 md:py-20">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-era-accent-on-dark">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-black/[0.06] bg-era-cream">
      <div className="container-site relative py-14 md:py-20">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-era-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-era-ink md:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-era-muted md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
