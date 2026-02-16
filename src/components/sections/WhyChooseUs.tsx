"use client";

import { BadgeCheck, Layers, ClipboardList, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Licensed & Insured",
        description: "Fully compliant and protected for every job.",
        icon: BadgeCheck
    },
    {
        title: "High-Quality Materials",
        description: "Only premium-rated shingles, tiles, and metal roofing.",
        icon: Layers
    },
    {
        title: "Free Estimates",
        description: "No-pressure quotes with full transparency.",
        icon: ClipboardList
    },
    {
        title: "Storm Ready Experts",
        description: "Emergency response teams available 24/7.",
        icon: Shield
    }
];

export const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-primary-navy relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="url(#gradient)" />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#C27E33" />
                            <stop offset="100%" stopColor="#0A0A0A" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent-gold font-bold uppercase tracking-wider text-sm mb-3 block">Why Choose RoofPro</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Unmatched Protection. Built for the Long Run.</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-[22px] p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary-blue/20 flex items-center justify-center mb-6 text-primary-blue group-hover:text-white group-hover:bg-primary-blue transition-all">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-white/80 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
