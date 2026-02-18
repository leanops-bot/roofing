"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const StormRestoration = () => {
    return (
        <section className="py-24 bg-primary-navy">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content Card */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-[1.1] text-white uppercase italic mb-8">
                                Storm Damage & <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20 block mt-2">Roof Restoration</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-10">
                                Florida storms can cause hidden roof damage. Apex Roofing inspects, stabilizes, and restores your roof with professional long-term solutions.
                            </p>

                            <div className="space-y-4 mb-12">
                                {[
                                    "Wind uplift damage inspections",
                                    "Water intrusion prevention systems",
                                    "Emergency sealing & temporary tarping",
                                    "Structural roofline stabilization",
                                    "Permanent repair planning after storm event"
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
                                    Schedule Emergency Inspection
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic font-bold">
                                    <Phone className="w-4 h-4" />
                                    Call Emergency Line
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
                                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop"
                                alt="Storm Damaged Roof Repair"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />

                            {/* Restoration Sticker */}
                            <div className="absolute top-10 right-10 bg-primary-gold-500 p-6 rounded-3xl border-4 border-white shadow-2xl rotate-6">
                                <p className="text-primary-navy font-black text-xl italic leading-none">STORM READY</p>
                                <p className="text-[8px] font-black text-primary-navy uppercase tracking-[0.3em] mt-1">24/7 Response Expert</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
