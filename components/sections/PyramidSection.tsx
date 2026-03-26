"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionWave } from "@/components/SectionWave";
import { site } from "@/lib/site";

/**
 * Core offer grouped into 3 buyer-friendly categories.
 * Each category is tied to pain points + what we install.
 */
const leverageItems = [
  {
    id: "demand",
    shortLabel: "Leadflow",
    icon: "megaphone",
    title: "Predictable lead demand",
    pain:
      "Leads are inconsistent and you’re constantly chasing attention instead of booking calls.",
    bullets: ["Google Ads (PPC)", "SEO setup", "LSA setup"],
  },
  {
    id: "pipeline",
    shortLabel: "Solutions",
    icon: "pipeline",
    title: "Lead management solutions",
    pain:
      "Without a real pipeline, leads get lost, forgotten, or assigned to the wrong follow-up owner.",
    bullets: ["Pipeline + lead ownership", "Lead intake + tracking", "Reminders so nothing dies"],
  },
  {
    id: "convert",
    shortLabel: "Conversions",
    icon: "spark",
    title: "Automations that drive conversions + reviews",
    pain:
      "Slow follow-up and weak proof kills conversion (and hurts your local rankings).",
    bullets: ["Automated follow-up", "Automated reviews (Google proof)", "Conversion-focused website strategy"],
  },
] as const;

export function PyramidSection() {
  const [selectedId, setSelectedId] = useState<string>(leverageItems[0].id);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const panelId = hoverId ?? selectedId;
  const activeCategory =
    leverageItems.find((x) => x.id === panelId) ?? leverageItems[0];
  const activeIndex = Math.max(
    0,
    leverageItems.findIndex((x) => x.id === panelId),
  );

  return (
    <section className="relative overflow-hidden bg-[#fdf7f2]">
      <div className="container-site pt-14 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-16">
        <div className="min-w-0">
            <RevealOnScroll>
              <div
                className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-[#1c2430] md:mb-6 md:h-2"
                aria-hidden
              />
              <h2 className="mx-auto max-w-xl text-center font-display text-[1.65rem] font-bold leading-[1.2] tracking-tight text-[#2d333a] md:text-3xl lg:text-[2.125rem] lg:leading-[1.15]">
                Leads, pipeline, conversion—built as one system.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-[15px] leading-relaxed text-[#6b7076] md:mt-4 md:text-base">
                Demand you can count on, follow-up that doesn&apos;t slip, and
                more booked work from the same attention—wired together for
                operators who want revenue, not chaos.
              </p>
            </RevealOnScroll>

            <div className="relative mt-8 lg:px-8">
              <div
                className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-[#1c2430] lg:block"
                aria-hidden
              />
              <RevealOnScroll
                delayMs={120}
                className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
              >
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[3.75rem]"
                  aria-hidden
                >
                  <div className="flex h-16 w-16 items-center justify-center">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M5 12h12"
                        stroke="#1c2430"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13 6l6 6-6 6"
                        stroke="#1c2430"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[3.75rem]"
                  aria-hidden
                >
                  <div className="flex h-16 w-16 items-center justify-center">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M5 12h12"
                        stroke="#1c2430"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13 6l6 6-6 6"
                        stroke="#1c2430"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </RevealOnScroll>
              <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,560px)_minmax(0,560px)] lg:items-start lg:justify-center lg:gap-8">
              <RevealOnScroll delayMs={100} className="lg:order-2">
                <div className="relative z-10 overflow-hidden rounded-3xl border border-black/[0.06] bg-[#F8EFE5] shadow-[0_20px_50px_rgba(26,26,28,0.08)]">
                  <div className="h-1.5 w-full bg-[#1c2430] md:h-2" aria-hidden />
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F8EFE5]">
                    <Image
                      src="/images/leads-pipeline-conversion-visual-cream-v2.png"
                      alt="Leads, pipeline, conversion — built as one connected system"
                      fill
                      sizes="(max-width: 1024px) 92vw, 520px"
                      className="object-cover object-[center_45%]"
                    />
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={120} className="lg:order-1">
            {/*
              Fixed min-height so content never jumps when switching 1 / 2 / 3.
            */}
              <div className="relative z-10 flex w-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-[#ffffff] shadow-[0_20px_50px_rgba(26,26,28,0.08)]">
              <div className="h-1.5 w-full bg-[#1c2430] md:h-2" aria-hidden />
              <div className="min-h-[24rem] w-full md:min-h-[26rem] lg:min-h-0 lg:aspect-[16/9]">
              <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto px-4 py-3.5 text-center md:px-5 md:py-4">
                <div>
                  <p className="font-display text-lg font-bold tracking-tight text-[#1c2430] md:text-xl">
                    At a glance
                  </p>
                </div>

                <div
                  className="mt-4"
                  onMouseLeave={() => setHoverId(null)}
                >
                  <div
                    className="relative mx-auto flex max-w-full overflow-hidden rounded-full border border-black/[0.08] bg-[#f6efe6] p-1 md:p-1.5"
                    role="tablist"
                    aria-label="Offer areas"
                  >
                    <div
                      className="pointer-events-none absolute inset-y-1 left-1 z-0 w-[calc((100%-0.5rem)/3)] rounded-full border border-black/[0.06] bg-white shadow-[0_8px_18px_rgba(26,26,28,0.10)] transition-transform duration-200 ease-out md:inset-y-1.5 md:left-1.5 md:w-[calc((100%-0.75rem)/3)]"
                      style={{ transform: `translateX(${activeIndex * 100}%)` }}
                      aria-hidden
                    />
                    {leverageItems.map((item, i) => {
                      const active = (hoverId ?? selectedId) === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onMouseEnter={() => setHoverId(item.id)}
                          onClick={() => setSelectedId(item.id)}
                          className={[
                            "relative z-10 flex min-h-[2.5rem] flex-1 flex-col items-center justify-center gap-0.5 rounded-full px-1 py-1.5 text-center transition-[color] duration-200 md:min-h-[2.75rem] md:px-2 md:py-2",
                            active
                              ? "font-semibold text-[#1c2430]"
                              : "text-[#6b7076] hover:text-[#1c2430]",
                          ].join(" ")}
                        >
                          <LayerIcon
                            name={item.icon}
                            className={`h-3.5 w-3.5 md:h-4 md:w-4 ${active ? "text-[#1c2430]" : "text-[#858a90]"}`}
                          />
                          <span className="text-[13px] leading-tight md:text-sm">
                            {item.shortLabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 min-h-[9.5rem] border-t border-black/[0.08] pt-4.5 md:min-h-[10.5rem] md:pt-5">
                  <div className="mx-auto flex w-fit items-center gap-2 text-[#1c2430]">
                    <LayerIcon name={activeCategory.icon} className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                      {activeCategory.shortLabel}
                    </span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8e9297]">
                    Typical pain
                  </p>
                  <p className="mx-auto mt-2 max-w-[22rem] text-[15px] font-medium leading-relaxed text-[#1c2430] md:mt-3 md:max-w-[24rem] md:text-base">
                    {activeCategory.pain}
                  </p>
                </div>
              </div>
              </div>
            </div>
              </RevealOnScroll>
              </div>
            </div>

            <RevealOnScroll className="mt-6 sm:mt-8" delayMs={200}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-full bg-[#2d333a] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1f2328]"
                >
                  Contact
                </Link>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-full border border-[#2d333a]/20 bg-white px-8 py-3 text-sm font-semibold text-[#2d333a] transition-colors hover:border-[#5b8fd0] hover:text-[#5b8fd0]"
                >
                  Call Now
                </a>
              </div>
            </RevealOnScroll>
        </div>
      </div>

      <SectionWave
        fill="cream-deep"
        className="h-[min(9vw,4.25rem)] md:h-[min(8vw,4.75rem)]"
      />
    </section>
  );
}

function LayerIcon({
  name,
  className,
}: {
  name: "megaphone" | "pipeline" | "spark";
  className?: string;
}) {
  switch (name) {
    case "megaphone":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 11v2h4l5 4V7L7 11H3zM16 8.5a1 1 0 011 1v5a1 1 0 01-1 1M19 6a2 2 0 012 2v8a2 2 0 01-2 2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pipeline":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 19V5M8 19v-6M12 19V9M16 19v-4M20 19v-8"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}
