"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Clock, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BookingForm } from "@/components/features/BookingForm";

export const HeroBooking = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-primary-navy text-white">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://drive.google.com/file/d/11zUhj8OIADHx4hGT4Syt-EjXSgD6t-Cg/view?usp=sharing"
                    alt="Roofing Hero"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/80 to-transparent" />
            </div>

            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-3xl opacity-70" />
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-3xl opacity-50" />
                <svg className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.03]" viewBox="0 0 100 100">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT COLUMN: Text Content */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
                                Rated #1 in Miami
                            </div>

                            <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-black tracking-tight leading-[1.05] text-white mb-6">
                                ROOFING <br />
                                <span className="text-primary-blue">SERVICES REIMAGINED</span>
                            </h1>

                            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg">
                                Premium residential & commercial roofing built to withstand storms, time, and real life. Trusted craftsmanship backed by our Lifetime Warranty.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <Link href="/services">
                                    <button className="h-14 px-8 rounded-xl bg-primary-blue text-white font-bold hover:brightness-110 transition-all flex items-center gap-2 shadow-cta">
                                        Explore Services <ArrowRight className="w-4 h-4" />
                                    </button>
                                </Link>
                                <div className="flex items-center gap-4 px-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                                        ))}
                                    </div>
                                    <div className="text-sm font-medium">
                                        <span className="block text-white font-bold">2,400+</span>
                                        <span className="text-white/70">Happy Clients</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: BadgeCheck, text: "Licensed & Insured", color: "text-accent-gold" },
                                    { icon: ShieldCheck, text: "Lifetime Warranty", color: "text-primary-blue" },
                                    { icon: Clock, text: "Fast Response", color: "text-primary-navy" }
                                ].map((badge, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-sm">
                                        <badge.icon className={cn("w-4 h-4 text-white")} />
                                        <span className="text-sm font-bold text-white">{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Booking Form */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <BookingForm className="relative z-20" />

                            {/* Floating Elements behind form */}
                            <div className="absolute -z-10 -right-8 -top-8 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -left-8 -bottom-8 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl opacity-60" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
