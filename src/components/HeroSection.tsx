'use client';

import {ArrowRight, Play, ChevronDown, Phone} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HeroSection() {
    const router = useRouter();
    
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const goToProjects = () => {
        router.push('/projects');
    };

    const openBooking = () => {
        window.open('https://link.leadxpert.io/widget/booking/0ahMvDOfXWh0dRLW2YZ4', '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: -1 }}
            >
                <source src="/videos/background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div 
                className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"
                style={{ zIndex: -1 }}
            />

            {/* Hero Content */}
            <div className="text-center z-10 max-w-6xl mx-auto px-6">
                <div className="reveal-up mb-6">
                    <h1 className="hero-title mb-6">
                        Build Smarter.<br />
                        Build Star.
                    </h1>
                </div>

                <div className="reveal-up mb-12" style={{ animationDelay: '0.2s' }}>
                    <p className="hero-subtitle">
                        Edmonton's Trusted Garage Builders for Over a Decade.<br />
                        Quality Builds at a Fair Price.
                    </p>
                </div>

                <div className="reveal-up flex flex-col sm:flex-row gap-6 justify-center" style={{ animationDelay: '0.4s' }}>
                    <Button
                        size="lg"
                        className="btn-hero text-lg text-premium-gray hover:text-white"
                        onClick={scrollToContact}
                    >
                        Get a Free Estimate
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <Button
                        size="lg"
                        className="btn-hero text-lg text-premium-gray hover:text-white"
                        onClick={openBooking}
                    >
                        <Phone className="mr-2 h-5 w-5" />
                        Schedule a Call
                    </Button>

                    <Button
                        size="lg"
                        className="btn-hero text-lg text-premium-gray hover:text-white"
                        onClick={goToProjects}
                    >
                        <Play className="mr-2 h-5 w-5" />
                        View Our Projects
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="animate-bounce">
                    <ChevronDown className="h-10 w-10 text-white/70" />
                </div>
            </div>
        </section>
    );
}