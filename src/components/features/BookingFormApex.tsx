"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, User, ChevronRight, Phone, Mail, MessageSquare, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const BookingFormApex = ({ className }: { className?: string }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: "",
        date: "",
        name: "",
        address: "",
        phone: "",
        email: "",
        message: ""
    });

    const services = [
        "Roof Replacement",
        "Roof Repair",
        "Commercial Roofing",
        "Emergency Roofing",
        "Insurance Claim"
    ];

    const handleNext = () => setStep((prev) => Math.min(prev + 3, 3)); // For now, let's stick to 3 steps
    const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className={cn("bg-black/60 backdrop-blur-xl rounded-[32px] shadow-2xl p-8 border border-white/10 relative overflow-hidden", className)}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 pointer-events-none" />
            <div className="relative z-10">
                <div className="mb-8">
                    <div className="flex justify-between items-start mb-2 mt-2">
                        <h3 className="text-2xl font-black text-white">Book Consultation</h3>
                        <div className="bg-[#0b0b0b] px-3 py-1 rounded-full border border-yellow-400/40 shadow-md">
                            <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Step {step} of 3</span>
                        </div>
                    </div>
                    <p className="text-sm text-white/80 font-medium">Fast callback within 15 minutes.</p>

                    {/* Progress Bar */}
                    <div className="flex gap-2 mt-6">
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={cn(
                                    "h-1.5 flex-1 rounded-full transition-all duration-500",
                                    step >= s ? "bg-[#c9822a] shadow-[0_0_10px_rgba(201,130,42,0.5)]" : "bg-white/10"
                                )}
                            />
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-white/80 uppercase tracking-widest ml-1">Type of Service</label>
                                <div className="grid grid-cols-1 gap-2">
                                    {services.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setFormData({ ...formData, service: s })}
                                            className={cn(
                                                "flex items-center justify-between px-6 py-4 rounded-2xl text-sm font-bold border transition-all",
                                                formData.service === s
                                                    ? "border-[#c9822a] bg-[#c9822a]/10 text-white shadow-[inset_0_0_20px_rgba(201,130,42,0.1)]"
                                                    : "border-white/10 text-white/70 hover:border-white/30 bg-black/30"
                                            )}
                                        >
                                            {s}
                                            <div className={cn("w-2 h-2 rounded-full transition-all", formData.service === s ? "bg-[#c9822a] scale-125 shadow-[0_0_8px_#c9822a]" : "bg-white/20")} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-5"
                        >
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-white/80 uppercase tracking-widest ml-1">Property Info</label>
                                <div className="relative group">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#c9822a] transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Property Address"
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/5 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue text-white placeholder:text-text-muted/50 transition-all font-medium"
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-white/80 uppercase tracking-widest ml-1">Timeline</label>
                                <div className="relative group">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#c9822a] transition-colors" />
                                    <input
                                        type="date"
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-black/30 focus:outline-none focus:ring-2 focus:ring-[#c9822a]/30 focus:border-[#c9822a]/60 text-white [color-scheme:dark] transition-all font-medium"
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                        >
                            <label className="block text-xs font-bold text-white/80 uppercase tracking-widest ml-1">Your Details</label>
                            <div className="grid gap-3">
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#c9822a] transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/5 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue text-white placeholder:text-text-muted/50 transition-all font-medium"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="relative group">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#c9822a] transition-colors" />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/5 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue text-white placeholder:text-text-muted/50 transition-all font-medium"
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#c9822a] transition-colors" />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/5 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue text-white placeholder:text-text-muted/50 transition-all font-medium"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="relative group">
                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40 group-focus-within:text-[#c9822a] transition-colors" />
                                    <textarea
                                        placeholder="How can we help?"
                                        rows={2}
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-black/30 focus:outline-none focus:ring-2 focus:ring-[#c9822a]/30 focus:border-[#c9822a]/60 text-white placeholder:text-white/40 transition-all font-medium resize-none"
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-10 flex gap-3">
                    {step > 1 && (
                        <button
                            onClick={handleBack}
                            className="px-6 py-4 rounded-2xl text-white/60 font-bold hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                        >
                            Back
                        </button>
                    )}
                    <button
                        onClick={step < 3 ? handleNext : () => { }}
                        className="flex-1 bg-[#c9822a] text-[#0B0B0C] h-14 rounded-2xl font-black shadow-[0_20px_40px_rgba(201,130,42,0.25)] hover:bg-[#e29b3d] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                    >
                        {step < 3 ? "Next Step" : "Get Free Quote"}
                        {step < 3 ? (
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        ) : (
                            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                <ChevronRight className="w-5 h-5" />
                            </motion.div>
                        )}
                    </button>
                </div>
                <p className="text-[10px] text-center text-white/40 mt-4 font-medium uppercase tracking-widest relative z-10">No spam. Private & Secure callback guarantee.</p>
            </div>
        </div>
    );
};
