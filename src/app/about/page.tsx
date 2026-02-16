import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { ShieldCheck, Users, Trophy, Target } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen font-inter bg-bg-soft">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-primary-navy text-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-accent-gold font-bold tracking-wider uppercase text-sm mb-4 block">About RoofPro</span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
                            Roofing Built on <br />
                            <span className="text-primary-blue">Trust & Craftsmanship</span>
                        </h1>
                        <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl">
                            For over 25 years, we've set the standard for residential and commercial roofing in Florida. We don't just build roofs; we build protection that lasts a lifetime.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                                alt="RoofPro Team"
                                className="rounded-[28px] shadow-hero"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-primary-navy mb-6">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                To deliver roofing solutions that protect families, strengthen communities, and exceed industry standards through transparent pricing, superior materials, and uncompromised safety.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="border border-primary-blue/10 p-4 rounded-xl">
                                    <h4 className="font-bold text-primary-blue text-3xl mb-1">25+</h4>
                                    <p className="text-sm text-text-light font-bold uppercase">Years Experience</p>
                                </div>
                                <div className="border border-primary-blue/10 p-4 rounded-xl">
                                    <h4 className="font-bold text-primary-blue text-3xl mb-1">4.8k+</h4>
                                    <p className="text-sm text-text-light font-bold uppercase">Projects Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-bg-soft">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Core Values</h2>
                        <p className="text-text-secondary">The principles that drive every project we undertake.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: ShieldCheck, title: "Integrity", desc: "Honest estimates and transparent work." },
                            { icon: Trophy, title: "Quality", desc: "Top-tier materials and installation." },
                            { icon: Users, title: "Community", desc: "Serving our neighbors with pride." },
                            { icon: Target, title: "Safety", desc: "Zero-compromise safety standards." }
                        ].map((val, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-white shadow-sm hover:shadow-card transition-all">
                                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center mb-6">
                                    <val.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-primary-navy text-xl mb-3">{val.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTABanner />
        </main>
    );
}
