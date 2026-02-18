"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroTile } from "@/components/sections/tile/HeroTile";
import { TileServicesGrid } from "@/components/sections/tile/TileServicesGrid";
import { TileBenefits } from "@/components/sections/tile/TileBenefits";
import { WhyChooseApexTile } from "@/components/sections/tile/WhyChooseApexTile";
import { TileJourney } from "@/components/sections/tile/TileJourney";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";
import { FinancingBanner } from "@/components/sections/FinancingBanner";

export default function TileRoofingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroTile />
            <TileServicesGrid />
            <ReviewsSlider />
            <TileBenefits />
            <WhyChooseApexTile />
            <TileJourney />
            <FinancingBanner />
            <ServiceAreaCoverage />
            <ProjectsGallery />
            <FAQAccordion />
            <FinalCTABanner />
            <Footer />
            <ConversionFeatures />
        </main>
    );
}
