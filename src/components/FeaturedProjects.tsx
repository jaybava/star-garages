'use client';

import { ArrowRight, MapPin, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Project {
    title: string;
    subtitle: string;
    imagePath: string;
    location: string;
    value: string;
    timeline: string;
    description: string;
    features: string[];
}

const projects: Project[] = [
    {
        title: "Triple-Car Suite in Bridgeland",
        subtitle: "Built for Rental ROI",
        imagePath: "/images/garage-suite.jpg",
        location: "Bridgeland, Calgary",
        value: "$180K",
        timeline: "8 weeks",
        description: "Modern 3-car garage with a stunning 2-bedroom suite above, generating $2,400/month rental income.",
        features: ["3-car garage", "2-bed suite", "$2,400/month income", "Modern finishes"]
    },
    {
        title: "Modern Detached Garage with Storage Loft",
        subtitle: "Tuscany Masterpiece",
        imagePath: "/images/hero-garage.jpg",
        location: "Tuscany, Calgary",
        value: "$95K",
        timeline: "6 weeks",
        description: "Elegant 2-car garage featuring a spacious storage loft and workshop area, perfectly matching the home's architecture.",
        features: ["2-car garage", "Storage loft", "Workshop space", "Matching design"]
    },
    {
        title: "Contemporary Laneway Home",
        subtitle: "Kensington Living",
        imagePath: "/images/laneway-home.jpg",
        location: "Kensington, Calgary",
        value: "$320K",
        timeline: "12 weeks",
        description: "Stunning laneway home with premium finishes, rooftop deck, and energy-efficient design for modern urban living.",
        features: ["2-story home", "Rooftop deck", "Energy efficient", "Premium finishes"]
    }
];

export function FeaturedProjects() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="section-padding bg-gradient-to-br from-background via-secondary to-background" id="projects">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-display font-bold mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Discover the exceptional quality and craftsmanship that defines every Star Garages project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="feature-card group">
                            <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                                <Image
                                    src={project.imagePath}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index < 2}
                                />
                            </div>
                            {/* Project Content */}
                            <div className="flex-1 space-y-6">
                                <div>
                                    <div className="text-star-gold font-semibold text-lg mb-2">
                                        {project.subtitle}
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Project Features */}
                                <div className="grid grid-cols-2 gap-4">
                                    {project.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-star-gold rounded-full"></div>
                                            <span className="text-foreground font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button
                                        size="lg"
                                        className="btn-hero"
                                        onClick={scrollToContact}
                                    >
                                        Start Similar Project
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-star-gold text-star-gold hover:bg-star-gold hover:text-premium-gray"
                                    >
                                        View More Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-24">
                    <div className="bg-gradient-to-r from-star-gold/5 to-star-gold-light/5 border border-star-gold/20 rounded-3xl p-12">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                            Ready to See Your Project Come to Life?
                        </h3>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join hundreds of satisfied homeowners who chose Star Garages for their dream builds.
                        </p>
                        <Button
                            size="lg"
                            className="btn-hero text-lg px-12"
                            onClick={scrollToContact}
                        >
                            View Our Full Portfolio
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}