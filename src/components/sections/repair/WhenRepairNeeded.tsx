"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const WhenRepairNeeded = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual */}
                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl aspect-[4/5] lg:aspect-square"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1541824467965-946610738f4d?q=80&w=1200&auto=format&fit=crop"
                                alt="Warning Signs"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Right: Checklist Card */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-soft-beige p-12 md:p-16 rounded-[48px] border border-slate-100 shadow-xl"
                        >
                            <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                How to Know When You Need <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roof Repair</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                Small issues become expensive fast. If you notice any of these warning signs, Apex Roofing can inspect and repair immediately.
                            </p>

                            <div className="space-y-4 mb-12">
                                {[
                                    "Visible water stains on ceilings",
                                    "Shingles/Tiles lifting or cracked",
                                    "Roof leaks only during storms",
                                    "Mold or musty smell in attic",
                                    "Granules collecting in gutters",
                                    "Loose flashing around chimneys"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                                        </div>
                                        <span className="text-primary-navy text-sm font-bold uppercase italic tracking-tight">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="h-16 px-10 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all shadow-glow-blue flex items-center gap-3 group">
                                Book Free Inspection
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
