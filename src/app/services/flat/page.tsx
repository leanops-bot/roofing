"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroFlat } from "@/components/sections/flat/HeroFlat";
import { FlatServicesGrid } from "@/components/sections/flat/FlatServicesGrid";
import { FlatBenefits } from "@/components/sections/flat/FlatBenefits";
import { WhyChooseApexFlat } from "@/components/sections/why-choose-apex-flat";
import { FlatRoofingProcess } from "@/components/sections/flat/FlatRoofingProcess";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";
import { FinancingBanner } from "@/components/sections/FinancingBanner";

export default function FlatRoofingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroFlat />
            <FlatServicesGrid />
            <ReviewsSlider />
            <FlatBenefits />
            <WhyChooseApexFlat />
            <FlatRoofingProcess />
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
