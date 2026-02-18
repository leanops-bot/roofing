import React from "react";
import { HeroInsurance } from "@/components/sections/insurance/HeroInsurance";
import { InsuranceServicesGrid } from "@/components/sections/insurance/InsuranceServicesGrid";
import { WhenToFileClaim } from "@/components/sections/insurance/WhenToFileClaim";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { StormDamageRepair } from "@/components/sections/insurance/StormDamageRepair";
import { InsuranceJourney } from "@/components/sections/insurance/InsuranceJourney";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseInsurance } from "@/components/sections/insurance/WhyChooseInsurance";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Roof Insurance Claim Assistance in Sarasota, FL | Apex Roofing",
    description: "Apex Roofing helps homeowners with roof insurance claims in Sarasota, FL. Storm damage inspections, documentation, adjuster support, and replacement services.",
};

export default function InsuranceClaimsPage() {
    const insuranceFaqs = [
        {
            q: "How do I know if my roof damage is covered by insurance?",
            a: "Coverage depends on your policy and the cause of damage. Storm-related wind, hail, and hurricane damage is often covered, but an inspection is the best way to confirm."
        },
        {
            q: "What should I do after a storm damages my roof?",
            a: "Document visible damage if safe, avoid climbing the roof, and schedule a professional inspection as soon as possible."
        },
        {
            q: "Can Apex Roofing help with my insurance claim?",
            a: "Yes. We assist with storm inspections, documentation, and claim process support to help you understand next steps."
        },
        {
            q: "Does insurance cover roof replacement?",
            a: "In many cases, yes — if the damage is significant and storm-related. Coverage varies by policy and inspection results."
        },
        {
            q: "How long does the roof insurance claim process take?",
            a: "It depends on your provider and claim complexity. Some claims move quickly, while others require supplements or additional review."
        },
        {
            q: "What if my roof claim is denied?",
            a: "A second inspection may help identify missed damage. Apex Roofing can re-inspect and provide additional documentation where appropriate."
        }
    ];

    return (
        <main className="bg-white">
            <HeroInsurance city="Sarasota" />
            <InsuranceServicesGrid />
            <WhenToFileClaim />
            <ReviewsSlider />
            <StormDamageRepair />
            <InsuranceJourney />
            <ServiceAreaCoverage />
            <ServicesGrid />
            <WhyChooseInsurance />
            <FAQSection
                faqs={insuranceFaqs}
                title="FAQs About Roof Insurance Claims"
                subtitle="Common questions about storm damage coverage in Southwest Florida."
            />
            <FinalCTABanner />
        </main>
    );
}
