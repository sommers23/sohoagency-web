"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Globe, Search, Users, BarChart } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "WEBSITE OPTIMIZATION",
    description: "Transforming your e-commerce platform into a high-converting sales machine through AI-powered analysis and strategic enhancements.",
    color: "jasper-purple"
  },
  {
    icon: Search,
    title: "SEO & LEAD GENERATION", 
    description: "Driving qualified traffic to your online store with cutting-edge AI tools that identify and capture your ideal customers.",
    color: "jasper-blue"
  },
  {
    icon: Users,
    title: "SOCIAL MEDIA MARKETING",
    description: "Building your brand presence across platforms with AI-enhanced content strategies that engage your target audience and drive conversions.",
    color: "jasper-green"
  },
  {
    icon: BarChart,
    title: "AI-POWERED ANALYTICS",
    description: "Leveraging advanced data analysis to uncover customer insights and optimize your e-commerce performance for maximum ROI.",
    color: "jasper-purple"
  }
];

export default function ServicesSection() {
  console.log("ServicesSection component rendered");

  return (
    <section id="services" className="py-20 bg-jasper-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-jasper-gray mb-6">
            OUR EXPERTISE
          </h2>
          <p className="text-xl text-jasper-gray/70 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your e-commerce business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-${service.color}/10`}>
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-jasper-gray group-hover:text-jasper-purple transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-jasper-gray/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}