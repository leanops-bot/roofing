import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, PhoneCall, Home } from "lucide-react";

export default function BookingSuccessPage() {
    return (
        <main className="min-h-screen bg-bg-soft font-inter">
            <Navbar />

            <section className="pt-32 pb-20 min-h-[80vh] flex items-center">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[28px] shadow-hero border border-border-soft text-center">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8 animate-bounce">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-primary-navy mb-4">Booking Confirmed!</h1>
                        <p className="text-lg text-text-secondary mb-8">
                            Your inspection has been scheduled. Our team will review your request and contact you shortly to confirm the details.
                        </p>

                        <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left border border-slate-100">
                            <h3 className="font-bold text-primary-navy mb-4 border-b border-slate-200 pb-2">What to expect next:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-600 text-sm">
                                    <div className="w-2 h-2 rounded-full bg-primary-blue" />
                                    Confirmation email sent to your inbox.
                                </li>
                                <li className="flex items-center gap-3 text-slate-600 text-sm">
                                    <div className="w-2 h-2 rounded-full bg-primary-blue" />
                                    Our scheduler will call if we need more info.
                                </li>
                                <li className="flex items-center gap-3 text-slate-600 text-sm">
                                    <div className="w-2 h-2 rounded-full bg-primary-blue" />
                                    Inspector arrives at your property on time.
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/" className="w-full sm:w-auto">
                                <button className="w-full px-8 py-3 bg-primary-navy text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                                    <Home className="w-4 h-4" /> Back to Home
                                </button>
                            </Link>
                            <a href="tel:+13055550188" className="w-full sm:w-auto">
                                <button className="w-full px-8 py-3 bg-white border border-slate-200 text-primary-navy rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                    <PhoneCall className="w-4 h-4" /> Call Support
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
