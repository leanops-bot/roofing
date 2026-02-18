"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
    {
        title: "Certified Roof Specialists",
        desc: "Professional crews trained for Florida roofing systems.",
        icon: Users,
        color: "blue"
    },
    {
        title: "Transparent Estimates",
        desc: "Clear pricing. No hidden charges. No pressure.",
        icon: Zap,
        color: "gold"
    },
    {
        title: "Storm Damage Experts",
        desc: "Fast inspections and restoration after storms.",
        icon: ShieldCheck,
        color: "navy"
    },
    {
        title: "Insurance Claim Support",
        desc: "We guide you through the process step-by-step.",
        icon: Star,
        color: "blue"
    }
];

export const ExperienceHighlights = () => {
    return (
        <section className="py-24 bg-soft-beige">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-tight text-primary-navy mb-6 uppercase italic">
                            Choose Experience. <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Choose Apex Roofing.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {HIGHLIGHTS.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className={cn(
                                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
                                item.color === "blue" ? "bg-primary-blue/10 text-primary-blue group-hover:bg-primary-blue group-hover:text-white" :
                                    item.color === "gold" ? "bg-accent-gold/10 text-primary-gold-500 group-hover:bg-accent-gold group-hover:text-white" :
                                        "bg-primary-navy/5 text-primary-navy group-hover:bg-primary-navy group-hover:text-white"
                            )}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-black text-primary-navy mb-3 uppercase tracking-tight leading-tight italic">
                                {item.title}
                            </h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-16 px-12 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all shadow-xl flex items-center gap-3 mx-auto group">
                        Get Free Estimate
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
