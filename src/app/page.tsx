import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroBooking } from "@/components/sections/HeroBooking";
import { TrustStats } from "@/components/sections/TrustStats";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";

export default function Home() {
  return (
    <main className="min-h-screen font-inter bg-slate-50">
      <Navbar />
      <HeroBooking />
      <TrustStats />
      <Services />
      <WhyChooseUs />
      <ProjectsCarousel />
      <Testimonials />
      <PricingPreview />
      <FAQSection />
      <FinalCTABanner />
    </main>
  );
}
