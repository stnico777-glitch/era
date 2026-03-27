import type { Metadata } from "next";
import { InnerPageHero } from "@/components/InnerPageHero";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyInline } from "@/components/CalendlyInline";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for a strategy call, project questions, or partnership opportunities.`,
};

const hiringBenefits = [
  {
    title: "Supportive team culture",
    description:
      "Join a high-ownership team where your work is visible, valued, and supported.",
  },
  {
    title: "Professional growth",
    description:
      "Clear expectations, feedback loops, and room to grow into leadership.",
  },
  {
    title: "Competitive compensation",
    description:
      "Pay that reflects impact, with upside tied to performance and outcomes.",
  },
  {
    title: "Flexible work style",
    description:
      "Remote-friendly collaboration and schedules designed for deep work.",
  },
  {
    title: "Meaningful projects",
    description:
      "Build solutions that help real service businesses win—leads, ops, and scale.",
  },
  {
    title: "Recognition",
    description:
      "We celebrate great work and ship wins together—small and big.",
  },
] as const;

const openPositions = [
  {
    title: "Web Developer",
    meta: "Remote • Contract • Engineering",
    description:
      "Build fast, conversion-focused marketing sites and internal tooling with clean UI and sharp performance.",
  },
  {
    title: "Growth Marketer",
    meta: "Remote • Full-time • Marketing",
    description:
      "Own acquisition experiments across paid, landing pages, and funnel optimization—measured by qualified booked calls.",
  },
  {
    title: "Sales Development",
    meta: "Remote • Full-time • Sales",
    description:
      "Qualify inbound leads, follow up fast, and book calls—tight process, strong writing, and zero fluff.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        variant="dark"
        eyebrow="Contact"
        title="Let’s talk about your growth plan"
        subtitle="Tell us what you’re trying to fix—leads, follow-up, booking, or scale—and we’ll map the next step."
      />
      <section className="bg-era-cream">
        <div className="container-site section-y">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-black/[0.06] bg-white p-7 text-center shadow-era-card md:p-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-era-ink">
                Call or email
              </h2>
              <p className="mx-auto mt-3 max-w-md text-era-muted">
                Prefer a direct conversation? Reach out and we&apos;ll guide your
                next best step.
              </p>
              <a
                href={`tel:${site.phoneTel}`}
                className="mt-6 block text-xl font-semibold text-era-accent hover:underline"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-lg font-semibold text-era-accent hover:underline"
              >
                {site.email}
              </a>
              <p className="mt-6 text-sm text-era-muted">{site.addressLine}</p>
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-full border border-era-ink/15 bg-white px-7 py-2.5 text-sm font-semibold uppercase tracking-wide text-era-ink transition-colors hover:border-era-accent hover:text-era-accent"
              >
                Book now
              </a>
            </div>
            <div className="rounded-3xl border border-black/[0.06] bg-white p-7 shadow-era-card md:p-10">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-era-accent">
                Send a message
              </p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-6xl md:mt-10">
            <CalendlyInline url={site.calendlyUrl} />
          </div>

          <section className="mt-12 md:mt-16">
            <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-era-card">
              {/* WHY JOIN */}
              <div className="px-6 py-10 md:px-10 md:py-14">
                <p className="text-center font-display text-2xl font-bold uppercase tracking-[0.16em] text-era-ink md:text-3xl">
                  Why join ERA Solutions?
                </p>
                <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-era-muted md:text-base">
                  Be part of a team that ships solutions that help service
                  businesses grow.
                </p>

                <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {hiringBenefits.map((b) => (
                    <div
                      key={b.title}
                      className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-[0_12px_30px_rgba(45,45,51,0.08)]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-era-cream text-era-accent ring-1 ring-black/[0.06]">
                        <span className="text-lg font-semibold" aria-hidden>
                          ✦
                        </span>
                      </div>
                      <p className="mt-5 text-base font-semibold text-era-ink">
                        {b.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-era-muted">
                        {b.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* OPEN POSITIONS band */}
              <div className="border-t border-black/[0.06] bg-era-cream px-6 py-10 md:px-10 md:py-14">
                <p className="text-center font-display text-2xl font-bold uppercase tracking-[0.16em] text-era-ink md:text-3xl">
                  Open positions
                </p>
                <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-era-muted md:text-base">
                  Join our growing team. Don’t see your role? Apply anyway.
                </p>

                <div className="mx-auto mt-10 max-w-6xl space-y-6">
                  {openPositions.map((p) => {
                    const subject = encodeURIComponent(`Application — ${p.title}`);
                    return (
                      <div
                        key={p.title}
                        className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-[0_14px_40px_rgba(45,45,51,0.10)]"
                      >
                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                          <div className="min-w-0">
                            <p className="text-lg font-semibold text-era-ink">
                              {p.title}
                            </p>
                            <p className="mt-1 text-sm text-era-muted">
                              {p.meta}
                            </p>
                          </div>
                          <a
                            href={`mailto:${site.careersEmail}?subject=${subject}`}
                            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-era-ink px-7 py-2.5 text-sm font-semibold uppercase tracking-wide text-era-cream shadow-sm transition-colors hover:bg-era-ink-hover"
                          >
                            View details
                            <span aria-hidden>▾</span>
                          </a>
                        </div>
                        <p className="mt-5 text-sm leading-relaxed text-era-muted">
                          {p.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* READY CTA */}
              <div className="border-t border-black/[0.06] bg-era-cream px-6 py-12 md:px-10 md:py-16">
                <p className="text-center font-display text-2xl font-bold uppercase tracking-[0.16em] text-era-ink md:text-3xl">
                  Ready to build your career?
                </p>
                <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-era-muted md:text-base">
                  Send your resume and a short note about what you want to work
                  on. We’re always looking for dedicated people to grow with
                  us.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={`mailto:${site.careersEmail}?subject=${encodeURIComponent(
                      "General application",
                    )}`}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-era-ink px-8 py-3 text-sm font-semibold uppercase tracking-wide text-era-cream transition-colors hover:bg-era-ink-hover"
                  >
                    Apply today
                  </a>
                  <a
                    href="/about"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-era-ink/15 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-era-ink transition-colors hover:border-era-accent hover:text-era-accent"
                  >
                    Learn about us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
