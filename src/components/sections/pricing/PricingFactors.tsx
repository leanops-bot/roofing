"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";

export const PricingFactors = () => {
    const factors = [
        "Roof Size (Square Footage)",
        "Roof Pitch & Complexity",
        "Number of Stories",
        "Tear-Off vs. Re-Roofing",
        "Material Selection & Quality",
        "Ventilation Requirements",
        "Flashing & Chimney Details",
        "Access Difficulty & Safety",
        "Permit & Code Compliance",
        "HOA Requirements"
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                What Affects Your <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roof Pricing?</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                Every roof is unique. Pricing depends on more than just materials — Apex Roofing evaluates every detail to provide an accurate, transparent quote.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                                {factors.map((factor, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-lg bg-primary-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-primary-gold-500 transition-all">
                                            <CheckCircle2 className="w-4 h-4 text-primary-gold-500 group-hover:text-white transition-all" />
                                        </div>
                                        <span className="text-slate-700 text-sm font-bold uppercase italic tracking-tight">{factor}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest">
                                    Get Exact Quote
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full border border-slate-200 text-primary-navy font-black hover:bg-slate-50 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic font-bold">
                                    Call Now
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Visual Sectioning */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl aspect-[4/5]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1541810531238-038c350000ed?q=80&w=1200&auto=format&fit=crop"
                                alt="Roof Inspection Measurement"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-primary-navy/10" />

                            {/* Floating Highlight Card */}
                            <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl border border-white/20 max-w-[280px]">
                                <div className="w-12 h-12 rounded-2xl bg-primary-blue/10 flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-primary-blue" />
                                </div>
                                <h5 className="text-primary-navy font-black text-xl leading-tight mb-2 uppercase italic">Accurate Assessment</h5>
                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">We don't guess. We measure, inspect, and itemize every cost.</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
