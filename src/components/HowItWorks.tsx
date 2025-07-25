'use client';

import { Calendar, PenTool, FileCheck, Check, Hammer } from "lucide-react";

const steps = [
    {
        icon: Calendar,
        number: "01",
        title: "Request Your Free Estimate",
        description: "Share your project details and receive a clear, upfront estimate.",
        details: ["Transparent pricing", "No hidden fees"]
    },
    {
        icon: PenTool,
        number: "02",
        title: "On‑Site Consultation & Planning",
        description: "We visit your site, review your needs, and finalize the project plan.",
        details: ["Material selections", "Timeline confirmation", "Contract signing"]
    },
    {
        icon: FileCheck,
        number: "03",
        title: "Permits & Approvals",
        description: "Our team handles the required permits and paperwork for you.",
        details: ["Permit applications", "City approvals", "Engineering stamps", "Code compliance"]
    },
    {
        icon: Hammer,
        number: "04",
        title: "Construction Begins",
        description: "We complete the build with quality craftsmanship and attention to detail.",
        details: ["Quality construction", "Regular updates"]
    },
    {
        icon: Check,
        number: "05",
        title: "City Inspections",
        description: "All required inspections are scheduled and passed before moving forward.",
        details: [ "Clean worksite", "Final inspection"]
    },
    {
        icon: Check,
        number: "06",
        title: "Final Walkthrough & Key Handover",
        description: "Together we review the finished project, then hand over your keys.",
        details: [ "Clean worksite", "Final inspection"]
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
                            <div className="grid grid-cols-3 gap-8 gap-y-16">
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
                <div className="mt-20 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                            <div className="text-4xl font-bold text-star-gold mb-3">2-3</div>
                            <div className="text-white font-medium mb-1">Week Timeline</div>
                            <div className="text-white/60 text-sm">Typical project completion</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                            <div className="text-4xl font-bold text-star-gold mb-3">100%</div>
                            <div className="text-white font-medium mb-1">Inspection guarantee</div>
                            <div className="text-white/60 text-sm">We handle all approvals</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                            <div className="text-4xl font-bold text-star-gold mb-3">10/3/1</div>
                            <div className="text-white font-medium mb-1">Warranty</div>
                            <div className="text-white/60 text-sm">Structural guarantee</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}