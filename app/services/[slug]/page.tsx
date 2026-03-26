import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerPageHero } from "@/components/InnerPageHero";
import { services, site } from "@/lib/site";

const bulletsBySlug: Record<string, string[]> = {
  "website-development": [
    "Conversion-focused structure for service offers",
    "Fast performance and mobile-first layouts",
    "Clear calls-to-action and trust elements",
  ],
  branding: [
    "Positioning and differentiation for crowded markets",
    "Visual identity direction aligned to sales",
    "Messaging that supports ads and landing pages",
  ],
  "crm-system": [
    "Pipeline stages that match how you actually sell",
    "Automations for speed-to-lead and follow-up",
    "Reporting that ties activity to outcomes",
  ],
  "targetted-ads": [
    "Campaign architecture built around booked calls",
    "Creative testing with disciplined measurement",
    "Budget allocation based on ROI, not noise",
  ],
  "sales-scripts": [
    "Call frameworks for inbound and outbound",
    "Objection handling aligned to your offer",
    "Handoffs between marketing and sales",
  ],
  seo: [
    "Technical foundations and on-page structure",
    "Local and service-intent keyword strategy",
    "Content plans that support conversion pages",
  ],
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return { title: "Not found" };
  return {
    title: svc.shortTitle,
    description: svc.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const bullets = bulletsBySlug[svc.slug] ?? [];

  return (
    <>
      <InnerPageHero
        variant="dark"
        eyebrow="Services"
        title={svc.title}
        subtitle={svc.description}
      />
      <section className="bg-era-cream">
        <div className="container-site section-y">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-xl font-bold text-era-ink">
              What you get with {site.name}
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-base text-era-muted">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-relaxed text-era-muted">
              Want a tailored plan? We’ll map the right sequence—often starting
              with the highest-leverage bottleneck (conversion, follow-up, or
              demand)—so improvements compound.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-era-ink px-8 py-3 text-sm font-semibold text-era-cream hover:bg-era-ink-hover"
              >
                Book a strategy call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-semibold text-era-ink hover:border-era-accent hover:text-era-accent"
              >
                All services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
