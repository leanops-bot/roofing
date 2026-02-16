"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Daniel C.",
        role: "Homeowner, Miami",
        review: "RoofPro was professional from start to finish. They handled the inspection, estimate, and installation perfectly.",
        rating: 5
    },
    {
        name: "Paula M.",
        role: "Business Owner, Orlando",
        review: "Fast response after storm damage. They worked with our insurance and fixed everything quickly.",
        rating: 5
    },
    {
        name: "Mike R.",
        role: "Property Manager, Tampa",
        review: "Top quality work and clean crew. This is how roofing should be done. Highly recommended.",
        rating: 5
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-bg-soft relative">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-1 text-primary-blue font-bold mb-4">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-navy">Trusted by Homeowners & Businesses</h2>
                    <p className="text-text-secondary">See why we are the highest-rated roofing company in Florida.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-bg-soft p-8 rounded-[22px] relative border border-border-soft hover:shadow-card transition-all duration-300"
                        >
                            <Quote className="w-10 h-10 text-primary-blue/10 absolute top-8 right-8" />
                            <div className="flex gap-1 text-primary-blue mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-primary-navy font-medium italic mb-6 leading-relaxed">"{t.review}"</p>
                            <div>
                                <h4 className="font-bold text-primary-navy">{t.name}</h4>
                                <span className="text-xs text-text-light uppercase tracking-wide font-bold">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
