import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export const Pricing = () => {
    return (
        <Section className="bg-slate-50">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Transparent Pricing You Can Trust</h2>
                <p className="text-secondary/60 text-lg">
                    No hidden fees. Just honest, upfront estimates for every budget.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic Tier */}
                <Card className="flex flex-col">
                    <div className="mb-4">
                        <span className="text-sm font-bold text-secondary/60 uppercase tracking-widest">Repair</span>
                        <h3 className="text-3xl font-bold text-secondary">Basic Repair</h3>
                    </div>
                    <div className="text-4xl font-bold text-primary mb-6">
                        $599<span className="text-lg text-secondary/40 font-normal">+</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        {["Leak inspection", "Minor shingle repairs", "Sealant replacement", "Same-week scheduling"].map(item => (
                            <li key={item} className="flex items-start gap-3 text-secondary/70">
                                <Check size={18} className="text-green-500 shrink-0 mt-1" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Button variant="secondary" className="w-full">Get Quote</Button>
                </Card>

                {/* Popular Tier */}
                <Card className="flex flex-col border-primary ring-4 ring-primary/5 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        BEST VALUE
                    </div>
                    <div className="mb-4">
                        <span className="text-sm font-bold text-primary uppercase tracking-widest">Replacement</span>
                        <h3 className="text-3xl font-bold text-secondary">Full System</h3>
                    </div>
                    <div className="text-4xl font-bold text-primary mb-6">
                        $5,999<span className="text-lg text-secondary/40 font-normal">+</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        {["Premium architectural shingles", "Complete tear-off & disposal", "Synthetic underlayment", "10-Year Workmanship Warranty", "Final inspection"].map(item => (
                            <li key={item} className="flex items-start gap-3 text-secondary">
                                <Check size={18} className="text-primary shrink-0 mt-1" />
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full">Book Inspection</Button>
                </Card>

                {/* Commercial Tier */}
                <Card className="flex flex-col">
                    <div className="mb-4">
                        <span className="text-sm font-bold text-secondary/60 uppercase tracking-widest">Commercial</span>
                        <h3 className="text-3xl font-bold text-secondary">Enterprise</h3>
                    </div>
                    <div className="text-4xl font-bold text-secondary mb-6">
                        Custom
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        {["TPO, EPDM, or Metal", "Cool roof coatings", "Annual maintenance plans", "24/7 Emergency response", "Dedicated project manager"].map(item => (
                            <li key={item} className="flex items-start gap-3 text-secondary/70">
                                <Check size={18} className="text-green-500 shrink-0 mt-1" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Button variant="secondary" className="w-full">Talk to Expert</Button>
                </Card>
            </div>
        </Section>
    );
};
