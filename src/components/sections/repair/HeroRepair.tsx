"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { BookingFormApex } from "@/components/features/BookingFormApex";

export const HeroRepair = ({ city = "Sarasota" }: { city?: string }) => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-primary-navy">
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541810531238-038c350000ed?q=80&w=2000&auto=format&fit=crop"
                    alt="Florida Storm Damage"
                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT COLUMN: IMPACT COPY */}
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <nav className="flex items-center gap-2 mb-8">
                                <span className="text-text-muted text-xs font-bold uppercase tracking-widest">Home</span>
                                <span className="text-text-muted text-xs">/</span>
                                <span className="text-text-muted text-xs font-bold uppercase tracking-widest">Services</span>
                                <span className="text-text-muted text-xs">/</span>
                                <span className="text-primary-blue text-xs font-black uppercase tracking-widest">Roof Repair</span>
                            </nav>

                            <h1 className="text-[48px] md:text-[68px] lg:text-[84px] font-black tracking-tight leading-[0.95] text-white mb-8 italic uppercase">
                                Expert Roof <span className="text-primary-blue not-italic underline decoration-primary-gold-500/30 decoration-8 underline-offset-8">Repair</span> <br />
                                <span className="text-white not-italic">in {city}, FL</span>
                            </h1>

                            <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium max-w-xl">
                                Fast leak repairs, storm damage restoration, and expert roofing fixes designed for Florida weather — backed by Apex Roofing.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-12">
                                {[
                                    { text: "Emergency Repairs", icon: Clock },
                                    { text: "Financing Available", icon: Shield },
                                    { text: "Licensed & Insured", icon: CheckCircle },
                                    { text: "Free Inspections", icon: Shield },
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
                                    Book Free Inspection
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a
                                    href="tel:+13055550188"
                                    className="h-16 px-10 rounded-full bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest group"
                                >
                                    <Phone className="w-4 h-4 text-primary-blue" />
                                    Call Now
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: SaaS Booking Card */}
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

                            {/* Alert Badge */}
                            <div className="absolute -right-12 -top-6 hidden xl:flex flex-col items-center justify-center w-32 h-32 bg-primary-gold-500 text-primary-navy rounded-full shadow-2xl z-20 font-black -rotate-6 border-4 border-white animate-pulse">
                                <span className="text-[10px] tracking-[0.2em] leading-none mb-1">STORM</span>
                                <span className="text-2xl leading-none">URGENT</span>
                                <span className="text-[10px] tracking-[0.2em] leading-none mt-1">RESPONSE</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
