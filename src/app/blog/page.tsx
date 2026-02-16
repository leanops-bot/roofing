import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ArrowRight } from "lucide-react";

const posts = [
    {
        title: "How to Spot Storm Damage Before It's Too Late",
        excerpt: "Learn the 5 signs of hidden roof damage that could cost you thousands if ignored.",
        category: "Safety Tips",
        date: "Jan 12, 2026",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Metal Roofing vs. Asphalt Shingles: What's Best for Florida?",
        excerpt: "A comprehensive comparison of durability, cost, and lifespan for Florida homeowners.",
        category: "Guides",
        date: "Feb 04, 2026",
        image: "https://images.unsplash.com/photo-1628131378822-1cb44695d73b?q=80&w=2072&auto=format&fit=crop"
    },
    {
        title: "The Truth About Roof Warranties",
        excerpt: "Understand the difference between workmanship and manufacturer warranties.",
        category: "Education",
        date: "Feb 18, 2026",
        image: "https://images.unsplash.com/photo-1632759929849-c16773537a67?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen font-inter bg-bg-soft">
            <Navbar />

            <section className="pt-32 pb-20 bg-primary-navy text-white">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Roofing Insights</h1>
                    <p className="text-xl text-white max-w-2xl">Expert advice, maintenance tips, and industry news to help you make informed decisions.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <article key={idx} className="bg-white rounded-[22px] overflow-hidden border border-white shadow-sm hover:shadow-card transition-all group cursor-pointer">
                                <div className="h-48 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-4">
                                        <span className="text-primary-blue">{post.category}</span>
                                        <span className="text-text-light">{post.date}</span>
                                    </div>
                                    <h3 className="font-bold text-xl text-primary-navy mb-3 group-hover:text-primary-blue transition-colors">{post.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{post.excerpt}</p>

                                    <span className="text-primary-blue font-bold text-sm inline-flex items-center gap-2">Read Article <ArrowRight className="w-4 h-4" /></span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTABanner />
        </main>
    );
}
