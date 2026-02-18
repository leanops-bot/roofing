"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const STEPS = [
    {
        step_title: "Immediate Contact",
        step_desc: "Call or submit the emergency intake form for rapid 24/7 response scheduling."
    },
    {
        step_title: "Damage Inspection",
        step_desc: "We assess roof damage and identify leak sources, tree impact, and structural risks."
    },
    {
        step_title: "Emergency Protection",
        step_desc: "Temporary tarping, sealing, and stabilization to stop water intrusion immediately."
    },
    {
        step_title: "Repair & Claim Plan",
        step_desc: "Clear repair or replacement estimate and documentation for insurance support."
    },
    {
        step_title: "Final Restoration",
        step_desc: "Permanent repair completion with full cleanup and warranty-backed workmanship."
    }
];

export const EmergencyProcess = () => {
    return (
        <section className="py-24 bg-soft-light">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-tight text-primary-navy mb-6 uppercase italic">
                            Your Emergency <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roofing Journey</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl mx-auto">
                            Fast, reliable, and restorative — Apex Roofing handles urgent storm and roof damage with a clear professional process.
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

                                {/* Content Card - Emergency Red Accents on Hover */}
                                <div className={`w-full md:w-[45%] bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group`}>
                                    <h4 className="text-xl font-black text-primary-navy uppercase italic mb-4 tracking-tight group-hover:text-primary-blue transition-colors">
                                        {step.step_title}
                                    </h4>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                        {step.step_desc}
                                    </p>
                                </div>

                                {/* Spacer for flex grid */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest">
                        Get Emergency Help
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="h-16 px-12 rounded-full bg-white border-2 border-primary-navy text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center gap-3 group uppercase text-xs tracking-widest italic font-bold">
                        <Phone className="w-4 h-4" />
                        Call Emergency Line
                    </button>
                </div>
            </div>
        </section>
    );
};
