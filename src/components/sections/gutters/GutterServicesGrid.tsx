"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, RefreshCw, PenTool as Tool, ArrowRight } from "lucide-react";

const SERVICES = [
    {
        title: "Gutter Installation",
        desc: "Seamless gutter systems installed for long-term drainage and roofline protection.",
        icon: Tool
    },
    {
        title: "Gutter Replacement",
        desc: "Upgrade aging or damaged gutters with durable modern aluminum or copper systems.",
        icon: RefreshCw
    },
    {
        title: "Gutter Repair",
        desc: "Fix leaks, sagging, overflow, and damaged downspouts quickly with pro sealing.",
        icon: Wrench
    }
];

export const GutterServicesGrid = () => {
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
                            Professional Gutter <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Services in Florida</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mt-6">
                            From seamless installations to repairs, Apex Roofing provides complete gutter solutions built for Florida rainfall.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {SERVICES.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 text-primary-blue flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-black text-primary-navy uppercase italic mb-4 tracking-tight group-hover:text-primary-blue transition-colors">{service.title}</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                                {service.desc}
                            </p>
                            <button className="flex items-center gap-2 text-primary-blue font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 mx-auto group uppercase text-xs tracking-widest">
                        Get Gutter Estimate
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
