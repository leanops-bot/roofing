"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export const WhenToConsiderFinancing = () => {
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
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1200&auto=format&fit=crop"
                                alt="Roof Damage Inspection"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-primary-navy/10" />
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
                                When to Consider <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roof Financing</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                Financing is ideal when roof repairs or replacement can’t wait — especially in Florida’s unpredictable storm seasons.
                            </p>

                            <div className="space-y-4 mb-12">
                                {[
                                    "You need urgent replacement after storm damage",
                                    "You want to avoid large upfront costs",
                                    "Roof is showing signs of major wear or leaks",
                                    "Repairs needed before hurricane season starts",
                                    "Upgrade to a stronger premium roofing system",
                                    "Protect home resale value during restoration"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                            <AlertCircle className="w-4 h-4 text-red-500" />
                                        </div>
                                        <span className="text-slate-700 text-sm font-bold uppercase italic tracking-tight">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest">
                                    Get Free Estimate
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full border border-slate-200 text-primary-navy font-black hover:bg-slate-50 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic font-bold">
                                    Start Application
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
