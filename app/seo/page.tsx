'use client'

import { useState } from 'react'
import { CheckCircle, Target, TrendingUp, Users, Search, BarChart3, FileText, Lightbulb, Zap, Globe } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SeoAuditForm from '@/components/SeoAuditForm'

export default function SeoPage() {
  const [isAuditFormOpen, setIsAuditFormOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-white via-jasper-light/30 to-white">
        <div className="pt-16">
        </div>
        <div className="min-h-screen bg-gradient-to-br from-white via-jasper-light/30 to-white">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-jasper-purple/10 border border-jasper-purple/20 rounded-full px-6 py-2 mb-8">
                <Search className="w-5 h-5 text-jasper-purple" />
                <span className="text-jasper-purple font-medium">SEO & Lead Generation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-jasper-gray mb-8 leading-tight">
                Drive Qualified Traffic and{' '}
                <span className="bg-gradient-jasper bg-clip-text text-transparent">
                  Capture Your Ideal Customers
                </span>
              </h1>
              
              <p className="text-xl text-jasper-gray/70 max-w-4xl mx-auto leading-relaxed">
                In the competitive e-commerce landscape, visibility is everything. At Soho Agency, we combine advanced SEO strategies with AI-powered lead generation to ensure your business isn't just seen—it's discovered by the right customers at the right time.
              </p>
            </div>
          </section>

          {/* Our Approach Section */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-jasper-gray mb-6">Our Approach</h2>
                <p className="text-xl text-jasper-gray/70 max-w-3xl mx-auto">
                  We go beyond basic keyword optimization to create comprehensive search and lead generation strategies that deliver measurable results:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Search,
                    title: "AI-Powered Keyword Research",
                    description: "Identifying high-intent search terms your ideal customers are using"
                  },
                  {
                    icon: BarChart3,
                    title: "Technical SEO",
                    description: "Ensuring your e-commerce platform meets all search engine requirements for optimal ranking"
                  },
                  {
                    icon: FileText,
                    title: "Content Strategy",
                    description: "Creating valuable, optimized content that attracts and engages your target audience"
                  },
                  {
                    icon: Globe,
                    title: "Local SEO",
                    description: "Dominating local search results to capture nearby customers"
                  },
                  {
                    icon: Target,
                    title: "Lead Capture Optimization",
                    description: "Designing high-converting lead magnets and forms"
                  },
                  {
                    icon: Users,
                    title: "Lead Nurturing Sequences",
                    description: "Developing automated follow-up systems that convert prospects into customers"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm border border-jasper-purple/10 rounded-2xl p-8 hover:bg-white/90 hover:shadow-lg transition-all duration-300 group">
                    <div className="bg-gradient-jasper p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-jasper-gray mb-4">{item.title}</h3>
                    <p className="text-jasper-gray/70 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How We Deliver Results */}
          <section className="py-20 px-6 bg-jasper-light/20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-jasper-gray mb-6">How We Deliver Results</h2>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Comprehensive SEO Audit",
                    description: "We analyze your current search presence and identify opportunities"
                  },
                  {
                    step: "2",
                    title: "Competitor Analysis",
                    description: "We study what's working in your industry and how to outperform competitors"
                  },
                  {
                    step: "3",
                    title: "Strategic Implementation",
                    description: "Our team executes technical SEO improvements and content optimization"
                  },
                  {
                    step: "4",
                    title: "Lead Generation System Setup",
                    description: "We implement and optimize lead capture and nurturing systems"
                  },
                  {
                    step: "5",
                    title: "Performance Tracking",
                    description: "You receive regular reports showing ranking improvements and lead metrics"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6 bg-white/80 backdrop-blur-sm border border-jasper-purple/10 rounded-2xl p-8 hover:bg-white/90 hover:shadow-lg transition-all duration-300">
                    <div className="bg-gradient-jasper rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-jasper-gray mb-3">{item.title}</h3>
                      <p className="text-jasper-gray/70 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-jasper-purple/10 to-jasper-cyan/10 border border-jasper-purple/20 rounded-3xl p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-jasper-gray mb-4">
                    Case Study: Specialty Food Retailer Increases Qualified Leads by{' '}
                    <span className="text-jasper-cyan">215%</span>
                  </h2>
                  <p className="text-lg text-jasper-gray/70 max-w-4xl mx-auto">
                    A specialty food e-commerce store was struggling to attract the right customers. Despite selling premium products, they weren't appearing in relevant searches, and their website visitors rarely converted to leads.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-jasper-gray mb-6 flex items-center gap-3">
                      <Lightbulb className="w-6 h-6 text-jasper-purple" />
                      Our Solution:
                    </h3>
                    <ul className="space-y-3 text-jasper-gray/70">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 flex-shrink-0" />
                        Implemented AI-driven keyword research to target high-intent food enthusiasts
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 flex-shrink-0" />
                        Optimized product pages for specific search terms
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 flex-shrink-0" />
                        Created a recipe blog with SEO-optimized content
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 flex-shrink-0" />
                        Developed a free e-cookbook as a lead magnet
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 flex-shrink-0" />
                        Set up automated email sequences for lead nurturing
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-jasper-gray mb-6 flex items-center gap-3">
                      <Zap className="w-6 h-6 text-jasper-cyan" />
                      The Results:
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { metric: "215%", label: "increase in qualified leads" },
                        { metric: "78%", label: "improvement in organic search traffic" },
                        { metric: "5", label: "product pages ranking on page 1" },
                        { metric: "32%", label: "of leads converted to customers" }
                      ].map((stat, index) => (
                        <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-jasper-purple/10">
                          <div className="text-3xl font-bold text-jasper-cyan mb-1">{stat.metric}</div>
                          <div className="text-sm text-jasper-gray/70">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-jasper-cyan">
                  <blockquote className="text-xl text-jasper-gray leading-relaxed italic mb-4">
                    "Before working with Soho Agency, we were invisible online. Now we're consistently attracting exactly the type of customers we want—people who appreciate premium food products and are ready to buy."
                  </blockquote>
                  <cite className="text-jasper-cyan font-semibold">— Michael R., Founder</cite>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-jasper-gray mb-8">
                Ready to Boost Your Search Visibility and Lead Generation?
              </h2>
              <p className="text-xl text-jasper-gray/70 mb-12 leading-relaxed">
                Let's create a strategy that puts your business in front of your ideal customers. Contact us today for a free SEO audit and discover how our AI-powered approach can transform your e-commerce traffic and leads.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsAuditFormOpen(true)}
                  className="bg-gradient-jasper text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-jasper-purple/25 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free SEO Audit
                </button>
                <button className="bg-white/80 backdrop-blur-sm border border-jasper-purple/20 text-jasper-gray px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all duration-300">
                  View More Case Studies
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      
      <SeoAuditForm 
        isOpen={isAuditFormOpen}
        onClose={() => setIsAuditFormOpen(false)}
      />
    </main>
  )
}
