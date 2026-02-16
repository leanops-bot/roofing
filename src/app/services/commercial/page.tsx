import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { Check } from "lucide-react";

export default function CommercialPage() {
    return (
        <main className="min-h-screen font-inter bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-20 bg-primary-navy text-white">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Commercial Roofing</h1>
                    <p className="text-xl text-white max-w-2xl">Industrial-grade roofing solutions for businesses, warehouses, and multi-family properties.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-primary-navy mb-6">Built for Business</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We understand that commercial roofing projects require minimal disruption and maximum longevity. Our team is certified to install all major flat roof systems including TPO, EPDM, and PVC.
                            </p>
                            <ul className="space-y-3">
                                {["TPO & EPDM Single-Ply", "Modified Bitumen", "Commercial Metal Roofing", "Roof Coatings & Restoration", "Preventative Maintenance Plans"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-primary-navy font-medium">
                                        <div className="w-5 h-5 rounded-full bg-primary-blue text-white flex items-center justify-center"><Check className="w-3 h-3" /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1628131378822-1cb44695d73b?q=80&w=2072&auto=format&fit=crop" className="rounded-[22px] shadow-xl" alt="Commercial Roofing" />
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTABanner />
        </main>
    );
}
