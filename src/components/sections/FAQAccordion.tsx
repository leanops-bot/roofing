"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        q: "How long does a roof replacement take?",
        a: "Most residential roofs are completed in just 1-2 days. Large or complex projects may take 3-4 days. We prioritize fast, clean execution to minimize disruption."
    },
    {
        q: "Do you help with insurance claims?",
        a: "Yes. We offer free storm damage inspections and provide full documentation for your insurance provider to ensure a smooth, fair claim process."
    },
    {
        q: "What roofing materials do you install?",
        a: "We specialize in GAF architectural shingles, high-durability metal roofing, classic concrete/clay tiles, and advanced TPO flat roofing systems."
    },
    {
        q: "Do you offer warranties?",
        a: "Every Apex roof comes with a comprehensive workmanship warranty, in addition to the industry-leading lifetime material warranties provided by our manufacturing partners."
    },
    {
        q: "Do you offer free roof inspections?",
        a: "Absolutely. We provide honest, no-obligation inspections including a detailed report on the condition of your roof and any necessary recommendations."
    }
];

export const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-tight text-primary-navy mb-6 uppercase italic">
                            Roofing Questions <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Answered</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {FAQS.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className={cn(
                                "rounded-[32px] border transition-all duration-500 overflow-hidden",
                                openIndex === idx
                                    ? "bg-[#F7F9FC] border-primary-blue/30 shadow-xl"
                                    : "bg-white border-slate-100 hover:border-slate-200"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-8 text-left"
                            >
                                <span className="text-xl font-black text-primary-navy uppercase italic tracking-tight">{faq.q}</span>
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500",
                                    openIndex === idx ? "bg-primary-blue text-primary-navy rotate-180" : "bg-primary-navy/5 text-primary-navy"
                                )}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 pt-0">
                                            <p className="text-slate-600 font-medium leading-relaxed max-w-3xl">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
