# Efficiency Report v1

## Scope
- Full repository audit.
- Primary target: runtime smoothness (animation and scroll jank).
- Secondary targets: dead code removal and static asset bloat reduction.

## Baseline Snapshot
- Build status: `npm run build` fails type-check in `components/HeroBackground.tsx` due to `displayMs` access on a union member that does not always define it.
- Static asset footprint:
  - `public/images`: ~2.5 MB
  - `public/videos`: ~899 MB
- Largest video files:
  - `hero-slot3-15498499.mp4`: ~485 MB (unused)
  - `hero-slot3-13794864.mp4`: ~233 MB (currently used)

## Highest-Impact Bottlenecks (Priority Order)
1. **Software CTA gradient/compositing cost**
   - `app/globals.css` and `components/sections/SoftwareCta.tsx` use multiple large blurred animated layers with blend modes.
   - Risk: high paint/composite overhead and scroll stutter on lower-power devices.
2. **Hero video loading/decoding pressure**
   - `components/HeroBackground.tsx` mounts multiple videos and uses aggressive preload behavior.
   - Risk: memory/decode contention and interaction hitching.
3. **Header scroll listener re-render pressure**
   - `components/Header.tsx` runs layout reads/state updates on scroll.
   - Risk: frequent React updates during scroll.
4. **Always-on marquee and reveal animation load**
   - `app/globals.css` and `components/sections/TrustedBy.tsx`.
   - Risk: additive compositor work when combined with hero/software effects.

## Dead Code + Asset Opportunities
- High-confidence unreferenced assets exist in `public/images` and `public/videos`, including duplicate variants.
- Unused CSS utility classes in `app/globals.css`.
- Unused visual config entries in `lib/visuals.ts`.

## Execution Plan (Applied in Order)
1. Remove high-confidence dead assets and stale CSS/config references.
2. Reduce software CTA gradient layer complexity and motion overhead.
3. Optimize hero video strategy (preload policy, active/next rendering behavior).
4. Reduce scroll-driven header work and tune continuous animation behavior.
5. Validate with lint/build and route checks; publish v2 report with before/after.

## Success Criteria
- Noticeably smoother scroll and section transitions on homepage.
- Lower media/network and runtime decode pressure.
- Smaller `public/` asset footprint with no visual regressions.
- Green lint/build checks.
