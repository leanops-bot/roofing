"use client";

import React from "react";
import { motion } from "framer-motion";
import { Umbrella, TreePine, Shield, Droplets, Building2, AlertTriangle, ArrowRight } from "lucide-react";

const SERVICES = [
    {
        title: "Emergency Tarping",
        desc: "Immediate temporary protection to stop water intrusion and secondary damage.",
        icon: Umbrella
    },
    {
        title: "Hurricane & Tree Repair",
        desc: "Fast restoration after wind damage, fallen branches, or structural debris impact.",
        icon: TreePine
    },
    {
        title: "Damage Stabilization",
        desc: "Quick structural fixes to stabilize your roof system until permanent repair.",
        icon: Shield
    },
    {
        title: "Storm Leak Repair",
        desc: "Rapid source detection and emergency patching to prevent interior ceiling damage.",
        icon: Droplets
    },
    {
        title: "Commercial Stabilization",
        desc: "Urgent industrial flat roof and coating stabilization to prevent business downtime.",
        icon: Building2
    },
    {
        title: "Urgent Roof Shield",
        desc: "Get emergency help before water damage spreads into your electrical and walls.",
        icon: AlertTriangle
    }
];

export const EmergencyServicesGrid = () => {
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
                            Expert Emergency <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roofing Services</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mt-6">
                            Apex Roofing provides fast-response emergency solutions to protect your home or business after storms and sudden roof failure.
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
                            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col"
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
                        Get Emergency Help
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
