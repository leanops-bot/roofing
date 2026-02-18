"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Wrench, AlertTriangle, ArrowRight } from "lucide-react";

const TOP_SERVICES = [
    {
        title: "Commercial Roof Replacement",
        desc: "Full replacement solutions for flat and low-slope roofs with premium materials and warranties.",
        icon: Building2
    },
    {
        title: "Commercial Roof Repair",
        desc: "Leak repairs, seam sealing, drainage fixes, and restoration services for all commercial systems.",
        icon: Wrench
    },
    {
        title: "Roof Damage Restoration",
        desc: "Storm damage repair and emergency response to protect your building fast.",
        icon: AlertTriangle
    }
];

export const TopCommercialServices = () => {
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
                            Top Commercial Roofing <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Solutions</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mt-6">
                            Apex Roofing delivers reliable commercial roofing solutions built for performance and long-term durability.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {TOP_SERVICES.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary-blue/10 text-primary-blue flex items-center justify-center mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-black text-primary-navy uppercase italic mb-4 tracking-tight group-hover:text-primary-blue transition-colors">{service.title}</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                                {service.desc}
                            </p>
                            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-blue group-hover:text-primary-navy transition-colors">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 mx-auto group">
                        Get Commercial Quote
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
