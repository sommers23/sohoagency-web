"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, BarChart3, Phone, Mail, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    name: '',
    email: '',
    phone: '',
    challenges: [] as string[],
    primaryGoal: '',
    monthlyRevenue: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log("Get Started page loaded", formData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Assessment form submitted:", formData);
    
    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      console.log("API response:", result);
      
      if (result.success) {
        console.log("Assessment submitted successfully");
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit assessment:", result.message);
        // You could add error state handling here
      }
    } catch (error) {
      console.error("Error submitting assessment:", error);
      // You could add error state handling here
    }
  };

  const handleInputChange = (field: string, value: string) => {
    console.log(`Form field updated: ${field} = ${value}`);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    console.log(`Challenge updated: ${challenge} = ${checked}`);
    setFormData(prev => ({
      ...prev,
      challenges: checked 
        ? [...prev.challenges, challenge]
        : prev.challenges.filter(c => c !== challenge)
    }));
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
                      Assessment Submitted Successfully!
                    </h1>
                    <p className="text-lg text-jasper-gray/70">
                      Thank you for starting your journey with Soho Agency. Our AI is already analyzing your responses to prepare personalized insights. You'll receive your custom strategy within 24 hours at {formData.email}.
                    </p>
                    <p className="text-sm text-jasper-gray/60">
                      We've also sent your assessment details to our team at info@sohoagency.co for immediate review.
                    </p>
                  </div>

                  <div className="bg-jasper-light/20 rounded-lg p-6">
                    <h3 className="font-semibold text-jasper-gray mb-3">What happens next?</h3>
                    <ul className="text-left space-y-2 text-jasper-gray/70">
                      <li>• AI-powered analysis of your business (within 2 hours)</li>
                      <li>• Custom strategy development (within 24 hours)</li>
                      <li>• Personal consultation call to discuss findings</li>
                      <li>• Implementation roadmap tailored to your goals</li>
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
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-jasper-cyan/5 to-jasper-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-jasper-gray">
                TRANSFORM YOUR E-COMMERCE<br />
                <span className="text-jasper-purple">PERFORMANCE TODAY</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-jasper-gray/80">
                THREE SIMPLE STEPS TO UNLOCK AI-POWERED GROWTH FOR YOUR BUSINESS
              </h2>
              <p className="text-xl text-jasper-gray/70 max-w-4xl mx-auto">
                Ready to see real results? Our streamlined onboarding process makes it easy to harness the power of AI for your e-commerce business. No technical knowledge required—just bring your business goals, and we'll handle the rest.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="bg-jasper-purple hover:bg-jasper-purple/90 text-white px-8 py-4 text-xl group"
              onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              START YOUR FREE ASSESSMENT
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-jasper-gray mb-4">
              YOUR PATH TO E-COMMERCE SUCCESS
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "DISCOVERY CALL",
                icon: <Phone className="w-8 h-8" />,
                description: "We start with a focused 30-minute call to understand your business, current challenges, and goals. Our AI-powered analysis tool will prepare initial insights before we even meet, making our time together highly productive."
              },
              {
                step: "02", 
                title: "CUSTOM STRATEGY DEVELOPMENT",
                icon: <Target className="w-8 h-8" />,
                description: "Within 48 hours, our team develops a tailored strategy combining AI technology and creative marketing approaches specifically for your business. You'll receive a clear roadmap with expected outcomes and timelines."
              },
              {
                step: "03",
                title: "IMPLEMENTATION & RESULTS", 
                icon: <TrendingUp className="w-8 h-8" />,
                description: "Once approved, we implement your strategy using our suite of AI tools. You'll have access to a real-time dashboard showing your performance metrics from day one, with regular optimization to maximize results."
              }
            ].map((step, index) => (
              <Card key={index} className="relative bg-gradient-to-br from-jasper-light/10 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-jasper-purple/10 rounded-full flex items-center justify-center mb-4">
                        <div className="text-jasper-purple">{step.icon}</div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-jasper-purple text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-jasper-gray">{step.title}</h3>
                    <p className="text-jasper-gray/70 leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Badge variant="secondary" className="bg-jasper-green/10 text-jasper-green px-6 py-2 text-lg">
              Most clients see initial results within 14 days of implementation
            </Badge>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-br from-jasper-light/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-jasper-gray mb-4">
              WHAT YOU'LL GET
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Comprehensive E-commerce Audit",
                description: "Uncover hidden opportunities and conversion barriers",
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                title: "AI-Powered Performance Dashboard", 
                description: "Track your metrics in real-time with easy-to-understand visualizations",
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: "Custom Implementation Plan",
                description: "Tailored strategies based on your specific business needs and goals",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Weekly Optimization Reports",
                description: "Regular updates on performance with AI-recommended improvements", 
                icon: <CheckCircle className="w-6 h-6" />
              },
              {
                title: "Direct Access to Experts",
                description: "Your dedicated strategist is always just a message away",
                icon: <Users className="w-6 h-6" />
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-jasper-purple/10 rounded-lg flex items-center justify-center">
                      <div className="text-jasper-purple">{item.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-jasper-gray">{item.title}</h3>
                    <p className="text-jasper-gray/70">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-jasper-green/5 to-jasper-cyan/5 border-2 border-jasper-green/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-jasper-gray mb-4">No-Risk Guarantee</h3>
              <p className="text-lg text-jasper-gray/70">
                If you don't see measurable improvements within 30 days, we'll refund your investment completely. We're that confident in our approach.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section id="assessment-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-jasper-gray mb-6">
              START YOUR FREE E-COMMERCE ASSESSMENT
            </h2>
          </div>

          <Card className="bg-white border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-jasper-gray font-medium">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      required
                      className="border-jasper-light focus:border-jasper-purple"
                      placeholder="Your business name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="websiteUrl" className="text-jasper-gray font-medium">Website URL *</Label>
                    <Input
                      id="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                      required
                      className="border-jasper-light focus:border-jasper-purple"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-jasper-gray font-medium">Your Name *</Label>
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
                    <Label htmlFor="email" className="text-jasper-gray font-medium">Email Address *</Label>
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
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-jasper-gray font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-jasper-light focus:border-jasper-purple"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-jasper-gray font-medium">Current Challenges (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Low website conversion rates",
                      "Not enough qualified traffic", 
                      "Poor social media performance",
                      "Difficulty measuring marketing ROI",
                      "High customer acquisition costs",
                      "Low repeat purchase rates"
                    ].map((challenge) => (
                      <div key={challenge} className="flex items-center space-x-2">
                        <Checkbox
                          id={challenge}
                          checked={formData.challenges.includes(challenge)}
                          onCheckedChange={(checked) => handleChallengeChange(challenge, checked as boolean)}
                        />
                        <Label htmlFor={challenge} className="text-jasper-gray/80 text-sm">{challenge}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="primaryGoal" className="text-jasper-gray font-medium">Primary Goal *</Label>
                    <Select onValueChange={(value) => handleInputChange('primaryGoal', value)}>
                      <SelectTrigger className="border-jasper-light focus:border-jasper-purple">
                        <SelectValue placeholder="Select your main goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="increase-sales">Increase online sales</SelectItem>
                        <SelectItem value="generate-leads">Generate more qualified leads</SelectItem>
                        <SelectItem value="improve-conversion">Improve conversion rates</SelectItem>
                        <SelectItem value="enhance-retention">Enhance customer retention</SelectItem>
                        <SelectItem value="optimize-spend">Optimize marketing spend</SelectItem>
                        <SelectItem value="other">Other (please specify)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="monthlyRevenue" className="text-jasper-gray font-medium">Monthly Revenue Range</Label>
                    <Select onValueChange={(value) => handleInputChange('monthlyRevenue', value)}>
                      <SelectTrigger className="border-jasper-light focus:border-jasper-purple">
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                        <SelectItem value="500k-plus">$500,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-jasper-purple hover:bg-jasper-purple/90 text-white py-4 text-xl"
                >
                  GET YOUR FREE ASSESSMENT
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-br from-jasper-light/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-jasper-gray mb-4">
              REAL RESULTS FOR BUSINESSES LIKE YOURS
            </h2>
            <p className="text-xl text-jasper-gray/70">30-DAY RESULTS SNAPSHOT</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                company: "E-commerce Furniture Store",
                results: [
                  "43% increase in conversion rate",
                  "52% reduction in cart abandonment", 
                  "22% higher average order value"
                ]
              },
              {
                company: "Specialty Food Retailer",
                results: [
                  "78% improvement in organic search traffic",
                  "215% increase in qualified leads",
                  "32% lead-to-customer conversion rate"
                ]
              },
              {
                company: "Handmade Jewelry Brand", 
                results: [
                  "87% increase in social media-driven sales",
                  "156% growth in Instagram followers",
                  "3.2x return on ad spend"
                ]
              }
            ].map((case_study, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-jasper-gray mb-4">{case_study.company}</h3>
                  <ul className="space-y-2">
                    {case_study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-jasper-green mt-1 flex-shrink-0" />
                        <span className="text-jasper-gray/80">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-jasper-purple/5 to-jasper-cyan/5 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl text-jasper-gray/80 italic mb-4">
                "Within just 3 weeks of working with Soho Agency, our e-commerce performance completely transformed. Their AI-powered approach delivered results we hadn't achieved in a year of working with traditional agencies."
              </blockquote>
              <p className="text-jasper-gray font-semibold">— Emma L., Founder</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-jasper-gray mb-4">
              COMMON QUESTIONS
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How quickly will I see results?",
                answer: "Most clients see measurable improvements within 14 days of implementation. Our AI tools continuously optimize your performance, with results compounding over time."
              },
              {
                question: "What's the investment to get started?",
                answer: "Our packages start at $1,500/month with no long-term contracts required. We offer flexible options based on your business size and goals, which we'll discuss during your free assessment."
              },
              {
                question: "Do I need technical knowledge to work with you?",
                answer: "Not at all. We handle all the technical aspects, from implementation to optimization. You'll have an easy-to-understand dashboard to track results, and your dedicated strategist will explain everything in plain language."
              },
              {
                question: "How is Soho Agency different from other marketing agencies?",
                answer: "We combine AI technology with creative marketing strategies to deliver results that traditional approaches can't match. Our data-driven methodology ensures every decision is based on what actually works for your specific business."
              },
              {
                question: "What if I'm not satisfied with the results?",
                answer: "We offer a 30-day satisfaction guarantee. If you don't see measurable improvements within your first month, we'll refund your investment completely."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-jasper-light rounded-lg px-6">
                <AccordionTrigger className="text-jasper-gray font-semibold hover:text-jasper-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-jasper-gray/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-jasper-purple/5 to-jasper-cyan/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-jasper-gray">
              READY TO TRANSFORM YOUR E-COMMERCE BUSINESS?
            </h2>
            <p className="text-xl text-jasper-gray/70">
              Take the first step toward AI-powered growth. Complete your free assessment today, or schedule a direct call with one of our strategists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-jasper-purple hover:bg-jasper-purple/90 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                START YOUR FREE ASSESSMENT
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-jasper-purple text-jasper-purple hover:bg-jasper-purple hover:text-white px-8 py-4 text-lg"
                onClick={() => window.location.href = '/schedule'}
              >
                SCHEDULE A CALL DIRECTLY
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-6 text-jasper-gray/70">
                <a href="mailto:info@sohoagency.co" className="flex items-center hover:text-jasper-purple transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  info@sohoagency.co
                </a>
                <a href="tel:+15551234567" className="flex items-center hover:text-jasper-purple transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </a>
              </div>
              <p className="text-jasper-gray/60">
                No pressure, no obligations—just actionable insights to help your business grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}