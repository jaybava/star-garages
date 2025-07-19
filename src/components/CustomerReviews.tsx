'use client';

import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
    {
        name: "Jashwanth Prathipati",
        rating: 5,
        review: "Absolutely thrilled with the work done by Paul and his team! From start to finish, the process was smooth and stress-free. The attention to detail is top-notch, and the final result exceeded my expectations. Highly recommend!",
        avatar: "JP"
    },
    {
        name: "Moez Hamdi",
        rating: 5,
        review: "Perfect from start to finish. Paul stayed within budget, gave amazing tips, and answered every question. Quick, quality work with amazing pricing!",
        avatar: "MH"
    },
    {
        name: "Marie Khan",
        rating: 5,
        review: "I got quotes from others, but Star Garages was the most reasonable. Great build quality and customer service. Highly recommend!",
        avatar: "MK"
    },
    {
        name: "Sahil Doad",
        rating: 5,
        review: "Excellent experience! The team didn't cut any corners, and the attention to detail was unreal. Very professional and reliable.",
        avatar: "SD"
    },
    {
        name: "Phoebe Manalo",
        rating: 5,
        review: "Professional and efficient. They finished our garage in just 2 days and made the process easy. Highly recommend!",
        avatar: "PM"
    },
    {
        name: "Jayesh Koli",
        rating: 5,
        review: "Very reasonable quote, clean work, and done in just 2 days! Super impressed with their professionalism and quality.",
        avatar: "JK"
    },
    {
        name: "Shaminder P",
        rating: 5,
        review: "They actually use high-quality materials and were super easy to deal with. Affordable and efficient.",
        avatar: "SP"
    },
    {
        name: "Orlando Sanchez",
        rating: 5,
        review: "Fast, efficient, and even followed up after the build. Great experience!",
        avatar: "OS"
    },
    {
        name: "Kunal Parmar",
        rating: 5,
        review: "Amazing service! Clear communication from quote to final project. Love them!",
        avatar: "KP"
    },
    {
        name: "Anne Parmar",
        rating: 5,
        review: "Paul was super friendly and thorough. We were really happy with the outcome and would absolutely recommend!",
        avatar: "AP"
    },
    {
        name: "Abhi Tiwari",
        rating: 5,
        review: "Paul and his team did an amazing job. They also built out fence and deck on our sepcial request. Paul understood what we wanted and built a beautiful garage. Thank you so much and god bless!",
        avatar: "AT"
    },
    {
        name: "Karan Natt",
        rating: 5,
        review: "Happy to build with star. They built our garage from scratch. Planned with paul and turned out exactly how I wanted. Definitely recommend their services.",
        avatar: "KN"
    }
];

export function CustomerReviews() {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToReview = (index: number) => {
        setCurrentReview(index);
    };

    return (
        <section className="section-padding bg-gradient-to-br from-background to-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-display font-bold mb-6">
                        What Our <span className="text-gradient">Customers</span> Say
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what Edmonton homeowners say about their Star Garages experience.
                    </p>
                </div>

                {/* Main Review Display */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        {/* Background Quote Icon */}
                        <Quote className="absolute top-8 left-8 h-16 w-16 text-star-gold/20" />

                        {/* Stars */}
                        <div className="flex justify-center mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className="h-6 w-6 text-star-gold fill-current"
                                />
                            ))}
                        </div>

                        {/* Review Text */}
                        <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground mb-8 font-medium italic">
                            "{reviews[currentReview].review}"
                        </blockquote>

                        {/* Customer Info */}
                        <div className="flex items-center justify-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-star-gold to-star-gold-light rounded-full flex items-center justify-center">
                <span className="text-premium-gray font-bold text-lg">
                  {reviews[currentReview].avatar}
                </span>
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-lg text-foreground">
                                    {reviews[currentReview].name}
                                </div>
                                <div className="text-muted-foreground text-sm">
                                    Verified Google Review
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Review Navigation Dots */}
                <div className="flex justify-center space-x-3 mb-16">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToReview(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentReview
                                    ? 'bg-star-gold scale-125'
                                    : 'bg-muted-foreground/30 hover:bg-star-gold/50'
                            }`}
                        />
                    ))}
                </div>

                {/* Review Grid - All Reviews */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`bg-white/30 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 cursor-pointer reveal-up visible ${
                                index === currentReview ? 'ring-2 ring-star-gold' : ''
                            }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => goToReview(index)}
                        >
                            {/* Mini Stars */}
                            <div className="flex mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-4 w-4 text-star-gold fill-current" />
                                ))}
                            </div>

                            {/* Mini Review */}
                            <p className="text-foreground text-sm mb-4 line-clamp-3">
                                "{review.review}"
                            </p>

                            {/* Mini Customer Info */}
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-star-gold to-star-gold-light rounded-full flex items-center justify-center">
                  <span className="text-premium-gray font-bold text-sm">
                    {review.avatar}
                  </span>
                                </div>
                                <div>
                                    <div className="font-semibold text-sm text-foreground">
                                        {review.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Verified Customer
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Google Reviews Badge */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
                        <div className="flex items-center space-x-2">
                            <svg className="h-6 w-6" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="font-semibold text-foreground">Google Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}