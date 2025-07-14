'use client';

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Modern Garage with Contemporary Window Design",
    location: "Edmonton",
    size: "24x28",
    type: "Built Garages",
    image: "/images/1.png",
    description: "Modern detached garage with contemporary white overhead door featuring horizontal window panels and clean architectural lines."
  },
  {
    id: 2,
    title: "Double-Car Garage with Clean White Door",
    location: "Fort Saskatchewan",
    size: "24x24",
    type: "Built Garages",
    image: "/images/2.png",
    description: "Spacious double-car garage with clean white overhead door, decorative exterior lighting, and neutral siding finish."
  },
  {
    id: 3,
    title: "Detached Garage with Side Entry and Windows",
    location: "Sherwood",
    size: "24x32",
    type: "Built Garages",
    image: "/images/3.png",
    description: "Detached garage with side entry door, dual windows for natural light, and durable gray vinyl siding construction."
  },
  {
    id: 4,
    title: "Double-Car Garage with Traditional Panel Doors",
    location: "Beaumont",
    size: "12x20",
    type: "Built Garages",
    image: "/images/4.png",
    description: "Double-car garage with traditional white panel doors, brown horizontal siding, and gable roof design."
  },
  {
    id: 5,
    title: "Double-Car Garage with Decorative Windows",
    location: "Leduc",
    size: "36x24",
    type: "Built Garages",
    image: "/images/5.png",
    description: "Spacious double-car garage with decorative window panels, and natural wood siding finish."
  },
  {
    id: 6,
    title: "Single-Car Garage with Side Entry and Large Window",
    location: "Spruce Grove",
    size: "36x24",
    type: "Built Garages",
    image: "/images/6.png",
    description: "Single-car garage with side entry door, large window for natural light, and gray vinyl siding with white trim accents."
  },
  {
    id: 7,
    title: "Garage Construction with Exposed Framing and Trusses",
    location: "St. Albert",
    size: "36x24",
    type: "In-Progress Garages",
    image: "/images/7.png",
    description: "Garage construction in progress with exposed wood framing, truss roof system, and concrete foundation preparation."
  },
  {
    id: 8,
    title: "Garage Construction with Concrete Foundation",
    location: "Edmonton",
    size: "36x24",
    type: "In-Progress Garages",
    image: "/images/8.png",
    description: "Garage construction with poured concrete foundation, green exterior sheathing, and framing half complete."
  },
  {
    id: 9,
    title: "Garage Framing with Engineered Roof Trusses",
    location: "Sherwood",
    size: "36x24",
    type: "In-Progress Garages",
    image: "/images/9.png",
    description: "Garage framing construction showing engineered roof trusses, wall studs, and structural lumber framework ready for sheathing."
  }
];

const filters = ["All", "Built Garages", "In-Progress Garages"];

export function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <div className="section-padding bg-premium-gray text-white pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-display font-bold mb-8 leading-tight pb-2">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Explore our portfolio of custom garages, garage suites, and laneway homes built across Calgary. 
              Each project showcases our commitment to quality and craftsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="section-padding">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-star-gold to-star-gold-light text-premium-gray'
                    : 'border border-star-gold hover:bg-star-gold text-premium-gray'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="feature-card group hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-star-gold text-premium-gray px-3 py-1 rounded-full text-sm font-semibold">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <span>{project.location}</span>
                  <span className="mx-2">•</span>
                  <span>{project.size}</span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gradient mb-6 leading-tight">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your garage project and create a custom solution that fits your needs and budget.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-star-gold to-star-gold-light text-premium-gray px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </div>
  );
} 