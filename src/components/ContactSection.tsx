'use client';

import { ArrowRight, Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceAreasMap from "./ServiceAreasMap";

export function ContactSection() {
    return (
        <section
            id="contact"
            className="section-padding relative overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('/images/hero-garage.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-display font-bold mb-6 text-white">
                        Ready to Build? <span className="text-gradient">Let's Talk.</span>
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Get your free consultation and detailed quote. No pressure, just expert advice and transparent pricing.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Get Your Free Estimate
                            </h3>
                            <p className="text-white/80">
                                Fill out the form below and we'll contact you within 24 hours to schedule your consultation.
                            </p>
                        </div>

                        <div style={{ height: '1500px' }}>
                            <iframe
                                src="https://link.leadxpert.io/widget/form/vgReTHxGtlPi2jGRnwVG"
                                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                                id="inline-vgReTHxGtlPi2jGRnwVG"
                                data-layout={`{"id":"INLINE"}`}
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Form 8"
                                data-height="undefined"
                                data-layout-iframe-id="inline-vgReTHxGtlPi2jGRnwVG"
                                data-form-id="vgReTHxGtlPi2jGRnwVG"
                                title="Form 8"
                            />
                        </div>

                        <p className="text-white/60 text-sm text-center mt-6">
                            By submitting this form, you agree to receive communications from Star Garages.
                            We respect your privacy and will never share your information.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Quick Contact */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-star-gold rounded-xl flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-premium-gray" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Paul Braich</div>
                                        <a href="tel:(780)667-7827" className="text-star-gold hover:text-star-gold-light">
                                            (780) 667-7827
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-star-gold rounded-xl flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-premium-gray" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Harry Singh</div>
                                        <a href="tel:(403)629-2975" className="text-star-gold hover:text-star-gold-light">
                                            (403) 629-2975
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-star-gold rounded-xl flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-premium-gray" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Email Us</div>
                                        <a href="mailto:info.stargarages@gmail.com" className="text-star-gold hover:text-star-gold-light">
                                            info.stargarages@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-star-gold rounded-xl flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-premium-gray" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Service Area</div>
                                        <div className="text-white/80">Edmonton, AB & Surrounding Areas</div>
                                        <div className="text-white/60 text-sm mt-1">
                                            Fort Saskatchewan • Sherwood • Beaumont • Leduc • Spruce Grove • St. Albert
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-star-gold rounded-xl flex items-center justify-center">
                                        <Clock className="h-6 w-6 text-premium-gray" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Business Hours</div>
                                        <div className="text-white/80">Mon-Fri: 8AM-6PM</div>
                                        <div className="text-white/80">Sat: 9AM-4PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us - Quick Points */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Why Choose Star Garages?
                            </h3>

                            <div className="space-y-4">
                                {[
                                    "Free consultations & quotes",
                                    "All permits & approvals handled",
                                    "10-year structural warranty",
                                    "Licensed & insured",
                                    "Financing options available"
                                ].map((point, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <Star className="h-5 w-5 text-star-gold" />
                                        <span className="text-white/90">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Emergency Contact */}
                        <div className="bg-gradient-to-r from-star-gold/20 to-star-gold-light/20 border border-star-gold/30 rounded-2xl p-6">
                            <h4 className="text-lg font-bold text-white mb-2">
                                Need Emergency Service?
                            </h4>
                            <p className="text-white/80 text-sm mb-4">
                                We offer emergency garage door repairs and structural assessments.
                            </p>
                            <div className="flex flex-col space-y-2">
                                <a
                                    href="tel:(780)667-7827"
                                    className="inline-flex items-center text-star-gold hover:text-star-gold-light font-semibold"
                                >
                                    Paul: (780) 667-7827
                                    <Phone className="ml-2 h-4 w-4" />
                                </a>
                                <a
                                    href="tel:(403)629-2975"
                                    className="inline-flex items-center text-star-gold hover:text-star-gold-light font-semibold"
                                >
                                    Harry: (403) 629-2975
                                    <Phone className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* Service Areas Map */}
                        <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Service Areas
                            </h3>
                            <ServiceAreasMap />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}