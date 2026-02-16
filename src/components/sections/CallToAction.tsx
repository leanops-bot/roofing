import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/90 z-0">
                {/* Texture or pattern overlay could go here */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10" />
            </div>

            <div className="container-custom relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Upgrade Your Roof?</h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                    Get a free, no-obligation estimate today. Our team is ready to inspect, advise, and deliver the best solution for your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14 rounded-full font-bold shadow-lg" href="/contact">
                        Get Free Estimate
                    </Button>
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full" href="/projects">
                        View Our Work <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
