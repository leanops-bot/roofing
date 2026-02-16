"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        title: "Roof Repair",
        price: "$599",
        suffix: "starting at",
        features: ["Leak Detection & Repair", "Shingle Replacement", "Flashing Fixes", "Sealant Application"],
        cta: "Get Estimate",
        highlight: false
    },
    {
        title: "Full Replacement",
        price: "$5,999",
        suffix: "starting at",
        features: ["Premium Material Options", "Full Tear-Off & Disposal", "Lifetime Warranty", "Final Quality Inspection"],
        cta: "Book Inspection",
        highlight: true
    },
    {
        title: "Commercial",
        price: "Custom",
        suffix: "project based",
        features: ["Flat Roof Systems", "Coatings & Waterproofing", "Maintenance Plans", "Priority Support"],
        cta: "Contact Us",
        highlight: false
    }
];

export const PricingPreview = () => {
    return (
        <section className="py-24 bg-bg-soft">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-navy">Transparent Pricing You Can Trust</h2>
                    <p className="text-text-secondary">No hidden fees. Just honest estimates for premium work.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative p-8 rounded-[22px] border flex flex-col ${plan.highlight
                                ? "bg-white border-primary-blue shadow-cta scale-105 z-10"
                                : "bg-white border-border-soft hover:border-slate-300"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-primary-navy mb-2">{plan.title}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-black text-primary-navy tracking-tight">{plan.price}</span>
                                <span className="text-sm text-text-secondary font-medium">{plan.suffix}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <Check className="w-5 h-5 text-primary-blue shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/book" className={`w-full py-4 rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2 ${plan.highlight
                                ? "bg-primary-blue text-white hover:brightness-110 shadow-lg"
                                : "bg-slate-50 text-primary-navy hover:bg-slate-100 border border-slate-200"
                                }`}>
                                {plan.cta} {plan.highlight && <ArrowRight className="w-4 h-4" />}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
