"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle, ArrowRight, AlertTriangle, Phone } from "lucide-react";
import { BookingFormApex } from "@/components/features/BookingFormApex";

export const HeroEmergency = ({ city = "Sarasota" }: { city?: string }) => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-primary-navy">
            {/* Cinematic Background Image - Storm Damage / Tarp Visual */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2000&auto=format&fit=crop"
                    alt="Emergency Roof Repair Florida"
                    className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT COLUMN: URGENCY COPY */}
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">24/7 Rapid Response Live</span>
                            </div>

                            <h1 className="text-[48px] md:text-[68px] lg:text-[84px] font-black tracking-tight leading-[0.95] text-white mb-8 italic uppercase">
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/30 decoration-8 underline-offset-8">Emergency</span> <br />
                                <span className="text-white not-italic">Roofing in {city}</span>
                            </h1>

                            <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium max-w-xl">
                                Fast storm damage repairs, emergency tarping, and urgent roof leak solutions — delivered by Apex Roofing when time matters most.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-12">
                                {[
                                    { text: "Storm Response", icon: AlertTriangle },
                                    { text: "Emergency Tarping", icon: Shield },
                                    { text: "Licensed & Insured", icon: CheckCircle },
                                    { text: "Financing Available", icon: Clock },
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
                                <button className="h-16 px-10 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-white transition-all shadow-glow-blue flex items-center justify-center gap-3 group">
                                    <Phone className="w-5 h-5" />
                                    Call Now: (941) 219-5412
                                </button>
                                <button className="h-16 px-10 rounded-full bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest">
                                    Book Fast Inspection
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Emergency Intake Form */}
                    <div className="hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="relative"
                        >
                            <BookingFormApex className="relative z-10" />

                            {/* Decorative background for the card */}
                            <div className="absolute -inset-4 bg-primary-blue/20 rounded-[40px] blur-3xl -z-10 animate-pulse" />

                            {/* Priority Badge */}
                            <div className="absolute -right-12 -top-6 hidden xl:flex flex-col items-center justify-center w-32 h-32 bg-primary-gold-500 text-primary-navy rounded-full shadow-2xl z-20 font-black -rotate-6 border-4 border-white animate-pulse">
                                <AlertTriangle className="w-8 h-8 mb-1" />
                                <span className="text-[10px] tracking-[0.2em] leading-none mb-1">PRIORITY</span>
                                <span className="text-2xl leading-none">STORM</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
