"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText, X, AlertCircle } from "lucide-react";

export const ConversionFeatures = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setShowPopup(true);
                setHasShown(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [hasShown]);

    return (
        <>
            {/* Floating Buttons */}
            <div className="fixed bottom-8 left-8 z-[90] md:left-12">
                <button className="flex items-center gap-3 bg-primary-blue text-primary-navy px-6 py-4 rounded-full font-black shadow-glow-blue hover:bg-white hover:scale-105 transition-all group">
                    <FileText className="w-5 h-5" />
                    <span className="hidden sm:inline uppercase text-xs tracking-widest">Get Estimate</span>
                </button>
            </div>

            <div className="fixed bottom-8 right-8 z-[90] md:right-12">
                <a
                    href="tel:+13055550188"
                    className="flex items-center gap-3 bg-white text-primary-navy px-6 py-4 rounded-full font-black shadow-2xl hover:bg-primary-blue transition-all scale-110 md:scale-125 origin-right group"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary-blue animate-ping rounded-full opacity-20" />
                        <Phone className="w-5 h-5 relative z-10" />
                    </div>
                    <span className="hidden sm:inline uppercase text-xs tracking-widest">Call Now</span>
                </a>
            </div>

            {/* Exit Intent Popup */}
            <AnimatePresence>
                {showPopup && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowPopup(false)}
                            className="absolute inset-0 bg-primary-navy/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-xl bg-secondary-dark border border-white/10 rounded-[48px] p-10 md:p-16 text-center shadow-glow-blue"
                        >
                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-8 right-8 text-text-muted hover:text-white transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <div className="w-20 h-20 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary-blue/20">
                                <AlertCircle className="w-10 h-10 text-primary-blue" />
                            </div>

                            <h2 className="text-[32px] md:text-[42px] font-black tracking-tight leading-none text-white mb-6 uppercase italic">
                                Before You Go — <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Free Roof Inspection?</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium mb-12 leading-relaxed">
                                Get a fast inspection and honest estimate from Apex Roofing. Protect your biggest investment today.
                            </p>

                            <div className="flex flex-col gap-4">
                                <button className="h-16 rounded-full bg-primary-blue text-primary-navy font-black text-lg hover:bg-white transition-all shadow-glow-blue">
                                    Book Free Inspection
                                </button>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="h-16 rounded-full bg-white/5 text-white font-bold hover:bg-white/10 transition-all"
                                >
                                    Maybe Later
                                </button>
                            </div>

                            <p className="mt-8 text-[10px] text-text-muted font-bold uppercase tracking-widest">Licensed. Insured. Fast Response.</p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
