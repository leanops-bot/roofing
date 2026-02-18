"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const WhyChooseApexFlat = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1200&auto=format&fit=crop"
                                    alt="Expert Flat Roof Installation"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -right-12 bottom-12 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100 max-w-[240px] hidden md:block">
                                <p className="text-primary-navy font-black text-2xl mb-1 mt-1">INDUSTRIAL</p>
                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">GRADE QUALITY</p>
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
                            <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                Why SW Florida Chooses <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Apex Roofing</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                Flat roofing requires correct drainage planning, membrane sealing, and expert installation — we handle it with commercial-grade precision.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    "Flat roofing specialists",
                                    "Premium membrane systems",
                                    "Leak prevention focus",
                                    "Clean job site promise",
                                    "Transparent pricing",
                                    "Commercial warranties"
                                ].map((bullet, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary-blue shrink-0" />
                                        <span className="text-primary-navy text-xs font-black uppercase tracking-widest italic">{bullet}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest">
                                Request Flat Roof Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
