"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Delay after the element enters view (ms), for staggered reveals */
  delayMs?: number;
  rootMargin?: string;
};

export function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
  rootMargin = "0px 0px -8% 0px",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.12, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${visible ? "reveal-on-scroll-visible" : "reveal-on-scroll-hidden"} ${className}`}
      style={
        visible && delayMs > 0
          ? { transitionDelay: `${delayMs}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
