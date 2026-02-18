"use client";

import React from "react";
import { motion } from "framer-motion";
import { CloudLightning, Layers, Droplets, Wind, Wrench, AlertTriangle, ArrowRight } from "lucide-react";

const REPAIR_SERVICES = [
    {
        title: "Storm Damage Repair",
        desc: "Fast repairs after high winds, hurricanes, and severe weather impact.",
        icon: CloudLightning
    },
    {
        title: "Tile & Underlayment",
        desc: "Replace broken tiles and restore underlayment protection before leaks spread.",
        icon: Layers
    },
    {
        title: "Flashing & Skylights",
        desc: "Seal roof penetrations and flashing points to stop leaks permanently.",
        icon: Droplets
    },
    {
        title: "Chimney & Vent Repairs",
        desc: "Repair roof penetrations around chimneys and vents to prevent water intrusion.",
        icon: Wind
    },
    {
        title: "Metal Fastener Service",
        desc: "Replace loose fasteners and reseal metal roofing systems for long-term protection.",
        icon: Wrench
    },
    {
        title: "Ceiling Leak Repair",
        desc: "Identify the source of interior leaks and repair the roof before damage spreads.",
        icon: AlertTriangle
    }
];

export const RepairFeatures = () => {
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
                            Expert Roof Repair Services <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Across Southwest Florida</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mt-6">
                            From storm damage to long-term leak fixes, Apex Roofing handles every type of roof repair with precision and speed.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {REPAIR_SERVICES.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
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
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 mx-auto group">
                        Request Repair Quote
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
