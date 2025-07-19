'use client';

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        toggleVisibility(); // Check initial position
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
            {/* Quote Button */}
            <Button
                onClick={scrollToContact}
                className="btn-hero shadow-2xl hover:scale-110 transition-all duration-300 px-6 py-3"
                size="lg"
            >
                <MessageCircle className="mr-2 h-5 w-5" />
                Free Quote
            </Button>

            {/* Call Button */}
            <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white shadow-2xl hover:scale-110 transition-all duration-300 px-6 py-3"
                size="lg"
            >
                <a href="tel:(587)404-4749">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                </a>
            </Button>
        </div>
    );
}