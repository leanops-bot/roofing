"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Menu, X, Hammer } from "lucide-react";

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

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle Scroll for sticky blur effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 'bg-transparent py-5 md:py-6'}`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary-blue text-white p-2 rounded-lg group-hover:bg-primary-blue-dark transition-colors duration-300">
                        <Hammer className="w-5 h-5 fill-current" />
                    </div>
                    <span className="font-extrabold tracking-tight text-xl text-white font-poppins">
                        RoofPro
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex gap-8 items-center bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-2xl">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-primary-blue transition-colors font-inter"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Actions (Desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:+13055550188"
                        className="flex items-center gap-2 bg-primary-blue text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-cta hover:brightness-110 hover:-translate-y-[2px] transition-all duration-300 font-inter group"
                    >
                        <PhoneCall className="w-4 h-4 group-hover:animate-pulse" />
                        <span>(305) 555-0188</span>
                    </a>
                </div>

                {/* Mobile Actions */}
                <div className="flex lg:hidden items-center gap-3">
                    <a
                        href="tel:+13055550188"
                        className="flex items-center justify-center w-10 h-10 bg-accent-red text-white rounded-full shadow-urgent"
                    >
                        <PhoneCall className="w-4 h-4" />
                    </a>
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-[#0A0A0A] lg:hidden flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="bg-primary-blue text-white p-2 rounded-lg">
                                    <Hammer className="w-5 h-5 fill-current" />
                                </div>
                                <span className="font-extrabold tracking-tight text-xl text-white font-poppins">RoofPro</span>
                            </div>
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
                                    className="text-2xl font-bold text-white font-poppins hover:text-primary-blue"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-white/5" />
                            <a
                                href="tel:+13055550188"
                                className="flex items-center justify-center gap-3 bg-primary-blue text-white px-6 py-4 rounded-xl text-lg font-bold shadow-cta active:scale-95 transition-transform"
                            >
                                <PhoneCall className="w-6 h-6" />
                                <span>Call Now: (305) 555-0188</span>
                            </a>
                            <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="w-full bg-primary-blue text-white px-6 py-4 rounded-xl text-lg font-bold shadow-cta active:scale-95 transition-transform">
                                    Book Inspection
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
