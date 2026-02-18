"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowRight, Phone } from "lucide-react";

export const HurricanePrepBanner = () => {
    return (
        <section className="py-24 bg-soft-beige">
            <div className="container-custom">
                <div className="relative bg-white rounded-[48px] overflow-hidden border border-slate-100 shadow-2xl">
                    <div className="grid lg:grid-cols-2 items-center">
                        {/* Image Side */}
                        <div className="relative h-[400px] lg:h-full bg-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1544161515-4ad6ce6e8310?q=80&w=800&auto=format&fit=crop"
                                alt="Hurricane Restoration"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white pointer-events-none hidden lg:block" />

                            {/* Urgency Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-navy/90 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center p-8 text-center shadow-glow-blue animate-pulse">
                                <ShieldAlert className="w-10 h-10 text-primary-blue mb-2" />
                                <p className="text-white font-black text-sm italic uppercase leading-none">STORM READY</p>
                                <p className="text-[8px] font-bold text-text-muted uppercase tracking-widest mt-1">2026 SEASON</p>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="p-10 md:p-16 lg:p-20">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-[10px] font-black text-primary-blue uppercase tracking-[0.3em] mb-4">Urgent Restoration</p>
                                <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-tight text-primary-navy mb-6 uppercase italic">
                                    Prepare for Hurricane Season — <br />
                                    <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Florida Weather is Unpredictable</span>
                                </h2>
                                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 max-w-md">
                                    A roof replacement today protects your home from the next storm. Apex Roofing installs systems designed for high wind resistance and coastal longevity.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6">
                                    <button className="h-16 px-10 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all shadow-glow-blue flex items-center gap-3 group">
                                        Get Free Inspection
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <a
                                        href="tel:+13055550188"
                                        className="h-16 px-8 rounded-full border-2 border-primary-navy/10 text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center gap-3 uppercase text-xs tracking-widest group"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Call Now
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
