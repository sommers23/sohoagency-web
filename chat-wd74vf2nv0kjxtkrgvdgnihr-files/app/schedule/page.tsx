"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Mail, Building, MessageSquare, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SchedulePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log("Schedule page loaded", formData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    console.log(`Form field updated: ${field} = ${value}`);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="bg-gradient-to-br from-white via-jasper-cyan/5 to-jasper-purple/5 py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-jasper-green/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-jasper-green" />
                  </div>
                  
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-jasper-gray">
                      Strategy Session Scheduled!
                    </h1>
                    <p className="text-lg text-jasper-gray/70">
                      Thank you for scheduling a strategy session with Soho Agency. We'll be in touch within 24 hours to confirm your appointment and discuss how our AI-powered solutions can transform your e-commerce business.
                    </p>
                  </div>

                  <div className="bg-jasper-light/20 rounded-lg p-6">
                    <h3 className="font-semibold text-jasper-gray mb-3">What happens next?</h3>
                    <ul className="text-left space-y-2 text-jasper-gray/70">
                      <li>• Our team will contact you within 24 hours</li>
                      <li>• We'll confirm your preferred date and time</li>
                      <li>• You'll receive a calendar invite with meeting details</li>
                      <li>• We'll prepare a custom strategy tailored to your business</li>
                    </ul>
                  </div>

                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="bg-jasper-purple hover:bg-jasper-purple/90 text-white"
                  >
                    Return to Homepage
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-white via-jasper-cyan/5 to-jasper-purple/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-jasper-gray mb-6">
              Schedule Your Free Strategy Session
            </h1>
            <p className="text-xl text-jasper-gray/70 max-w-3xl mx-auto">
              Get a custom AI-powered strategy for your e-commerce business. Our experts will analyze your current setup and provide actionable recommendations to boost your online sales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-jasper-gray flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-jasper-purple" />
                  Book Your Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-jasper-gray font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="border-jasper-light focus:border-jasper-purple"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-jasper-gray font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="border-jasper-light focus:border-jasper-purple"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-jasper-gray font-medium">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        required
                        className="border-jasper-light focus:border-jasper-purple"
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-jasper-gray font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-jasper-light focus:border-jasper-purple"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-jasper-gray font-medium">
                      Primary Interest *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="border-jasper-light focus:border-jasper-purple">
                        <SelectValue placeholder="Select your main interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website-optimization">Website Optimization</SelectItem>
                        <SelectItem value="seo-lead-generation">SEO & Lead Generation</SelectItem>
                        <SelectItem value="social-media">Social Media Marketing</SelectItem>
                        <SelectItem value="analytics">AI-Powered Analytics</SelectItem>
                        <SelectItem value="full-package">Complete Marketing Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-jasper-gray font-medium">
                        Preferred Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        className="border-jasper-light focus:border-jasper-purple"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-jasper-gray font-medium">
                        Preferred Time
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger className="border-jasper-light focus:border-jasper-purple">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9-10am">9:00 - 10:00 AM</SelectItem>
                          <SelectItem value="10-11am">10:00 - 11:00 AM</SelectItem>
                          <SelectItem value="11-12pm">11:00 AM - 12:00 PM</SelectItem>
                          <SelectItem value="1-2pm">1:00 - 2:00 PM</SelectItem>
                          <SelectItem value="2-3pm">2:00 - 3:00 PM</SelectItem>
                          <SelectItem value="3-4pm">3:00 - 4:00 PM</SelectItem>
                          <SelectItem value="4-5pm">4:00 - 5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-jasper-gray font-medium">
                      Tell Us About Your Business
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-jasper-light focus:border-jasper-purple min-h-[120px]"
                      placeholder="Tell us about your current challenges, goals, and what you'd like to achieve with your e-commerce business..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-jasper-purple hover:bg-jasper-purple/90 text-white py-3 text-lg"
                  >
                    Schedule My Free Strategy Session
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-jasper-gray mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-jasper-purple" />
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-jasper-gray/70">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-jasper-green mt-1 flex-shrink-0" />
                      <span><strong>30-minute consultation</strong> with our AI marketing experts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-jasper-green mt-1 flex-shrink-0" />
                      <span><strong>Custom strategy</strong> tailored to your business goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-jasper-green mt-1 flex-shrink-0" />
                      <span><strong>Action plan</strong> with clear next steps</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-jasper-green mt-1 flex-shrink-0" />
                      <span><strong>No pressure</strong> - just valuable insights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-jasper-purple/5 to-jasper-cyan/5 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-jasper-gray mb-4">
                    Why Choose Soho Agency?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-jasper-purple/10 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-jasper-purple" />
                      </div>
                      <span className="text-jasper-gray/80"><strong>Expert Team:</strong> AI specialists with proven e-commerce results</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-jasper-cyan/10 rounded-full flex items-center justify-center">
                        <Building className="w-4 h-4 text-jasper-cyan" />
                      </div>
                      <span className="text-jasper-gray/80"><strong>SMB Focus:</strong> Tailored solutions for small-medium businesses</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-jasper-green/10 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-jasper-green" />
                      </div>
                      <span className="text-jasper-gray/80"><strong>Results-Driven:</strong> Data-backed strategies that deliver ROI</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}