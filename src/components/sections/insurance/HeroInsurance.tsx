"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Search, ArrowRight, CheckCircle2, Gavel } from "lucide-react";
import { InsuranceClaimForm } from "@/components/features/InsuranceClaimForm";

export const HeroInsurance = ({ city = "Sarasota" }: { city?: string }) => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-primary-navy">
            {/* Cinematic Background - Storm Damaged / Tarped Roof Visual */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1510612141523-8877197368d1?q=80&w=2000&auto=format&fit=crop"
                    alt="Storm Damage Roof Insurance Claim Florida"
                    className="w-full h-full object-cover opacity-30 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT COLUMN: INSURANCE TRUST COPY */}
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-gold-500/10 border border-primary-gold-500/20 mb-8">
                                <ShieldCheck className="w-4 h-4 text-primary-gold-500" />
                                <span className="text-primary-blue text-[10px] font-black uppercase tracking-[0.2em]">High-Trust Claim Support</span>
                            </div>

                            <h1 className="text-[48px] md:text-[68px] lg:text-[84px] font-black tracking-tight leading-[0.95] text-white mb-8 italic uppercase">
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/30 decoration-8 underline-offset-8">Roof Claims</span> <br />
                                <span className="text-white not-italic">Made Simple & Effective</span>
                            </h1>

                            <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium max-w-xl">
                                Apex Roofing helps {city} homeowners navigate storm damage claims with precision inspections, clear documentation, and professional adjuster support.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                                {[
                                    { text: "Storm Damage Inspection", icon: Search },
                                    { text: "Claim Documentation", icon: FileText },
                                    { text: "Adjuster Assistance", icon: Gavel },
                                    { text: "Premium Restoration", icon: CheckCircle2 },
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
                                <button className="h-16 px-10 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-white transition-all shadow-glow-gold flex items-center justify-center gap-3 group">
                                    Start Your Claim
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest">
                                    Call Now
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: SaaS Claim Assistance Card */}
                    <div className="hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="relative"
                        >
                            <InsuranceClaimForm className="relative z-10" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
