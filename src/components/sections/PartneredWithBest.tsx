"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Star, Hammer, ArrowRight } from "lucide-react";

export const PartneredWithBest = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[42px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy mb-6 uppercase italic">
                                Partnered With the Best — <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/30 decoration-4">Built to Last</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg font-medium">
                                Apex Roofing works with industry-leading manufacturers to deliver stronger roofs, better warranties, and long-term protection for Florida homes.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                {[
                                    { title: "Licensed & Insured", desc: "State certified professionals.", icon: Shield },
                                    { title: "Highest Standards", desc: "Exceeding industry norms.", icon: CheckCircle2 },
                                    { title: "Premium Materials", desc: "Built for UV & Hurricanes.", icon: Star },
                                    { title: "Expert Support", desc: "Insurance claim assistance.", icon: Hammer },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-primary-blue/5 border border-primary-blue/10 flex items-center justify-center shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                                            <item.icon className="w-5 h-5 text-primary-blue group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black text-primary-navy text-sm uppercase">{item.title}</h4>
                                            <p className="text-slate-500 text-xs font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="flex items-center gap-3 bg-primary-navy text-white px-8 py-4 rounded-full font-black text-sm hover:bg-primary-blue transition-all group shadow-xl">
                                Explore Certifications
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Visual Stack */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1635848690426-f3713d042c3b?q=80&w=2070&auto=format&fit=crop"
                                alt="Roofing Certification"
                                className="w-full h-full object-cover aspect-[4/5]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent" />

                            {/* Floating Badge Cluster */}
                            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="aspect-square bg-white rounded-xl flex items-center justify-center p-2 shadow-lg grayscale hover:grayscale-0 transition-all cursor-crosshair">
                                        <img
                                            src={`https://api.dicebear.com/7.x/initials/svg?seed=Brand${i}&backgroundColor=transparent`}
                                            alt="Manufacturer"
                                            className="w-full h-full opacity-50"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Background Decoration */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};
