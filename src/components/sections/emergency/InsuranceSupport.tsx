"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Camera, ArrowRight } from "lucide-react";

export const InsuranceSupport = () => {
    return (
        <section className="py-24 bg-soft-beige">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-white shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
                                alt="Insurance Claim Support"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary-navy/10" />
                        </motion.div>

                        {/* Floating Trust Card */}
                        <div className="absolute -right-8 bottom-12 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100 max-w-[260px] hidden md:block">
                            <ShieldCheck className="w-10 h-10 text-primary-blue mb-4" />
                            <p className="text-primary-navy font-black text-xl leading-tight mb-2 uppercase italic">Claim Expert Support</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Documentation Specialized</p>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[48px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                Insurance Claim <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Assistance Support</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                Apex Roofing helps document storm damage and supports the insurance claim process so repairs move faster and your focus stays on restoration.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                {[
                                    { title: "Damage Docs", desc: "Detailed inspection photos and digital evidence.", icon: Camera },
                                    { title: "Expert Estimates", desc: "Professional line-item repair cost breakdowns.", icon: FileText },
                                    { title: "Adjuster Meetings", desc: "On-site support during insurance inspections.", icon: ShieldCheck },
                                    { title: "Claim Workflow", desc: "Clear guidance through the whole claim event.", icon: ArrowRight },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-all">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-primary-navy font-black text-xs uppercase tracking-widest mb-1 italic">{item.title}</p>
                                            <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest">
                                Request Claim Help
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
