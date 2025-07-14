'use client';

import { Calendar, PenTool, FileCheck, HandHeart } from "lucide-react";

const steps = [
    {
        icon: Calendar,
        number: "01",
        title: "Book Estimate",
        description: "Schedule your free consultation. We'll visit your property, understand your vision, and provide a detailed quote.",
        details: ["Free on-site consultation", "3D design preview", "Transparent pricing", "No hidden fees"]
    },
    {
        icon: PenTool,
        number: "02",
        title: "Approve Design",
        description: "Review your custom design with detailed 3D renderings. Make adjustments until it's perfect for your needs.",
        details: ["Custom 3D renderings", "Material selections", "Timeline confirmation", "Contract signing"]
    },
    {
        icon: FileCheck,
        number: "03",
        title: "We Handle Permits",
        description: "Sit back and relax. We take care of all permits, city approvals, and engineering requirements.",
        details: ["Permit applications", "City approvals", "Engineering stamps", "Code compliance"]
    },
    {
        icon: HandHeart,
        number: "04",
        title: "Build & Final Walkthrough",
        description: "Watch your dream garage come to life. We'll keep you updated throughout and do a final walkthrough together.",
        details: ["Quality construction", "Regular updates", "Clean worksite", "Final inspection"]
    }
];

export function HowItWorks() {
    return (
        <section className="section-padding bg-premium-gray text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-display font-bold mb-6 text-white">
                        How It <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Our streamlined process makes building your dream garage simple and stress-free.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Desktop Timeline */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-star-gold via-star-gold-light to-star-gold"></div>

                            <div className="grid grid-cols-4 gap-8">
                                {steps.map((step, index) => {
                                    const Icon = step.icon;
                                    return (
                                        <div key={index} className="text-center reveal-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                            {/* Step Number & Icon */}
                                            <div className="relative mb-8">
                                                <div className="w-20 h-20 bg-gradient-to-br from-star-gold to-star-gold-light rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                                                    <Icon className="h-8 w-8 text-premium-gray" />
                                                </div>
                                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-premium-gray rounded-full flex items-center justify-center text-star-gold font-bold text-sm border-2 border-star-gold">
                                                    {step.number}
                                                </div>
                                            </div>

                                            {/* Step Content */}
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold text-white">
                                                    {step.title}
                                                </h3>
                                                <p className="text-white/80 leading-relaxed">
                                                    {step.description}
                                                </p>

                                                {/* Step Details */}
                                                <div className="space-y-2">
                                                    {step.details.map((detail, detailIndex) => (
                                                        <div key={detailIndex} className="flex items-center justify-center space-x-2">
                                                            <div className="w-1.5 h-1.5 bg-star-gold rounded-full"></div>
                                                            <span className="text-sm text-white/70">{detail}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="lg:hidden space-y-12">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="flex space-x-6 reveal-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                    {/* Timeline Icon */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-star-gold to-star-gold-light rounded-full flex items-center justify-center relative">
                                            <Icon className="h-6 w-6 text-premium-gray" />
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-premium-gray rounded-full flex items-center justify-center text-star-gold font-bold text-xs border border-star-gold">
                                                {step.number}
                                            </div>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="w-0.5 h-16 bg-gradient-to-b from-star-gold to-star-gold-light mt-4"></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-8">
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/80 mb-4">
                                            {step.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-2">
                                            {step.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="flex items-center space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-star-gold rounded-full"></div>
                                                    <span className="text-sm text-white/70">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Timeline Stats */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="text-3xl font-bold text-star-gold mb-2">6-12</div>
                        <div className="text-white font-medium">Week Timeline</div>
                        <div className="text-white/60 text-sm">Typical project completion</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="text-3xl font-bold text-star-gold mb-2">100%</div>
                        <div className="text-white font-medium">Permit Success</div>
                        <div className="text-white/60 text-sm">We handle all approvals</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="text-3xl font-bold text-star-gold mb-2">10-Year</div>
                        <div className="text-white font-medium">Warranty</div>
                        <div className="text-white/60 text-sm">Structural guarantee</div>
                    </div>
                </div>
            </div>
        </section>
    );
}