import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { Star, User } from "lucide-react";

export default function ReviewsPage() {
    return (
        <main className="min-h-screen font-inter bg-bg-soft">
            <Navbar />

            <section className="pt-32 pb-20 bg-primary-navy text-white text-center">
                <div className="container-custom max-w-3xl mx-auto">
                    <div className="flex justify-center gap-1 mb-6 text-primary-blue">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">Rated 4.9 Stars</h1>
                    <p className="text-xl text-white">Our reputation is built on trust, transparency, and thousands of satisfied homeowners.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "John D.", text: "Incredible service. The crew was fast and cleaned up everything perfectly.", role: "Homeowner" },
                            { name: "Sarah M.", text: "Best price I found, but the quality was even better. Highly recommend.", role: "Homeowner" },
                            { name: "Robert K.", text: "They helped me through the entire insurance claim process. Lifesavers.", role: "Storm Damage Client" },
                            { name: "Emily R.", text: "Professional from the first call to the final inspection.", role: "Commercial Client" },
                            { name: "Michael T.", text: "Roof looks amazing. My neighbors are already asking for their number.", role: "Homeowner" },
                            { name: "Lisa P.", text: "Honest and transparent. No hidden fees or surprise costs.", role: "Homeowner" },
                        ].map((review, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[22px] border border-white shadow-sm hover:shadow-card transition-all">
                                <div className="flex gap-1 mb-4 text-primary-blue">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-6 italic">"{review.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-bg-soft flex items-center justify-center text-text-light">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary-navy text-sm">{review.name}</h4>
                                        <p className="text-xs text-text-light font-bold uppercase">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTABanner />
        </main>
    );
}
