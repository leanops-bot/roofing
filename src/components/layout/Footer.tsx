import Link from "next/link";
import { Hammer, Facebook, Instagram, Twitter, Linkedin, PhoneCall, Mail, MapPin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-primary-navy text-white pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary-blue text-white p-2 rounded-lg">
                                <Hammer className="w-5 h-5 fill-current" />
                            </div>
                            <span className="font-extrabold tracking-tight text-xl font-poppins">RoofPro</span>
                        </div>
                        <p className="text-white/90 leading-relaxed text-sm">
                            Premium residential and commercial roofing solutions backed by lifetime warranties. Licensed, insured, and trusted by thousands.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-blue text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-white/90 text-sm">
                            {["Residential Roofing", "Commercial Roofing", "Storm Damage Repair", "Roof Replacement", "Gutters & Siding", "Emergency Tarping"].map(item => (
                                <li key={item}><Link href="#" className="hover:text-primary-blue transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-white/90 text-sm">
                            {["About Us", "Our Projects", "Client Reviews", "Careers", "Blog", "Privacy Policy"].map(item => (
                                <li key={item}><Link href="#" className="hover:text-primary-blue transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact</h4>
                        <ul className="space-y-6 text-white/90 text-sm">
                            <li className="flex items-start gap-4">
                                <PhoneCall className="w-5 h-5 text-primary-blue mt-1" />
                                <div>
                                    <p className="text-white font-semibold">Phone</p>
                                    <p>+1 (305) 555-0188</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-primary-blue mt-1" />
                                <div>
                                    <p className="text-white font-semibold">Email</p>
                                    <p>support@roofpro.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-primary-blue mt-1" />
                                <div>
                                    <p className="text-white font-semibold">Location</p>
                                    <p>123 Skyline Ave, Suite 400<br />Miami, FL 33101</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>© 2026 RoofPro Roofing Services. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
