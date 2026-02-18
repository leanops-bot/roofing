"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Zap, ArrowRight, CheckCircle2, Home } from "lucide-react";
import { BookingFormApex } from "@/components/features/BookingFormApex";

export const HeroShingle = ({ city = "Sarasota" }: { city?: string }) => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-primary-navy">
            {/* Cinematic Background - Drone Shot of Residential Shingle Roof */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2000&auto=format&fit=crop"
                    alt="Premium Shingle Roofing Florida"
                    className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT COLUMN: SHINGLE COPY */}
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-gold-500/10 border border-primary-gold-500/20 mb-8">
                                <Home className="w-4 h-4 text-primary-gold-500" />
                                <span className="text-primary-gold-500 text-[10px] font-black uppercase tracking-[0.2em]">High Performance Residential Systems</span>
                            </div>

                            <h1 className="text-[48px] md:text-[68px] lg:text-[84px] font-black tracking-tight leading-[0.95] text-white mb-8 italic uppercase">
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/30 decoration-8 underline-offset-8">Shingle</span> <br />
                                <span className="text-white not-italic">Roofing Built for {city} Storms</span>
                            </h1>

                            <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium max-w-xl">
                                Apex Roofing installs and repairs high-performance shingle roof systems engineered for Florida weather, durability, and curb appeal.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                                {[
                                    { text: "Architectural Options", icon: Zap },
                                    { text: "Storm-Rated Install", icon: ShieldCheck },
                                    { text: "Fast Scheduling", icon: Calendar },
                                    { text: "Financing Available", icon: CheckCircle2 },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary-blue/20 flex items-center justify-center">
                                            <item.icon className="w-3 h-3 text-primary-gold-500" />
                                        </div>
                                        <span className="text-white text-xs font-black uppercase tracking-widest italic">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-gold-500 text-primary-navy font-black hover:bg-white transition-all shadow-glow-gold flex items-center justify-center gap-3 group">
                                    Get Free Estimate
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest">
                                    Call Now
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: SaaS Consultation Card */}
                    <div className="hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="bg-secondary-dark/60 backdrop-blur-3xl border border-white/10 p-1 rounded-[48px] shadow-2xl overflow-hidden">
                                <div className="p-8 pt-10 pb-2 text-center">
                                    <h3 className="text-2xl font-black text-white italic uppercase mb-2">Book Consultation</h3>
                                    <p className="text-text-muted text-[10px] font-black uppercase tracking-widest leading-relaxed">Fast callback. No spam. <br />Expert shingle roof advice included.</p>
                                </div>
                                <BookingFormApex className="relative z-10 !bg-transparent !p-0" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
