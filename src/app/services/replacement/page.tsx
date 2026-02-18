"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroReplacement } from "@/components/sections/replacement/HeroReplacement";
import { ReplacementFeatures } from "@/components/sections/replacement/ReplacementFeatures";
import { WhenToReplace } from "@/components/sections/replacement/WhenToReplace";
import { HurricanePrepBanner } from "@/components/sections/replacement/HurricanePrepBanner";
import { RoofTypesGrid } from "@/components/sections/replacement/RoofTypesGrid";
import { ApexAdvantage } from "@/components/sections/replacement/ApexAdvantage";
import { ReplacementProcess } from "@/components/sections/replacement/ReplacementProcess";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";

export default function RoofReplacementPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroReplacement />
            <ReplacementFeatures />
            <WhenToReplace />
            <ReviewsSlider />
            <HurricanePrepBanner />
            <RoofTypesGrid />
            <ApexAdvantage />
            <ReplacementProcess />
            <ServiceAreaCoverage />
            <ProjectsGallery />
            <FAQAccordion />
            <FinalCTABanner />
            <Footer />
            <ConversionFeatures />
        </main>
    );
}
