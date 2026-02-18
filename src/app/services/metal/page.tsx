"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroMetal } from "@/components/sections/metal/HeroMetal";
import { MetalServicesGrid } from "@/components/sections/metal/MetalServicesGrid";
import { PremiumMetalSystems } from "@/components/sections/metal/PremiumMetalSystems";
import { MetalStylesAccordion } from "@/components/sections/metal/MetalStylesAccordion";
import { MetalInstallationJourney } from "@/components/sections/metal/MetalInstallationJourney";
import { MetalCrossSell } from "@/components/sections/metal/MetalCrossSell";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { FinancingBanner } from "@/components/sections/FinancingBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";

const METAL_FAQS = [
    {
        q: "How long does a metal roof last in Florida?",
        a: "A properly installed premium metal roof can last 40-70 years in Florida, outlasting traditional shingles by decades. Lifespan depends on system type, installation quality, and proximity to salt air."
    },
    {
        q: "Is metal roofing hurricane-resistant?",
        a: "Yes. Premium standing seam and modular metal systems are highly hurricane-resistant when installed correctly, with some systems rated for winds over 150-180 MPH."
    },
    {
        q: "Is metal roofing more expensive than shingles?",
        a: "Upfront, yes. Metal roofing typically costs 2-3 times more than asphalt shingles, but its much longer lifespan and energy-efficient cooling often make it the better long-term investment."
    },
    {
        q: "Does metal roofing increase home value?",
        a: "Absolutely. Metal roofs are considered a luxury upgrade in Florida, often providing a higher return on investment and increasing buyer confidence due to storm durability."
    },
    {
        q: "Do you offer financing for metal roofing?",
        a: "Yes. Apex Roofing offers flexible financing options for metal roof installation, allowing you to upgrade to a premium system with affordable monthly payments."
    }
];

export default function MetalRoofingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroMetal city="Sarasota" />
            <MetalServicesGrid />
            <PremiumMetalSystems />
            <MetalStylesAccordion />

            <ReviewsSlider />

            <MetalInstallationJourney />

            <MetalCrossSell />

            <FinancingBanner />

            <ServiceAreaCoverage />

            <FAQSection faqs={METAL_FAQS} title="Metal Roofing FAQs" />

            <FinalCTABanner
                title="Ready for a Storm-Ready Metal Roof?"
                subtitle="Schedule a free estimate with Apex Roofing and explore premium metal options for your Florida home."
            />

            <Footer />
            <ConversionFeatures />
        </main>
    );
}
