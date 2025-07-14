import { HeroSection } from "@/components/HeroSection";
import { WhyStarGarages } from "@/components/WhyStarGarages";
import { ComparePackages } from "@/components/ComparePackages";
import { FinancingSection } from "@/components/FinancingSection";
import { HowItWorks } from "@/components/HowItWorks";
import { CustomerReviews } from "@/components/CustomerReviews";
import { ContactSection } from "@/components/ContactSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AdditionalUpgrades } from "@/components/AdditionalUpgrades";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollReveal />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Why Star Garages */}
      <section id="why-us">
        <WhyStarGarages />
      </section>
      
      {/* Compare Packages */}
      <section id="packages">
        <ComparePackages />
      </section>

      <AdditionalUpgrades/>

      {/* Financing Section */}
      <section id="financing">
        <FinancingSection />
      </section>
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Customer Reviews */}
      <CustomerReviews />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  );
}
