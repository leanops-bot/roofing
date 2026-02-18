"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, Hexagon, Layers, Package } from "lucide-react";

const MATERIALS = [
    { name: "Metal Roofing", desc: "Energy efficient and hurricane resistant.", icon: Shield },
    { name: "Tile Roofing", desc: "Classic aesthetics with extreme longevity.", icon: Hexagon },
    { name: "Shingle Roofing", desc: "Premium architectural design options.", icon: Layers },
    { name: "Flat Roofing", desc: "Advanced TPO/Modified Bitumen systems.", icon: Package }
];

import { Shield } from "lucide-react";

export const MaterialsSlider = () => {
    return (
        <section className="py-24 bg-primary-navy overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[10px] font-black text-primary-gold-500 uppercase tracking-[0.3em] mb-4">Elite Craftsmanship</p>
                        <h2 className="text-[36px] md:text-[56px] font-black tracking-tight leading-tight text-white mb-6 uppercase italic">
                            Premium Materials From <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Industry-Leading Manufacturers</span>
                        </h2>
                        <p className="text-text-muted text-lg font-medium leading-relaxed max-w-xl mx-auto">
                            We use top-grade roofing systems built for long-term durability and Florida's unique climate.
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MATERIALS.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-[400px] rounded-[40px] overflow-hidden border border-white/5 bg-secondary-dark/50 hover:bg-white/5 transition-all duration-500"
                        >
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-secondary-dark/40 to-transparent" />
                                <div className="absolute inset-0 opacity-10 blur-sm group-hover:opacity-20 transition-opacity">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-blue/30 rounded-full blur-[80px]" />
                                </div>
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-end p-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                                    <item.icon className="w-6 h-6 text-primary-gold-500 group-hover:text-white" />
                                </div>
                                <h4 className="text-2xl font-black text-white italic uppercase mb-2 tracking-tight">{item.name}</h4>
                                <p className="text-text-muted text-sm font-medium mb-6">{item.desc}</p>
                                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary-blue group-hover:text-white group-hover:border-primary-blue transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="h-16 px-12 rounded-full border-2 border-primary-blue/30 text-white font-black hover:bg-primary-blue hover:text-primary-navy transition-all shadow-xl flex items-center gap-3 mx-auto group backdrop-blur-sm">
                        See Material Options
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
