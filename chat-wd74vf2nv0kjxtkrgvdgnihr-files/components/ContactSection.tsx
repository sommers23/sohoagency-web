"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MessageCircle, ArrowRight, Star } from 'lucide-react';

export default function ContactSection() {
  console.log("ContactSection component rendered");

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-jasper-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: "Sarah Chen",
              company: "Fashion Forward",
              result: "+156% Revenue Growth",
              quote: "Soho Agency transformed our online store completely. Their AI-powered approach increased our conversions dramatically."
            },
            {
              name: "Marcus Rodriguez",
              company: "Tech Gadgets Pro",
              result: "+89% Lead Generation",
              quote: "The lead generation strategies they implemented brought us qualified customers we never reached before."
            },
            {
              name: "Emma Thompson",
              company: "Organic Beauty Co",
              result: "+234% Social Engagement",
              quote: "Their social media marketing expertise helped us build a community that actually converts into sales."
            }
          ].map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-jasper-gray/80 italic">"{testimonial.quote}"</p>
                  
                  <div className="pt-4 border-t border-jasper-light">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-jasper-gray">{testimonial.name}</p>
                        <p className="text-sm text-jasper-gray/60">{testimonial.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-jasper-green">{testimonial.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-jasper-gray">
              READY TO TRANSFORM YOUR ONLINE BUSINESS?
            </h2>
            <p className="text-xl text-jasper-gray/70 max-w-3xl mx-auto">
              Join forward-thinking SMBs leveraging our AI-powered e-commerce solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-jasper-purple hover:bg-jasper-purple/90 text-white px-8 py-4 text-lg group"
              onClick={() => window.location.href = '/schedule'}
            >
              <Calendar className="w-5 h-5 mr-2" />
              SCHEDULE A FREE STRATEGY SESSION
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-jasper-purple text-jasper-purple hover:bg-jasper-purple hover:text-white px-8 py-4 text-lg group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              CONTACT US
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8">
            <p className="text-jasper-gray/60 mb-2">Ready to get started?</p>
            <a 
              href="mailto:info@sohoagency.co" 
              className="text-jasper-purple hover:text-jasper-purple/80 font-semibold transition-colors"
            >
              info@sohoagency.co
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}