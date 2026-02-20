import Link from "next/link";
import { Mountain, Facebook, Instagram, Twitter, Linkedin, PhoneCall, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-navy text-white pt-24 pb-12 border-t border-border-dark">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-2 group">
                            <div className="bg-primary-blue text-primary-navy p-2 rounded-xl group-hover:bg-accent-gold transition-colors">
                                <Mountain className="w-6 h-6 fill-current" />
                            </div>
                            <span className="font-black tracking-tight text-2xl font-poppins italic">Apex<span className="text-primary-blue">Roofing</span></span>
                        </div>
                        <p className="text-text-muted leading-relaxed text-sm max-w-xs">
                            Premium roofing built for Florida weather. We combine expert craftsmanship with lifetime protection for your home or business.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-border-dark hover:bg-primary-blue hover:text-primary-navy transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-8 text-white relative inline-block">
                            Services
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-blue rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-text-muted text-sm font-medium">
                            {[
                                { name: "Roof Replacement", href: "/services/replacement" },
                                { name: "Roof Repair", href: "/services/repair" },
                                { name: "Commercial Roofing", href: "/services/commercial" },
                                { name: "Metal Roofing", href: "/services/metal" },
                                { name: "Tile Roofing", href: "/services/tile" },
                                { name: "Emergency Roofing", href: "/services/emergency" }
                            ].map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-primary-blue transition-colors flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-blue/30" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-8 text-white relative inline-block">
                            Company
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-blue rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-text-muted text-sm font-medium">
                            {[
                                { name: "About Apex", href: "/about" },
                                { name: "Project Gallery", href: "/projects" },
                                { name: "Financing Options", href: "/financing" },
                                { name: "Pricing Guide", href: "/pricing" },
                                { name: "Client Reviews", href: "/reviews" },
                                { name: "Contact Us", href: "/contact" }
                            ].map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-primary-blue transition-colors flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-blue/30" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-8 text-white relative inline-block">
                            Contact
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-blue rounded-full"></span>
                        </h4>
                        <ul className="space-y-6 text-text-muted text-sm">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-border-dark group-hover:bg-primary-blue/10 transition-colors">
                                    <PhoneCall className="w-4 h-4 text-primary-blue" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white font-bold">Call Anytime</p>
                                    <p className="hover:text-primary-blue transition-colors">(305) 555-0188</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-border-dark group-hover:bg-primary-blue/10 transition-colors">
                                    <Mail className="w-4 h-4 text-primary-blue" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white font-bold">Email Us</p>
                                    <p className="hover:text-primary-blue transition-colors">hello@apexroofing.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-border-dark group-hover:bg-primary-blue/10 transition-colors">
                                    <MapPin className="w-4 h-4 text-primary-blue" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white font-bold">Main Office</p>
                                    <p>Sarasota, Southwest Florida</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group text-[10px] text-text-muted/60 bg-white/5 p-3 rounded-2xl border border-border-dark">
                                <Clock className="w-3.5 h-3.5 text-primary-blue/50" />
                                <span>Mon - Sat: 7am - 6pm (Emergency 24/7)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border-dark pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-text-muted/50">
                    <p>© {currentYear} Apex Roofing. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-primary-blue transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
