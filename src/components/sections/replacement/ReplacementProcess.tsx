"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const STEPS = [
    {
        title: "Free Roof Assessment",
        desc: "We inspect your roof and identify damage or aging issues."
    },
    {
        title: "Transparent Estimate",
        desc: "Clear pricing and material options explained in minutes."
    },
    {
        title: "Scheduling & Prep",
        desc: "We coordinate permits, materials, and installation dates."
    },
    {
        title: "Professional Installation",
        desc: "Expert installation with safety-first crews and clean workflow."
    },
    {
        title: "Walkthrough & Warranty",
        desc: "Final inspection, cleanup, and warranty documentation."
    }
];

export const ReplacementProcess = () => {
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
                            Your Roof Replacement <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Journey</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl mx-auto">
                            A simple, step-by-step process designed to make roof replacement stress-free for Sarasota homeowners.
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
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-[24px] bg-white border-4 border-primary-navy/5 shadow-xl z-10 font-black text-primary-blue text-xl">
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

                                {/* Spacer for flex grid */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group">
                        Start My Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="h-16 px-12 rounded-full bg-white border-2 border-primary-navy text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center gap-3 group uppercase text-xs tracking-widest">
                        <Phone className="w-4 h-4" />
                        Call an Expert
                    </button>
                </div>
            </div>
        </section>
    );
};
