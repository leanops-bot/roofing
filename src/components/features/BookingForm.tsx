"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, User, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const BookingForm = ({ className }: { className?: string }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: "",
        date: "",
        time: "",
        name: "",
        address: "",
        phone: "",
        email: ""
    });

    const services = [
        "Roof Repair",
        "Full Replacement",
        "Inspection",
        "Commercial"
    ];

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];

    const handleNext = () => {
        setStep((prev) => Math.min(prev + 1, 3));
    };

    const handleBack = () => {
        setStep((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className={cn("bg-white rounded-[22px] shadow-2xl p-6 md:p-8 border border-slate-100", className)}>
            <div className="mb-6">
                <h3 className="text-xl font-bold text-primary-navy mb-1">Book Free Inspection</h3>
                <p className="text-sm text-slate-500">No obligation. Instant confirmation.</p>

                {/* Progress Bar */}
                <div className="flex gap-2 mt-4">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={cn(
                                "h-1.5 flex-1 rounded-full transition-colors duration-300",
                                step >= s ? "bg-primary-blue" : "bg-slate-100"
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
                        className="space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-semibold text-primary-navy mb-2">Select Service</label>
                            <div className="grid grid-cols-2 gap-3">
                                {services.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setFormData({ ...formData, service: s })}
                                        className={cn(
                                            "px-4 py-3 rounded-xl text-sm font-medium border transition-all text-left",
                                            formData.service === s
                                                ? "border-primary-blue bg-primary-blue/10 text-primary-blue shadow-sm"
                                                : "border-slate-200 text-slate-600 hover:border-primary-blue/50 bg-white"
                                        )}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-primary-navy mb-2">Preferred Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue text-primary-navy"
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
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
                        className="space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-semibold text-primary-navy mb-2">Select Time</label>
                            <div className="grid grid-cols-3 gap-2">
                                {timeSlots.map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setFormData({ ...formData, time: t })}
                                        className={cn(
                                            "px-2 py-2.5 rounded-lg text-xs font-semibold border transition-all",
                                            formData.time === t
                                                ? "bg-primary-blue text-white shadow-md border-primary-blue"
                                                : "border-slate-200 text-slate-600 hover:border-primary-blue/50 bg-white"
                                        )}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-primary-navy mb-2">Property Address</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="123 Main St, Miami FL"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue text-primary-navy placeholder:text-slate-400"
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
                        <div className="grid gap-4">
                            <div className="relative">
                                <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue text-primary-navy placeholder:text-slate-400"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue text-primary-navy placeholder:text-slate-400"
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue text-primary-navy placeholder:text-slate-400"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-8 pt-4 border-t border-slate-100 flex gap-3">
                {step > 1 && (
                    <button
                        onClick={handleBack}
                        className="px-5 py-3 rounded-xl text-slate-500 font-semibold hover:bg-slate-50 transition-colors"
                    >
                        Back
                    </button>
                )}
                <button
                    onClick={step < 3 ? handleNext : () => window.location.href = '/booking-success'}
                    className="flex-1 bg-primary-blue text-white h-12 rounded-xl font-bold shadow-cta hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    {step < 3 ? "Next Step" : "Confirm Booking"}
                    {step < 3 && <ChevronRight className="w-4 h-4" />}
                </button>
            </div>

        </div>
    );
};
