# Efficiency Report v2

## What Was Executed
- Removed high-confidence unused assets and stale starter files from `public/`.
- Removed unused CSS utilities from `app/globals.css`.
- Removed unused visual config entries from `lib/visuals.ts`.
- Reduced software CTA rendering/compositing complexity in:
  - `app/globals.css`
  - `components/sections/SoftwareCta.tsx`
- Optimized hero video runtime behavior in `components/HeroBackground.tsx`:
  - render only active + next playable clip,
  - use lighter preload behavior,
  - keep poster fallback,
  - resolved hook/typing issues that blocked production checks.
- Reduced scroll/animation overhead:
  - header hero transition uses `IntersectionObserver` in `components/Header.tsx` instead of scroll polling,
  - marquee mask/animation tuned for mobile in `app/globals.css`.
- Updated stale docs in `README.md`.

## Before vs After (Measured)
- `public/images`: **2.5 MB -> 472 KB** (~81% smaller)
- `public/videos`: **899 MB -> 336 MB** (~63% smaller)
- Total static media (`images + videos`): **~901.5 MB -> ~336.5 MB** (about **565 MB removed**)

## Validation Results
- `npm run lint`: pass
- `npm run build`: pass
- Static route generation confirms key pages build correctly:
  - `/`, `/services`, `/about`, `/contact`, `/blog`, `/privacy`, `/terms`, `/referral-program`

## Runtime Smoothness Impact (Expected)
1. Lower paint/composite load in software CTA due to fewer animated blur/blend layers.
2. Lower video decode/memory pressure from reduced mounted clips and lighter preload strategy.
3. Lower scroll-induced main-thread work from observer-based header state changes.
4. Lower continuous animation cost on mobile in trust marquee section.

## Residual Risks / Next Wave
- Remaining hero videos are still large (especially `hero-slot3-13794864.mp4`).
  - Next best win: transcode to lower bitrate/resolution variants and conditionally serve by viewport/network.
- For final visual parity confirmation, run a manual side-by-side check on home page sections:
  - hero, trusted strip, software CTA, and navigation transitions.
