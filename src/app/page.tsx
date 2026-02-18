import { Footer } from "@/components/layout/Footer";
import { HeroApex } from "@/components/sections/HeroApex";
import { PartneredWithBest } from "@/components/sections/PartneredWithBest";
import { ExperienceHighlights } from "@/components/sections/ExperienceHighlights";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MaterialsSlider } from "@/components/sections/MaterialsSlider";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { MapProjects } from "@/components/sections/MapProjects";
import { FinancingBanner } from "@/components/sections/FinancingBanner";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { VideoProjects } from "@/components/sections/VideoProjects";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroApex />
      <PartneredWithBest />
      <ExperienceHighlights />
      <ServicesGrid />
      <MaterialsSlider />
      <ProjectsGallery />
      <MapProjects />
      <FinancingBanner />
      <ReviewsSlider />
      <ServiceAreaCoverage />
      <FAQAccordion />
      <VideoProjects />
      <FinalCTABanner />
      <Footer />
      <ConversionFeatures />
    </main>
  );
}
