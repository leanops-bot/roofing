"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroEmergency } from "@/components/sections/emergency/HeroEmergency";
import { EmergencyServicesGrid } from "@/components/sections/emergency/EmergencyServicesGrid";
import { StormRestoration } from "@/components/sections/emergency/StormRestoration";
import { InsuranceSupport } from "@/components/sections/emergency/InsuranceSupport";
import { EmergencyProcess } from "@/components/sections/emergency/EmergencyProcess";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";
import { FinancingBanner } from "@/components/sections/FinancingBanner";

export default function EmergencyRoofingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroEmergency />
            <EmergencyServicesGrid />
            <ReviewsSlider />
            <StormRestoration />
            <InsuranceSupport />
            <EmergencyProcess />
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
