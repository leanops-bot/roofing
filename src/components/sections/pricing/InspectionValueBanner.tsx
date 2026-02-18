"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Video, ClipboardCheck, Sparkles } from "lucide-react";

export const InspectionValueBanner = () => {
    return (
        <section className="py-24 bg-primary-navy overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual Representation */}
                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-white/5 shadow-2xl aspect-[4/3]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1200&auto=format&fit=crop"
                                alt="Professional Roof Audit"
                                className="w-full h-full object-cover grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />

                            {/* Process Sticker */}
                            <div className="absolute bottom-10 left-10 bg-primary-gold-500 p-6 rounded-3xl border-4 border-white shadow-2xl -rotate-6">
                                <ClipboardCheck className="w-8 h-8 text-primary-navy mb-2" />
                                <p className="text-primary-navy font-black text-sm italic uppercase leading-none">Complete Audit</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-white uppercase italic mb-8">
                                Professional <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roof Inspection</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-10">
                                Apex Roofing inspections provide clarity and a professional plan — not vague pricing guesses. Our experts conduct a 50-point audit on every roof.
                            </p>

                            <div className="space-y-6 mb-12">
                                {[
                                    { title: "Measurement Accuracy", icon: Sparkles, desc: "Ariel drone measurements for precision." },
                                    { title: "Damage Documentation", icon: Video, desc: "Photo and video proof of all issues found." },
                                    { title: "Certified Estimates", icon: ShieldCheck, desc: "Professional quote ready for insurance or financing." }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-gold-500 transition-all">
                                            <step.icon className="w-5 h-5 text-primary-gold-500 group-hover:text-primary-navy transition-all" />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-black text-sm uppercase italic mb-1">{step.title}</h5>
                                            <p className="text-text-muted text-xs font-bold uppercase tracking-widest">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="h-16 px-10 rounded-full bg-primary-gold-500 text-primary-navy font-black hover:bg-white transition-all shadow-glow-gold flex items-center gap-3 group uppercase text-xs tracking-widest leading-none">
                                Schedule Free Inspection
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
