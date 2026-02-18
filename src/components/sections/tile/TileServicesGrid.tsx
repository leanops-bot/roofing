"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Shield, Wrench, Layers, CloudLightning, Building2, ArrowRight } from "lucide-react";

const SERVICES = [
    {
        title: "Tile Roof Replacement",
        desc: "Full replacement systems with premium tile options and multi-layer underlayment.",
        icon: RefreshCw
    },
    {
        title: "Metal Tile Roofing",
        desc: "Lightweight tile-style metal roofing with enhanced durability and heat reflection.",
        icon: Shield
    },
    {
        title: "Tile Roof Repair",
        desc: "Broken tile replacement, leak detection, and precision flashing restoration.",
        icon: Wrench
    },
    {
        title: "TileGuard Renewal",
        desc: "Underlayment restoration and tile sealing to extend your roof lifespan.",
        icon: Layers
    },
    {
        title: "Storm Roof Upgrades",
        desc: "Reinforce wind resistance and improve tile fastening before hurricane season.",
        icon: CloudLightning
    },
    {
        title: "HOA Roof Restoration",
        desc: "HOA-compliant tile solutions designed for architectural approval and durability.",
        icon: Building2
    }
];

export const TileServicesGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic">
                            Tile Roofing Built for <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Florida Weather</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mt-6">
                            Apex Roofing provides complete tile roofing services designed for long-term protection and premium curb appeal.
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
                            className="bg-soft-light p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group"
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
                        Get Tile Roofing Quote
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
