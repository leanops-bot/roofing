"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, ExternalLink } from "lucide-react";

interface Review {
    name: string;
    rating: number;
    excerpt: string;
    date: string;
}

interface ReviewSourceGridProps {
    source: string;
    headline: string;
    subheadline: string;
    reviews: Review[];
    background?: "light" | "beige";
    ctaText: string;
}

const ReviewCard = ({ name, rating, excerpt, date }: Review) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary-gold-500/30 transition-all duration-300 group flex flex-col"
    >
        <div className="flex items-center justify-between mb-8">
            <div className="p-3 bg-primary-blue/5 rounded-2xl">
                <Quote className="w-6 h-6 text-primary-gold-500" />
            </div>
            <div className="flex gap-1">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary-gold-500 text-primary-gold-500" />
                ))}
            </div>
        </div>

        <p className="text-slate-600 font-medium leading-relaxed italic mb-10 flex-grow">
            "{excerpt}"
        </p>

        <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
            <div>
                <h5 className="text-primary-navy font-black text-sm uppercase italic">{name}</h5>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{date}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-soft-light flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircleIcon className="w-5 h-5 text-primary-blue" />
            </div>
        </div>
    </motion.div>
);

const CheckCircleIcon = (props: any) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
)

export const ReviewSourceGrid = ({ source, headline, subheadline, reviews, background = "light", ctaText }: ReviewSourceGridProps) => {
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
                                {headline}
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                {subheadline}
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:mb-2">
                        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-3xl bg-secondary-dark text-white shadow-xl">
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Verified {source} Reviews</span>
                            <ExternalLink className="w-4 h-4 text-primary-gold-500" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {reviews.map((review, idx) => (
                        <ReviewCard key={idx} {...review} />
                    ))}
                </div>

                <div className="text-center">
                    <button className="h-16 px-12 rounded-full border-2 border-primary-navy text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center gap-3 mx-auto group uppercase text-xs tracking-widest">
                        {ctaText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
};
