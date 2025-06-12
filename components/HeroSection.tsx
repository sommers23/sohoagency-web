"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import SalesStream from './SalesStream';
import LeadCaptureForm from './LeadCaptureForm';

export default function HeroSection() {
  console.log("HeroSection component rendered");

  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-white via-jasper-light/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-jasper-purple/10 text-jasper-purple rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered E-Commerce Solutions
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-jasper-gray leading-tight">
              UNLOCKING THE{' '}
              <span className="bg-gradient-jasper bg-clip-text text-transparent">
                POWER OF AI
              </span>{' '}
              FOR E-COMMERCE SUCCESS
            </h1>
            
            <p className="text-xl text-jasper-gray/70 max-w-2xl leading-relaxed">
              Empowering small and medium businesses with innovative lead generation, conversion focused strategies, and real-time analytics. Our AI-Powered tools help you scale smarter, not harder turning every data point into opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-jasper-purple hover:bg-jasper-purple/90 text-white px-8 py-4 text-lg group"
              >
                BOOST YOUR SALES TODAY
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-jasper-purple text-jasper-purple hover:bg-jasper-purple hover:text-white px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8">
              <p className="text-sm text-jasper-gray/60 mb-4">TRUSTED BY 500+ BUSINESSES</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-jasper-gray font-semibold">Shopify</div>
                <div className="text-jasper-gray font-semibold">WooCommerce</div>
                <div className="text-jasper-gray font-semibold">BigCommerce</div>
                <div className="text-jasper-gray font-semibold">Magento</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 space-y-6">
              {/* Analytics Dashboard */}
              <div className="bg-gradient-hero p-8 rounded-3xl shadow-2xl animate-float">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-jasper-gray">AI Analytics Dashboard</h3>
                      <div className="w-3 h-3 bg-jasper-green rounded-full animate-pulse-glow"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-jasper-light p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-jasper-gray">Conversion Rate</span>
                          <span className="font-bold text-jasper-green">+34%</span>
                        </div>
                      </div>
                      <div className="bg-jasper-light p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-jasper-gray">Lead Generation</span>
                          <span className="font-bold text-jasper-blue">+142%</span>
                        </div>
                      </div>
                      <div className="bg-jasper-light p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-jasper-gray">Revenue Growth</span>
                          <span className="font-bold text-jasper-purple">+89%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Sales Stream */}
              <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                <SalesStream />
              </div>

              {/* Lead Capture Form */}
              <div className="animate-float" style={{ animationDelay: '1s' }}>
                <LeadCaptureForm />
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-jasper-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-jasper-blue/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
