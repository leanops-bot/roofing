"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Camera } from "lucide-react";

const PROJECTS = [
    { title: "Estate Replacement", location: "Sarasota, FL", image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=400&auto=format&fit=crop" },
    { title: "Tile Restoration", location: "Venice, FL", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=400&auto=format&fit=crop" },
    { title: "Storm Damage Repair", location: "Bradenton, FL", image: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=400&auto=format&fit=crop" },
    { title: "Commercial TPO Install", location: "Nokomis, FL", image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=400&auto=format&fit=crop" }
];

export const ProjectsPreviewGallery = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[40px] md:text-[56px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic"
                        >
                            Proof of <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Workmanship</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <button className="h-16 px-10 rounded-full bg-slate-50 text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center gap-3 group uppercase text-xs tracking-widest italic border border-slate-200">
                            View Portfolio
                            <Camera className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative aspect-square rounded-[40px] overflow-hidden border border-slate-100 shadow-sm"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/40 to-transparent flex flex-col justify-end p-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="w-3 h-3 text-primary-gold-500" />
                                    <span className="text-[10px] font-black uppercase text-white/70 tracking-widest">{project.location}</span>
                                </div>
                                <h4 className="text-lg font-black text-white uppercase italic leading-tight mb-4">{project.title}</h4>
                                <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <button className="flex items-center gap-2 text-primary-blue font-black uppercase text-[10px] tracking-widest">
                                        View Project <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
