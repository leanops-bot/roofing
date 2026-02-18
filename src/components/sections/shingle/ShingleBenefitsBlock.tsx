"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, TrendingUp, Palette, Zap, Clock, Droplets, Wrench } from "lucide-react";

export const ShingleBenefitsBlock = () => {
    const benefits = [
        { title: "Affordable ROI", icon: TrendingUp, text: "High return on investment with lower upfront costs." },
        { title: "Design Variety", icon: Palette, text: "Wide range of architectural styles and colors." },
        { title: "Storm Rated", icon: Zap, text: "Engineered to withstand high winds and heat." },
        { title: "Fast Install", icon: Clock, text: "Efficient timelines to minimize disruption." },
        { title: "Waterproofing", icon: Droplets, text: "Superior protection with multi-layer systems." },
        { title: "Easy Repairs", icon: Wrench, text: "Simple to maintain and repair after minor damage." }
    ];

    return (
        <section className="py-24 bg-primary-navy overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual Representation */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-white/5 shadow-2xl aspect-[4/5]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1510612141523-8877197368d1?q=80&w=1200&auto=format&fit=crop"
                                alt="Residential Shingle Excellence"
                                className="w-full h-full object-cover grayscale opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />

                            {/* Premium Badge */}
                            <div className="absolute bottom-10 left-10 bg-primary-gold-500 p-8 rounded-3xl border-4 border-white shadow-2xl skew-x-[-2deg]">
                                <p className="text-primary-navy font-black text-xs uppercase tracking-widest mb-1 leading-none">Balanced Excellence</p>
                                <p className="text-primary-navy font-black text-2xl italic uppercase leading-none">Value & Power</p>
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
                                Why Choose Shingles <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">For Your Home?</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-10">
                                Shingle roofing remains the most popular option for Florida homeowners because it perfectly balances affordability, aesthetic flexibility, and robust storm resistance.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-gold-500 transition-all">
                                            <benefit.icon className="w-5 h-5 text-primary-gold-500 group-hover:text-primary-navy transition-all" />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-black text-sm uppercase italic mb-1">{benefit.title}</h5>
                                            <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest leading-relaxed">{benefit.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-gold-500 text-primary-navy font-black hover:bg-white transition-all shadow-glow-gold flex items-center gap-3 group uppercase text-xs tracking-widest leading-none">
                                    Book Consultation
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full border-2 border-white/10 text-white font-black hover:bg-white/5 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic leading-none">
                                    Call Now
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
