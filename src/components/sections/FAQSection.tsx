"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "How long does a roof replacement take?",
        a: "Most residential replacements take 1–2 days depending on size and weather. We work efficiently to minimize disruption to your home."
    },
    {
        q: "Do you help with insurance claims?",
        a: "Yes. We have a dedicated team to assist with storm damage documentation and guide you through the insurance claim process to ensure you get covered."
    },
    {
        q: "What roofing materials do you install?",
        a: "We install premium asphalt shingles, metal roofing (standing seam), tile roofing, and commercial flat roofing systems (TPO/EPDM)."
    },
    {
        q: "Do you offer warranties?",
        a: "Absolutely. We provide our own workmanship warranties alongside manufacturer warranties that can cover your roof for up to 50 years or even a lifetime."
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-navy">Common Questions</h2>
                    <p className="text-text-secondary">Everything you need to know before hiring a roofer.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === idx ? 'border-primary-blue bg-primary-blue/5' : 'border-border-soft bg-white hover:border-primary-blue/30'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-bold ${openIndex === idx ? 'text-primary-blue' : 'text-primary-navy'}`}>
                                    {faq.q}
                                </span>
                                <span className={`p-2 rounded-full ${openIndex === idx ? 'bg-primary-blue text-white' : 'bg-bg-soft text-text-light'}`}>
                                    {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
