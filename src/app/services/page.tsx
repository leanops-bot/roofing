import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { Services } from "@/components/sections/Services";
import { ArrowRight, Hammer, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen font-inter bg-bg-soft">
            <Navbar />

            {/* Hero */}
            <section className="pt-48 pb-20 bg-primary-navy text-white relative">
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
                        Comprehensive Roofing Solutions
                    </h1>
                    <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        From emergency leaks to massive commercial installations, we have the expertise, equipment, and crew for any job.
                    </p>
                </div>
            </section>

            {/* Main Services Grid */}
            <Services />

            {/* Service Sub-Categories (Navigation) */}
            <section className="py-20 bg-bg-soft">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Link href="/services/residential" className="group">
                            <div className="relative h-[300px] rounded-[22px] overflow-hidden cursor-pointer shadow-md">
                                <img src="https://images.unsplash.com/photo-1632759929849-c16773537a67?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Residential</h3>
                                        <div className="flex items-center gap-2 text-white font-medium text-sm">View Details <ArrowRight className="w-4 h-4" /></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="/services/commercial" className="group">
                            <div className="relative h-[300px] rounded-[22px] overflow-hidden cursor-pointer shadow-md">
                                <img src="https://images.unsplash.com/photo-1628131378822-1cb44695d73b?q=80&w=2072&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Commercial</h3>
                                        <div className="flex items-center gap-2 text-white font-medium text-sm">View Details <ArrowRight className="w-4 h-4" /></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="/services/repair" className="group">
                            <div className="relative h-[300px] rounded-[22px] overflow-hidden cursor-pointer shadow-md">
                                <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1770&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Repairs</h3>
                                        <div className="flex items-center gap-2 text-white font-medium text-sm">View Details <ArrowRight className="w-4 h-4" /></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy">Our Process</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Inspection", desc: "We perform a thorough 21-point roof inspection." },
                            { step: "02", title: "Estimate", desc: "You receive a transparent, detailed quote." },
                            { step: "03", title: "Installation", desc: "Our certified crew completes the work efficiently." },
                            { step: "04", title: "Warranty", desc: "We perform a final check and issue your warranty." }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6 bg-white rounded-2xl border border-white">
                                <div className="w-12 h-12 rounded-full bg-primary-blue text-white font-bold flex items-center justify-center mx-auto mb-4 text-xl shadow-lg shadow-primary-blue/20">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-xl text-primary-navy mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTABanner />
        </main>
    );
}
