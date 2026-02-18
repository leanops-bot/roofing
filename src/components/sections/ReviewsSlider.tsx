"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

const REVIEWS = [
    {
        name: "James Wilson",
        role: "Homeowner",
        text: "Apex Roofing was incredibly fast. They handled the insurance claim from start to finish. My new roof looks amazing!",
        rating: 5
    },
    {
        name: "Sarah Miller",
        role: "Property Manager",
        text: "Professional crew, clean job site, and the gold standard of communication. Highly recommend for any commercial projects.",
        rating: 5
    },
    {
        name: "Robert Davis",
        role: "Homeowner",
        text: "After the storm, they were the only ones who showed up on time. Honest pricing and premium workmanship.",
        rating: 5
    }
];

export const ReviewsSlider = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic">
                                What Our <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Customers Say</span>
                            </h2>
                        </motion.div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {REVIEWS.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#F7F9FC] p-10 rounded-[40px] border border-transparent hover:border-primary-blue/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-primary-gold-500 fill-primary-gold-500" />
                                ))}
                            </div>
                            <Quote className="w-10 h-10 text-primary-blue/10 mb-6 group-hover:text-primary-blue/20 transition-colors" />
                            <p className="text-primary-navy text-lg font-bold italic leading-relaxed mb-8">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4 border-t border-slate-200 pt-8">
                                <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center font-black text-primary-blue text-sm uppercase">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-black text-primary-navy uppercase text-sm tracking-tight">{review.name}</h4>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-14 px-8 rounded-full border-2 border-primary-navy text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center gap-2 mx-auto group">
                        Read More Reviews <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
