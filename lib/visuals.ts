/** Curated stock imagery & video (replace with your own assets anytime). */
const u = (id: string, w = 1920) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=80`;

/**
 * Direct Unsplash CDN paths — use well-formed `photo-{id}` slugs only.
 * (Broken slugs show blank tiles in next/image.)
 */
export const visuals = {
  /**
   * Poster / fallback still for hero video (shown before clips load).
   */
  hero: {
    src: u("photo-1522071820081-009f0129c71c", 2400),
    alt: "Team collaborating in a bright office",
  },
} as const;

/**
 * Three hero loops (each shown ~7s, then cut to the next). Swap clips in this file only.
 * Local files: `public/videos/…` → `/videos/…`.
 */
export const heroVideos = [
  {
    mp4: "/videos/hero-slot1-3141208.mp4",
    label: "Hero slot 1 (3141208 UHD 25fps)",
  },
  {
    mp4: "/videos/hero-slot2-8964292.mp4",
    label: "Hero slot 2 (8964292 UHD 3840×2160 25fps)",
  },
  {
    mp4: "/videos/hero-slot3-13794864.mp4",
    label: "Hero slot 3 (13794864 UHD 3840×2160 30fps)",
  },
  {
    mp4: "/videos/hero-slot4-3249673.mp4",
    label: "Hero slot 4 (3249673 UHD 3840×2160 25fps)",
    displayMs: 12000,
  },
] as const;

/** Per-service card imagery — keys must match `services[].slug` in site.ts */
export type ServiceCardImage = {
  src: string;
  alt: string;
  /** Extra classes for next/image (default: object-cover). Use object-contain for icons. */
  imageClassName?: string;
  /** Omit dark gradient scrim (use for flat illustrations / icons). */
  imageGradient?: boolean;
  /** Image tile background on `/services` listing (default: dark for photos). */
  imageAreaClassName?: string;
  /** Hover scale (default: slight zoom for photos). Set when base `scale-*` is used. */
  imageHoverClassName?: string;
};

export const serviceImages: Record<string, ServiceCardImage> = {
  "website-development": {
    src: "/images/services/website-development-lead-machine.png",
    alt: "Flat icon — funnel with arrows representing a lead-generating website machine",
    imageClassName: "object-contain origin-center scale-[1.1]",
    imageHoverClassName: "group-hover:scale-[1.14]",
    imageGradient: false,
    imageAreaClassName: "bg-era-cream-deep",
  },
  branding: {
    src: "/images/services/branding-brand-authority.png",
    alt: "Flat icon — shield mark with pink and blue facets for brand authority",
    imageClassName: "object-contain origin-center scale-[1.1]",
    imageHoverClassName: "group-hover:scale-[1.14]",
    imageGradient: false,
    imageAreaClassName: "bg-era-cream-deep",
  },
  "crm-system": {
    src: "/images/services/crm-custom-pipeline.png",
    alt: "Flat icon — three CRM columns with cards in pink and blue",
    imageClassName: "object-contain origin-center scale-[1.1]",
    imageHoverClassName: "group-hover:scale-[1.14]",
    imageGradient: false,
    imageAreaClassName: "bg-era-cream-deep",
  },
  "targetted-ads": {
    src: "/images/services/targetted-ads-megaphone.png",
    alt: "Flat icon — megaphone with growth arrow for paid ads that convert",
    imageClassName: "object-contain origin-center scale-[1.1]",
    imageHoverClassName: "group-hover:scale-[1.14]",
    imageGradient: false,
    imageAreaClassName: "bg-era-cream-deep",
  },
  "sales-scripts": {
    src: "/images/services/sales-scripts-document.png",
    alt: "Flat icon — document with lines, speech bubble, and checkmark for sales scripts",
    imageClassName: "object-contain origin-center scale-[1.1]",
    imageHoverClassName: "group-hover:scale-[1.14]",
    imageGradient: false,
    imageAreaClassName: "bg-era-cream-deep",
  },
  seo: {
    src: "/images/services/seo-search-window.png",
    alt: "Flat icon — browser window with lines and magnifying glass for SEO",
    imageClassName: "object-contain origin-center scale-[1.1]",
    imageHoverClassName: "group-hover:scale-[1.14]",
    imageGradient: false,
    imageAreaClassName: "bg-era-cream-deep",
  },
};

export const innerHero = {
  defaultMesh: {
    src: u("photo-1557683316-973673baf926", 1600),
    alt: "Abstract gradient background",
  },
} as const;
