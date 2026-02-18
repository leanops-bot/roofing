"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroFinancing } from "@/components/sections/financing/HeroFinancing";
import { WhyFinance } from "@/components/sections/financing/WhyFinance";
import { FinancingProcess } from "@/components/sections/financing/FinancingProcess";
import { FinancingQualification } from "@/components/sections/financing/FinancingQualification";
import { WhenToConsiderFinancing } from "@/components/sections/financing/WhenToConsiderFinancing";
import { SocialProofRow } from "@/components/sections/financing/SocialProofRow";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";

export default function FinancingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroFinancing />
            <WhyFinance />
            <FinancingProcess />
            <ReviewsSlider />
            <FinancingQualification />
            <WhenToConsiderFinancing />
            <SocialProofRow />
            <ServiceAreaCoverage />
            <FAQAccordion />
            <FinalCTABanner />
            <Footer />
            <ConversionFeatures />
        </main>
    );
}
