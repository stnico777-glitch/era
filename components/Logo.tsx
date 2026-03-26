/** ERA wordmark — vector text (transparent background) so it never reads as a solid “black box”. */

function EraWordmarkSvg({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 52"
      className={className}
      aria-hidden
      focusable="false"
    >
      <text
        x="0"
        y="40"
        fill="currentColor"
        fontFamily="var(--font-montserrat), Montserrat, system-ui, sans-serif"
        fontSize="44"
        fontWeight="800"
        letterSpacing="-0.03em"
      >
        ERA
      </text>
    </svg>
  );
}

function EraSolutionsWordmarkSvg({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 52"
      className={className}
      aria-hidden
      focusable="false"
    >
      <text
        x="0"
        y="38"
        fill="currentColor"
        fontFamily="var(--font-montserrat), Montserrat, system-ui, sans-serif"
        fontSize="30"
        fontWeight="800"
        letterSpacing="-0.03em"
      >
        ERA Solutions
      </text>
    </svg>
  );
}

export function Logo({
  variant = "dark",
  wordmark = "era-solutions",
  className = "",
  priority = false,
}: {
  /**
   * `dark` — ink on light UI.
   * `header` — ink on nav + subtle lift so it doesn’t flatten against the bar.
   * `light` — white on dark (e.g. footer).
   * `overlay` — white on hero video (transparent header), same scale as header.
   */
  variant?: "dark" | "light" | "header" | "overlay";
  /** `era-solutions` — full lockup. */
  wordmark?: "era" | "era-solutions";
  className?: string;
  priority?: boolean;
}) {
  void priority;

  const colorClass =
    variant === "light"
      ? "text-white"
      : variant === "overlay"
        ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
        : variant === "header"
          ? "text-era-ink drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]"
          : "text-era-ink";

  const sizeClass =
    variant === "header" || variant === "overlay"
      ? "h-6 w-auto md:h-8"
      : "h-7 w-auto md:h-9";

  return (
    <span className={`inline-flex items-center ${colorClass} ${className}`}>
      <span className="sr-only">
        {wordmark === "era-solutions" ? "ERA Solutions" : "ERA"}
      </span>
      {wordmark === "era-solutions" ? (
        <EraSolutionsWordmarkSvg className={sizeClass} />
      ) : null}
      {wordmark === "era" ? <EraWordmarkSvg className={sizeClass} /> : null}
    </span>
  );
}
