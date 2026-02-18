"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Building2, FileText, Wrench, Droplets, AlertTriangle, ArrowRight } from "lucide-react";

const SERVICES = [
    {
        title: "Roof Replacement",
        desc: "Full tear-off and premium replacement installations.",
        icon: Home
    },
    {
        title: "Commercial Roofing",
        desc: "Flat roof systems, coatings, and maintenance plans.",
        icon: Building2
    },
    {
        title: "Insurance Claims",
        desc: "Storm documentation and claim assistance support.",
        icon: FileText
    },
    {
        title: "Roof Repair",
        desc: "Leak repair, flashing fixes, and storm damage rest.",
        icon: Wrench
    },
    {
        title: "Gutter Services",
        desc: "Seamless gutters, replacement, and drainage protection.",
        icon: Droplets
    },
    {
        title: "Emergency Response",
        desc: "Fast storm response, tarping, and urgent repairs.",
        icon: AlertTriangle
    }
];

export const ServicesPreviewGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-tight text-primary-navy mb-6 uppercase italic">
                            Our Core <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roofing Services</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl mx-auto">
                            Apex Roofing delivers complete roofing solutions built for Florida durability and premium protection.
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
                            className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white text-primary-blue flex items-center justify-center mb-6 group-hover:bg-primary-navy group-hover:text-white transition-all duration-300 shadow-sm">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-black text-primary-navy uppercase italic mb-4 tracking-tight group-hover:text-primary-blue transition-colors">{service.title}</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                                {service.desc}
                            </p>
                            <button className="flex items-center gap-2 text-primary-blue font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
                                Explore Service <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 mx-auto group uppercase text-xs tracking-widest">
                        Explore All Services
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
