"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Star, ShieldCheck } from "lucide-react";

export const VideoTestimonial = () => {
    return (
        <section className="py-24 bg-primary-navy overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Video Placeholder */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[48px] overflow-hidden border-[12px] border-white/5 shadow-2xl aspect-video bg-slate-900 group cursor-pointer"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop"
                                alt="Video Testimonial Trailer"
                                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-primary-gold-500 text-primary-navy flex items-center justify-center shadow-glow-gold transform group-hover:scale-110 transition-transform duration-500">
                                    <Play className="w-8 h-8 fill-primary-navy" />
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-10 p-6 bg-primary-navy/80 backdrop-blur-md rounded-3xl border border-white/10">
                                <p className="text-white font-black text-sm italic uppercase leading-none mb-1">Watch Testimonial</p>
                                <p className="text-[10px] text-primary-gold-500 font-black uppercase tracking-widest leading-none">Siesta Key Project</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-white uppercase italic mb-8">
                                Real Stories. <br />
                                <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Real Results.</span>
                            </h2>
                            <p className="text-text-muted text-lg font-medium leading-relaxed mb-10">
                                Watch verified homeowners share their experience with Apex Roofing's premium workmanship and communication.
                            </p>

                            <div className="flex flex-wrap gap-8 mb-12">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-white italic">4.9/5</span>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Avg Google Rating</span>
                                </div>
                                <div className="w-px h-12 bg-white/10 hidden sm:block" />
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-white italic">1.2k+</span>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Happy Homeowners</span>
                                </div>
                                <div className="w-px h-12 bg-white/10 hidden sm:block" />
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-white italic">100%</span>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Warranty Protection</span>
                                </div>
                            </div>

                            <button className="h-16 px-12 rounded-full border-2 border-primary-gold-500 text-primary-gold-500 font-black hover:bg-primary-gold-500 hover:text-primary-navy transition-all flex items-center gap-3 group uppercase text-xs tracking-widest leading-none">
                                Watch More Testimonials
                                <Play className="w-4 h-4 fill-current" />
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
