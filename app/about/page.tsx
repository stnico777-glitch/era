import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHero } from "@/components/InnerPageHero";
import { MidCta } from "@/components/sections/MidCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name} and how we help service businesses grow with websites, CRM, ads, and SEO.`,
};

export default function AboutPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="About"
        title={`Who ${site.name} is — and who we help`}
        subtitle="We partner with service businesses that want predictable leadflow, clearer follow-up, and a digital presence that converts."
      />
      <MidCta showAboutButton={false} />
      <section className="bg-era-cream">
        <div className="container-site section-y">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-black/[0.06] bg-white px-6 py-10 text-center shadow-era-card md:px-10 md:py-14">
              <h2 className="font-display text-2xl font-bold tracking-tight text-era-ink md:text-3xl">
                Built for service operators who want leverage
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-era-muted">
                {site.name} exists to help owners move from busy to scalable.
                That means building solutions: a website that earns attention, a
                CRM that protects pipeline, and marketing tied to measurable
                revenue.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-era-muted">
                Our team blends strategy, creative, and implementation so you
                don&apos;t have to stitch vendors together. Whether you need a
                full rebuild or a tighter funnel, we focus on conversion and
                operational leverage.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-era-ink px-8 py-3 text-sm font-semibold text-era-cream transition-colors hover:bg-era-ink-hover"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-black/[0.06] bg-white p-6 text-center shadow-[0_14px_40px_rgba(45,45,51,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-era-accent">
                  Strategy
                </p>
                <p className="mt-3 text-sm leading-relaxed text-era-muted">
                  We identify bottlenecks across demand, follow-up, and closing
                  so your next move is clear.
                </p>
              </div>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-6 text-center shadow-[0_14px_40px_rgba(45,45,51,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-era-accent">
                  Execution
                </p>
                <p className="mt-3 text-sm leading-relaxed text-era-muted">
                  We design and implement websites, CRM workflows, and growth
                  systems that support real operations.
                </p>
              </div>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-6 text-center shadow-[0_14px_40px_rgba(45,45,51,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-era-accent">
                  Outcomes
                </p>
                <p className="mt-3 text-sm leading-relaxed text-era-muted">
                  We optimize for booked calls, faster response, and stronger
                  conversion so growth compounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
