export const site = {
  name: "Era Solutions",
  tagline: "Digital Solutions That Drive Growth",
  description:
    "Era Solutions builds high-converting websites, leadflow solutions, and software that help service businesses capture more demand and turn it into revenue.",
  phoneDisplay: "954-682-4639",
  phoneTel: "+19546824639",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    "https://calendly.com/nico-scalewithera/30min",
  email: "nico@scalewithera.com",
  careersEmail: "careers@scalewithera.com",
  addressLine: "Based in Miami",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    google: "https://www.google.com/search?q=Era+Solutions+digital+solutions",
  },
  hours: {
    weekdays: "Monday – Saturday",
    weekdaysTime: "09:00 am – 6:00 pm",
    sunday: "Sunday",
    sundayTime: "Sabbath",
  },
} as const;

export const services = [
  {
    slug: "website-development",
    title: "Lead Generating Website Machine.",
    shortTitle: "Website Development",
    description:
      "Turn your website into a 24/7 lead-generating powerhouse. Custom-built sites designed to attract, engage, and convert visitors into loyal customers.",
  },
  {
    slug: "branding",
    title: "Brand Authority Builder",
    shortTitle: "Branding",
    description:
      "Dominate your market with a brand that stands above the competition. Expert branding strategies establish authority and trust with your audience.",
  },
  {
    slug: "crm-system",
    title: "Fully Customized CRM",
    shortTitle: "CRM System",
    description:
      "Supercharge your sales pipeline with a CRM that automates every step. From lead management to follow-ups, let automation drive your sales to new heights.",
  },
  {
    slug: "targetted-ads",
    title: "Paid Ads That Convert",
    shortTitle: "Targetted Ads",
    description:
      "Maximize your ad spend with a results-driven ads engine. High-ROI campaigns that deliver fast, measurable revenue growth for your business.",
  },
  {
    slug: "sales-scripts",
    title: "Sales Script Accelerator",
    shortTitle: "Sales Scripts",
    description:
      "Empower your team with scripts that close deals. Custom sales scripts engineered to guide prospects from interest to action.",
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    description:
      "Rise to the top of search results with advanced SEO. We optimize every aspect of your online presence to drive organic traffic.",
  },
] as const;
