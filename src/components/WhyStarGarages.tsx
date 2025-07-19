import {Award, Shield, FileText, Star} from "lucide-react";

const stats = [
    {
        icon: Award,
        number: "10+",
        label: "Years Experience",
        description: "Trusted Edmonton garage builders since 2014"
    },
    {
        icon: Shield,
        number: "10/3/1",
        label: "Structural Warranty",
        description: "Comprehensive coverage & peace of mind"
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
                        Experience the difference of working with Edmonton's most trusted garage builders.
                        We handle everything so you don't have to.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="text-center group hover:scale-105 transition-all duration-500"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="feature-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-star-gold to-star-gold-light rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="h-8 w-8 text-premium-gray" />
                                        </div>

                                        <div className="text-4xl font-bold text-gradient mb-3">
                                            {stat.number}
                                        </div>

                                        <div className="text-xl font-semibold text-foreground mb-3">
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
                </div>

                {/* Trust Indicators */}
                <div className="mt-20 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <div className="flex items-center space-x-2">
                            <Shield className="h-5 w-5" />
                            <span className="text-sm font-medium">Licensed & Insured</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}