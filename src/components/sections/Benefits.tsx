import { Section } from "@/components/ui/Section";
import { ShieldCheck, Zap, Award } from "lucide-react";

export const Benefits = () => {
    return (
        <Section bg="dark">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unmatched Benefits for Peace of Mind</h2>
                <p className="text-white/60 text-lg">
                    We don’t just build roofs. We build trust through transparency, speed, and quality.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: ShieldCheck,
                        title: "Lifetime Warranty",
                        desc: "We protect your investment with long-term coverage on both materials and labor."
                    },
                    {
                        icon: Zap,
                        title: "Fast & Reliable",
                        desc: "Quick turnarounds without sacrificing quality. We respect your time and property."
                    },
                    {
                        icon: Award,
                        title: "Quality Guaranteed",
                        desc: "Every project is inspected by a master roofer to ensure it meets our gold standard."
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                        <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-white/60 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
