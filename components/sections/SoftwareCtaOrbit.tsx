import type { ReactNode } from "react";

/**
 * Orbital rings + illustrated nodes (vector icons — not competitor logos).
 */

export function SoftwareCtaOrbit() {
  return (
    <div
      className="pointer-events-none absolute -right-[8%] top-1/2 hidden w-[min(100%,480px)] -translate-y-1/2 select-none md:block lg:-right-[4%] lg:w-[min(100%,560px)]"
      aria-hidden
    >
      <svg viewBox="0 0 420 420" className="h-auto w-full overflow-visible">
        <defs>
          <linearGradient id="orbit-fade" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
          <radialGradient id="node-glow-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(96,165,250,0.35)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0)" />
          </radialGradient>
          <radialGradient id="node-glow-slate" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(120, 150, 190, 0.38)" />
            <stop offset="100%" stopColor="rgba(120, 150, 190, 0)" />
          </radialGradient>
          <filter id="soft-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse
          cx="200"
          cy="210"
          rx="126"
          ry="119"
          fill="none"
          stroke="url(#orbit-fade)"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="opacity-70"
        />
        <ellipse
          cx="200"
          cy="210"
          rx="99"
          ry="92"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          strokeDasharray="3 7"
        />
        <ellipse
          cx="200"
          cy="210"
          rx="71"
          ry="67"
          fill="none"
          stroke="rgba(120, 150, 190, 0.24)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />

        <OrbitNode cx={97} cy={152} glow="url(#node-glow-blue)">
          <IconWebsite />
        </OrbitNode>
        <OrbitNode cx={295} cy={132} glow="url(#node-glow-slate)">
          <IconCRM />
        </OrbitNode>
        <OrbitNode cx={312} cy={236} glow="url(#node-glow-slate)">
          <IconAds />
        </OrbitNode>
        <OrbitNode cx={129} cy={283} glow="url(#node-glow-blue)">
          <IconSEO />
        </OrbitNode>
        <OrbitNode cx={212} cy={93} glow="url(#node-glow-slate)">
          <IconAPI />
        </OrbitNode>
        <OrbitNode cx={254} cy={298} glow="url(#node-glow-blue)">
          <IconOps />
        </OrbitNode>

        <g
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.75"
          strokeDasharray="2 4"
          opacity="0.85"
        >
          <line x1="200" y1="210" x2="97" y2="152" />
          <line x1="200" y1="210" x2="295" y2="132" />
          <line x1="200" y1="210" x2="312" y2="236" />
          <line x1="200" y1="210" x2="212" y2="93" />
        </g>
      </svg>
    </div>
  );
}

function OrbitNode({
  cx,
  cy,
  glow,
  children,
}: {
  cx: number;
  cy: number;
  glow: string;
  children: ReactNode;
}) {
  return (
    <g transform={`translate(${cx}, ${cy})`} filter="url(#soft-glow)">
      <circle r="18" fill={glow} opacity="0.5" />
      <circle r="16" fill="rgba(12,12,18,0.92)" stroke="rgba(255,255,255,0.14)" />
      <circle r="14" fill="none" stroke="rgba(255,255,255,0.06)" />
      <g transform="translate(-9, -9)">{children}</g>
    </g>
  );
}

/** 18×18 icon slot */
function IconWebsite() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2"
        stroke="rgba(147,197,253,0.95)"
        strokeWidth="1.4"
      />
      <path d="M3 8h18" stroke="rgba(147,197,253,0.5)" strokeWidth="1.2" />
      <circle cx="6" cy="6.25" r="0.9" fill="rgba(96,165,250,0.9)" />
      <path
        d="M9 14h6M9 17h4"
        stroke="rgba(147,197,253,0.85)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M14 11l2 2-2 2"
        stroke="rgba(147,197,253,0.92)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCRM() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 18V6M9 18v-5M13 18V9M17 18v-3M21 18V7"
        stroke="rgba(167,139,250,0.95)"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M4 18h16"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      <circle cx="18" cy="5" r="2.5" stroke="rgba(196,181,253,0.9)" strokeWidth="1.2" />
      <rect
        x="6"
        y="4"
        width="6"
        height="3"
        rx="0.5"
        stroke="rgba(167,139,250,0.7)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

function IconAds() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 11h6l2 4 3-8 3 4h2"
        stroke="rgba(244,114,182,0.9)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18l3-3M18 6l3-3"
        stroke="rgba(125,211,252,0.88)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="5" cy="18" r="1.5" fill="rgba(244,114,182,0.8)" />
    </svg>
  );
}

function IconSEO() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle
        cx="10.5"
        cy="10.5"
        r="5.5"
        stroke="rgba(52,211,153,0.95)"
        strokeWidth="1.35"
      />
      <path
        d="M15 15l4.5 4.5"
        stroke="rgba(52,211,153,0.85)"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M8 10h5M10.5 7.5V13"
        stroke="rgba(167,243,208,0.7)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAPI() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 8l-3 4 3 4M17 8l3 4-3 4"
        stroke="rgba(147,197,253,0.94)"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6l-2 12"
        stroke="rgba(186,230,253,0.58)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconOps() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="rgba(129,140,248,0.95)"
        strokeWidth="1.25"
      />
      <path
        d="M12 6v2M12 16v2M6 12h2M16 12h2M8.5 8.5l1.4 1.4M14.1 14.1l1.4 1.4M8.5 15.5l1.4-1.4M14.1 9.9l1.4-1.4"
        stroke="rgba(165,180,252,0.85)"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}
