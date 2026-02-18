"use client";

import React from "react";
import { motion } from "framer-motion";
import { Info, CheckCircle2, ArrowRight } from "lucide-react";

interface PricingCardProps {
    title: string;
    range: string;
    note: string;
}

interface PricingGridCategoryProps {
    title: string;
    desc: string;
    background?: "light" | "beige";
    cards: PricingCardProps[];
}

const PricingCard = ({ title, range, note }: PricingCardProps) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary-gold-500/30 transition-all duration-300 group flex flex-col"
    >
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Typical Property</span>
        <h4 className="text-xl font-black text-primary-navy uppercase italic mb-6 tracking-tight group-hover:text-primary-blue transition-colors">{title}</h4>

        <div className="mb-8">
            <span className="text-3xl font-black text-primary-navy tracking-tight">{range}</span>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2 leading-relaxed">{note}</p>
        </div>

        <div className="space-y-3 mb-10 flex-grow">
            {["Premium Installation", "Standard Warranty", "Certified Team"].map((line, idx) => (
                <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-gold-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{line}</span>
                </div>
            ))}
        </div>

        <button className="h-14 px-8 rounded-full bg-slate-50 text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center justify-center gap-2 uppercase text-[10px] tracking-widest italic group-hover:scale-105">
            Request Exact Quote <ArrowRight className="w-4 h-4" />
        </button>
    </motion.div>
);

export const PricingGridCategory = ({ title, desc, background = "light", cards }: PricingGridCategoryProps) => {
    return (
        <section className={`py-24 ${background === "beige" ? "bg-soft-beige" : "bg-white"}`}>
            <div className="container-custom">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-6">
                                {title}
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                {desc}
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:mb-2">
                        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-3xl bg-white border border-slate-100 shadow-sm">
                            <Info className="w-5 h-5 text-primary-blue" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Ranges based on standard complexity</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <PricingCard key={idx} {...card} />
                    ))}
                </div>

            </div>
        </section>
    );
};
