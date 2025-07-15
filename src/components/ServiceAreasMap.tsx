'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import Script from 'next/script';

interface ServiceArea {
  name: string;
  description: string;
  services: string[];
  postalCodes: string[];
}

const ServiceAreasMap: React.FC = () => {
  const serviceAreas: ServiceArea[] = [
    { 
      name: 'Edmonton',
      description: 'Main service area',
      services: ['Custom Garages', 'Garage Suites', 'Laneway Homes'],
      postalCodes: ['T5A', 'T5B', 'T5C', 'T5E', 'T5G', 'T5H', 'T5J', 'T5K', 'T5L', 'T5M', 'T5N', 'T5P', 'T5R', 'T5S', 'T5T', 'T5V', 'T5W', 'T5X', 'T5Y', 'T6A', 'T6B', 'T6C', 'T6E', 'T6G', 'T6H', 'T6J', 'T6K', 'T6L', 'T6M', 'T6N', 'T6P', 'T6R', 'T6S', 'T6T', 'T6V', 'T6W', 'T6X']
    },
    { 
      name: 'Fort Saskatchewan',
      description: 'Extended service area',
      services: ['Detached Garages', 'Garage Renovations'],
      postalCodes: ['T8L']
    },
    { 
      name: 'Sherwood Park',
      description: 'Extended service area',
      services: ['Custom Garages', 'Garage Suites'],
      postalCodes: ['T8A', 'T8B', 'T8C', 'T8D', 'T8E', 'T8G', 'T8H']
    },
    { 
      name: 'Beaumont',
      description: 'Extended service area',
      services: ['Detached Garages', 'Garage Renovations'],
      postalCodes: ['T4X']
    },
    { 
      name: 'Leduc',
      description: 'Extended service area',
      services: ['Custom Garages', 'Garage Suites'],
      postalCodes: ['T9E']
    },
    { 
      name: 'Spruce Grove',
      description: 'Extended service area',
      services: ['Detached Garages', 'Garage Renovations'],
      postalCodes: ['T7X', 'T7Y']
    },
    { 
      name: 'St. Albert',
      description: 'Extended service area',
      services: ['Custom Garages', 'Garage Suites'],
      postalCodes: ['T8N', 'T8R', 'T8T']
    }
  ];

  // Structured data for local business service areas
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://stargarages.ca/#business',
    name: 'Star Garages',
    image: 'https://stargarages.ca/images/og-image.jpg',
    description: 'Edmonton & Alberta\'s premier garage builders specializing in custom detached garages, garage suites, and laneway homes.',
    url: 'https://stargarages.ca',
    telephone: '(780) 667-7827',
    areaServed: serviceAreas.map(area => ({
      '@type': 'City',
      name: area.name,
      '@id': `https://stargarages.ca/#${area.name.toLowerCase().replace(' ', '-')}`,
      postalCode: area.postalCodes
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Edmonton',
      addressRegion: 'AB',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.5461,
      longitude: -113.4937
    },
    priceRange: '$$'
  };

  return (
    <>
      <Script id="service-areas-schema" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <section className="bg-secondary/30 rounded-2xl p-8" aria-labelledby="service-areas-title">
        <div className="flex items-center space-x-3 mb-6">
          <MapPin className="h-6 w-6 text-star-gold" aria-hidden="true" />
          <h2 id="service-areas-title" className="text-2xl font-bold text-gradient">Our Service Areas in Alberta</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceAreas.map((area, index) => (
            <div 
              key={index} 
              className="text-center p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
              itemScope 
              itemType="https://schema.org/City"
            >
              <div className="w-3 h-3 bg-star-gold rounded-full mx-auto mb-2" aria-hidden="true"></div>
              <span className="text-sm font-medium text-foreground block" itemProp="name">{area.name}</span>
              <span className="text-xs text-muted-foreground">{area.description}</span>
              <meta itemProp="postalCode" content={area.postalCodes.join(', ')} />
              <ul className="mt-2 text-xs text-muted-foreground hidden">
                {area.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} itemProp="amenityFeature">{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceAreasMap;