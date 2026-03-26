import { Hero } from "@/components/sections/Hero";
import { PyramidSection } from "@/components/sections/PyramidSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SoftwareCta } from "@/components/sections/SoftwareCta";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <PyramidSection />
      <ServicesGrid />
      <SoftwareCta />
    </>
  );
}
