"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Phone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const HeroReplica = () => {
    return (
        <section className="p-4 md:p-6 lg:p-8 min-h-screen flex flex-col justify-center">
            {/* Outer Container with Rounded Corners & Soft Shadow */}
            <div className="relative bg-[#F9F3F2] rounded-[30px] shadow-[0_30px_90px_rgba(0,0,0,0.12)] overflow-hidden isolate border border-black/5 max-w-[1400px] mx-auto w-full min-h-[85vh] flex flex-col">

                {/* Background Patterns (Abstract Lines) */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none z-0">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,33.1C61,44.7,51.1,55,39.6,63.4C28.1,71.8,15,78.3,1.3,76C-12.4,73.8,-26,62.8,-38.7,53.2C-51.4,43.6,-63.2,35.4,-70.6,23.5C-78,11.6,-81.1,-4,-77.8,-18.2C-74.5,-32.4,-64.8,-45.2,-52.7,-53.4C-40.6,-61.6,-26.1,-65.2,-12.3,-67.2C1.5,-69.2,15.3,-69.6,30.5,-77.9L44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>

                {/* --- Navbar (Internal to Hero) --- */}
                <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="text-2xl font-black font-poppins tracking-tighter text-[#111] flex items-center gap-2">
                            <div className="w-8 h-8 bg-black flex items-center justify-center text-white rounded">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                            </div>
                            Roofpro
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {["Home", "About Us", "Services", "Pages", "Blog", "Contact Us"].map((link) => (
                            <Link
                                key={link}
                                href="#"
                                className="text-sm font-medium text-gray-700 hover:text-black hover:font-semibold transition-all flex items-center gap-1"
                            >
                                {link} {link !== "Contact Us" && link !== "Home" && link !== "About Us" && <ChevronDown size={12} className="opacity-50" />}
                            </Link>
                        ))}
                    </div>

                    {/* Phone CTA */}
                    <div className="hidden md:flex">
                        <Button className="bg-[#FF2D2D] hover:bg-[#E01515] text-white rounded-full px-6 h-12 shadow-lg shadow-red-500/20 font-semibold gap-2">
                            <div className="p-1 bg-white/20 rounded-full">
                                <Phone size={14} fill="currentColor" />
                            </div>
                            +123 (4567) 890
                        </Button>
                    </div>
                </nav>

                {/* --- Main Content Split --- */}
                <div className="flex-1 flex flex-col lg:flex-row relative z-10 px-6 md:px-12 pb-0 pt-4 lg:pt-12">

                    {/* Left Column: Text Content */}
                    <div className="lg:w-[45%] relative z-30 pt-4 lg:pt-12">
                        <div className="relative mb-10">
                            {/* Detail Zoom Image (Floating top left) */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-16 -left-12 lg:-left-20 w-32 h-32 md:w-40 md:h-40 hidden md:block"
                            >
                                <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl relative z-20">
                                    <Image
                                        src="https://images.unsplash.com/photo-1632759929007-6c84c7835154?q=80&w=300"
                                        alt="Zoom"
                                        fill
                                        className="object-cover scale-150"
                                    />
                                </div>
                                {/* Line pointing to S in SERVICES */}
                                <svg className="absolute top-1/2 left-1/2 w-[200px] h-[200px] pointer-events-none z-10" style={{ transform: 'translate(20px, 20px)' }}>
                                    <path d="M 0 0 L 120 120" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                                    <circle cx="120" cy="120" r="4" fill="white" stroke="#CBD5E1" strokeWidth="2" />
                                </svg>
                            </motion.div>

                            {/* Info Icon Top Right */}
                            <div className="absolute top-0 right-0 lg:right-20 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-serif italic z-30 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                i
                            </div>

                            {/* Headlines */}
                            <div className="relative pl-0 md:pl-28">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-[14vw] md:text-[90px] lg:text-[110px] leading-[0.85] font-black font-poppins tracking-tighter text-[#111] mb-2"
                                >
                                    ROOFING
                                </motion.h1>

                                <div className="relative">
                                    <motion.h2
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="text-[14vw] md:text-[90px] lg:text-[110px] leading-[0.85] font-black font-poppins tracking-tighter text-transparent stroke-text opacity-40 md:opacity-100 md:text-[#111] md:stroke-0"
                                    >
                                        <span className="md:hidden">SERVICES</span> {/* Mobile Outline */}
                                        <span className="hidden md:inline text-gray-400/50">SERVICES</span> {/* Desktop Gray Faint */}
                                    </motion.h2>

                                    {/* Overlapping description */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="md:absolute md:top-2 md:left-2 max-w-sm mt-6 md:mt-0"
                                    >
                                        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed bg-[#F9F3F2]/80 backdrop-blur-sm p2 rounded-lg">
                                            At Roofpro services, we specialize in providing high-quality roofing solutions designed to protect and enhance your home.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Avatars & CTA */}
                        <div className="flex flex-col sm:flex-row items-center gap-8 pl-0 md:pl-28 mt-4 md:mt-0 pb-32 lg:pb-0">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white shadow-sm overflow-hidden relative">
                                            <Image src={`https://randomuser.me/api/portraits/men/${i + 50}.jpg`} alt="User" fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="text-[#111] font-bold text-lg leading-none">1650+</div>
                                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide">Satisfied Customers</div>
                                </div>
                            </div>

                            <Button className="bg-[#FF2D2D] hover:bg-[#D01010] text-white px-8 py-6 h-auto rounded-xl shadow-xl shadow-red-500/20 text-base font-bold">
                                Upgrade Your Roof
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Hero Image (Overlapping & Absolute on Desktop) */}
                    <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[65%] h-[40vh] lg:h-[80%] z-20">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-full w-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-[#F9F3F2] h-20 -top-10 z-10 lg:hidden" /> {/* Mobile blend */}
                            <Image
                                src="https://images.unsplash.com/photo-1632759929007-6c84c7835154?q=80&w=2600"
                                alt="Modern Metal Roof"
                                fill
                                className="object-cover object-top lg:rounded-tl-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.1)]"
                                priority
                            />

                            {/* Bottom Marquee Strip Overlay */}
                            <div className="absolute bottom-0 left-0 w-full bg-[#5B626B]/90 backdrop-blur-md py-4 z-30">
                                <div className="flex animate-marquee whitespace-nowrap">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="flex items-center mx-8">
                                            <span className="text-white/80 text-xs font-bold tracking-[0.2em] font-poppins uppercase">
                                                Roofing Services
                                            </span>
                                            <span className="mx-8 text-white/40 text-sm">✱</span>
                                            <span className="text-white/80 text-xs font-bold tracking-[0.2em] font-poppins uppercase">
                                                Feature
                                            </span>
                                            <span className="mx-8 text-white/40 text-sm">✱</span>
                                            <span className="text-white text-sm font-black tracking-widest font-poppins uppercase">
                                                Feature Rotator
                                            </span>
                                            <span className="mx-8 text-white/40 text-sm">✱</span>
                                            <span className="text-white/80 text-xs font-bold tracking-[0.2em] font-poppins uppercase">
                                                Built Strong
                                            </span>
                                            <span className="mx-8 text-white/40 text-sm">✱</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
};
