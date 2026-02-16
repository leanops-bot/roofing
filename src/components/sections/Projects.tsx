"use client";
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Residential Roofing",
        description: "Premium protection for your home with durable materials and expert craftsmanship.",
        image: "https://images.unsplash.com/photo-1635424710928-0544d852233b?q=80&w=2070&auto=format&fit=crop",
        link: "/services/residential"
    },
    {
        title: "Commercial Roofing",
        description: "Scalable, high-performance roofing solutions for businesses and industrial facilities.",
        image: "https://images.unsplash.com/photo-1628131378822-1cb44695d73b?q=80&w=2072&auto=format&fit=crop",
        link: "/services/commercial"
    },
    {
        title: "Repairs & Maintenance",
        description: "Fast, reliable response teams to fix leaks and prevent costly future damage.",
        image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1770&auto=format&fit=crop",
        link: "/services/repairs"
    }
];

export const Projects = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Roofing Needs,<br />Fully Covered</h2>
                        <p className="text-text-muted text-lg">
                            From luxury homes to large-scale commercial complexes, we deliver excellence in every shingle.
                        </p>
                    </div>
                    <Link href="/services" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                        View All Services <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-primary transition-colors text-white">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-white/70 line-clamp-2">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
