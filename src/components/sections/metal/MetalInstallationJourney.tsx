"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Calculator, Calendar, HardHat, ShieldCheck, CheckCircle2 } from "lucide-react";

export const MetalInstallationJourney = () => {
    const steps = [
        {
            title: "Free Roof Assessment",
            desc: "Expert inspection, drone measurements, and material recommendations for your Florida home.",
            icon: Search,
        },
        {
            title: "Transparent Estimate",
            desc: "Clear itemized pricing and upgrade options without pressure, ready for insurance or financing.",
            icon: Calculator,
        },
        {
            title: "Preparation",
            desc: "Materials ordered, local Sarasota permits handled, and project timeline confirmed.",
            icon: Calendar,
        },
        {
            title: "Precision Installation",
            desc: "Expert metal deck prep and precision panel installation with 3-tab underlayment systems.",
            icon: HardHat,
        },
        {
            title: "Final Walkthrough",
            desc: "Detailed quality audit and warranty activation for your new storm-ready metal roof.",
            icon: ShieldCheck,
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-tight text-primary-navy uppercase italic mb-8">
                            Your Metal <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roofing Journey</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed">
                            Simple, transparent, and professional — Apex Roofing handles everything from initial assessment to final certification.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Progress Line - Desktop */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 hidden lg:block" />

                    <div className="grid lg:grid-cols-5 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative z-10 group"
                            >
                                <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary-gold-500/30 transition-all duration-300 text-center flex flex-col items-center h-full">
                                    <div className="w-16 h-16 rounded-3xl bg-primary-navy text-white flex items-center justify-center mb-8 group-hover:bg-primary-gold-500 transition-all group-hover:scale-110 duration-500">
                                        <step.icon className="w-8 h-8" />
                                    </div>

                                    <div className="mb-6">
                                        <span className="text-[10px] font-black text-primary-gold-500 uppercase tracking-[0.2em] mb-2 block">Step 0{idx + 1}</span>
                                        <h4 className="text-lg font-black text-primary-navy uppercase italic leading-tight">{step.title}</h4>
                                    </div>

                                    <p className="text-slate-500 text-xs font-medium leading-relaxed flex-grow">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 p-10 rounded-[48px] bg-primary-navy shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-8 h-8 text-primary-gold-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-xl italic uppercase">Start Today</h4>
                            <p className="text-text-muted text-[10px] font-black uppercase tracking-widest leading-none mt-1 italic">Professional advice. No pressure quotes.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 shrink-0">
                        <button className="h-16 px-10 rounded-full bg-primary-gold-500 text-primary-navy font-black hover:bg-white transition-all shadow-glow-gold flex items-center gap-3 uppercase text-xs tracking-widest leading-none">
                            Schedule Free Assessment
                        </button>
                        <button className="h-16 px-10 rounded-full border border-white/10 text-white font-black hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic leading-none">
                            Call Now
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};
