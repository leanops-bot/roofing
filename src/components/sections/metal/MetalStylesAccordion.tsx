"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronRight } from "lucide-react";

const STYLES = [
    {
        title: "Standing Seam Metal Roofing",
        content: "Clean modern design with concealed fasteners, excellent durability, and premium storm performance. Ideal for modern architecture and high-end residential homes seeking the ultimate leak protection.",
        image: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Modular Metal Roofing",
        content: "Stone-coated or modular panel systems designed for long-term protection with high-end curb appeal. Mimics traditional tile or wood shake while offering the durability of structural steel.",
        image: "https://images.unsplash.com/photo-1541810531238-038c350000ed?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Corrugated Metal Roofing",
        content: "A durable and cost-effective option, often used for utility structures, architectural accents, and select residential styles. High impact resistance with a classic industrial aesthetic.",
        image: "https://images.unsplash.com/photo-1621295988220-410714edbbec?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Metal Shingle Roofing",
        content: "Metal roofing designed to mimic traditional shingles while offering superior lifespan and storm protection. Perfect for homeowners who want a classic look with modern longevity.",
        image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=600&auto=format&fit=crop"
    }
];

export const MetalStylesAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-soft-beige overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Dynamic Visual */}
                    <div className="relative sticky top-32">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="relative rounded-[48px] overflow-hidden border-[12px] border-white shadow-2xl aspect-square bg-slate-100"
                            >
                                <img
                                    src={STYLES[activeIndex].image}
                                    alt={STYLES[activeIndex].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary-navy/10" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Accordion */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                Metal <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roofing Styles</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-12">
                                Choose a style that fits your home and performance goals. Apex Roofing offers multiple architectural variations of metal.
                            </p>

                            <div className="space-y-4">
                                {STYLES.map((style, idx) => (
                                    <div
                                        key={idx}
                                        className={`rounded-[32px] border transition-all duration-300 overflow-hidden ${activeIndex === idx ? "bg-white border-primary-gold-500/30 shadow-xl" : "bg-transparent border-slate-200"
                                            }`}
                                    >
                                        <button
                                            onClick={() => setActiveIndex(idx)}
                                            className="w-full p-8 flex items-center justify-between text-left group"
                                        >
                                            <span className={`text-lg font-black uppercase italic tracking-tight transition-colors ${activeIndex === idx ? "text-primary-navy" : "text-slate-400 group-hover:text-primary-navy"
                                                }`}>
                                                {style.title}
                                            </span>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === idx ? "bg-primary-gold-500 text-primary-navy rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-primary-navy group-hover:text-white"
                                                }`}>
                                                {activeIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {activeIndex === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-8 pb-8">
                                                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                                                            {style.content}
                                                        </p>
                                                        <button className="flex items-center gap-2 text-primary-gold-500 font-black uppercase text-[10px] tracking-widest italic">
                                                            Get a Quote for this Style <ChevronRight className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest">
                                    Explore Metal Options
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
