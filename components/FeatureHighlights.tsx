"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    headline: "ELEVATE YOUR E-COMMERCE PERFORMANCE",
    description: "At Soho Agency, we harness the latest AI tools to optimize every aspect of your online business. Our approach combines technological innovation with strategic marketing—transforming your website into a powerful lead generation and sales platform.",
    buttonText: "LEARN MORE",
    gradient: "from-jasper-purple to-jasper-blue",
    reverse: false
  },
  {
    icon: Target,
    headline: "FROM VISITORS TO CUSTOMERS",
    description: "Our unique methodology bridges the gap between traffic and conversions. We don't just bring visitors to your site—we implement AI-driven strategies that nurture leads, optimize the customer journey, and dramatically increase your conversion rates.",
    buttonText: "SEE OUR RESULTS",
    gradient: "from-jasper-blue to-jasper-green",
    reverse: true
  },
  {
    icon: Zap,
    headline: "EXPERIENCE THE FUTURE OF E-COMMERCE",
    description: "Step into a world where AI amplifies your business potential. Our colorful brain logo represents our philosophy perfectly—blending technological precision with creative marketing strategies to deliver e-commerce solutions that outperform traditional approaches.",
    buttonText: "GET STARTED",
    gradient: "from-jasper-green to-jasper-purple",
    reverse: false
  }
];

export default function FeatureHighlights() {
  console.log("FeatureHighlights component rendered");

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div key={index} className={`mb-32 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={`space-y-8 ${feature.reverse ? 'lg:order-2' : ''}`}>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient}/10`}>
                  <feature.icon className="w-8 h-8 text-jasper-purple" />
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-jasper-gray leading-tight">
                  {feature.headline}
                </h2>
                
                <p className="text-xl text-jasper-gray/70 leading-relaxed">
                  {feature.description}
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-jasper-purple hover:bg-jasper-purple/90 text-white px-8 py-4 text-lg group"
                >
                  {feature.buttonText}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual Element */}
              <div className={`relative ${feature.reverse ? 'lg:order-1' : ''}`}>
                <div className="relative z-10">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-1 rounded-3xl shadow-2xl`}>
                    <div className="bg-white p-8 rounded-3xl">
                      <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-4">
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div 
                              key={item} 
                              className={`h-12 bg-gradient-to-r ${feature.gradient}/20 rounded-lg animate-pulse`}
                              style={{ animationDelay: `${item * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="h-4 bg-jasper-light rounded w-1/3"></div>
                            <div className="h-6 bg-jasper-green/20 rounded w-1/4 flex items-center justify-center">
                              <span className="text-xs font-bold text-jasper-green">+{(index + 1) * 25}%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="h-4 bg-jasper-light rounded w-1/2"></div>
                            <div className="h-6 bg-jasper-blue/20 rounded w-1/4 flex items-center justify-center">
                              <span className="text-xs font-bold text-jasper-blue">+{(index + 1) * 35}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background decorative elements */}
                <div className={`absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-r ${feature.gradient}/10 rounded-full blur-3xl`}></div>
                <div className={`absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-r ${feature.gradient}/5 rounded-full blur-3xl`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
