"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Search, ArrowRight } from "lucide-react";

const PROJECTS = [
    { title: "Residential Replacement", loc: "Sarasota, FL", img: "https://images.unsplash.com/photo-1632759929849-c16773537a67?q=80&w=600&auto=format&fit=crop" },
    { title: "Commercial Flat Roof", loc: "Bradenton, FL", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop" },
    { title: "Tile Roof Restoration", loc: "Venice, FL", img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600&auto=format&fit=crop" },
    { title: "Storm Damage Repair", loc: "Lakewood Ranch, FL", img: "https://images.unsplash.com/photo-1541810531238-038c350000ed?q=80&w=600&auto=format&fit=crop" },
    { title: "Metal Roofing Install", loc: "Nokomis, FL", img: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=600&auto=format&fit=crop" },
    { title: "Gutter System Update", loc: "Sarasota, FL", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=600&auto=format&fit=crop" }
];

export const ProjectsGallery = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-tight text-primary-navy mb-6 uppercase italic">
                            Completed Projects Across <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Southwest Florida</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl mx-auto">
                            Explore recent roof replacements, repairs, and restoration projects in your neighborhood.
                        </p>
                    </motion.div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="break-inside-avoid group relative rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <p className="text-primary-gold-500 text-[10px] font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                                    <MapPin className="w-3 h-3" /> {project.loc}
                                </p>
                                <h4 className="text-xl font-black text-white italic uppercase mb-4">{project.title}</h4>
                                <button className="w-12 h-12 rounded-full bg-primary-blue text-primary-navy flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-16 px-12 rounded-full bg-primary-navy text-white font-black hover:bg-primary-blue transition-all shadow-xl flex items-center gap-3 mx-auto group">
                        View Full Gallery
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
