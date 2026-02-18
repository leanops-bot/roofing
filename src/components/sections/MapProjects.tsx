"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Info, ArrowRight, Navigation } from "lucide-react";

export const MapProjects = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container-custom">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Map Visual (Right-ish, Desktop first) */}
                    <div className="lg:col-span-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl bg-slate-100 aspect-video lg:aspect-auto lg:h-[600px]"
                        >
                            {/* Static Map Background (Placeholder for interactive) */}
                            <div className={`absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-82.451,27.336,9.5,0/1200x800?access_token=${MAPBOX_TOKEN}')] bg-cover bg-center grayscale opacity-80`} />

                            {/* Overlay UI elements to make it feel "SaaS" */}
                            <div className="absolute top-8 left-8 right-8 flex justify-between items-start pointer-events-none">
                                <div className="bg-primary-navy/90 backdrop-blur-xl border border-white/10 p-6 rounded-[32px] max-w-sm pointer-events-auto shadow-2xl">
                                    <h3 className="text-2xl font-black text-white italic uppercase leading-none mb-2">Service Area <span className="text-primary-blue">Footprint</span></h3>
                                    <p className="text-text-muted text-xs font-medium mb-6">Apex Roofing has completed 2,500+ projects across neighborhoods throughout Southwest Florida.</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Sarasota", "Bradenton", "Venice", "Lakewood Ranch"].map(city => (
                                            <span key={city} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white flex items-center gap-1.5 uppercase tracking-widest">
                                                <MapPin className="w-3 h-3 text-primary-gold-500" /> {city}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-primary-blue text-primary-navy p-4 rounded-2xl pointer-events-auto shadow-glow-blue flex flex-col items-center">
                                    <Navigation className="w-6 h-6 mb-1" />
                                    <span className="text-[10px] font-black uppercase tracking-tighter">Locate Me</span>
                                </div>
                            </div>

                            {/* Stylized Pin Cluster */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        className="absolute"
                                        style={{
                                            top: `${30 + Math.random() * 40}%`,
                                            left: `${20 + Math.random() * 60}%`
                                        }}
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-primary-blue animate-ping rounded-full opacity-40" />
                                            <div className="relative w-4 h-4 bg-primary-blue rounded-full border-2 border-white shadow-lg" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Info Bar */}
                            <div className="absolute bottom-8 left-8 right-8 flex justify-center pointer-events-none">
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full pointer-events-auto flex items-center gap-8 shadow-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-black text-white uppercase tracking-widest">Crews Active in Venice</span>
                                    </div>
                                    <div className="w-px h-4 bg-white/20" />
                                    <button className="text-xs font-black text-primary-blue hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest">
                                        Check Your Area <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
