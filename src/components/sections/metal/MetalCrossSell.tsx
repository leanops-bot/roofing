"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Construction, Factory } from "lucide-react";

export const MetalCrossSell = () => {
    const systems = [
        {
            title: "Tile Roofing",
            desc: "Luxury look, long lifespan, and premium Florida aesthetics.",
            icon: ShieldCheck,
        },
        {
            title: "Shingle Roofing",
            desc: "Affordable and durable roofing systems for most homes.",
            icon: Construction,
        },
        {
            title: "Flat Roofing",
            desc: "TPO, PVC, and modified bitumen for commercial and residential.",
            icon: Factory,
        },
    ];

    return (
        <section className="py-24 bg-primary-navy overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Grid */}
                    <div className="grid md:grid-cols-2 gap-8 order-2 lg:order-1">
                        {systems.map((system, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all group flex flex-col"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary-gold-500/10 flex items-center justify-center mb-8 group-hover:bg-primary-gold-500 transition-all">
                                    <system.icon className="w-6 h-6 text-primary-gold-500 group-hover:text-primary-navy transition-all" />
                                </div>
                                <h4 className="text-lg font-black text-white uppercase italic leading-tight mb-4">{system.title}</h4>
                                <p className="text-text-muted text-xs font-bold uppercase tracking-widest leading-relaxed mb-10 flex-grow">{system.desc}</p>
                                <button className="flex items-center gap-2 text-primary-gold-500 font-black uppercase text-[10px] tracking-widest group-hover:text-white transition-colors italic">
                                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        ))}

                        {/* Final Custom Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-primary-gold-500 p-10 rounded-[40px] shadow-glow-gold flex flex-col justify-center items-center text-center group cursor-pointer"
                        >
                            <h4 className="text-primary-navy font-black text-xl italic uppercase leading-none mb-4">Not Sure?</h4>
                            <p className="text-primary-navy/80 text-[10px] font-black uppercase tracking-widest leading-relaxed mb-10">Get expert advice on which material fits your budget.</p>
                            <button className="h-12 px-6 bg-primary-navy text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary-navy transition-all italic">
                                Ask an Expert
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-white uppercase italic mb-8">
                                Not Sure Metal is <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">The Right Fit?</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-10">
                                Apex Roofing installs multiple high-performance roofing systems built for Florida weather. We'll help you find the perfect balance of cost, performance, and style.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full border-2 border-white/10 text-white font-black hover:bg-white/5 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic leading-none">
                                    Compare All Materials
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
