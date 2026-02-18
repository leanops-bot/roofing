"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const WhyFinance = () => {
    return (
        <section className="py-24 bg-soft-light">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-white shadow-2xl aspect-[4/3]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1460317442147-d39fd470691d?q=80&w=1200&auto=format&fit=crop"
                                alt="Modern Florida Home Exterior"
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
                                Why Finance Your <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roofing Project?</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                A roof is one of the most important investments in your property — financing helps you replace or repair it without delaying protection.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-12">
                                {[
                                    "Avoid large upfront payments",
                                    "Flexible monthly plans",
                                    "Fast approval process",
                                    "Ideal for storm repairs",
                                    "Replacement & Repair options",
                                    "Protect home immediately"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary-blue" />
                                        <span className="text-slate-700 text-xs font-black uppercase italic tracking-tight">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest">
                                    Start Application
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full border-2 border-primary-navy text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic font-bold">
                                    Free Estimate
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
