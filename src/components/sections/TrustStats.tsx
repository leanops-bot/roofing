"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Years Experience", value: "25+" },
    { label: "Projects Completed", value: "4,800+" },
    { label: "Google Rating", value: "4.9★" },
    { label: "Client Satisfaction", value: "98%" },
];

export const TrustStats = () => {
    return (
        <section className="py-10 bg-white border-b border-border-soft">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center md:text-left md:border-l md:border-bg-soft md:pl-8 first:border-none first:pl-0"
                        >
                            <h3 className="text-3xl lg:text-4xl font-black text-primary-navy mb-1">{stat.value}</h3>
                            <p className="text-sm font-bold text-text-secondary uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
