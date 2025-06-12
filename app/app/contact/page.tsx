"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Building, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  console.log("Contact page loaded");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
    // Add form submission logic here
  };

  return (
    <main className="min-h-screen bg-white font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold text-center">
              <span className="bg-gradient-to-r from-jasper-purple to-jasper-blue bg-clip-text text-transparent">
                GET IN TOUCH
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
              Ready to transform your business? We're here to help from our offices in Dubai and London
            </p>
          </div>
        </div>
      </section>

      {/* Split Office Design */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Dubai Office */}
            <div className="relative">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://assets.macaly-user-data.dev/uq64k1ycen0y0t743loc03cu/wd74vf2nv0kjxtkrgvdgnihr/TM6-fRpKBL9_8ePTQJaQf/tmpbe57oyo3.webp')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-jasper-purple/75 via-jasper-purple/50 to-jasper-purple/20"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-between min-h-[600px]">
                <div className="space-y-6">
                  {/* Flag and City */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇦🇪</span>
                    <span className="text-white text-sm font-bold uppercase tracking-wide drop-shadow-md">United Arab Emirates</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-black text-white drop-shadow-lg">
                    Dubai Office
                  </h2>
                  
                  <div className="space-y-4 text-white drop-shadow-md">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 mt-1 text-white" />
                      <div>
                        <p className="font-semibold">International Business Tower</p>
                        <p>Business Bay, Dubai, UAE</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-white" />
                      <p>+971 559113330</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-white" />
                      <p>info@sohoagency.co</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-white" />
                      <p>Sun - Thu: 9:00 AM - 6:00 PM GST</p>
                    </div>
                  </div>
                </div>
                
                {/* Google Maps Integration */}
                <div className="mt-8">
                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1936332499054!2d55.26610831546624!3d25.186141983907634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d4d2d7d6ed%3A0x7d7f7e7f7e7f7e7f!2sInternational%20Business%20Tower%2C%20Business%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1629789123456!5m2!1sen!2s"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* London Office */}
            <div className="relative">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://assets.macaly-user-data.dev/uq64k1ycen0y0t743loc03cu/wd74vf2nv0kjxtkrgvdgnihr/NalSWpBvcPfl-g6R7M7qz/tmpclofs4ki.webp')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-jasper-blue/75 via-jasper-blue/50 to-jasper-blue/20"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-between min-h-[600px]">
                <div className="space-y-6">
                  {/* Flag and City */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="text-white text-sm font-bold uppercase tracking-wide drop-shadow-md">United Kingdom</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-black text-white drop-shadow-lg">
                    London Office
                  </h2>
                  
                  <div className="space-y-4 text-white drop-shadow-md">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 mt-1 text-white" />
                      <div>
                        <p className="font-semibold">180 Heythorp Street</p>
                        <p>London, SW18 5BU</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-white" />
                      <p>+44 20 7123 4567</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-white" />
                      <p>info@sohoagency.co</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-white" />
                      <p>Mon - Fri: 9:00 AM - 6:00 PM GMT</p>
                    </div>
                  </div>
                </div>
                
                {/* Google Maps Integration */}
                <div className="mt-8">
                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.123456789!2d-0.1947!3d51.4547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI3JzE3LjAiTiAwwrAxMSc0MS4wIlc!5e0!3m2!1sen!2suk!4v1629789123456!5m2!1sen!2suk"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-jasper-purple to-jasper-blue bg-clip-text text-transparent">
                Let's Start a Conversation
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-jasper-purple to-jasper-blue p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-white/90">
                  Choose your preferred office location and we'll connect you with the right team
                </p>
              </div>

              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-800 font-semibold">Your Name *</Label>
                      <Input
                        id="name"
                        required
                        className="h-12 border-2 border-gray-200 focus:border-jasper-purple rounded-xl"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-800 font-semibold">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="h-12 border-2 border-gray-200 focus:border-jasper-purple rounded-xl"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-800 font-semibold">Company</Label>
                      <Input
                        id="company"
                        className="h-12 border-2 border-gray-200 focus:border-jasper-purple rounded-xl"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-800 font-semibold">Phone Number</Label>
                      <Input
                        id="phone"
                        className="h-12 border-2 border-gray-200 focus:border-jasper-purple rounded-xl"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="office" className="text-gray-800 font-semibold">Preferred Office Location</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-jasper-purple cursor-pointer transition-all">
                        <input type="radio" name="office" value="dubai" className="text-jasper-purple" />
                        <div className="flex items-center space-x-2">
                          <Building className="w-5 h-5 text-jasper-purple" />
                          <span className="font-medium">Dubai Office</span>
                        </div>
                      </label>
                      
                      <label className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-jasper-blue cursor-pointer transition-all">
                        <input type="radio" name="office" value="london" className="text-jasper-blue" />
                        <div className="flex items-center space-x-2">
                          <Globe className="w-5 h-5 text-jasper-blue" />
                          <span className="font-medium">London Office</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-800 font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      className="border-2 border-gray-200 focus:border-jasper-purple rounded-xl resize-none"
                      placeholder="Tell us about your project, goals, and how we can help transform your business..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-jasper-purple to-jasper-blue hover:from-jasper-purple/90 hover:to-jasper-blue/90 text-white text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Send Message
                  </Button>

                  <div className="text-center pt-4">
                    <p className="text-gray-600">
                      ✨ We typically respond within 2-4 hours during business hours
                    </p>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-jasper-purple to-jasper-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-3">
              <Phone className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-bold">Call Us Directly</h3>
              <p className="text-white/90">Dubai: +971 559113330</p>
              <p className="text-white/90">London: +44 20 7123 4567</p>
            </div>
            
            <div className="space-y-3">
              <Mail className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-bold">Email Us</h3>
              <p className="text-white/90">info@sohoagency.co</p>
              <p className="text-white/90">Available 24/7</p>
            </div>
            
            <div className="space-y-3">
              <Clock className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-bold">Business Hours</h3>
              <p className="text-white/90">Dubai: Sun-Thu 9AM-6PM</p>
              <p className="text-white/90">London: Mon-Fri 9AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
