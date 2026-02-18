"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const WhyChooseApexGutters = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                Precision Gutter <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Installation Specialists</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                Gutter installation is a precision job. Poor drainage causes long-term roof and foundation damage. Apex Roofing installs seamless systems the right way.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    "Seamless gutter technology",
                                    "Pro downspout routing",
                                    "Secure fascia mounting",
                                    "Clean finish promise",
                                    "Fast local scheduling",
                                    "Full workmanship warranty"
                                ].map((bullet, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary-blue shrink-0" />
                                        <span className="text-primary-navy text-xs font-black uppercase tracking-widest italic">{bullet}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest">
                                Book Gutter Consultation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1542095944369-02c39f1c750e?q=80&w=1200&auto=format&fit=crop"
                                    alt="Elite Gutter Professional"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -left-12 bottom-12 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100 max-w-[240px] hidden md:block">
                                <p className="text-primary-navy font-black text-2xl mb-1 mt-1">SEAMLESS</p>
                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Sarasota's Drainage Pro</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
