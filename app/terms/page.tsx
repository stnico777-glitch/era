import type { Metadata } from "next";
import { InnerPageHero } from "@/components/InnerPageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${site.name} websites and services.`,
};

export default function TermsPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle={`Please read these terms carefully before using ${site.name} services or websites.`}
      />
      <section className="bg-era-cream">
        <div className="container-site section-y">
          <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-era-muted">
            <h2 className="font-display text-lg font-bold text-era-ink">
              1. Services
            </h2>
            <p>
              {site.name} provides digital marketing, web development, CRM
              implementation, and related consulting services. Deliverables,
              timelines, and fees are defined in a written proposal or statement
              of work.
            </p>
            <h2 className="font-display text-lg font-bold text-era-ink">
              2. Payments
            </h2>
            <p>
              Invoices are due according to the agreed schedule. Late payments may
              pause work until the account is current.
            </p>
            <h2 className="font-display text-lg font-bold text-era-ink">
              3. Intellectual property
            </h2>
            <p>
              Unless otherwise agreed, client-provided assets remain the client’s
              property. Deliverables are licensed according to the contract
              (commonly full transfer upon final payment for custom work).
            </p>
            <h2 className="font-display text-lg font-bold text-era-ink">
              4. Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, {site.name} is not liable
              for indirect or consequential damages. Our aggregate liability is
              limited to fees paid for the services giving rise to the claim.
            </p>
            <h2 className="font-display text-lg font-bold text-era-ink">
              5. Contact
            </h2>
            <p>
              Questions about these terms:{" "}
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
