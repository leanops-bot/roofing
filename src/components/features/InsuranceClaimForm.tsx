"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, Umbrella, Home, FileWarning } from "lucide-react";
import { cn } from "@/lib/utils";

export const InsuranceClaimForm = ({ className }: { className?: string }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        damageType: "",
        insuranceProvider: "",
        name: "",
        phone: "",
        address: ""
    });

    const damageTypes = [
        { id: "wind", label: "Wind/Storm", icon: Umbrella },
        { id: "hail", label: "Hail Damage", icon: FileWarning },
        { id: "leak", label: "Active Leak", icon: Home },
        { id: "inspection", label: "Free Inspection", icon: ShieldCheck }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <div className={cn("bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden", className)}>
            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-gold-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10">
                <div className="mb-8 text-center">
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tight mb-2">
                        Get Free Claim Advice
                    </h3>
                    <p className="text-white/60 text-sm font-medium">
                        Speak with a licensed insurance specialist today.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-primary-blue uppercase tracking-widest block">
                                        Type of Damage
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {damageTypes.map((type) => (
                                            <button
                                                key={type.id}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, damageType: type.id })}
                                                className={cn(
                                                    "flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all duration-300",
                                                    formData.damageType === type.id
                                                        ? "bg-primary-blue text-primary-navy border-primary-blue shadow-glow-gold"
                                                        : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                                                )}
                                            >
                                                <type.icon className="w-5 h-5" />
                                                <span className="text-xs font-bold uppercase tracking-wide">{type.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-primary-blue uppercase tracking-widest block">
                                        Insurance Provider (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. State Farm, Allstate"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-blue transition-colors"
                                        value={formData.insuranceProvider}
                                        onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    disabled={!formData.damageType}
                                    className="w-full h-14 bg-primary-blue text-white rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-4"
                                >
                                    Continue
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-blue transition-colors"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-blue transition-colors"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Property Address"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-blue transition-colors"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>

                                <div className="flex gap-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="px-6 h-14 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 h-14 bg-primary-blue text-primary-navy rounded-xl font-black uppercase tracking-widest shadow-glow-gold hover:bg-white transition-all"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                                <p className="text-[10px] text-center text-white/40 font-medium">
                                    Secure SSL connection. Your data is private.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>
        </div>
    );
};
