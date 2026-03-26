import type { Metadata } from "next";
import { InnerPageHero } from "@/components/InnerPageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects personal information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="This policy describes how we handle information when you use our website or work with us."
      />
      <section className="bg-era-cream">
        <div className="container-site section-y">
          <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-era-muted">
            <h2 className="font-display text-lg font-bold text-era-ink">
              1. Information we collect
            </h2>
            <p>
              We may collect contact details you submit through forms (name,
              email, phone), plus basic usage data (pages viewed, device/browser
              type) to operate and improve the site.
            </p>
            <h2 className="font-display text-lg font-bold text-era-ink">
              2. How we use information
            </h2>
            <p>
              We use information to respond to inquiries, deliver services,
              communicate about projects, and analyze site performance. We do
              not sell your personal information.
            </p>
            <h2 className="font-display text-lg font-bold text-era-ink">
              3. Cookies
            </h2>
            <p>
              We may use cookies or similar technologies for essential
              functionality and analytics. You can control cookies through your
              browser settings.
            </p>
            <h2 className="font-display text-lg font-bold text-era-ink">
              4. Data retention
            </h2>
            <p>
              We retain information as long as needed to provide services and
              meet legal obligations, then delete or anonymize it where
              appropriate.
            </p>
            <h2 className="font-display text-lg font-bold text-era-ink">
              5. Contact
            </h2>
            <p>
              Privacy questions:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-era-accent hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
