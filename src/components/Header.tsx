'use client';

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const scrollToSection = (sectionId: string) => {
        if (isHomePage) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(`/#${sectionId}`);
        }
        setIsMenuOpen(false);
    };

    const navigationItems = [
        { label: "HOME", href: "/", type: "link" },
        { label: "WHY US", action: () => scrollToSection("why-us"), type: "scroll" },
        { label: "GARAGE PACKAGES", action: () => scrollToSection("packages"), type: "scroll" },
        { label: "FINANCING", action: () => scrollToSection("financing"), type: "scroll" },
        { label: "OUR PROJECTS", href: "/projects", type: "link" },
        { label: "FAQs", href: "/faq", type: "link" },
        { label: "CONTACT US", action: () => scrollToSection("contact"), type: "scroll" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                        <div className="w-12 h-12 relative">
                            <Image
                                src="/images/android-chrome-192x192.png"
                                alt="Star Garages Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div>
                            <div className="font-bold text-xl text-premium-gray">STAR GARAGES</div>
                            <div className="text-sm text-muted-foreground">Edmonton Garage Builders</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item, index) => (
                            <div key={index}>
                                {item.type === "link" ? (
                                    <Link
                                        href={item.href!}
                                        className={`text-premium-gray hover:text-star-gold transition-colors font-medium text-sm ${
                                            pathname === item.href ? 'text-star-gold' : ''
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button
                                        onClick={item.action}
                                        className="text-premium-gray hover:text-star-gold transition-colors font-medium text-sm"
                                    >
                                        {item.label}
                                    </button>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Contact */}
                    <div className="hidden lg:flex items-center">
                        <a
                            href="tel:(780)667-7827"
                            className="text-premium-gray hover:text-star-gold transition-colors font-medium flex items-center gap-2"
                        >
                            <Phone className="h-4 w-4" />
                            (780) 667-7827
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-premium-gray hover:text-star-gold transition-colors"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
                        <nav className="py-4">
                            {navigationItems.map((item, index) => (
                                <div key={index} className="px-6 py-3">
                                    {item.type === "link" ? (
                                        <Link
                                            href={item.href!}
                                            className={`block text-premium-gray hover:text-star-gold transition-colors font-medium ${
                                                pathname === item.href ? 'text-star-gold' : ''
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={item.action}
                                            className="block text-premium-gray hover:text-star-gold transition-colors font-medium"
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                </div>
                            ))}
                            <div className="px-6 py-3 border-t border-gray-200 mt-4">
                                <a
                                    href="tel:(780)667-7827"
                                    className="block text-premium-gray hover:text-star-gold transition-colors font-medium flex items-center gap-2"
                                >
                                    <Phone className="h-4 w-4" />
                                    (780) 667-7827
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}