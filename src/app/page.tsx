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
import { getMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata(
  undefined,
  "Edmonton & Calgary's premier garage builders. Custom detached garages, garage suites, and laneway homes with 10+ years of experience. Get your free estimate today!",
  [
    'custom garage builder edmonton',
    'garage builders calgary',
    'detached garage construction',
    'garage suite builders',
    'laneway home construction',
    'garage packages edmonton',
    'garage renovation calgary',
    'premium garage builders alberta'
  ],
  '/'
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollReveal />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Why Star Garages */}
      <section id="why-us" aria-label="Why Choose Star Garages">
        <WhyStarGarages />
      </section>
      
      {/* Compare Packages */}
      <section id="packages" aria-label="Garage Packages">
        <ComparePackages />
      </section>

      <section aria-label="Additional Upgrades">
        <AdditionalUpgrades/>
      </section>

      {/* Financing Section */}
      <section id="financing" aria-label="Financing Options">
        <FinancingSection />
      </section>
      
      {/* How It Works */}
      <section aria-label="Our Process">
        <HowItWorks />
      </section>
      
      {/* Customer Reviews */}
      <section aria-label="Customer Reviews">
        <CustomerReviews />
      </section>
      
      {/* Contact Section */}
      <section id="contact" aria-label="Contact Us">
        <ContactSection />
      </section>
      
      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  );
}
