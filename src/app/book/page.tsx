import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/features/BookingForm";
import { CheckCircle2 } from "lucide-react";

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-bg-soft font-inter">
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-black text-primary-navy mb-6">Schedule Your Inspection</h1>
                            <p className="text-lg text-text-secondary">It only takes 2 minutes. Choose a time that works for you.</p>
                        </div>

                        <div className="grid md:grid-cols-5 gap-8 items-start">
                            {/* Benefits Column */}
                            <div className="md:col-span-2 space-y-8 order-2 md:order-1">
                                <div className="bg-white p-6 rounded-2xl border border-border-soft shadow-sm">
                                    <h3 className="font-bold text-primary-navy mb-4">What happens next?</h3>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary-blue/20 flex items-center justify-center text-primary-blue font-bold text-xs shrink-0">3</div>
                                            <p className="text-sm text-slate-600">We receive your request instantly.</p>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary-blue font-bold text-xs shrink-0">2</div>
                                            <p className="text-sm text-slate-600">Our team confirms the appointment via phone/email.</p>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary-blue font-bold text-xs shrink-0">3</div>
                                            <p className="text-sm text-slate-600">Rest easy knowing your roof is in expert hands.</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary-blue" />
                                        <span className="font-medium text-slate-700">No obligation quotes</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                                        <span className="font-medium text-slate-700">Licensed & Insured</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                                        <span className="font-medium text-slate-700">Price Match Guarantee</span>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Form Column */}
                            <div className="md:col-span-3 order-1 md:order-2">
                                <BookingForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
