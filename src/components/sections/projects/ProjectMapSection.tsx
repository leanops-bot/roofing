"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Search, ArrowRight, ShieldCheck } from "lucide-react";

export const ProjectMapSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic mb-8">
                                Local Roofing <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Project Footprint</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                                Apex Roofing has completed projects in every corner of Southwest Florida. From coastal estates to industrial complexes, we protect the Suncoast.
                            </p>

                            <div className="space-y-6 mb-12">
                                {[
                                    { title: "Sarasota & Venice", count: "450+ Projects" },
                                    { title: "Bradenton & Parrish", count: "320+ Projects" },
                                    { title: "Englewood & Boca Grande", count: "180+ Projects" },
                                ].map((stat, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-6 bg-soft-light rounded-2xl border border-slate-100 group hover:border-primary-gold-500/30 transition-all">
                                        <div className="flex items-center gap-4">
                                            <MapPin className="w-5 h-5 text-primary-gold-500" />
                                            <span className="text-primary-navy font-black text-sm uppercase italic">{stat.title}</span>
                                        </div>
                                        <span className="text-primary-blue font-black text-xs uppercase tracking-widest">{stat.count}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="h-16 px-10 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 group uppercase text-xs tracking-widest">
                                <Search className="w-5 h-5" />
                                Find Projects Near Me
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Simulated Map Card */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl aspect-square lg:aspect-[4/5] bg-slate-100"
                        >
                            {/* Stylized Map Image Placeholder */}
                            <img
                                src="https://images.unsplash.com/photo-1541810531238-038c350000ed?q=80&w=1200&auto=format&fit=crop"
                                alt="Sarasota Florida Map"
                                className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
                            />

                            {/* Simulated Interactive Pins */}
                            {[
                                { top: "20%", left: "30%", type: "Replacement" },
                                { top: "45%", left: "60%", type: "Commercial" },
                                { top: "70%", left: "25%", type: "Emergency" },
                                { top: "35%", left: "75%", type: "Repair" },
                            ].map((pin, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.5 + (idx * 0.1), type: "spring" }}
                                    className="absolute w-8 h-8 -ml-4 -mt-8 flex items-center justify-center pointer-events-none"
                                    style={{ top: pin.top, left: pin.left }}
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 w-full h-full bg-primary-gold-500/30 rounded-full animate-ping" />
                                        <div className="relative w-4 h-4 bg-primary-gold-500 rounded-full border-2 border-white shadow-lg" />
                                    </div>
                                </motion.div>
                            ))}

                            {/* Popup Preview Card (Simulated) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-xl p-6 rounded-[32px] border border-white/20 shadow-2xl flex items-center gap-6"
                            >
                                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-100">
                                    <img src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=200&auto=format&fit=crop" alt="Recent Project" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-primary-blue uppercase tracking-widest mb-1 italic">RECENT: ROOF REPLACEMENT</p>
                                    <h5 className="text-primary-navy font-black text-lg leading-tight mb-2 uppercase italic">Siesta Key Estate</h5>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Completed: Oct 2025</p>
                                </div>
                            </motion.div>

                            <div className="absolute top-10 left-10 bg-primary-navy p-6 rounded-3xl border-4 border-white shadow-2xl -rotate-6">
                                <ShieldCheck className="w-8 h-8 text-primary-gold-500 mb-2" />
                                <p className="text-white font-black text-sm italic uppercase leading-none">Local Experts</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
