"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube, ArrowRight } from "lucide-react";

const PLATFORMS = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter/X", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
];

export const SocialProofRow = () => {
    return (
        <section className="py-12 bg-soft-beige border-y border-slate-200/50 overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left: Headline */}
                    <div className="max-w-md">
                        <h4 className="text-xl font-black text-primary-navy italic uppercase mb-2 tracking-tight">Follow Our Journey</h4>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Latest projects, storm restorations & roofing transformations.</p>
                    </div>

                    {/* Right: Icon Strip */}
                    <div className="flex flex-wrap items-center gap-8 md:gap-12">
                        {PLATFORMS.map((platform, idx) => (
                            <motion.a
                                key={idx}
                                href={platform.href}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-primary-navy group-hover:border-primary-navy group-hover:text-white transition-all duration-300">
                                    <platform.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-primary-navy transition-colors">{platform.name}</span>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div>
                        <button className="h-14 px-8 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-lg flex items-center gap-3 group uppercase text-[10px] tracking-[0.2em]">
                            View Portfolio
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};
