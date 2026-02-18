"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, CloudLightning, Wind, Droplets, Image, ShieldX, Thermometer } from "lucide-react";
import { ArrowRight } from "lucide-react";

export const WhenToFileClaim = () => {
    const triggers = [
        { title: "Lifted Shingles", icon: Wind, text: "High winds lifting or peeling shingle edges." },
        { title: "Hail Impacts", icon: CloudLightning, text: "Bruising, granule loss, or decking damage." },
        { title: "Missing Flashing", icon: ShieldX, text: "Storm-induced separation of vital leak barriers." },
        { title: "Sudden Leaks", icon: Droplets, text: "Water intrusion immediately following a storm event." },
        { title: "Debris Impact", icon: Zap, text: "Tree strikes or foreign object damage to the roof plane." },
        { title: "Heat Blisters", icon: Thermometer, text: "Rapid expansion damage due to Florida's extreme sun." }
    ];

    return (
        <section className="py-24 bg-primary-navy overflow-hidden">
            <div className="container-custom px-4 md:px-0">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content Card */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-white uppercase italic mb-8">
                                When to File <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">An Insurance Claim</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-10">
                                Not every leak requires a claim, but storm-related structural vulnerabilities must be addressed quickly to prevent escalating property damage.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                {triggers.map((trigger, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-gold-500 transition-all">
                                            <trigger.icon className="w-5 h-5 text-primary-gold-500 group-hover:text-primary-navy transition-all" />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-black text-sm uppercase italic mb-1">{trigger.title}</h5>
                                            <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest leading-relaxed">{trigger.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="h-16 px-10 rounded-full bg-primary-gold-500 text-primary-navy font-black hover:bg-white transition-all shadow-glow-gold flex items-center gap-3 group uppercase text-xs tracking-widest leading-none">
                                    Free Storm Inspection
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-16 px-10 rounded-full border-2 border-white/10 text-white font-black hover:bg-white/5 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest italic leading-none">
                                    Call Now
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Evidence Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-white/5 shadow-2xl aspect-[4/5]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1543333995-a78ee9e5419f?q=80&w=1200&auto=format&fit=crop"
                                alt="Storm Damaged Roof Damage Documentation"
                                className="w-full h-full object-cover grayscale opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />

                            {/* Documentation Badge */}
                            <div className="absolute bottom-10 left-10 bg-primary-gold-500 p-8 rounded-3xl border-4 border-white shadow-2xl skew-x-[-2deg]">
                                <p className="text-primary-navy font-black text-xs uppercase tracking-widest mb-1 leading-none">Damage Analysis</p>
                                <p className="text-primary-navy font-black text-2xl italic uppercase leading-none">Detailed Evidence</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
