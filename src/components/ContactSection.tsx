'use client';

import { ArrowRight, Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ServiceAreasMap from "./ServiceAreasMap";

export function ContactSection() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        concretePad: '',
        garageSize: '',
        houseSiding: '',
        electricalOutlet: '',
        hearAboutUs: '',
        timeframe: '',
        message: '',
        contactPreference: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Quote Request Submitted!",
            description: "We'll contact you within 24 hours to schedule your free consultation.",
        });
        setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            concretePad: '',
            garageSize: '',
            houseSiding: '',
            electricalOutlet: '',
            hearAboutUs: '',
            timeframe: '',
            message: '',
            contactPreference: ''
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name and Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-star-gold"
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-star-gold"
                                    />
                                </div>
                            </div>

                            {/* Email and Address */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-star-gold"
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-star-gold"
                                    />
                                </div>
                            </div>

                            {/* Concrete Pad */}
                            <div>
                                <select
                                    name="concretePad"
                                    value={formData.concretePad}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:border-star-gold focus:outline-none"
                                >
                                    <option value="" className="text-gray-900">Do you have a concrete pad in place?</option>
                                    <option value="yes" className="text-gray-900">Yes</option>
                                    <option value="no" className="text-gray-900">No</option>
                                    <option value="not-sure" className="text-gray-900">Not sure</option>
                                </select>
                            </div>

                            {/* Garage Size */}
                            <div>
                                <Input
                                    type="text"
                                    name="garageSize"
                                    placeholder="Size of the garage? (eg. 20x20)"
                                    value={formData.garageSize}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-star-gold"
                                />
                            </div>

                            {/* House Siding Color */}
                            <div>
                                <select
                                    name="houseSiding"
                                    value={formData.houseSiding}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:border-star-gold focus:outline-none"
                                >
                                    <option value="" className="text-gray-900">What color is your house vinyl siding?</option>
                                    <option value="light" className="text-gray-900">Light Colour Vinyl Siding</option>
                                    <option value="dark" className="text-gray-900">Dark Colour Vinyl Siding</option>
                                    <option value="not-sure" className="text-gray-900">Not Sure</option>
                                    <option value="no-siding" className="text-gray-900">No Siding</option>
                                </select>
                            </div>

                            {/* Electrical Outlet */}
                            <div>
                                <select
                                    name="electricalOutlet"
                                    value={formData.electricalOutlet}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:border-star-gold focus:outline-none"
                                >
                                    <option value="" className="text-gray-900">Do you have an electrical power outlet around the pad?</option>
                                    <option value="yes" className="text-gray-900">Yes</option>
                                    <option value="no" className="text-gray-900">No</option>
                                    <option value="not-sure" className="text-gray-900">Not sure</option>
                                </select>
                            </div>

                            {/* How did you hear about us */}
                            <div>
                                <select
                                    name="hearAboutUs"
                                    value={formData.hearAboutUs}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:border-star-gold focus:outline-none"
                                >
                                    <option value="" className="text-gray-900">How did you hear about us?</option>
                                    <option value="google" className="text-gray-900">Google</option>
                                    <option value="facebook" className="text-gray-900">Facebook</option>
                                    <option value="referral" className="text-gray-900">Referral</option>
                                    <option value="instagram" className="text-gray-900">Instagram</option>
                                    <option value="flyer" className="text-gray-900">Flyer/Sign</option>
                                </select>
                            </div>

                            {/* When do you need your garage built */}
                            <div>
                                <select
                                    name="timeframe"
                                    value={formData.timeframe}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:border-star-gold focus:outline-none"
                                >
                                    <option value="" className="text-gray-900">When do you need your garage built?
                                    </option>
                                    <option value="asap" className="text-gray-900">ASAP</option>
                                    <option value="january" className="text-gray-900">January</option>
                                    <option value="february" className="text-gray-900">February</option>
                                    <option value="march" className="text-gray-900">March</option>
                                    <option value="april" className="text-gray-900">April</option>
                                    <option value="may" className="text-gray-900">May</option>
                                    <option value="june" className="text-gray-900">June</option>
                                    <option value="july" className="text-gray-900">July</option>
                                    <option value="august" className="text-gray-900">August</option>
                                    <option value="september" className="text-gray-900">September</option>
                                    <option value="october" className="text-gray-900">October</option>
                                    <option value="november" className="text-gray-900">November</option>
                                    <option value="december" className="text-gray-900">December</option>
                                    <option value="next-year" className="text-gray-900">Next year</option>
                                </select>
                            </div>

                            {/* Comments */}
                            <div>
                                <Textarea
                                    name="message"
                                    placeholder="Please leave a comment if you'd like to add something?"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-star-gold"
                                />
                            </div>

                            {/* Contact Preference */}
                            <div>
                                <select
                                    name="contactPreference"
                                    value={formData.contactPreference}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:border-star-gold focus:outline-none"
                                >
                                    <option value="" className="text-gray-900">Would you prefer to receive the quote by email or text message?</option>
                                    <option value="email" className="text-gray-900">Email</option>
                                    <option value="text" className="text-gray-900">Text Message</option>
                                </select>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full btn-hero text-lg"
                            >
                                Submit
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <p className="text-white/60 text-sm text-center">
                                By submitting this form, you agree to receive communications from Star Garages.
                                We respect your privacy and will never share your information.
                            </p>
                        </form>
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
                    </div>
                </div>

                {/* Service Areas Map */}
                <div className="mt-16 max-w-6xl mx-auto">
                    <ServiceAreasMap />
                </div>
            </div>
        </section>
    );
}