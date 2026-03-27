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
  minHeight = 380,
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
      className="mx-auto max-w-md rounded-2xl border border-black/[0.06] bg-white p-2.5 shadow-era-card md:p-3"
    >
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setScriptReady(true)}
      />
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-era-accent md:text-[11px]">
        Book a call
      </p>
      <h2 className="mt-1.5 text-center font-display text-base font-bold tracking-tight text-era-ink md:text-lg">
        {title}
      </h2>
      <p className="mx-auto mt-1 max-w-2xl text-center text-[11px] leading-snug text-era-muted md:text-xs">
        Pick a time that works for you and we&apos;ll walk through your growth
        goals.
      </p>
      {showPlaceholder ? (
        <p className="mx-auto mt-3 max-w-lg rounded-xl border border-dashed border-era-ink/20 bg-era-cream/60 px-3 py-3 text-center text-[11px] text-era-muted md:text-xs">
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
          className="mt-3 w-full"
          style={{ minWidth: "min(100%, 280px)", minHeight: `${minHeight}px` }}
        />
      )}
    </section>
  );
}
