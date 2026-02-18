"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Building2, ShieldAlert, Hammer, Gavel, Zap, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        name: "Roof Replacement",
        desc: "Full tear-off and installation with premium shingles, tile, or metal options.",
        icon: Home,
        href: "/services/replacement"
    },
    {
        name: "Commercial Roofing",
        desc: "Flat roofing systems, coatings, and durable commercial installations.",
        icon: Building2,
        href: "/services/commercial"
    },
    {
        name: "Insurance Claim Assistance",
        desc: "Storm damage inspections and claim documentation support.",
        icon: Gavel,
        href: "/services/insurance"
    },
    {
        name: "Roof Repair",
        desc: "Leak detection, flashing repairs, missing shingles, and emergency patching.",
        icon: Hammer,
        href: "/services/repair"
    },
    {
        name: "Gutters & Soffits",
        desc: "Gutter replacement and soffit solutions to protect your roofline.",
        icon: Zap,
        href: "/services/gutters"
    },
    {
        name: "Emergency Roofing",
        desc: "Rapid response for storm damage, leaks, and urgent repairs.",
        icon: ShieldAlert,
        href: "/services/emergency"
    }
];

export const ServicesGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic">
                                Expert Roofing for Homes & <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Businesses Across Florida</span>
                            </h2>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <button className="h-14 px-8 rounded-full border-2 border-primary-navy text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center gap-2 group whitespace-nowrap">
                            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative bg-[#F7F9FC] p-10 rounded-[40px] border border-transparent hover:border-primary-blue/20 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-[20px] bg-primary-blue/10 text-primary-blue flex items-center justify-center mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-black text-primary-navy mb-4 italic uppercase leading-tight group-hover:text-primary-blue transition-colors">
                                    {service.name}
                                </h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                                    {service.desc}
                                </p>
                                <a
                                    href={service.href}
                                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-navy group-hover:text-primary-blue transition-colors"
                                >
                                    Learn More <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary-blue/5 rounded-full blur-2xl group-hover:bg-primary-blue/10 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
