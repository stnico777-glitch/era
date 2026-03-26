import Image from "next/image";
import Link from "next/link";

export function MidCta({ showAboutButton = true }: { showAboutButton?: boolean }) {
  return (
    <section className="relative bg-white py-10 md:py-14 lg:py-14">
      <div className="container-site">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-era-accent">
          Meet the founder
        </p>
        <h2 className="mx-auto mt-2 max-w-2xl text-center font-display text-2xl font-bold leading-tight tracking-tight text-era-ink md:text-3xl">
          Nico Herrera
        </h2>

        <div className="mx-auto mt-7 max-w-5xl overflow-hidden rounded-3xl border border-black/[0.06] bg-era-cream shadow-[0_20px_50px_rgba(45,45,51,0.07)] md:mt-10">
          <div className="grid gap-0 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
            <div className="flex justify-center bg-era-cream-deep px-6 py-10 sm:py-12 lg:px-8 lg:py-12">
              <figure className="relative z-0 m-0">
                <div className="relative aspect-[4/5] w-[min(220px,76vw)] overflow-hidden rounded-2xl bg-era-cream-deep shadow-[0_12px_40px_rgba(45,45,51,0.12)] ring-1 ring-black/[0.06] sm:w-[256px] lg:w-[272px]">
                  <Image
                    src="/images/founder-nico.png"
                    alt="Nico Herrera, founder of Era Solutions"
                    fill
                    unoptimized
                    className="object-cover object-[center_50%]"
                    sizes="272px"
                  />
                </div>
              </figure>
            </div>

            <div className="flex flex-col justify-center px-6 py-6 text-left md:px-9 md:py-8 lg:px-10 lg:py-9">
              <div className="space-y-3.5 text-[15px] leading-relaxed text-era-muted md:text-base">
                <p className="text-era-ink">
                  I was born in Colombia and moved to the U.S. when I was three.
                  These days most of my time goes to people who run service
                  businesses: crews, trucks, schedules, and the steady churn of
                  jobs, callbacks, and follow-up.
                </p>
                <p>
                  Before consulting on my own I spent two years with Grant Cardone.
                  Mostly sales, marketing, deal flow past seven figures. After
                  that I worked with Patrick Bet-David and spent more time on
                  leadership, long-term thinking, and building lasting
                  relationships. That&apos;s how we made it here.
                </p>
                <p className="text-era-muted">
                  Fun fact: I like ultramarathons. The most recent one was 87
                  miles.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 md:mt-6">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-era-ink px-7 py-3 text-sm font-semibold text-era-cream transition-colors hover:bg-era-ink-hover"
                >
                  Contact
                </Link>
                {showAboutButton ? (
                  <Link
                    href="/about"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-era-ink/15 bg-white px-7 py-3 text-sm font-semibold text-era-ink transition-colors hover:border-era-accent hover:text-era-accent"
                  >
                    About Era Solutions
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
