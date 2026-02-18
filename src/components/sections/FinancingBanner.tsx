"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const FinancingBanner = () => {
    return (
        <section className="py-24 bg-soft-beige">
            <div className="container-custom">
                <div className="relative bg-white rounded-[48px] overflow-hidden border border-slate-100 shadow-2xl">
                    <div className="grid lg:grid-cols-2">
                        {/* Text Side */}
                        <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-[10px] font-black text-primary-blue uppercase tracking-[0.3em] mb-4">Affordable Solutions</p>
                                <h2 className="text-[42px] md:text-[52px] font-black tracking-tight leading-tight text-primary-navy mb-8 uppercase italic">
                                    Flexible Financing for <br />
                                    <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Your Roofing Project</span>
                                </h2>
                                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 max-w-md">
                                    Get the roof you need now — with affordable monthly payments that fit your budget.
                                </p>

                                <div className="space-y-4 mb-12">
                                    {[
                                        "Fast approvals within minutes",
                                        "Multiple plan options available",
                                        "No hidden fees or penalties",
                                        "Perfect for storm replacements"
                                    ].map((bullet, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                                            </div>
                                            <span className="font-bold text-primary-navy italic uppercase text-sm tracking-tight">{bullet}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="h-16 px-10 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all shadow-xl flex items-center gap-3 group">
                                    See Financing Options
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>

                        {/* Image Side */}
                        <div className="relative h-[400px] lg:h-auto bg-slate-100 group">
                            <img
                                src="https://images.unsplash.com/photo-1591714823122-bd5d44840673?q=80&w=1000&auto=format&fit=crop"
                                alt="Apex Roofing Truck"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent pointer-events-none hidden lg:block" />

                            {/* Branded Sticker Overlay */}
                            <div className="absolute top-10 right-10 bg-primary-navy/90 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl rotate-6 group-hover:rotate-0 transition-transform">
                                <p className="text-[10px] font-black text-primary-gold-500 uppercase tracking-widest mb-1">Status</p>
                                <p className="text-white font-black text-xl italic leading-none">APPROVED</p>
                                <div className="flex gap-1 mt-3">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-1 bg-primary-blue rounded-full" />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
