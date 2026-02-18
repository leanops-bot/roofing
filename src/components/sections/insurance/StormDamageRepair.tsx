"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const StormDamageRepair = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom px-4 md:px-0">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image Visual */}
                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-soft-beige shadow-2xl aspect-[4/3]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=1200&auto=format&fit=crop"
                                alt="Storm Damage Roof Repair Florida"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                Storm, Wind & <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Hail Damage Repair</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                Apex Roofing provides fast inspections, emergency repairs, and full replacements after Florida storm damage. We secure your home immediately.
                            </p>

                            <ul className="space-y-4 mb-12">
                                {[
                                    "Emergency tarping and leak protection",
                                    "Storm inspection documentation",
                                    "Shingle and flashing replacement",
                                    "Roof replacement options if damage is severe",
                                    "Warranty-backed restoration work"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary-gold-500 shrink-0" />
                                        <span className="text-primary-navy font-bold text-sm tracking-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-gold-500 text-primary-navy font-black hover:bg-white transition-all shadow-glow-gold flex items-center gap-3 group uppercase text-xs tracking-widest leading-none">
                                    Start Your Claim
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full border border-slate-200 text-primary-navy font-black hover:bg-slate-50 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic leading-none">
                                    Call Us Now
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
