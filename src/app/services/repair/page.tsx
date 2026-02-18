"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroRepair } from "@/components/sections/repair/HeroRepair";
import { RepairFeatures } from "@/components/sections/repair/RepairFeatures";
import { CommonProblems } from "@/components/sections/repair/CommonProblems";
import { WhenRepairNeeded } from "@/components/sections/repair/WhenRepairNeeded";
import { RoofTypesRepair } from "@/components/sections/repair/RoofTypesRepair";
import { RepairProcess } from "@/components/sections/repair/RepairProcess";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";
import { ApexAdvantage } from "@/components/sections/replacement/ApexAdvantage";
import { FinancingBanner } from "@/components/sections/FinancingBanner";

export default function RoofRepairPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroRepair />
            <RepairFeatures />
            <CommonProblems />
            <ReviewsSlider />
            <WhenRepairNeeded />
            <RoofTypesRepair />
            <ApexAdvantage />
            <RepairProcess />
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
