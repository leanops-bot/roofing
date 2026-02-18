"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroReviews } from "@/components/sections/reviews/HeroReviews";
import { ReviewSourceGrid } from "@/components/sections/reviews/ReviewSourceGrid";
import { VideoTestimonial } from "@/components/sections/reviews/VideoTestimonial";
import { ProjectsPreviewGallery } from "@/components/sections/reviews/ProjectsPreviewGallery";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { ServiceAreaCoverage } from "@/components/sections/ServiceAreaCoverage";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ConversionFeatures } from "@/components/features/ConversionFeatures";
import Script from "next/script";

export default function ReviewsPage() {
    const reviewsSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Apex Roofing",
        "image": "https://apex-roofing-fl.com/logo.png",
        "@id": "",
        "url": "https://apex-roofing-fl.com",
        "telephone": "941-000-0000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Roofing Way",
            "addressLocality": "Sarasota",
            "addressRegion": "FL",
            "postalCode": "34231",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 27.3364,
            "longitude": -82.5307
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1250"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "John D." },
                "datePublished": "2024-10-15",
                "reviewBody": "Apex Roofing completed our roof replacement ahead of schedule and with incredible attention to detail. Highly recommend.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white">
            <Script
                id="reviews-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
            />
            <Navbar />
            <HeroReviews city="Sarasota" />

            {/* GOOGLE REVIEWS SECTION */}
            <ReviewSourceGrid
                source="Google"
                headline="Verified Google Reviews"
                subheadline="Real feedback from homeowners who trusted Apex Roofing with their core protection."
                ctaText="Read All Google Reviews"
                reviews={[
                    { name: "John S.", rating: 5, date: "Dec 2024", excerpt: "Professional, fast scheduling, and clear communication throughout the whole roof replacement process." },
                    { name: "Sarah M.", rating: 5, date: "Nov 2024", excerpt: "They handled our storm damage restoration with extreme care. The cleanup was perfect, and the roof looks incredible." },
                    { name: "Mike R.", rating: 5, date: "Oct 2024", excerpt: "Found their pricing ranges to be very honest. No hidden fees. The foreman was on-site every day ensuring quality." }
                ]}
            />

            <VideoTestimonial />

            {/* BBB REVIEWS SECTION (Beige) */}
            <ReviewSourceGrid
                source="BBB"
                headline="Business Integrity (BBB)"
                subheadline="Apex Roofing is committed to professionalism and reliable service backed by trusted business standards."
                background="beige"
                ctaText="Check BBB Profile"
                reviews={[
                    { name: "Robert K.", rating: 5, date: "Oct 2024", excerpt: "Highly reliable team. They explained every step of the inspection and delivered exactly what was promised." },
                    { name: "Elena G.", rating: 5, date: "Sep 2024", excerpt: "The craftsmanship is top-tier. It's refreshing to work with a contractor that actually keeps their timeline." },
                    { name: "David L.", rating: 5, date: "Aug 2024", excerpt: "Trusted them for our commercial roof transition. Great communication and professional execution." }
                ]}
            />

            <ProjectsPreviewGallery />

            {/* YELP & FACEBOOK REVIEWS (Slider / Grid Preview) */}
            <ReviewsSlider />

            <ServiceAreaCoverage />

            <FinalCTABanner />

            <Footer />
            <ConversionFeatures />
        </main>
    );
}
