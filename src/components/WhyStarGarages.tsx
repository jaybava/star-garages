import {Award, Shield, FileText, Star} from "lucide-react";

const stats = [
    {
        icon: Award,
        number: "10+",
        label: "Years Experience",
        description: "Trusted Calgary garage builders since 2014"
    },
    {
        icon: Shield,
        number: "10-Year",
        label: "Structural Warranty",
        description: "Comprehensive coverage & peace of mind"
    },
    {
        icon: Award,
        number: "4.5 ★",
        label: "Google Reviews",
        description: "Verified customer reviews"
    },
    {
        icon: FileText,
        number: "Full Service",
        label: "Permits Included",
        description: "Design, permits, construction & cleanup"
    }
];

export function WhyStarGarages() {
    return (
        <section className="section-padding bg-gradient-to-br from-background to-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-display font-bold mb-8 text-gradient leading-tight pb-2">
                        Why Choose Star Garages?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Experience the difference of working with Calgary's most trusted garage builders.
                        We handle everything so you don't have to.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="text-center group hover:scale-105 transition-all duration-500"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="feature-card">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-star-gold to-star-gold-light rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="h-8 w-8 text-premium-gray" />
                                    </div>

                                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                                        {stat.number}
                                    </div>

                                    <div className="text-xl font-semibold text-foreground mb-2">
                                        {stat.label}
                                    </div>

                                    <p className="text-muted-foreground">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Indicators */}
                <div className="mt-20 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <div className="flex items-center space-x-2">
                            <Shield className="h-5 w-5" />
                            <span className="text-sm font-medium">Licensed & Insured</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="flex text-star-gold">
                                {[1, 2, 3, 4].map((star) => (
                                    <Star key={star} className="h-5 w-5 fill-current" />
                                ))}
                                <Star key="half" className="h-5 w-5" fill="url(#halfStarGradient)" />
                                <svg width="0" height="0">
                                    <defs>
                                        <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="50%" style={{ stopColor: "currentColor" }} stopOpacity="1"/>
                                            <stop offset="50%" style={{ stopColor: "currentColor" }} stopOpacity="0"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-sm font-medium">4.5 Google Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}