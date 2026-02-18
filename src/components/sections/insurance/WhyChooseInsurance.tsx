"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, HardHat, FileText, FastForward, ShieldAlert, BadgeCheck } from "lucide-react";

export const WhyChooseInsurance = () => {
    const reasons = [
        {
            title: "Accuracy-Focused Reports",
            desc: "Granular damage documentation that leaves no vulnerability unaddressed.",
        },
        {
            title: "Fast Response Time",
            desc: "Rapid deployment after storms to prevent secondary property loss.",
        },
        {
            title: "Professional Standards",
            desc: "We follow industry-leading protocols for every inspection and meeting.",
        },
        {
            title: "Elite Restoration",
            desc: "Insurance-approved systems built for high-wind Florida hurricanes.",
        },
    ];

    return (
        <section className="py-24 bg-soft-beige overflow-hidden">
            <div className="container-custom px-4 md:px-0">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Authority Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-[48px] overflow-hidden border-[12px] border-white shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop"
                                    alt="Professional Storm Restoration"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Stats Card Overlay */}
                            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 hidden md:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-gold-500/10 flex items-center justify-center">
                                        <BadgeCheck className="w-5 h-5 text-primary-gold-500" />
                                    </div>
                                    <span className="text-[10px] font-black text-primary-navy uppercase tracking-widest leading-none italic">Elite Restorer</span>
                                </div>
                                <div className="text-4xl font-black text-primary-navy uppercase italic mb-1">500+</div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Storm projects managed annually</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content List */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                Why Choose Apex <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">For Claim Support</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-12">
                                We focus on accurate inspections and clear communication, ensuring you have the documentation and craftsmanship needed for a successful restoration.
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
                                <button className="h-16 px-10 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest leading-none">
                                    Start Your Claim
                                </button>
                                <button className="h-16 px-10 rounded-full bg-white border border-slate-200 text-primary-navy font-black hover:bg-slate-50 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic leading-none">
                                    Book Free Inspection
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
