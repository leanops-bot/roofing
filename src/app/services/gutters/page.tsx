"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroGutter } from "@/components/sections/gutters/HeroGutter";
import { GutterServicesGrid } from "@/components/sections/gutters/GutterServicesGrid";
import { GutterBenefits } from "@/components/sections/gutters/GutterBenefits";
import { WhyChooseApexGutters } from "@/components/sections/gutters/WhyChooseApexGutters";
import { GutterProcess } from "@/components/sections/gutters/GutterProcess";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";
import { FinancingBanner } from "@/components/sections/FinancingBanner";

export default function GutterInstallationPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroGutter />
            <GutterServicesGrid />
            <ReviewsSlider />
            <GutterBenefits />
            <WhyChooseApexGutters />
            <GutterProcess />
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
