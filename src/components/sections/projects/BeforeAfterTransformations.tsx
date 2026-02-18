"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, CheckCircle2 } from "lucide-react";

const PROJECTS = [
    {
        title: "Full Roof Replacement",
        location: "Sarasota, FL",
        before: "https://images.unsplash.com/photo-1541810531238-038c350000ed?q=80&w=1200&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=1200&auto=format&fit=crop",
        desc: "Complete tear-off and upgrade to premium architectural shingles."
    },
    {
        title: "Storm Restoration Upgrade",
        location: "Bradenton, FL",
        before: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1200&auto=format&fit=crop",
        desc: "Emergency stabilization followed by a full hurricane-ready roof system."
    },
    {
        title: "Commercial Roofing Install",
        location: "Venice, FL",
        before: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1200&auto=format&fit=crop",
        desc: "Large-scale TPO installation with high-reflectivity coatings."
    }
];

const BeforeAfterCard = ({ project }: { project: typeof PROJECTS[0] }) => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isHovered) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPos(Math.min(Math.max(x, 0), 100));
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group"
        >
            <div
                className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200 shadow-lg cursor-ew-resize"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
            >
                {/* AFTER IMAGE (Bottom Layer) */}
                <div className="absolute inset-0">
                    <img src={project.after} alt="After" className="w-full h-full object-cover" />
                    <div className="absolute bottom-6 right-6 px-4 py-2 bg-primary-navy/80 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest z-10 border border-white/10">AFTER</div>
                </div>

                {/* BEFORE IMAGE (Top Layer with Clip) */}
                <div
                    className="absolute inset-0 z-10"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                    <img src={project.before} alt="Before" className="w-full h-full object-cover grayscale" />
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-primary-navy/80 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest z-10 border border-white/10">BEFORE</div>
                </div>

                {/* SLIDER HANDLE */}
                <div
                    className="absolute inset-y-0 z-20 w-1 bg-white shadow-2xl transition-all duration-75"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-primary-gold-500 shadow-2xl flex items-center justify-center">
                        <ArrowLeftRight className="w-4 h-4 text-primary-gold-500" />
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-gold-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{project.location}</span>
                </div>
                <h4 className="text-xl font-black text-primary-navy uppercase italic mb-3">{project.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">{project.desc}</p>
                <button className="flex items-center gap-2 text-primary-blue font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
                    View Project <ArrowLeftRight className="w-4 h-4 rotate-[-45deg]" />
                </button>
            </div>
        </motion.div>
    );
};

export const BeforeAfterTransformations = () => {
    return (
        <section className="py-24 bg-soft-light overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[52px] font-black tracking-tight leading-[1.1] text-primary-navy uppercase italic">
                            Before & After <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">Transformations</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mt-6">
                            Real roofs. Real upgrades. See how Apex Roofing transforms homes and businesses with premium installations.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {PROJECTS.map((project, idx) => (
                        <BeforeAfterCard key={idx} project={project} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-16 px-12 rounded-full border-2 border-primary-navy text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center gap-3 mx-auto group uppercase text-xs tracking-widest">
                        View More Transformations
                        <ArrowLeftRight className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                    </button>
                </div>
            </div>
        </section>
    );
};
