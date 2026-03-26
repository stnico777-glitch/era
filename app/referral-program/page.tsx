import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHero } from "@/components/InnerPageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referral Program",
  description: `Refer businesses to ${site.name} and earn rewards when they become clients.`,
};

export default function ReferralPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Referral Program"
        title="Refer a business. Get rewarded."
        subtitle="If you know a service business that needs better leadflow, send them our way."
      />
      <section className="bg-era-cream">
        <div className="container-site section-y">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-black/[0.06] bg-white px-6 py-10 text-center shadow-era-card md:px-10 md:py-14">
              <h2 className="font-display text-2xl font-bold tracking-tight text-era-ink md:text-3xl">
                Help great operators grow
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-era-muted">
                We work best with teams that want measurable growth: more booked
                calls, cleaner follow-up, and a website that supports sales.
                Share a warm intro and we&apos;ll handle strategy, scope, and
                execution with a premium client experience.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-era-ink px-8 py-3 text-sm font-semibold text-era-cream transition-colors hover:bg-era-ink-hover"
                >
                  Start a referral
                </Link>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Referral intro")}`}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-era-ink/15 bg-white px-8 py-3 text-sm font-semibold text-era-ink transition-colors hover:border-era-accent hover:text-era-accent"
                >
                  Email an intro
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-black/[0.06] bg-white p-6 text-center shadow-[0_14px_40px_rgba(45,45,51,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-era-accent">
                  Step 1
                </p>
                <p className="mt-3 text-base font-semibold text-era-ink">
                  Make a warm intro
                </p>
                <p className="mt-2 text-sm leading-relaxed text-era-muted">
                  Introduce us to a business owner who needs help with growth,
                  leadflow, or conversion.
                </p>
              </div>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-6 text-center shadow-[0_14px_40px_rgba(45,45,51,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-era-accent">
                  Step 2
                </p>
                <p className="mt-3 text-base font-semibold text-era-ink">
                  We run strategy
                </p>
                <p className="mt-2 text-sm leading-relaxed text-era-muted">
                  Our team handles discovery, scope, and a clear implementation
                  path based on their goals.
                </p>
              </div>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-6 text-center shadow-[0_14px_40px_rgba(45,45,51,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-era-accent">
                  Step 3
                </p>
                <p className="mt-3 text-base font-semibold text-era-ink">
                  You get rewarded
                </p>
                <p className="mt-2 text-sm leading-relaxed text-era-muted">
                  Referral rewards vary by engagement. We confirm details
                  upfront so expectations are clear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
