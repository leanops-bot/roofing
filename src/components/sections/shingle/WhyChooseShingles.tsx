"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, HardHat } from "lucide-react";

export const WhyChooseShingles = () => {
    const reasons = [
        {
            title: "Transparent Pricing",
            desc: "Clear itemized options with no hidden fees or surprise costs.",
        },
        {
            title: "Certified Installation",
            desc: "We follow strict storm-rated protocols for every single shingle.",
        },
        {
            title: "Clean Job Sites",
            desc: "Daily cleanup and property protection is our standard practice.",
        },
        {
            title: "Fast Timeline",
            desc: "Most residential shingle projects are completed in 1-2 days.",
        },
    ];

    return (
        <section className="py-24 bg-soft-beige overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content List */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                Why Homeowners <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Choose Apex</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-12">
                                We don’t just install shingles — we install full protection systems designed to keep your family safe during Southwest Florida's extreme weather.
                            </p>

                            <div className="space-y-8">
                                {reasons.map((reason, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-lg transition-all border border-slate-100">
                                            <Check className="w-6 h-6 text-primary-blue" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-primary-navy uppercase italic mb-1">{reason.title}</h4>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{reason.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest">
                                    Get Free Estimate
                                </button>
                                <button className="h-16 px-10 rounded-full bg-white border border-slate-200 text-primary-navy font-black hover:bg-slate-50 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic">
                                    Explore Our Work
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Social Proof Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-[48px] overflow-hidden border-[12px] border-white shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop"
                                    alt="Professional Shingle Installation"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Stats Card Overlay */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 hidden md:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-gold-500/10 flex items-center justify-center">
                                        <HardHat className="w-5 h-5 text-primary-gold-500" />
                                    </div>
                                    <span className="text-[10px] font-black text-primary-navy uppercase tracking-widest leading-none italic">Quality Assurance</span>
                                </div>
                                <div className="text-4xl font-black text-primary-navy uppercase italic mb-1">100%</div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Owner inspected final walkthrough</div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
