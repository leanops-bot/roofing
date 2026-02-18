"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Layers, Shield, Box } from "lucide-react";

const MATERIALS = [
    { title: "Metal Roofing", desc: "Durable, low maintenance, and energy efficient for large spans.", icon: Zap },
    { title: "TPO Roofing", desc: "High-performance membrane system for commercial flat roofs.", icon: Layers },
    { title: "Modified Bitumen", desc: "Reliable commercial roofing with multi-layer heat-welded protection.", icon: Shield },
    { title: "Built-Up Roofing", desc: "Classic multi-ply systems designed for maximum drainage.", icon: Box }
];

export const EliteMaterials = () => {
    return (
        <section className="py-24 bg-primary-navy">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content Grid */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[42px] md:text-[52px] font-black tracking-tight leading-[1.1] text-white uppercase italic mb-8">
                                Elite Materials & <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roofing Systems</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-12 max-w-lg">
                                We install durable commercial roofing systems built for Florida heat, storms, and long-term industrial wear.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {MATERIALS.map((item, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all group">
                                        <item.icon className="w-8 h-8 text-primary-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-white font-black uppercase italic text-lg mb-2">{item.title}</h4>
                                        <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-white/5 shadow-2xl aspect-[4/5] lg:aspect-square"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542095944369-02c39f1c750e?q=80&w=1200&auto=format&fit=crop"
                                alt="Commercial Roof Detail"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />

                            {/* Pro Sticker */}
                            <div className="absolute top-10 right-10 bg-primary-gold-500 p-6 rounded-3xl border-4 border-white shadow-2xl rotate-6">
                                <p className="text-primary-navy font-black text-xl italic leading-none">COMMERCIAL</p>
                                <p className="text-[8px] font-black text-primary-navy uppercase tracking-[0.3em] mt-1">Industrial Grade</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
