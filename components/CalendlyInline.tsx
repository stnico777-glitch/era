"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type CalendlyInlineProps = {
  url: string;
  title?: string;
  minHeight?: number;
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        resize?: boolean;
      }) => void;
    };
  }
}

function isCalendlyBookingUrl(value: string) {
  try {
    const u = new URL(value);
    return (
      u.protocol === "https:" &&
      (u.hostname === "calendly.com" || u.hostname === "www.calendly.com") &&
      u.pathname.length > 1
    );
  } catch {
    return false;
  }
}

export function CalendlyInline({
  url,
  title = "Book a strategy call",
  minHeight = 760,
}: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(() =>
    typeof window !== "undefined" ? Boolean(window.Calendly) : false,
  );

  const initWidget = useCallback(() => {
    const el = containerRef.current;
    if (!el || !window.Calendly || !isCalendlyBookingUrl(url)) return;
    el.innerHTML = "";
    window.Calendly.initInlineWidget({
      url,
      parentElement: el,
      resize: true,
    });
  }, [url]);

  useEffect(() => {
    if (!scriptReady) return;
    const mountEl = containerRef.current;
    initWidget();
    return () => {
      if (mountEl) mountEl.innerHTML = "";
    };
  }, [scriptReady, initWidget]);

  const showPlaceholder = !isCalendlyBookingUrl(url);

  return (
    <section
      aria-label={title}
      className="rounded-3xl border border-black/[0.06] bg-white p-5 shadow-era-card md:p-7"
    >
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setScriptReady(true)}
      />
      <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-era-accent">
        Book a call
      </p>
      <h2 className="mt-3 text-center font-display text-2xl font-bold tracking-tight text-era-ink">
        {title}
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-era-muted">
        Pick a time that works for you and we&apos;ll walk through your growth
        goals.
      </p>
      {showPlaceholder ? (
        <p className="mx-auto mt-6 max-w-lg rounded-2xl border border-dashed border-era-ink/20 bg-era-cream/60 px-5 py-6 text-center text-sm text-era-muted">
          Add your Calendly scheduling link: set{" "}
          <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs text-era-ink">
            NEXT_PUBLIC_CALENDLY_URL
          </code>{" "}
          in{" "}
          <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs text-era-ink">
            .env.local
          </code>{" "}
          (copy the event URL from Calendly → Share).
        </p>
      ) : (
        <div
          ref={containerRef}
          className="mt-6 w-full"
          style={{ minWidth: "320px", minHeight: `${minHeight}px` }}
        />
      )}
    </section>
  );
}
