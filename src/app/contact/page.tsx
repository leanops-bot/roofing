"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, PhoneCall } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen font-inter bg-primary-navy">
            <Navbar />

            <section className="pt-32 pb-20 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Get in Touch</h1>
                        <p className="text-lg text-white/70">Have a question? Need a quote? We're here to help.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-6">
                            {[
                                { icon: PhoneCall, title: "Phone", info: "+1 (305) 555-0188", sub: "Mon-Fri from 8am to 6pm.", link: "tel:+13055550188" },
                                { icon: Mail, title: "Email", info: "support@roofpro.com", sub: "Our friendly team is here to assist.", link: "mailto:support@roofpro.com" },
                                { icon: MapPin, title: "Office", info: "123 Skyline Ave, Suite 400", sub: "Miami, FL 33101", isAddress: true }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 group hover:border-primary-blue/30 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-primary-blue/20 flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                                    <p className="text-white/60 mb-4">{item.sub}</p>
                                    {item.link ? (
                                        <a href={item.link} className="text-primary-blue font-bold hover:text-white transition-colors">{item.info}</a>
                                    ) : (
                                        <p className="text-white font-medium">{item.info}<br />{item.sub}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[28px] border border-white/10 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-white/80">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-white/80">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-white/80">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-white/80">Message</label>
                                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all" placeholder="How can we help you?" />
                                </div>

                                <button type="submit" className="w-full bg-primary-blue text-white font-bold py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary-blue/20">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
