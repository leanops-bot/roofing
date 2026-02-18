"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCommercial } from "@/components/sections/commercial/HeroCommercial";
import { TopCommercialServices } from "@/components/sections/commercial/TopCommercialServices";
import { CommercialServicesGrid } from "@/components/sections/commercial/CommercialServicesGrid";
import { EliteMaterials } from "@/components/sections/commercial/EliteMaterials";
import { CondoRoofing } from "@/components/sections/commercial/CondoRoofing";
import { CommercialProcess } from "@/components/sections/commercial/CommercialProcess";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";
import { ApexAdvantage } from "@/components/sections/replacement/ApexAdvantage";

export default function CommercialRoofingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroCommercial />
            <TopCommercialServices />
            <ReviewsSlider />
            <CommercialServicesGrid />
            <EliteMaterials />
            <CondoRoofing />
            <ApexAdvantage />
            <CommercialProcess />
            <ServiceAreaCoverage />
            <ProjectsGallery />
            <FAQAccordion />
            <FinalCTABanner />
            <Footer />
            <ConversionFeatures />
        </main>
    );
}
