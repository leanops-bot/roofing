"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroProjects } from "@/components/sections/projects/HeroProjects";
import { BeforeAfterTransformations } from "@/components/sections/projects/BeforeAfterTransformations";
import { ProjectMapSection } from "@/components/sections/projects/ProjectMapSection";
import { ProjectGalleryFiltered } from "@/components/sections/projects/ProjectGalleryFiltered";
import { ServicesPreviewGrid } from "@/components/sections/projects/ServicesPreviewGrid";
import { FinancingBanner } from "@/components/sections/FinancingBanner";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";

export default function ProjectsGalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroProjects city="Sarasota" />
            <BeforeAfterTransformations />
            <ProjectMapSection />
            <FinancingBanner />
            <ProjectGalleryFiltered />
            <ServicesPreviewGrid />
            <ReviewsSlider />
            <FinalCTABanner />
            <Footer />
            <ConversionFeatures />
        </main>
    );
}
