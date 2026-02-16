"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Modern Standing Seam",
        location: "Tampa, FL",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1628131378822-1cb44695d73b?q=80&w=2072&auto=format&fit=crop"
    },
    {
        title: "Commercial Complex",
        location: "Miami, FL",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1635424710928-0544d852233b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Storm Restoration",
        location: "Orlando, FL",
        category: "Repair",
        image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1770&auto=format&fit=crop"
    },
    {
        title: "Luxury Tile Roof",
        location: "Sarasota, FL",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1632759929849-c16773537a67?q=80&w=2070&auto=format&fit=crop"
    }
];

export const ProjectsCarousel = () => {
    return (
        <section className="py-24 bg-bg-soft overflow-hidden">
            <div className="container-custom mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Craftsmanship That Speaks</h2>
                    <p className="text-text-secondary">Explore some of our recent installations across Florida.</p>
                </div>
            </div>

            {/* Horizontal Scroll Area */}
            <div className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-8 snap-x no-scrollbar">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="min-w-[300px] md:min-w-[400px] h-[400px] rounded-[22px] overflow-hidden relative group snap-start cursor-pointer border border-border-soft"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 p-6">
                            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-blue/20 backdrop-blur-sm border border-primary-blue/30 text-primary-blue text-xs font-bold uppercase tracking-wider">
                                {project.category}
                            </div>
                            <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-white/70 text-sm">{project.location}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
