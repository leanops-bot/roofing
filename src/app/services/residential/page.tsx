import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { Check } from "lucide-react";

export default function ResidentialPage() {
    return (
        <main className="min-h-screen font-inter bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-20 bg-primary-navy text-white">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Residential Roofing</h1>
                    <p className="text-xl text-white max-w-2xl">Protect your home and family with premium roofing systems designed to withstand the harsh Florida climate.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-primary-navy mb-6">Complete Home Protection</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Your roof is your home's first line of defense. We specialize in installing high-performance asphalt shingles, tile roofs, and metal standing seam roofs that offer superior durability and curb appeal.
                            </p>
                            <ul className="space-y-3">
                                {["Asphalt Shingle Replacement", "Clay & Concrete Tile", "Residential Metal Roofing", "Skylight Installation", "Attic Ventilation"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-primary-navy font-medium">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check className="w-3 h-3" /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1632759929849-c16773537a67?q=80&w=2070&auto=format&fit=crop" className="rounded-[22px] shadow-xl" alt="Residential Roofing" />
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTABanner />
        </main>
    );
}
