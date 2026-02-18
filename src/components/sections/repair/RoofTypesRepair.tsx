"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, Layers, Shield, Zap } from "lucide-react";

const TYPES = [
    { title: "Metal Roofing", desc: "Fastener replacement, seam sealing, and panel repair.", icon: Zap },
    { title: "Tile Roofing", desc: "Broken tile replacement and underlayment restoration.", icon: Layers },
    { title: "Shingle Roofing", desc: "Missing shingles, leak detection, flashing repair.", icon: Shield },
    { title: "Flat Roofing", desc: "Membrane patching, coating repairs, and drainage fixes.", icon: Box }
];

export const RoofTypesRepair = () => {
    return (
        <section className="py-24 bg-primary-navy">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[56px] font-black tracking-tight leading-tight text-white mb-6 uppercase italic">
                            Roofing Types <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">We Repair</span>
                        </h2>
                        <p className="text-text-muted text-lg font-medium leading-relaxed max-w-xl mx-auto">
                            Apex Roofing repairs all major Florida roof systems with expert workmanship and durable materials.
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TYPES.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-[380px] rounded-[40px] overflow-hidden border border-white/5 bg-secondary-dark/50 hover:bg-white/5 transition-all duration-500"
                        >
                            <div className="relative z-10 h-full flex flex-col justify-end p-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                                    <item.icon className="w-6 h-6 text-primary-gold-500 group-hover:text-white" />
                                </div>
                                <h4 className="text-2xl font-black text-white italic uppercase mb-2 tracking-tight">{item.title}</h4>
                                <p className="text-text-muted text-sm font-medium mb-6">{item.desc}</p>
                                <button className="text-xs font-black text-primary-blue hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
