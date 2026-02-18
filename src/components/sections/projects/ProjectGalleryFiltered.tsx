"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, Filter } from "lucide-react";

const CATEGORIES = ["All", "Replacement", "Commercial", "Repair", "Tile", "Emergency"];

const PROJECTS = [
    {
        title: "Modern Architectural Slate",
        location: "Sarasota, FL",
        category: "Replacement",
        type: "Residential",
        image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=800&auto=format&fit=crop",
        year: "2025"
    },
    {
        title: "Industrial TPO Restoration",
        location: "Bradenton, FL",
        category: "Commercial",
        type: "Commercial",
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop",
        year: "2024"
    },
    {
        title: "Mediterranean Tile Upgrade",
        location: "Venice, FL",
        category: "Tile",
        type: "Residential",
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop",
        year: "2024"
    },
    {
        title: "Emergency Storm Stabilization",
        location: "Siesta Key, FL",
        category: "Emergency",
        type: "Residential",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
        year: "2025"
    },
    {
        title: "Waterfront Estate Leak Fix",
        location: "Longboat Key, FL",
        category: "Repair",
        type: "Residential",
        image: "https://images.unsplash.com/photo-1460317442147-d39fd470691d?q=80&w=800&auto=format&fit=crop",
        year: "2024"
    },
    {
        title: "Retail Complex Flat Roof",
        location: "Lakewood Ranch, FL",
        category: "Commercial",
        type: "Commercial",
        image: "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?q=80&w=800&auto=format&fit=crop",
        year: "2025"
    }
];

export const ProjectGalleryFiltered = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <section className="py-24 bg-soft-light">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[40px] md:text-[56px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic"
                        >
                            Explore Our <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Roofing Portfolio</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="p-2 bg-white rounded-full border border-slate-200 flex flex-wrap gap-2 items-center">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                                            ? "bg-primary-navy text-white shadow-xl"
                                            : "text-slate-400 hover:text-primary-navy hover:bg-slate-50"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group relative aspect-square rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Base Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />

                                {/* Project Tag */}
                                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-slate-100 shadow-lg z-10">
                                    <span className="text-[10px] font-black text-primary-navy uppercase tracking-widest leading-none">{project.category}</span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                                    <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-2 text-primary-gold-500">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{project.location}</span>
                                        </div>
                                        <h4 className="text-2xl font-black text-white uppercase italic leading-tight mb-6">{project.title}</h4>
                                        <button className="flex items-center gap-2 text-primary-blue font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
                                            View Case Study <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-20 text-center">
                    <button className="h-16 px-12 rounded-full border-2 border-primary-navy text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center justify-center gap-3 mx-auto group uppercase text-xs tracking-widest">
                        Load More Projects
                        <Filter className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};
