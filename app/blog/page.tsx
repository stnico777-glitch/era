import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHero } from "@/components/InnerPageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Articles and updates from ${site.name} on conversion, SEO, ads, and CRM for service businesses.`,
};

const posts = [
  {
    slug: "leadflow-basics",
    title: "Leadflow basics for service businesses",
    excerpt:
      "A practical framework for converting demand into booked jobs—without drowning in follow-up.",
    date: "Jan 15, 2024",
  },
  {
    slug: "crm-follow-up",
    title: "Why CRM follow-up beats “more leads”",
    excerpt:
      "If pipeline leaks after the first touch, more traffic won’t fix revenue—solutions will.",
    date: "Dec 2, 2023",
  },
];

export default function BlogPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Blog"
        title="Insights for growth"
        subtitle="Short guides on websites, SEO, ads, and CRM—built for operators."
      />
      <section className="bg-era-cream">
        <div className="container-site section-y">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <article
                key={p.slug}
                className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-era-card"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-era-muted">
                  {p.date}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-era-ink">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="hover:text-era-accent"
                  >
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-era-muted">
                  {p.excerpt}
                </p>
                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-era-accent"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-era-muted">
            More posts coming soon. Questions?{" "}
            <Link href="/contact" className="text-era-accent hover:underline">
              Contact {site.name}
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
