"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, RefreshCw, Wrench, CloudLightning, ArrowRight } from "lucide-react";

export const ShingleServicesGrid = () => {
    const services = [
        {
            title: "Asphalt Shingle Installation",
            desc: "New shingle roof installs with premium underlayment, flashing, and storm-rated fastening systems.",
            icon: Home,
        },
        {
            title: "Shingle Roof Replacement",
            desc: "Full tear-off replacements with upgraded architectural shingles and warranty-backed installation.",
            icon: RefreshCw,
        },
        {
            title: "Shingle Roof Repair",
            desc: "Leak detection, missing shingles, flashing repair, and targeted patch solutions.",
            icon: Wrench,
        },
        {
            title: "Storm Damage Restoration",
            desc: "Storm inspection and fast replacement services designed for Florida hurricane season.",
            icon: CloudLightning,
        },
    ];

    return (
        <section className="py-24 bg-soft-light overflow-hidden">
            <div className="container-custom">

                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-6">
                            Expert Shingle <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roofing Services</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed">
                            From inspection to installation, Apex Roofing delivers complete shingle roofing solutions with precision and care.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary-gold-500/30 transition-all duration-300 group flex items-start gap-8"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-primary-gold-500 transition-all">
                                <service.icon className="w-8 h-8 text-primary-gold-500 group-hover:text-primary-navy transition-all" />
                            </div>

                            <div>
                                <h4 className="text-xl font-black text-primary-navy uppercase italic mb-4 tracking-tight group-hover:text-primary-blue transition-colors">{service.title}</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{service.desc}</p>
                                <button className="flex items-center gap-2 text-primary-navy font-black uppercase text-[10px] tracking-widest group-hover:text-primary-gold-500 transition-colors italic">
                                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 mx-auto group uppercase text-xs tracking-widest">
                        Get a Free Quote
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
};
