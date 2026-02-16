"use client";
import Link from "next/link";
import { PhoneCall, CalendarCheck } from "lucide-react";

export const FinalCTABanner = () => {
    return (
        <section className="py-24 bg-primary-navy relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop"
                    alt="Roofing Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/80 to-primary-navy/90" />
            </div>

            <div className="container-custom relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 max-w-4xl mx-auto">
                    Secure Your Home With a <br className="hidden md:block" />
                    <span className="text-primary-blue">Stronger, Smarter Roof</span>
                </h2>
                <p className="text-lg text-white mb-10 max-w-2xl mx-auto leading-relaxed">
                    Don't wait for a leak to become a disaster. Schedule your free inspection now and get peace of mind with RoofPro's lifetime protection.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/book">
                        <button className="w-full sm:w-auto px-8 py-4 bg-primary-blue text-white rounded-xl font-bold text-lg shadow-cta hover:brightness-110 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                            <CalendarCheck className="w-5 h-5" />
                            Book Free Inspection
                        </button>
                    </Link>
                    <a href="tel:+13055550188">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                            <PhoneCall className="w-5 h-5" />
                            Call Now: (305) 555-0188
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};
