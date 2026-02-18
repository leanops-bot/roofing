"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const FlatBenefits = () => {
    return (
        <section className="py-24 bg-primary-navy">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-[1.1] text-white uppercase italic mb-8">
                                Benefits of Flat Roofing for <br />
                                <span className="text-sm md:text-lg block mt-2 text-primary-gold-500 font-black tracking-[0.2em]">FLORIDA PROPERTIES</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-10">
                                Flat roofing is ideal for commercial buildings and modern residential designs — offering strength, energy efficiency with reflective membranes, and easy maintenance.
                            </p>

                            <div className="space-y-4 mb-12">
                                {[
                                    "Durable commercial-grade roofing systems",
                                    "Energy efficiency with reflective membranes",
                                    "Cost-effective repairs and maintenance options",
                                    "Ideal for large surface roof coverage",
                                    "Compatible with roof coatings and restorations",
                                    "Modern design with clean architectural look"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-primary-gold-500/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-primary-gold-500" />
                                        </div>
                                        <span className="text-white text-sm font-bold uppercase italic tracking-tight">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-white transition-all shadow-glow-blue flex items-center gap-3 group">
                                    Book Free Inspection
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all flex items-center gap-3 uppercase text-xs tracking-widest italic">
                                    <Phone className="w-4 h-4" />
                                    Call Now
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-white/5 shadow-2xl aspect-[4/3]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542095944369-02c39f1c750e?q=80&w=1200&auto=format&fit=crop"
                                alt="Modern Flat Roof Architecture"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />

                            {/* Pro Sticker */}
                            <div className="absolute bottom-10 right-10 bg-primary-gold-500 p-6 rounded-3xl border-4 border-white shadow-2xl rotate-3">
                                <p className="text-primary-navy font-black text-xl italic leading-none">ENERGY MAX</p>
                                <p className="text-[8px] font-black text-primary-navy uppercase tracking-[0.3em] mt-1">UV Reflective Tech</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
