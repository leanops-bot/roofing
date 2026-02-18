"use client";

import React from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

export const PricingIntro = () => {
    return (
        <section className="py-24 bg-soft-light text-center">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-tight text-primary-navy uppercase italic mb-8">
                            New Roof Pricing <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">(Transparent Ranges)</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed mb-12">
                            Roof pricing depends on roof size, complexity, and material choice. Below are typical ranges for Florida homes and buildings.
                        </p>

                        <div className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-6 text-left">
                            <div className="w-14 h-14 rounded-2xl bg-primary-gold-500/10 flex items-center justify-center shrink-0">
                                <Info className="w-6 h-6 text-primary-gold-500" />
                            </div>
                            <div>
                                <p className="text-primary-navy font-black text-lg leading-tight uppercase italic mb-1">Pricing Disclaimer</p>
                                <p className="text-slate-500 text-xs font-black uppercase tracking-widest leading-relaxed">
                                    These are estimated ranges based on average residential roofs in Southwest Florida. Exact pricing requires a professional onsite inspection and measurement to account for specific roof geometry and deck condition.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
