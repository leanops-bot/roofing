"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroPricing } from "@/components/sections/pricing/HeroPricing";
import { PricingIntro } from "@/components/sections/pricing/PricingIntro";
import { PricingGridCategory } from "@/components/sections/pricing/PricingGridCategory";
import { InspectionValueBanner } from "@/components/sections/pricing/InspectionValueBanner";
import { PricingFactors } from "@/components/sections/pricing/PricingFactors";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { FinancingBanner } from "@/components/sections/FinancingBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroPricing city="Sarasota" />
            <PricingIntro />

            {/* SHINGLE GRID */}
            <PricingGridCategory
                title="Asphalt Shingle Roofs"
                desc="Affordable, durable, and popular for Florida homes. High-performance shingles designed for wind resistance."
                cards={[
                    { title: "Small Home", range: "$8,500 – $12,000+", note: "Typical 1,200–1,800 sq ft roof area" },
                    { title: "Medium Home", range: "$12,000 – $18,500+", note: "Typical 1,800–2,600 sq ft roof area" },
                    { title: "Large Home", range: "$18,500 – $28,000+", note: "Typical 2,600+ sq ft roof area" }
                ]}
            />

            {/* TILE GRID (Beige) */}
            <PricingGridCategory
                title="Concrete & Clay Tile Roofs"
                desc="Luxury look with extreme longevity and premium installation requirements."
                background="beige"
                cards={[
                    { title: "Small Home", range: "$18,000 – $25,000+", note: "Tile material + standard underlayment" },
                    { title: "Medium Home", range: "$25,000 – $42,000+", note: "Includes flashing + custom trim work" },
                    { title: "Large Home", range: "$42,000 – $75,000+", note: "Complex geometry and estate sizing" }
                ]}
            />

            <InspectionValueBanner />

            {/* METAL GRID */}
            <PricingGridCategory
                title="Standing Seam Metal Roofs"
                desc="High-performance roofing built for massive storm resistance and energy efficiency."
                cards={[
                    { title: "Small Home", range: "$16,500 – $24,000+", note: "Premium panel system & trim" },
                    { title: "Medium Home", range: "$24,000 – $40,000+", note: "Includes ventilation & transition upgrades" },
                    { title: "Large Home", range: "$40,000 – $65,000+", note: "Expert precision for complex lines" }
                ]}
            />

            <PricingFactors />

            <FinancingBanner />

            <ReviewsSlider />

            <ServiceAreaCoverage />

            <FAQSection />

            <FinalCTABanner />

            <Footer />
            <ConversionFeatures />
        </main>
    );
}
