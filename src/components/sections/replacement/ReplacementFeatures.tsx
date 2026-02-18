"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CloudLightning, Hammer, FileText, Sun, Home, ArrowRight } from "lucide-react";

const FEATURES = [
    {
        title: "HOA Roof Replacement",
        desc: "Replacement solutions designed to meet HOA compliance and approval standards.",
        icon: ShieldCheck
    },
    {
        title: "Hurricane-Damaged Roofs",
        desc: "Fast response roof replacement after storm damage, leaks, and structural issues.",
        icon: CloudLightning
    },
    {
        title: "Full Tear-Off & Re-Roofing",
        desc: "Complete removal and installation for long-term roof performance.",
        icon: Hammer
    },
    {
        title: "Insurance Replacements",
        desc: "Claim support and documentation to help speed up approvals.",
        icon: FileText
    },
    {
        title: "Energy-Efficient Systems",
        desc: "Reflective and high-performance roofing options to reduce heat buildup.",
        icon: Sun
    },
    {
        title: "Protect Your Home Today",
        desc: "Upgrade your roof before leaks become costly interior damage.",
        icon: Home
    }
];

export const ReplacementFeatures = () => {
    return (
        <section className="py-24 bg-soft-light">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic">
                            Expert Roof Replacement Services <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Across Southwest Florida</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mt-6">
                            From hurricane damage to full re-roofing, Apex Roofing delivers premium systems designed for Florida weather.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 text-primary-blue flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-black text-primary-navy uppercase italic mb-4 tracking-tight group-hover:text-primary-blue transition-colors">{feature.title}</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 mx-auto group">
                        Request Free Quote
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
