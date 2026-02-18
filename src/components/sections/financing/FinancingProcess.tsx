"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STEPS = [
    {
        title: "Free Roof Inspection",
        desc: "We inspect your roof and identify replacement or repair needs."
    },
    {
        title: "Select Your Plan",
        desc: "Choose a payment option that matches your budget and timeline."
    },
    {
        title: "Scheduling",
        desc: "We coordinate materials, permits, and your project execution."
    },
    {
        title: "Begin Construction",
        desc: "Our crew completes the roof installation or repair professionally."
    },
    {
        title: "Final Check",
        desc: "Final walkthrough with warranty-backed workmanship coverage."
    }
];

export const FinancingProcess = () => {
    return (
        <section className="py-24 bg-soft-beige">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-tight text-primary-navy mb-6 uppercase italic">
                            How Our Roof <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Financing Works</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl mx-auto">
                            A simple process designed to get your roof protected quickly without financial pressure.
                        </p>
                    </motion.div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-primary-navy/10 transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {STEPS.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                {/* Step Indicator */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-[24px] bg-white border-4 border-primary-navy/5 shadow-xl z-10 font-black text-primary-gold-500 text-xl">
                                    {idx + 1}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group`}>
                                    <h4 className="text-xl font-black text-primary-navy uppercase italic mb-4 tracking-tight group-hover:text-primary-blue transition-colors">
                                        {step.title}
                                    </h4>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Spacer */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 mx-auto group uppercase text-xs tracking-widest">
                        Schedule a Free Estimate
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
