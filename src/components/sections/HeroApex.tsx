"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, BadgeCheck, ShieldCheck, Clock, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { BookingFormApex } from "@/components/features/BookingFormApex";
import { UserAvatars } from "@/components/ui/user-avatars";

const HAPPY_CLIENTS = [
    { id: 1, name: "Maria Garcia", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
    { id: 2, name: "David Johnson", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
    { id: 3, name: "Sarah Williams", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" },
    { id: 4, name: "Michael Chen", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" },
    { id: 5, name: "Emma Smith", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" },
];

export const HeroApex = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-primary-navy">
            {/* Cinematic Drone Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop"
                    alt="Premium Florida Roofing"
                    className="w-full h-full object-cover opacity-60 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/90 to-primary-navy/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />
            </div>

            {/* Glowing Accent Blobs */}
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT COLUMN: IMPACT COPY */}
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
                                <div className="flex -space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 text-primary-gold-500 fill-primary-gold-500" />
                                    ))}
                                </div>
                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">4.8+ Google Rating</span>
                            </div>

                            <h1 className="text-[48px] md:text-[68px] lg:text-[84px] font-black tracking-tight leading-[0.95] text-white mb-8 italic uppercase">
                                Trusted Roofing <br />
                                <span className="text-primary-blue not-italic">Contractor in <span className="text-primary-blue underline decoration-primary-gold-500/50 decoration-4">Sarasota</span>, FL</span>
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed mb-10 max-w-xl font-medium">
                                Premium roof replacement, repairs, and storm restoration — built for Florida weather. Licensed. Insured. Fast response.
                            </p>

                            <div className="flex flex-wrap gap-6 items-center mb-12">
                                <button className="h-16 px-10 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-white transition-all shadow-[0_20px_50px_rgba(30,115,255,0.3)] hover:-translate-y-1 active:scale-[0.98] flex items-center gap-3 group">
                                    Book Free Roof Inspection
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="flex items-center gap-3 text-white font-bold hover:text-primary-blue transition-colors group">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary-blue/10 transition-colors">
                                        <Play className="w-4 h-4 fill-white group-hover:fill-primary-blue group-hover:text-primary-blue" />
                                    </div>
                                    View Our Projects
                                </button>
                            </div>

                            {/* Trust signals stack */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-primary-gold-500 uppercase tracking-widest">Licensed & Insured</p>
                                    <p className="text-white font-bold text-sm">State Certified Experts</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-primary-gold-500 uppercase tracking-widest">Lifetime Protection</p>
                                    <p className="text-white font-bold text-sm">Transferable Warranty</p>
                                </div>
                                <div className="flex items-center gap-3 md:col-span-1 col-span-2">
                                    <UserAvatars users={HAPPY_CLIENTS} size={36} maxVisible={3} overlap={30} />
                                    <div className="text-left">
                                        <span className="block text-white font-black text-sm uppercase">2.5k+</span>
                                        <span className="text-[10px] text-text-muted font-bold uppercase tracking-tighter">Florida Installs</span>
                                    </div>
                                </div>
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

                            {/* Floating badge */}
                            <div className="absolute -right-12 top-10 flex flex-col items-center justify-center w-28 h-28 bg-white text-primary-navy rounded-full shadow-2xl z-20 font-black rotate-12 border-4 border-primary-blue animate-bounce">
                                <span className="text-2xl leading-none">FREE</span>
                                <span className="text-[8px] tracking-[0.2em] leading-none mt-1">INSPECTION</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
