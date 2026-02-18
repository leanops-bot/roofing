"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Zap, Sun, Wind, Recycle } from "lucide-react";

export const PremiumMetalSystems = () => {
    const benefits = [
        { title: "Hurricane Resistance", icon: Wind, text: "High wind resistance built for coastal conditions." },
        { title: "Energy Efficient", icon: Sun, text: "Reflective coatings reduce cooling costs significantly." },
        { title: "Lifetime Durability", icon: ShieldCheck, text: "Outlasts traditional shingles by decades." },
        { title: "Fire Resistance", icon: Zap, text: "Non-combustible materials for maximum safety." },
        { title: "Eco-Friendly", icon: Recycle, text: "Fully recyclable materials and sustainable production." }
    ];

    return (
        <section className="py-24 bg-primary-navy overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual Representation */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-white/5 shadow-2xl aspect-[4/5]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1621295988220-410714edbbec?q=80&w=1200&auto=format&fit=crop"
                                alt="Premium Standing Seam Installation"
                                className="w-full h-full object-cover grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />

                            {/* Premium Badge */}
                            <div className="absolute bottom-10 left-10 bg-primary-gold-500 p-8 rounded-3xl border-4 border-white shadow-2xl -rotate-2">
                                <p className="text-primary-navy font-black text-xs uppercase tracking-widest mb-1">Apex Certified</p>
                                <p className="text-primary-navy font-black text-2xl italic uppercase leading-none">Elite Grade</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-white uppercase italic mb-8">
                                Premium Metal <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roof Systems</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-10">
                                We install high-performance metal roofing systems built for Florida storms, heat, and long-term curb appeal. Our systems utilize heavy-gauge steel and aluminum designed for regional survival.
                            </p>

                            <div className="space-y-6 mb-12">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-gold-500 transition-all">
                                            <benefit.icon className="w-5 h-5 text-primary-gold-500 group-hover:text-primary-navy transition-all" />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-black text-sm uppercase italic mb-1">{benefit.title}</h5>
                                            <p className="text-text-muted text-xs font-bold uppercase tracking-widest leading-relaxed">{benefit.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-gold-500 text-primary-navy font-black hover:bg-white transition-all shadow-glow-gold flex items-center gap-3 group uppercase text-xs tracking-widest leading-none">
                                    Get Free Estimate
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full border-2 border-white/10 text-white font-black hover:bg-white/5 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic leading-none">
                                    Explore Metal Options
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
