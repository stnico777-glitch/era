import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/InnerPageHero";
import { services, site } from "@/lib/site";
import { serviceImages } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Services",
  description: `${site.name} services: websites, CRM, branding, SEO, ads, and sales scripts for service businesses.`,
};

export default function ServicesPage() {
  return (
    <>
      <InnerPageHero
        variant="dark"
        eyebrow="Services"
        title="Everything you need to grow—under one roof"
        subtitle="Pick a lane to explore, or book a call and we’ll recommend the right stack for your business."
      />
      <section className="bg-era-cream">
        <div className="container-site section-y">
          <div className="grid gap-4 md:grid-cols-2 md:gap-4">
            {services.map((s) => {
              const img = serviceImages[s.slug];
              return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-era-card transition-all hover:-translate-y-0.5 hover:shadow-era-card-hover"
              >
                <div
                  className={`relative aspect-[2/1] overflow-hidden ${img.imageAreaClassName ?? "bg-era-void"}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`${img.imageClassName ?? "object-cover"} transition-transform duration-500 ${img.imageHoverClassName ?? "group-hover:scale-105"}`}
                  />
                  {img.imageGradient !== false ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  ) : null}
                </div>
                <div className="p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-era-ink group-hover:text-era-accent">
                  {s.shortTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-era-muted">
                  {s.description}
                </p>
                <span className="mt-4 inline-flex text-sm font-semibold text-era-accent">
                  Learn more →
                </span>
                </div>
              </Link>
            );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
