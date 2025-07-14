import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const upgrades = [
    {
        title: "2X6\" WALLS",
        description: "Most of the garages are 2x4\" which is sufficient for a standard garage. But 2x6\" gives you a stronger building with the ability to achieve a higher insulation R-value",
        image: "/images/2x6.png"
    },
    {
        title: "9' Wall Height",
        description: "The 9' wall provides a more spacious garage and provides you the option of installing an 8' overhead garage door",
        image: "/images/9-wall.png"
    },
    {
        title: "8' Garage door",
        description: "Have a pick-up truck with an extension? We recommend you get the 8' overhead door to make parking your truck easier. NOTE: this requires a 9' wall height",
        image: "/images/8-garage.png"
    },
    {
        title: "6/12 Gable Pitch",
        description: "Adding attic storage to your garage? We recommend the 6/12 gable pitch. This provides you with a more spacious attic. Additionally, this allows easy runoff of snow and rain, as it provides a sloped structure to the roof.",
        image: "/images/6-gable-pitch.png"
    },
    {
        title: "Attic Storage",
        description: "Is your yard too small? Looking for additional storage? You can loft your garage for extra space. This provides you with a space to store all your vehicular accessories and any other objects that may need storing. NOTE: This additional feature can only be added to your garage before the garage has been built.",
        image: "/images/attic-storage.png"
    },
    {
        title: "Insulation and Drywall",
        description: "Insulation moderates the temperature in your garage. It keeps your garage warm in the winters and cool in the summers ensuring optimal storage conditions for your cars and other belongings. Drywall provides fire resistance, noise reduction and good lighting which optimizes visibility.",
        image: "/images/insulation-drywall.png"
    }
];

export const AdditionalUpgrades = () => {
    return (
        <section className="py-6 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Additional Upgrades
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Enhance your garage with these premium upgrade options for improved functionality and durability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upgrades.map((upgrade, index) => (
                        <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 group">
                            <CardHeader className="text-center">
                                <div className="relative w-full h-96 rounded-lg overflow-hidden mb-4 bg-muted">
                                    <Image
                                        src={upgrade.image}
                                        alt={upgrade.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <CardTitle className="text-xl font-bold text-foreground">
                                    {upgrade.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-sm leading-relaxed">
                                    {upgrade.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};