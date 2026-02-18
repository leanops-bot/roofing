"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const VIDEOS = [
    { title: "Sarasota Roof Replacement", duration: "1:24", img: "https://images.unsplash.com/photo-1632759929849-c16773537a67?q=80&w=600&auto=format&fit=crop" },
    { title: "Storm Restoration Venice", duration: "2:10", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop" },
    { title: "Commercial TPO Install", duration: "1:45", img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600&auto=format&fit=crop" }
];

export const VideoProjects = () => {
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
                            Our Projects <br />
                            <span className="text-primary-blue not-italic underline decoration-primary-gold-500/20">In Action</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl mx-auto">
                            See real Apex Roofing work — roof installs, repairs, and storm restorations for local Florida clients.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {VIDEOS.map((video, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative rounded-[40px] overflow-hidden aspect-video shadow-xl border border-slate-100"
                        >
                            <img
                                src={video.img}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                            />
                            <div className="absolute inset-0 bg-primary-navy/40 group-hover:bg-primary-navy/20 transition-colors duration-500" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary-blue text-primary-navy flex items-center justify-center shadow-glow-blue scale-90 group-hover:scale-100 transition-transform duration-500">
                                    <Play className="w-8 h-8 fill-primary-navy" />
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-8 right-8">
                                <h4 className="text-white font-black italic uppercase italic tracking-tight mb-1">{video.title}</h4>
                                <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{video.duration} Runtime</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="h-14 px-8 rounded-full border-2 border-primary-navy text-primary-navy font-black hover:bg-primary-navy hover:text-white transition-all flex items-center gap-2 mx-auto group">
                        Watch More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
