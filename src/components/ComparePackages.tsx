'use client';

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
    {
        name: "Standard Package",
        description: "A budget-friendly option with all essential features",
        popular: false,
        features: [
            { name: "Building, development & electrical permits", included: true },
            { name: "All work inspected by the city", included: true },
            { name: "2x4 walls @ 24\" o.c.", included: true },
            { name: "8' wall height, 3/8\" OSB on walls", included: true },
            { name: "Front gable 4/12 pitch", included: true },
            { name: "Pre-engineered trusses @ 24\" o.c.", included: true },
            { name: "3/8\" OSB on roof with H-clips", included: true },
            { name: "32\" man door with lock", included: true },
            { name: "Window included", included: false },
            { name: "Architectural shingles (color matched)", included: true },
            { name: "Synthetic underlayment", included: true },
            { name: "2 roof vents", included: true },
            { name: "Light color vinyl siding", included: true },
            { name: "Aluminum soffit & fascia", included: true },
            { name: "Synthetic house wrap", included: true },
            { name: "4\" Smart trim around garage door", included: true },
            { name: "5\" continuous eavestroughs and downpipes", included: true },
            { name: "Interior: 2 lights, 3 plugs", included: true },
            { name: "Exterior: 2 pot lights (front), 1 regular light (back)", included: true },
            { name: "16'x7' R-10 insulated door", included: true },
            { name: "½ HP chain drive opener + 2 remotes", included: true },
        ]
    },
    {
        name: "Star Package",
        description: "Premium value with upgraded features and enhanced durability",
        popular: true,
        keyAdvantages: [
            "Stronger Frame: 16\" spacing vs 24\" spacing for enhanced structural integrity",
            "Larger Entry: 36\" door vs 32\" door for easier access",
            "Natural Light: 48\"x36\" picture window included",
            "Better Insulation: R-15 garage door vs R-10 for energy efficiency",
            "Smart Technology: Wi-Fi enabled garage door opener with wireless remotes",
            "Superior Ventilation: 3 roof vents vs 2 for better air circulation"
        ],
        features: [
            { name: "Building, development & electrical permits", included: true },
            { name: "All work inspected by the city", included: true },
            { name: "2x4 walls @ 16\" o.c.", included: true },
            { name: "8' wall height, 3/8\" OSB on walls", included: true },
            { name: "36\" man door with lock", included: true },
            { name: "48\"x36\" picture window", included: true },
            { name: "Front gable 4/12 pitch", included: true },
            { name: "Pre-engineered trusses @ 24\" o.c.", included: true },
            { name: "3/8\" OSB on roof with H-clips", included: true },
            { name: "Architectural shingles", included: true },
            { name: "Synthetic underlayment", included: true },
            { name: "3 roof vents", included: true },
            { name: "Light color vinyl siding", included: true },
            { name: "Aluminum soffit & fascia", included: true },
            { name: "Synthetic house wrap", included: true },
            { name: "6\" Smart trim around garage door", included: true },
            { name: "5\" eavestroughs & downpipes", included: true },
            { name: "Interior: 2 lights, 3 plugs", included: true },
            { name: "Exterior: 2 pot lights (front), 1 regular light (back)", included: true },
            { name: "16'x7' R-15 insulated door", included: true },
            { name: "Wi-Fi ½ HP chain drive opener + 2 wireless remotes", included: true },
        ]
    }
];

export function ComparePackages() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="section-padding bg-secondary/30" id="packages">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-display font-bold mb-6 text-gradient leading-tight pb-1">
                        Our Garage Packages
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Professional garage construction with all permits included. Choose the package that fits your needs and budget.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`feature-card relative ${pkg.popular ? 'ring-2 ring-star-gold scale-105' : ''}`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-star-gold to-star-gold-light text-premium-gray px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                                <p className="text-muted-foreground">{pkg.description}</p>
                            </div>

                            {/* Key Advantages for Star Package */}
                            {pkg.keyAdvantages && (
                                <div className="mb-8 p-6 bg-gradient-to-r from-star-gold/10 to-star-gold-light/10 border border-star-gold/20 rounded-2xl">
                                    <h4 className="text-lg font-bold text-star-gold mb-4 text-center">Why Choose Star Package?</h4>
                                    <div className="space-y-3">
                                        {pkg.keyAdvantages.map((advantage, advIndex) => (
                                            <div key={advIndex} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-star-gold rounded-full flex-shrink-0 mt-2"></div>
                                                <span className="text-foreground font-medium text-sm">{advantage}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="space-y-4 mb-8">
                                {pkg.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center space-x-3">
                                        {feature.included ? (
                                            <Check className="h-5 w-5 text-star-gold flex-shrink-0" />
                                        ) : (
                                            <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                                        )}
                                        <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                      {feature.name}
                    </span>
                                    </div>
                                ))}
                            </div>

                            <Button 
                                onClick={scrollToContact}
                                variant={pkg.popular ? "default" : "outline"}
                                size="lg"
                                className={`w-full transition-all duration-300 ${
                                    pkg.popular
                                        ? 'bg-gradient-to-r from-star-gold to-star-gold-light hover:from-star-gold/90 hover:to-star-gold-light/90 hover:shadow-lg hover:scale-[1.02] text-premium-gray'
                                        : 'border-star-gold text-star-gold hover:bg-star-gold hover:text-premium-gray'
                                }`}
                            >
                                {pkg.popular ? 'Get Star Package Quote' : 'Get Standard Quote'}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}