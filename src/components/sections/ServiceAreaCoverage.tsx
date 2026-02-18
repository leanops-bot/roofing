"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const CITIES = [
    "Sarasota", "Bradenton", "Venice", "Lakewood Ranch",
    "Nokomis", "Longboat Key", "Osprey", "Englewood",
    "Port Charlotte", "Fort Myers", "Cape Coral", "Naples"
];

export const ServiceAreaCoverage = () => {
    return (
        <section className="py-24 bg-primary-navy overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Map Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[48px] overflow-hidden border border-white/10 aspect-square lg:aspect-video shadow-2xl group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541810531238-038c350000ed?q=80&w=1200&auto=format&fit=crop"
                            alt="Service Area Map"
                            className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />

                        <div className="absolute inset-4 border border-white/5 rounded-[40px] pointer-events-none" />

                        <div className="absolute bottom-10 left-10 p-8 bg-secondary-dark/60 backdrop-blur-xl border border-white/10 rounded-3xl max-w-xs">
                            <h3 className="text-xl font-black text-white italic uppercase leading-none mb-2">Local Experts</h3>
                            <p className="text-text-muted text-xs font-medium">Headquartered in Sarasota, serving the entire Southwest Florida coastline.</p>
                        </div>
                    </motion.div>

                    {/* Right Side: Checklist */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[42px] md:text-[52px] font-black tracking-tight leading-[1.1] text-white mb-8 uppercase italic">
                                Proudly Serving <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Southwest Florida</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-12 max-w-lg">
                                From residential neighborhoods to commercial districts, Apex Roofing is trusted across the Suncoast region.
                            </p>

                            <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-12">
                                {CITIES.map((city, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                                            <CheckCircle2 className="w-4 h-4 text-primary-blue group-hover:text-primary-navy transition-colors" />
                                        </div>
                                        <span className="text-white font-black italic uppercase text-sm tracking-tight group-hover:text-primary-blue transition-colors cursor-default">
                                            {city}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className="h-16 px-10 rounded-full bg-primary-blue text-primary-navy font-black hover:bg-white transition-all shadow-[0_20px_50px_rgba(30,115,255,0.2)] flex items-center gap-3 group">
                                Request Service
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
