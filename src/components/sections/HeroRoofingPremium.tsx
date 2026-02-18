"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    PhoneCall,
    Menu,
    X,
    BadgeCheck,
    ShieldCheck,
    Clock,
    Star,
    ArrowRight,
    Hammer
} from "lucide-react";
import { cn } from "@/lib/utils";
import { UserAvatars } from "@/components/ui/user-avatars";

const HAPPY_CLIENTS = [
    { id: 1, name: "Maria Garcia", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
    { id: 2, name: "David Johnson", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
    { id: 3, name: "Sarah Williams", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" },
    { id: 4, name: "Michael Chen", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" },
    { id: 5, name: "Emma Smith", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" },
];

// --- Types ---
interface NavLink {
    label: string;
    href: string;
}

// --- Constants ---
const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
];

// --- Components ---

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="relative z-50 flex items-center justify-between px-6 py-5 md:px-10 md:py-6"
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
                <div className="bg-primary-navy text-white p-2 rounded-lg group-hover:bg-primary-blue transition-colors duration-300">
                    <Hammer className="w-5 h-5 fill-current" />
                </div>
                <span className="font-extrabold tracking-tight text-xl text-primary-navy font-poppins">
                    RoofPro
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 items-center">
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="text-sm font-medium text-slate-600 hover:text-primary-blue transition-colors font-inter"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
                <a
                    href="tel:+13055550188"
                    className="flex items-center gap-2 bg-[#E11D48] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_16px_40px_rgba(225,29,72,0.30)] hover:brightness-110 hover:-translate-y-[2px] transition-all duration-300 font-inter group"
                >
                    <PhoneCall className="w-4 h-4 group-hover:animate-pulse" />
                    <span>+1 (305) 555-0188</span>
                </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-4">
                <a
                    href="tel:+13055550188"
                    className="flex items-center justify-center w-10 h-10 bg-[#E11D48] text-white rounded-full shadow-lg"
                >
                    <PhoneCall className="w-5 h-5" />
                </a>
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 text-primary-navy hover:bg-slate-100 rounded-lg transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-white md:hidden flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-slate-100">
                            <span className="font-black text-xl text-primary-navy font-poppins">RoofPro</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-slate-500 hover:bg-slate-100 rounded-full"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex flex-col p-6 gap-6 overflow-y-auto">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-primary-navy font-poppins"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-slate-100" />
                            <a
                                href="tel:+13055550188"
                                className="flex items-center justify-center gap-3 bg-[#E11D48] text-white px-6 py-4 rounded-xl text-lg font-bold shadow-[0_16px_40px_rgba(225,29,72,0.30)] active:scale-95 transition-transform"
                            >
                                <PhoneCall className="w-6 h-6" />
                                <span>Call Now: (305) 555-0188</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export const HeroRoofingPremium = () => {
    return (
        <section className="p-4 md:p-6 lg:p-10 bg-[#F7F9FC] min-h-screen flex items-center justify-center font-inter">
            <div className="w-full max-w-7xl mx-auto bg-white rounded-[28px] border border-slate-200 overflow-hidden relative shadow-[0_40px_120px_rgba(2,6,23,0.14)]">

                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    {/* Gradient Blob behind headline */}
                    <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-3xl" />
                    <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary-blue/5 rounded-full blur-3xl opacity-60" />

                    {/* SVG Patterns */}
                    <svg className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03]" viewBox="0 0 100 100">
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="currentColor" />
                        </pattern>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Navbar removed to use global Navbar from layout */}

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 min-h-[700px]">
                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-5 flex flex-col justify-center px-6 pb-12 pt-6 lg:pl-16 lg:pr-8 lg:py-20 text-center lg:text-left relative">

                        {/* Secondary Faded Text Overlay */}
                        <span className="hidden lg:block absolute right-0 top-10 text-[120px] font-black tracking-tight leading-[0.9] text-[#0B1220]/[0.03] select-none pointer-events-none font-poppins z-0">
                            SERVICES
                        </span>

                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        >
                            <h1 className="relative z-10 text-[46px] sm:text-[56px] lg:text-[72px] font-black tracking-tight leading-[0.95] text-primary-navy font-poppins mb-6 uppercase">
                                ROOFING <br />
                                <span className="text-primary-blue">SERVICES</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium"
                        >
                            Premium residential & commercial roofing services backed by warranty-driven craftsmanship. Trusted by homeowners and businesses for over 25 years.
                        </motion.p>

                        {/* Trust Badges */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                                }
                            }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
                        >
                            {[
                                { icon: BadgeCheck, text: "Licensed & Insured", color: "text-primary-blue" },
                                { icon: ShieldCheck, text: "Lifetime Warranty", color: "text-primary-blue" },
                                { icon: Clock, text: "Fast Response", color: "text-primary-navy" }
                            ].map((badge, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                    className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg"
                                >
                                    <badge.icon className={cn("w-5 h-5", badge.color)} />
                                    <span className="text-sm font-bold text-slate-700">{badge.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
                        >
                            <UserAvatars users={HAPPY_CLIENTS} size={40} maxVisible={4} overlap={40} />
                            <div className="px-4 py-2 rounded-full bg-[#0b0b0b] border border-white/10 shadow-lg flex items-center gap-3 z-20 relative">
                                <span className="text-white font-semibold text-sm">4.9</span>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4].map((i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                                        </svg>
                                    ))}
                                    {/* Half Star (Clipped) */}
                                    <div className="relative w-5 h-5">
                                        <svg className="w-5 h-5 text-gray-700 fill-gray-700 absolute inset-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                                        </svg>
                                        <div className="absolute inset-0 overflow-hidden w-[80%]">
                                            <svg className="w-5 h-5 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-white font-medium text-xs">(2,300+ Reviews)</span>
                            </div>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="flex flex-col sm:flex-row gap-4 mt-10"
                        >
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto bg-[#1E73FF] text-white px-8 py-4 rounded-xl font-bold shadow-[0_14px_40px_rgba(30,115,255,0.35)] hover:shadow-[0_18px_55px_rgba(30,115,255,0.45)] hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-2 group">
                                    Upgrade Your Roof
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/services" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto bg-white border-2 border-slate-100 text-[#0B1220] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-[2px] transition-all duration-300">
                                    View Services
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-7 relative h-[500px] lg:h-auto lg:min-h-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                            className="absolute inset-0 lg:left-0 lg:right-4 lg:top-4 lg:bottom-4 rounded-[22px] overflow-hidden shadow-[0_35px_80px_rgba(2,6,23,0.22)] group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 mix-blend-multiply" />
                            <img
                                src="https://images.unsplash.com/photo-1632759929849-c16773537a67?q=80&w=2070&auto=format&fit=crop"
                                alt="Quality Roofing"
                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1.5s]"
                            />

                            {/* Bottom Strip Marquee */}
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5, delay: 0.65 }}
                                className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md text-white py-4 overflow-hidden z-20 flex items-center"
                            >
                                <div className="flex whitespace-nowrap animate-marquee">
                                    {[1, 2, 3, 4].map((i) => (
                                        <span key={i} className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mx-8 flex items-center gap-8 text-white/90">
                                            <span>ROOFING SERVICES</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                                            <span>STORM DAMAGE</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                                            <span>BUILT STRONG</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1E73FF]" />
                                            <span>PREMIUM MATERIALS</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                                        </span>
                                    ))}
                                </div>
                                {/* Duplicate for seamless effect code removed for simplicity in specific React marquee libraries, but CSS animation works with duplicate content */}
                                <div className="flex whitespace-nowrap animate-marquee absolute top-4 left-full">
                                    {[1, 2, 3, 4].map((i) => (
                                        <span key={i} className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mx-8 flex items-center gap-8 text-white/90">
                                            <span>ROOFING SERVICES</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                                            <span>STORM DAMAGE</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                                            <span>BUILT STRONG</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1E73FF]" />
                                            <span>PREMIUM MATERIALS</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
