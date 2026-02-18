"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";

interface FinalCTABannerProps {
    title?: string;
    subtitle?: string;
}

export const FinalCTABanner = ({
    title = "Ready for a Roof Built to Last?",
    subtitle = "Schedule your free inspection today. Get expert guidance, honest pricing, and premium workmanship from Florida’s trusted roofing specialists."
}: FinalCTABannerProps) => {
    return (
        <section className="py-24 bg-primary-navy relative overflow-hidden">
            {/* Texture background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="roof-texture" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 0 10 L 10 0 M -2 2 L 2 -2 M 8 12 L 12 8" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#roof-texture)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-blue/20 to-secondary-dark rounded-[60px] p-12 md:p-20 text-center border border-white/10 shadow-glow-blue backdrop-blur-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[42px] md:text-[64px] font-black tracking-tighter leading-[0.9] text-white mb-8 uppercase italic">
                            {title.split(" ").slice(0, -3).join(" ")} <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/30 decoration-8 underline-offset-8">{title.split(" ").slice(-3).join(" ")}</span>
                        </h2>
                        <p className="text-xl text-text-muted font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="h-20 px-12 rounded-full bg-primary-blue text-primary-navy font-black text-lg hover:bg-white transition-all shadow-[0_25px_60px_rgba(30,115,255,0.4)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 group">
                                Book Free Inspection
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="tel:+13055550188"
                                className="h-20 px-12 rounded-full bg-white/5 border border-white/10 text-white font-black text-lg hover:bg-white/10 transition-all flex items-center gap-3 group"
                            >
                                <PhoneCall className="w-6 h-6 text-primary-blue" />
                                Call Now
                            </a>
                        </div>

                        <p className="mt-12 text-[10px] font-black text-primary-gold-500 uppercase tracking-[0.4em]">Fast Response Guaranteed — 24/7 Emergency Support</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
