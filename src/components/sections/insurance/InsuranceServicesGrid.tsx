"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, FileText, AlertTriangle, Shield, Handshake, Home, ArrowRight } from "lucide-react";

export const InsuranceServicesGrid = () => {
    const services = [
        {
            title: "Storm Damage Inspection",
            desc: "Comprehensive assessment of shingles, flashing, and decking to identify all storm-related vulnerabilities.",
            icon: Search,
        },
        {
            title: "Claim Documentation",
            desc: "Detailed photo evidence and reporting to support your claim scope and ensure accurate coverage.",
            icon: FileText,
        },
        {
            title: "Denied Claim Recovery",
            desc: "Expert re-inspection and evidence gathering to help you reassess and potentially overturn denied claims.",
            icon: AlertTriangle,
        },
        {
            title: "Emergency Tarping",
            desc: "Immediate stabilization and leak protection while your claim is under review by the provider.",
            icon: Shield,
        },
        {
            title: "Adjuster Collaboration",
            desc: "Professional assistance during inspection meetings to clarify findings and ensure the right scope of work.",
            icon: Handshake,
        },
        {
            title: "Restoration Execution",
            desc: "High-performance roof replacement using insurance-approved materials and elite install standards.",
            icon: Home,
        },
    ];

    return (
        <section className="py-24 bg-soft-light overflow-hidden">
            <div className="container-custom">

                <div className="max-w-3xl mb-16 px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-6">
                            Expert Claim <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Assistance Services</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed">
                            Apex Roofing supports your entire restoration journey with documentation, emergency aid, and precision craftsmanship.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary-gold-500/30 transition-all duration-300 group flex flex-col items-start gap-8"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-primary-gold-500 transition-all">
                                <service.icon className="w-8 h-8 text-primary-gold-500 group-hover:text-primary-navy transition-all" />
                            </div>

                            <div className="flex-grow">
                                <h4 className="text-xl font-black text-primary-navy uppercase italic mb-4 tracking-tight group-hover:text-primary-blue transition-colors leading-tight">{service.title}</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{service.desc}</p>
                            </div>

                            <button className="flex items-center gap-2 text-primary-navy font-black uppercase text-[10px] tracking-widest group-hover:text-primary-gold-500 transition-colors italic">
                                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center px-4 md:px-0">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 mx-auto group uppercase text-xs tracking-widest">
                        Book a Free Inspection
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
};
