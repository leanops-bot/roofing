"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroShingle } from "@/components/sections/shingle/HeroShingle";
import { ShingleServicesGrid } from "@/components/sections/shingle/ShingleServicesGrid";
import { ShingleBenefitsBlock } from "@/components/sections/shingle/ShingleBenefitsBlock";
import { WhyChooseShingles } from "@/components/sections/shingle/WhyChooseShingles";
import { ShingleInstallationJourney } from "@/components/sections/shingle/ShingleInstallationJourney";
import { MetalCrossSell } from "@/components/sections/metal/MetalCrossSell";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { FinancingBanner } from "@/components/sections/FinancingBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";
import { ProjectsPreviewGallery } from "@/components/sections/reviews/ProjectsPreviewGallery";

const SHINGLE_FAQS = [
    {
        q: "How long do roofing shingles last in Florida?",
        a: "Shingle lifespan depends on material quality, installation, and storm exposure. Many architectural shingles last 20-30 years with proper maintenance, significantly longer than standard 3-tab options."
    },
    {
        q: "Can roofing shingles handle hurricane winds?",
        a: "Yes. With proper installation and storm-rated shingles, shingle roofs can perform well in Florida wind conditions—often rated for winds up to 110-130 MPH."
    },
    {
        q: "Are architectural shingles worth it?",
        a: "Architectural shingles offer stronger durability, better curb appeal, and longer warranties compared to standard shingles. They are the standard for Florida residential roofs."
    },
    {
        q: "Can you repair missing or damaged shingles?",
        a: "Yes. Apex Roofing provides fast repair services for missing shingles, leaks, and storm damage to extend the life of your existing roof."
    },
    {
        q: "Do you offer financing for shingle roof replacement?",
        a: "Yes. Apex Roofing offers flexible financing options for qualified homeowners to make your roof replacement affordable."
    }
];

export default function ShingleRoofingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroShingle city="Sarasota" />
            <ShingleServicesGrid />
            <ShingleBenefitsBlock />
            <WhyChooseShingles />

            <ReviewsSlider />

            <ShingleInstallationJourney />

            <ProjectsPreviewGallery />

            <MetalCrossSell />

            <FinancingBanner />

            <ServiceAreaCoverage />

            <FAQSection faqs={SHINGLE_FAQS} title="Shingle Roofing FAQs" />

            <FinalCTABanner
                title="Start Your Shingle Roofing Project Today"
                subtitle="Upgrade your home with a roof system built for Florida storms — installed by Apex Roofing professionals."
            />

            <Footer />
            <ConversionFeatures />
        </main>
    );
}
