"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const CondoRoofing = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl aspect-[4/5] lg:aspect-square"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
                                alt="Condo Roofing Florida"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Right: Content Card */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                Condo Roofing Services <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Across SW Florida</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                Apex Roofing provides large-scale roofing services for condos, HOAs, and multi-unit properties with compliance-focused execution and minimal resident disruption.
                            </p>

                            <div className="space-y-4 mb-12">
                                {[
                                    "HOA and condo compliance support",
                                    "Multi-unit roof replacement coordination",
                                    "Project scheduling to minimize disruption",
                                    "Long-term structural warranty options"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                                        </div>
                                        <span className="text-primary-navy text-sm font-bold uppercase italic tracking-tight">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all shadow-glow-blue flex items-center gap-3 group">
                                    Request Condo Estimate
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full border border-primary-navy/10 text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center gap-3 uppercase text-xs tracking-widest italic">
                                    View Condo Projects
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
