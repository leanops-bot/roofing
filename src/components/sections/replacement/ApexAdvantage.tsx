"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const BULLETS = [
    "Licensed & fully insured roofing professionals",
    "High-quality materials with manufacturer-backed warranties",
    "Transparent pricing and honest recommendations",
    "Storm restoration and insurance support available",
    "Clean, respectful job sites and professional crews"
];

export const ApexAdvantage = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: -30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl aspect-square"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1635848690426-f3713d042c3b?q=80&w=1200&auto=format&fit=crop"
                                alt="Apex Advantage"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[42px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                The Apex Roofing <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Advantage</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                                More than a roofing contractor — we deliver a premium experience from initial inspection to the final walkthrough.
                            </p>

                            <div className="space-y-4 mb-12">
                                {BULLETS.map((bullet, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                                        </div>
                                        <span className="text-primary-navy text-sm font-bold uppercase italic tracking-tight">{bullet}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group">
                                Book Consultation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
