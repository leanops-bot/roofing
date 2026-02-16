import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { CheckCircle } from "lucide-react";

export const About = () => {
    return (
        <Section>
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                            alt="Roofing Crew"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-soft hidden md:block">
                        <div className="flex items-center gap-4">
                            <div className="text-4xl font-bold text-primary display-font">20+</div>
                            <div className="text-sm font-medium text-secondary/60">
                                Years of <br /> Excellence
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl font-bold text-secondary mb-6 leading-tight">
                        Three Generations of <br />
                        <span className="text-primary">Roofing Excellence</span>
                    </h2>
                    <p className="text-lg text-secondary/70 mb-8 leading-relaxed">
                        Apex Roofing Co. is built on craftsmanship, integrity, and long-term protection.
                        We combine modern roofing materials with old-school workmanship — so your roof lasts decades, not years.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Licensed & fully insured crew",
                            "Premium materials from top manufacturers",
                            "Transparent, no-surprise pricing",
                            "10-year workmanship warranty included"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle className="text-primary shrink-0" size={20} />
                                <span className="font-medium text-secondary">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};
