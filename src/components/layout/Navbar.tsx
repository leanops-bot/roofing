"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Menu, X, Mountain, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
interface NavLink {
    label: string;
    href: string;
}

// --- Constants ---
const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Financing", href: "/financing" },
    { label: "Gallery", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const SERVICES = [
    { label: "Roof Replacement", href: "/services/replacement", desc: "Full tear-off and premium installs" },
    { label: "Roof Repair", href: "/services/repair", desc: "Leak detection and urgent fixes" },
    { label: "Commercial Roofing", href: "/services/commercial", desc: "Flat roofs and industrial coatings" },
    { label: "Insurance Claim Assistance", href: "/services/insurance", desc: "Storm damage documentation" },
    { label: "Metal Roofing", href: "/services/metal", desc: "Durable and modern steel systems" },
    { label: "Tile Roofing", href: "/services/tile", desc: "Classic Florida aesthetic" },
    { label: "Shingle Roofing", href: "/services/shingle", desc: "Standard high-durability shingles" },
    { label: "Flat Roofing", href: "/services/flat", desc: "TPO and MOD bit solutions" },
    { label: "Gutters & Soffits", href: "/services/gutters", desc: "Complete drainage systems" },
    { label: "Emergency Roofing", href: "/services/emergency", desc: "24/7 rapid storm response" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();
    const isLightPage = ['/book', '/privacy', '/terms', '/cookies'].includes(pathname);
    const isSolid = scrolled || isLightPage;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                isSolid
                    ? "bg-primary-navy/95 backdrop-blur-xl border-b border-border-dark py-3"
                    : "bg-transparent py-6"
            )}

        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary-blue text-primary-navy p-2 rounded-xl group-hover:bg-accent-gold transition-colors duration-300">
                        <Mountain className="w-5 h-5 fill-current" />
                    </div>
                    <span className={cn(
                        "font-black tracking-tight text-2xl font-poppins transition-colors duration-300",
                        scrolled ? "text-white" : "text-white"
                    )}>
                        Apex<span className="text-primary-blue">Roofing</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-2">
                    <div className="flex gap-1 items-center bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-border-dark">
                        <Link href="/" className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-primary-blue transition-all">
                            Home
                        </Link>

                        {/* Services Mega Menu Trigger */}
                        <div
                            className="relative group/mega"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white/70 hover:text-primary-blue transition-all cursor-pointer">
                                Services
                                <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                                    >
                                        <div className="bg-[#0b0b0b] border border-white/10 p-6 rounded-3xl shadow-2xl grid grid-cols-2 gap-x-8 gap-y-2 relative z-[9999]">
                                            {SERVICES.map((service) => (
                                                <Link
                                                    key={service.label}
                                                    href={service.href}
                                                    className="group/item flex flex-col p-3 rounded-2xl hover:bg-white/5 transition-colors"
                                                >
                                                    <span className="text-sm font-bold text-white/90 group-hover/item:text-primary-blue transition-colors">
                                                        {service.label}
                                                    </span>
                                                    <span className="text-xs text-white/50 mt-1 leading-relaxed">
                                                        {service.desc}
                                                    </span>
                                                </Link>
                                            ))}
                                            <div className="col-span-2 mt-4 pt-4 border-t border-white/10">
                                                <Link
                                                    href="/book"
                                                    className="flex items-center justify-center gap-2 w-full bg-[#c9822a] hover:bg-[#e29b3d] text-black font-bold py-3 px-4 rounded-xl transition-all shadow-lg border border-yellow-400/20 group/btn"
                                                >
                                                    <span>Book 17-Point Inspection</span>
                                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Links */}
                        {NAV_LINKS.filter(l => l.label !== "Home").map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-primary-blue transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Actions (Desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:+13055550188"
                        className="flex items-center gap-2 bg-primary-blue text-primary-navy px-6 py-3 rounded-full text-sm font-black shadow-cta hover:bg-accent-gold hover:-translate-y-0.5 transition-all duration-300 group"
                    >
                        <PhoneCall className="w-4 h-4 group-hover:animate-pulse" />
                        <span>(305) 555-0188</span>
                    </a>
                </div >

                {/* Mobile Trigger */}
                < div className="flex lg:hidden items-center gap-3" >
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-3 text-white bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-border-dark"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div >
            </div >

            {/* Mobile Menu */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="fixed inset-0 z-[110] bg-primary-navy flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-border-dark">
                                <div className="flex items-center gap-2">
                                    <div className="bg-primary-blue text-primary-navy p-2 rounded-xl">
                                        <Mountain className="w-5 h-5 fill-current" />
                                    </div>
                                    <span className="font-black text-xl text-white font-poppins">Apex Roofing</span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-white/50 hover:text-white"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-primary-blue uppercase tracking-widest">Main Menu</p>
                                    {[{ label: "Home", href: "/" }, ...NAV_LINKS.filter(l => l.label !== "Home")].map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-3xl font-black text-white hover:text-primary-blue"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                                <div className="space-y-4 pt-8 border-t border-border-dark">
                                    <p className="text-[10px] font-bold text-primary-blue uppercase tracking-widest">Our Services</p>
                                    <div className="grid grid-cols-1 gap-4">
                                        {SERVICES.slice(0, 4).map((s) => (
                                            <Link key={s.label} href={s.href} className="text-lg font-bold text-white/80">{s.label}</Link>
                                        ))}
                                        <Link href="/services" className="text-primary-blue font-bold">View All Services →</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-secondary-dark border-t border-border-dark">
                                <a
                                    href="tel:+13055550188"
                                    className="flex items-center justify-center gap-3 bg-primary-blue text-primary-navy px-6 py-4 rounded-full text-lg font-black shadow-cta"
                                >
                                    <PhoneCall className="w-6 h-6" />
                                    <span>(305) 555-0188</span>
                                </a>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </motion.nav >
    );
};
