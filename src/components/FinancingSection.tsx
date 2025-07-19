'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calculator, Clock, Shield } from "lucide-react";

export function FinancingSection() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleExternalLink = (url: string) => {
        if (typeof window !== 'undefined') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const features = [
        {
            icon: Calculator,
            title: "8.99% to 12.99% Interest Rates",
            description: "Competitive rates based on your credit and loan details"
        },
        {
            icon: Clock,
            title: "Flexible Payment Terms",
            description: "Choose monthly, bi-weekly, or weekly payments from 12 to 180 months"
        },
        {
            icon: CheckCircle,
            title: "Easy Application Process",
            description: "Get approval decisions within 24 hours with our streamlined process"
        },
        {
            icon: Shield,
            title: "Secure & Protected",
            description: "Your privacy is protected with best-in-class encryption"
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-star-gold/5 to-star-gold-light/10" id="financing">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-6">
                            <button
                                onClick={() => handleExternalLink('https://www.financeit.io/')}
                                className="p-4 rounded-3xl hover:bg-white transition-all duration-300"
                            >
                                <Image
                                    src="/images/financeit.png"
                                    alt="Financeit Logo"
                                    width={300}
                                    height={75}
                                    className="h-20 w-auto"
                                />
                            </button>
                        </div>
                        <h2 className="text-display font-bold mb-6 text-premium-gray">
                            Finance Your <span className="text-gradient">Garage Today!</span>
                        </h2>
                        <p className="text-xl text-premium-gray/80 max-w-4xl mx-auto leading-relaxed">
                            If you need a new garage construction right away and don't have the money - don't worry about it!
                            Financeit offers easy and flexible financing options that can fit any budget. With material and labor,
                            building a new garage can be an expensive project. The most popular option is to divide the total cost
                            of your garage into several monthly or bi-weekly payments with low interest.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white/80 backdrop-blur-sm border border-star-gold/20 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-premium-gray">
                                            {feature.title}
                                        </h3>
                                        <p className="text-premium-gray/70 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Financing Details */}
                        <div className="bg-white/90 backdrop-blur-sm border border-star-gold/30 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-premium-gray">
                                Financing Details
                            </h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-premium-gray/80">
                                        <strong>Interest Rate:</strong> 8.99% to 12.99% per year annum. Rates vary depending on loan size, credit report, and debt-to-income ratio.
                                    </p>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-premium-gray/80">
                                        <strong>Payment Options:</strong> Choose monthly, bi-weekly, or weekly payments from 12 months up to 180 months.
                                    </p>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-premium-gray/80">
                                        <strong>Down Payment:</strong> You can put a downpayment and finance the remaining amount (pay off the loan at any time).
                                    </p>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-premium-gray/80">
                                        <strong>Example:</strong> Based on our packages, monthly payment would be $132 to $142 for 180 months (price may vary depending on garage size and upgrades).
                                    </p>
                                </div>
                            </div>

                            <div className="bg-star-gold/10 border border-star-gold/30 rounded-xl p-6 mb-8">
                                <p className="text-sm text-premium-gray/80 leading-relaxed">
                                    Each of your projects begins with a free estimate. Get an estimate and know exactly what kind of investment you are looking at and plan your budget. No hidden cost or surprises down the line. Just an accurate and upfront cost estimate.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <Button
                                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-0"
                                    size="lg"
                                    onClick={scrollToContact}
                                >
                                    Get a Quote
                                </Button>

                                <div className="bg-premium-gray/5 border border-premium-gray/20 rounded-xl p-4">
                                    <p className="text-xs text-premium-gray/70 italic mb-3">
                                        <strong>NOTE:</strong> If you have already received an estimate you can apply right now.
                                        All you have to do is accurately complete each section in the form. Get an approval
                                        decision within 24 hours. Financeit takes your privacy very seriously and uses
                                        best-in-class encryption to ensure that your data is protected.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="w-full bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600"
                                        onClick={() => handleExternalLink('https://www.financeit.ca/en/direct/payment-plan/YT0mbD0mcD1CVnFLYkpub2ZSUVB4TjlxSW43ZWZnJnM9MCZ2PTE=/apply?p=15000&slug=I3JnSA')}
                                    >
                                        Apply Now!
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}