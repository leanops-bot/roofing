"use client";
import Link from 'next/link';
import { Home, Building2, CloudLightning, CalendarCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Residential Roofing",
        description: "Repairs, replacements, inspections, and new installs.",
        icon: Home,
        link: "/services/residential"
    },
    {
        title: "Commercial Roofing",
        description: "Flat roof systems, coatings, waterproofing, maintenance.",
        icon: Building2,
        link: "/services/commercial"
    },
    {
        title: "Storm Damage Repair",
        description: "Fast emergency response with insurance support.",
        icon: CloudLightning,
        link: "/services/repair"
    },
    {
        title: "Free Roof Inspection",
        description: "Schedule your inspection instantly online.",
        icon: CalendarCheck,
        link: "/book",
        highlight: true
    }
];

export const Services = () => {
    return (
        <section className="py-24 bg-bg-soft">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Roofing Solutions</h2>
                    <p className="text-lg text-text-secondary">From emergency repairs to full replacements, RoofPro handles it all with precision and care.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group p-8 rounded-[22px] border transition-all duration-300 relative overflow-hidden ${service.highlight
                                ? "bg-primary-blue border-primary-blue text-white shadow-cta"
                                : "bg-white border-white shadow-sm hover:shadow-card hover:-translate-y-1"
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white ${service.highlight ? "bg-white/20" : "bg-primary-blue/10 text-primary-blue"}`}>
                                <service.icon className="w-6 h-6" />
                            </div>

                            <h3 className={`text-xl font-bold mb-3 ${service.highlight ? "text-white" : "text-primary-navy"}`}>
                                {service.title}
                            </h3>
                            <p className={`mb-6 leading-relaxed ${service.highlight ? "text-white/90" : "text-text-secondary"}`}>
                                {service.description}
                            </p>

                            <Link href={service.link} className={`inline-flex items-center gap-2 font-bold text-sm ${service.highlight ? "text-white" : "text-primary-blue"}`}>
                                {service.highlight ? "Book Now" : "Learn More"} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
