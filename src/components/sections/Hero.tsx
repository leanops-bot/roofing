import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HeroProps {
    // Add props if needed in future
}

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Background Image / Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1632759929849-c16773537a67?q=80&w=2070&auto=format&fit=crop"
                    alt="Professional Roofer"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="container-custom relative z-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8 animate-[fadeInUp_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-white/80">Premium Roofing Solutions</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Your Roof, <br />
                        <span className="text-primary">Our Responsibility</span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed">
                        We offer durable, weather-resistant, and energy-efficient roofing services tailored to your needs — backed by years of experience and guaranteed quality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 text-lg h-14" href="/contact">
                            {/* Link is handled inside Button now */}
                            Get an Estimate <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-white/20 text-white hover:bg-white/10 hover:text-white" href="/services">
                            Discover More
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-6 text-sm font-medium text-text-muted">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Fully Licensed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>5-Star Rated</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Warranty Backed</span>
                        </div>
                    </div>
                </div>

                {/* Visual Element (Optional - Keep empty for now to let background shine, or add a floating card) */}
                <div className="hidden lg:block relative">
                    {/* Could put a floating glass card here later */}
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </section>
    );
};
