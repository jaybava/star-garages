'use client';

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-premium-gray text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <Image
                                    src="/images/android-chrome-192x192.png"
                                    alt="Star Garages Logo"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div>
                                <div className="font-bold text-xl">STAR GARAGES</div>
                                <div className="text-sm text-white/70">Edmonton Garage Builders</div>
                            </div>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                            Edmonton's premier garage builders specializing in custom detached garages,
                            garage suites, and laneway homes. Over 10 years of trusted service.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/stargarages" target="_blank" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-star-gold hover:text-premium-gray transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/stargarages/" target="_blank" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-star-gold hover:text-premium-gray transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>

                        {/* Achievement Badges */}
                        <div className="flex space-x-4 mt-6">
                            <a
                                href="https://www.bestinedmonton.com/best-garage-builders-edmonton/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                            >
                                <img
                                    src="/images/best-in-edmonton.png"
                                    alt="Best in Edmonton Award"
                                    className="h-24 w-24 object-contain"
                                />
                            </a>
                            <a
                                href="https://www.clevercanadian.ca/best-garage-builders-edmonton/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                            >
                                <img
                                    src="/images/canada-best.png"
                                    alt="Canada Best Award"
                                    className="h-24 w-24 object-contain"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
                        <div className="space-y-3">
                            {[
                                "Detached Garages",
                                "Permits & Approvals",
                                "Garage Door Installation"
                            ].map((service, index) => (
                                <a key={index} href="#" className="block text-white/70 hover:text-star-gold transition-colors">
                                    {service}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
                        <div className="space-y-3">
                            {[
                                { label: "About Us", href: "/#why-us" },
                                { label: "Our Projects", href: "/projects" },
                                { label: "Upgrades", href: "/#upgrades" },
                                { label: "FAQ", href: "/faq" },
                                { label: "Contact", href: "#contact" },
                                { label: "Financing Options", href: "/financing" }
                            ].map((link, index) => (
                                link.href.startsWith('/') ? (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="block text-white/70 hover:text-star-gold transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="block text-white/70 hover:text-star-gold transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-star-gold mt-0.5" />
                                <div>
                                    <div className="space-y-1">
                                        <a href="tel:(587)404-4749" className="text-white/90 hover:text-star-gold transition-colors block">
                                            <div>Main Line - For quotes only:</div>
                                            <div>(587) 404-4749</div>
                                        </a>
                                        <a href="tel:(780)667-7827" className="text-white/90 hover:text-star-gold transition-colors block">
                                            <div>Paul - For other inquires:</div>
                                            <div>(780) 667-7827</div>
                                        </a>
                                    </div>
                                    <div className="text-white/60 text-sm">Call for immediate assistance</div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-star-gold mt-0.5" />
                                <div>
                                    <a href="mailto:info.stargarages@gmail.com" className="text-white/90 hover:text-star-gold transition-colors">
                                        info.stargarages@gmail.com
                                    </a>
                                    <div className="text-white/60 text-sm">Email for quotes & inquiries</div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-star-gold mt-0.5" />
                                <div>
                                    <div className="text-white/90">Edmonton, AB & Surrounding Areas</div>
                                    <div className="text-white/60 text-sm">Fort Saskatchewan • Sherwood • Beaumont • Leduc • Spruce Grove • St. Albert</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-white/60 text-sm">
                            © {currentYear} Star Construction & Garage Door Ltd. All Rights Reserved.
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-white/60">
                            <span>Licensed & Insured</span>
                            <span>•</span>
                            <span>WCB Coverage</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}