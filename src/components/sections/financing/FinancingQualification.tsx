"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const FinancingQualification = ({ city = "Sarasota" }: { city?: string }) => {
    return (
        <section className="py-24 bg-white">
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
                                Who Qualifies for <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roof Financing?</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                Most homeowners qualify for financing options. Apex Roofing makes the process fast and simple with transparent lender partners.
                            </p>

                            <div className="space-y-4 mb-12">
                                {[
                                    `Homeowners in ${city} and surrounding areas`,
                                    "Residential and commercial properties may qualify",
                                    "Flexible credit options depending on lender",
                                    "Fast online application process",
                                    "Approval possible with limited credit history"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center shrink-0 group-hover:bg-primary-blue transition-all">
                                            <CheckCircle2 className="w-4 h-4 text-primary-blue group-hover:text-white transition-all" />
                                        </div>
                                        <span className="text-slate-700 text-sm font-bold uppercase italic tracking-tight">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-gold-500 text-primary-navy font-black hover:bg-white transition-all shadow-glow-gold flex items-center gap-3 group">
                                    See If You Qualify
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full border border-slate-200 text-primary-navy font-black hover:bg-slate-50 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic font-bold">
                                    Talk to a Specialist
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl aspect-square"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1200&auto=format&fit=crop"
                                alt="Modern Property in Florida"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent" />

                            {/* Floating Qualification Tag */}
                            <div className="absolute bottom-10 right-10 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100 hidden md:block">
                                <ShieldCheck className="w-10 h-10 text-primary-gold-500 mb-4" />
                                <p className="text-primary-navy font-black text-xl leading-tight mb-1 uppercase italic">Fast Clear <br />Approvals</p>
                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Partnered with Top Lenders</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
