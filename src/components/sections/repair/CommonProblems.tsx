"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const CommonProblems = ({ city = "Sarasota" }: { city?: string }) => {
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
                            <h2 className="text-[42px] md:text-[52px] font-black tracking-tight leading-[1.1] text-white uppercase italic mb-8">
                                Common Roof Problems <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">in {city}, FL</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-10 max-w-lg">
                                Florida heat, storms, and humidity can break down roofing systems fast. Apex Roofing repairs damage before it becomes a full replacement.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    "Roof leaks during heavy rain",
                                    "Damaged or missing tiles",
                                    "Loose flashing and seals",
                                    "Soft spots in decking",
                                    "Gutter overflow issues",
                                    "Storm debris impact damage"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-primary-blue group-hover:text-primary-navy transition-colors" />
                                        </div>
                                        <span className="text-white text-sm font-bold uppercase italic tracking-tight">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-white transition-all shadow-glow-blue flex items-center gap-3 group">
                                    Schedule Inspection
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full border border-white/10 text-white font-black hover:bg-white/5 transition-all flex items-center gap-3 uppercase text-xs tracking-widest italic group">
                                    Emergency Repair
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
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-white/5 shadow-2xl aspect-[4/5] lg:aspect-square"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1628533225734-79e7f4327e4e?q=80&w=1200&auto=format&fit=crop"
                                alt="Roof Damage Inspection"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />

                            {/* Branded Sticker */}
                            <div className="absolute bottom-10 right-10 bg-primary-gold-500 p-6 rounded-3xl border-4 border-white shadow-2xl rotate-6">
                                <p className="text-primary-navy font-black text-xl italic leading-none">FLORIDA STYLE</p>
                                <p className="text-[8px] font-black text-primary-navy uppercase tracking-[0.3em] mt-1">Certified Response</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
