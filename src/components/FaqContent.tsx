'use client';

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    category: "Construction & Timeline",
    questions: [
      {
        question: "How long does a garage take to build?",
        answer: "2-3 weeks from planning to final stage."
      },
      {
        question: "How long do the permits take?",
        answer: "3-4 days."
      },
      {
        question: "Do you build in winter?",
        answer: "Yes, if the pad is poured (except in extreme cold)."
      }
    ]
  },
  {
    category: "Design & Modifications",
    questions: [
      {
        question: "Can I extend my current concrete pad?",
        answer: "Yes, depending on city guidelines."
      },
      {
        question: "Why extend a 20x20 pad?",
        answer: "To fit pickup trucks — upgrade to 20x22."
      },
      {
        question: "Can I add a window or door on the side?",
        answer: "Yes, if 4+ feet from property line."
      },
      {
        question: "What's a standard garage door size?",
        answer: "16'x7' (or 16'x8' with 9' wall height)."
      }
    ]
  },
  {
    category: "Technical & Features",
    questions: [
      {
        question: "Why use concrete curb walls?",
        answer: "Prevents water seepage; essential if backyard is higher than pad."
      },
      {
        question: "Are your garage doors insulated?",
        answer: "Yes, in both packages."
      }
    ]
  },
  {
    category: "Services & Materials",
    questions: [
      {
        question: "Can you build if I provide materials?",
        answer: "Yes — labor rates apply."
      }
    ]
  }
];

export function FaqContent() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <div className="section-padding bg-premium-gray text-white pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-display font-bold mb-8 leading-tight pb-2">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Find answers to common questions about our garage building services, process, and warranties.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="section-padding">
        <div className="container mx-auto px-6 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gradient mb-8 leading-tight">{category.category}</h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const itemId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems.includes(itemId);
                  
                  return (
                    <div 
                      key={questionIndex} 
                      className="relative bg-premium-gray/10 border border-white/10 rounded-xl overflow-hidden"
                    >
                      <div 
                        onClick={() => toggleItem(itemId)}
                        className="w-full cursor-pointer flex items-center justify-between p-6 hover:bg-premium-gray/30 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-foreground/90 pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-star-gold flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-star-gold flex-shrink-0" />
                        )}
                      </div>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 border-t border-white/10">
                          <p className="text-muted-foreground/80 leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gradient mb-6 leading-tight">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help! Contact us for personalized answers about your specific project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-star-gold to-star-gold-light text-premium-gray px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-star-gold to-star-gold-light text-premium-gray px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <a href="tel:(780)667-7827">Call (780) 667-7827</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 