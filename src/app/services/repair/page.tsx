import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { Check, AlertTriangle } from "lucide-react";

export default function RepairPage() {
    return (
        <main className="min-h-screen font-inter bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-20 bg-primary-navy text-white">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Roof Repair & Storm Damage</h1>
                    <p className="text-xl text-white max-w-2xl">Fast, reliable emergency repairs to stop leaks and prevent further damage to your property.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 mb-8 inline-flex items-center gap-3 text-orange-800 font-bold">
                                <AlertTriangle className="w-5 h-5" />
                                24/7 Emergency Service Available
                            </div>

                            <h2 className="text-3xl font-bold text-primary-navy mb-6">Don't Ignore a Leak</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Small leaks can lead to major structural damage if left untreated. Our rapid response team locates the source of the leak and fixes it permanently, not just a patch job.
                            </p>
                            <ul className="space-y-3">
                                {["Emergency Leak Detection", "Storm Damage Repair", "Missing Shingle Replacement", "Flashing & Chimney Repair", "Insurance Claim Assistance"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-primary-navy font-medium">
                                        <div className="w-5 h-5 rounded-full bg-accent-red text-white flex items-center justify-center"><Check className="w-3 h-3" /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1770&auto=format&fit=crop" className="rounded-[22px] shadow-xl" alt="Roof Repair" />
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTABanner />
        </main>
    );
}
