"use client";
import { Shield, Hammer, Calculator, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Shield,
        title: "Licensed & Insured",
        description: "Full liability coverage and certified professionals for your peace of mind."
    },
    {
        icon: Hammer,
        title: "High-Quality Materials",
        description: "We partner with top manufacturers to ensure long-lasting durability."
    },
    {
        icon: Calculator,
        title: "Free Estimates",
        description: "Detailed, transparent pricing with no hidden fees or obligations."
    },
    {
        icon: Clock,
        title: "Fast Turnaround",
        description: "Efficient project management to minimize disruption to your property."
    }
];

export const Features = () => {
    return (
        <section className="py-24 bg-surface/30 relative">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Apex?</h2>
                    <p className="text-text-muted text-lg">
                        We combine industry-leading expertise with a commitment to customer satisfaction that stands apart.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
