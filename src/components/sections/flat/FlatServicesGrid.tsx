"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Layers, Shield, Droplets, Sun, ArrowUpRight, ArrowRight } from "lucide-react";

const SERVICES = [
    {
        title: "Commercial Flat Roofing",
        desc: "Durable flat roofing systems designed for warehouses, offices, and industrial buildings.",
        icon: Building2
    },
    {
        title: "TPO & PVC Roofing",
        desc: "Energy-efficient membrane roofing systems built for long-term industrial performance.",
        icon: Layers
    },
    {
        title: "Modified Bitumen",
        desc: "Multi-layer protection designed for maximum durability and weather resistance.",
        icon: Shield
    },
    {
        title: "Flat Roof Leak Repair",
        desc: "Leak detection, seam sealing, drainage fixes, and precision patch repairs.",
        icon: Droplets
    },
    {
        title: "Flat Roof Coating",
        desc: "Extend roof lifespan and reduce heat absorption with premium UV-reflective coatings.",
        icon: Sun
    },
    {
        title: "Flat-to-Slope Conversions",
        desc: "Structural conversions for improved drainage and long-term protection.",
        icon: ArrowUpRight
    }
];

export const FlatServicesGrid = () => {
    return (
        <section className="py-24 bg-soft-light">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic">
                            Flat Roofing Services That <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Deliver Protection</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mt-6">
                            Apex Roofing provides complete flat roofing solutions for homes and businesses across Southwest Florida.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 text-primary-blue flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-black text-primary-navy uppercase italic mb-4 tracking-tight group-hover:text-primary-blue transition-colors">{service.title}</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 mx-auto group uppercase text-xs tracking-widest">
                        Schedule Free Estimate
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
