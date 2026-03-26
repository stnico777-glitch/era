/**
 * Full-width curved boundary between sections (Slite-style cream → next color).
 * The filled region sits below the curve; the area above the curve is transparent
 * so the previous section’s background shows through.
 */

export type SectionWaveFill = "cream" | "cream-deep" | "white";

export type SectionWaveCurve = "default" | "pronounced";

const fillValue: Record<SectionWaveFill, string> = {
  // Hard-coded hex to avoid any computed/aliasing mismatch with card backgrounds.
  cream: "#f8f4f0",
  "cream-deep": "#efe8e2",
  white: "#ffffff",
};

/**
 * Single cubic Bézier — one smooth arc, pronounced bulge into the section above.
 * Shared by default SectionWaves + Software CTA top bridge.
 */
export const sectionWavePathDefault =
  // Shift bulge to the right + make it more pronounced (used above Services).
  // Lower the left-side baseline so the curve dips closer to the next section title.
  // Made much stronger (more curvy): deeper left/right endpoints + higher bulge.
  // Keep it strong, but avoid going too far above the SVG viewport (clipping).
  // Fitted to the homepage curve screenshot; crest biased slightly right.
  // Shift down slightly to avoid SVG top clipping artifacts (thin seam).
  "M0,120 L0,57.71 C520,-51 1040,9.27 1440,120 L1440,120 Z";

/** Stronger single arc (e.g. under Services grid) */
const pathPronounced =
  // Shift bulge left + increase vertical prominence.
  // Crest biased slightly right to avoid intersecting the card top edge.
  "M0,120 L0,98 C260,-32 860,-32 1440,98 L1440,120 Z";

export function SectionWave({
  fill,
  curve = "default",
  className = "",
}: {
  fill: SectionWaveFill;
  curve?: SectionWaveCurve;
  className?: string;
}) {
  const d = curve === "pronounced" ? pathPronounced : sectionWavePathDefault;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`pointer-events-none block w-full text-[0] leading-none ${className}`}
      aria-hidden
    >
      <path fill={fillValue[fill]} d={d} shapeRendering="geometricPrecision" />
    </svg>
  );
}
