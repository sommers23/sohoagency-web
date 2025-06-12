import React from 'react'
import { CheckCircle, Target, TrendingUp, Users, Instagram, Facebook, Twitter, Linkedin, Camera, Heart, Share2, Zap, BarChart3, MessageCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-white via-jasper-cyan/5 to-jasper-purple/5">
        
        {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-jasper text-white rounded-full px-6 py-3 mb-8 font-medium">
            <Share2 className="w-5 h-5" />
            Social Media Marketing
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-jasper-gray mb-8 leading-tight">
            Build Your Brand Presence and Drive E-commerce{' '}
            <span className="bg-gradient-jasper bg-clip-text text-transparent">
              Conversions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-jasper-gray/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            In today's digital marketplace, effective social media marketing is essential for e-commerce success. At Soho Agency, we leverage AI-powered strategies to build your brand presence across platforms, engage your target audience, and drive measurable conversions.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-jasper-gray mb-6">Our Approach</h2>
            <p className="text-xl text-jasper-gray/70 max-w-3xl mx-auto">
              We go beyond basic posting to create data-driven social media strategies that deliver real business results:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-jasper-purple/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-jasper-purple/10 transition-all duration-300 group">
              <div className="bg-gradient-jasper rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-jasper-gray mb-4">AI-Powered Content Creation</h3>
              <p className="text-jasper-gray/70 leading-relaxed">
                Developing engaging, on-brand content that resonates with your audience
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-jasper-purple/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-jasper-purple/10 transition-all duration-300 group">
              <div className="bg-gradient-jasper rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-jasper-gray mb-4">Strategic Platform Selection</h3>
              <p className="text-jasper-gray/70 leading-relaxed">
                Focusing on the platforms where your ideal customers spend their time
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-jasper-purple/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-jasper-purple/10 transition-all duration-300 group">
              <div className="bg-gradient-jasper rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-jasper-gray mb-4">Paid Social Campaigns</h3>
              <p className="text-jasper-gray/70 leading-relaxed">
                Creating targeted ad campaigns with precise audience segmentation
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-jasper-purple/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-jasper-purple/10 transition-all duration-300 group">
              <div className="bg-gradient-jasper rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-jasper-gray mb-4">Community Management</h3>
              <p className="text-jasper-gray/70 leading-relaxed">
                Building and nurturing an engaged community around your brand
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-jasper-purple/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-jasper-purple/10 transition-all duration-300 group">
              <div className="bg-gradient-jasper rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-jasper-gray mb-4">Influencer Collaboration</h3>
              <p className="text-jasper-gray/70 leading-relaxed">
                Identifying and partnering with relevant micro-influencers in your niche
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-jasper-purple/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-jasper-purple/10 transition-all duration-300 group">
              <div className="bg-gradient-jasper rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-jasper-gray mb-4">Social Shopping Integration</h3>
              <p className="text-jasper-gray/70 leading-relaxed">
                Optimizing your profiles for direct e-commerce conversions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Results */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-jasper-gray mb-12 text-center">How We Deliver Results</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-gradient-jasper rounded-full p-3 min-w-fit">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-jasper-gray mb-2">Social Media Audit</h3>
                <p className="text-jasper-gray/70">We analyze your current presence and identify opportunities for improvement</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-gradient-jasper rounded-full p-3 min-w-fit">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-jasper-gray mb-2">Strategy Development</h3>
                <p className="text-jasper-gray/70">We create a customized social media plan aligned with your business goals</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-gradient-jasper rounded-full p-3 min-w-fit">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-jasper-gray mb-2">Content Calendar Creation</h3>
                <p className="text-jasper-gray/70">We develop a consistent posting schedule with engaging content</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-gradient-jasper rounded-full p-3 min-w-fit">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-jasper-gray mb-2">Campaign Implementation</h3>
                <p className="text-jasper-gray/70">Our team executes organic and paid strategies across platforms</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-gradient-jasper rounded-full p-3 min-w-fit">
                <span className="text-white font-bold text-lg">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-jasper-gray mb-2">Performance Analysis</h3>
                <p className="text-jasper-gray/70">You receive regular reports showing engagement, traffic, and conversion metrics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-jasper-purple/20 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-jasper-gray mb-6">
                Case Study: Handmade Jewelry Brand Increases Sales by 87%
              </h2>
              <p className="text-lg text-jasper-gray/70">
                A small handmade jewelry business was struggling to stand out on social media. Despite creating beautiful products, they weren't effectively showcasing them or reaching their target audience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-jasper-gray mb-6">Our Solution:</h3>
                <ul className="space-y-3 text-jasper-gray/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 min-w-fit" />
                    <span>Implemented AI-powered content strategy focusing on Instagram and Pinterest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 min-w-fit" />
                    <span>Created shoppable posts with direct links to products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 min-w-fit" />
                    <span>Developed micro-influencer partnerships with fashion bloggers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 min-w-fit" />
                    <span>Established consistent posting schedule with varied content types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 min-w-fit" />
                    <span>Launched targeted ad campaigns to lookalike audiences</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-jasper-gray mb-6">The Results:</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-jasper-purple/10 to-jasper-cyan/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-jasper-purple">87%</div>
                    <div className="text-sm text-jasper-gray/70">increase in social media-driven sales within 3 months</div>
                  </div>
                  <div className="bg-gradient-to-r from-jasper-purple/10 to-jasper-cyan/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-jasper-purple">156%</div>
                    <div className="text-sm text-jasper-gray/70">growth in Instagram followers</div>
                  </div>
                  <div className="bg-gradient-to-r from-jasper-purple/10 to-jasper-cyan/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-jasper-purple">43%</div>
                    <div className="text-sm text-jasper-gray/70">higher engagement rate across platforms</div>
                  </div>
                  <div className="bg-gradient-to-r from-jasper-purple/10 to-jasper-cyan/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-jasper-purple">3.2x</div>
                    <div className="text-sm text-jasper-gray/70">return on ad spend for social campaigns</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-jasper-purple/5 to-jasper-cyan/5 rounded-2xl p-6 border-l-4 border-jasper-purple">
              <p className="text-lg text-jasper-gray/80 italic leading-relaxed">
                "Soho Agency transformed our social media from an afterthought into our primary sales channel. They understood exactly how to showcase our products and reach people who love handmade jewelry."
              </p>
              <div className="mt-4 text-jasper-gray font-semibold">— Emma L., Founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-jasper-gray mb-8">
            Ready to Elevate Your Social Media Presence?
          </h2>
          <p className="text-xl text-jasper-gray/70 mb-12 leading-relaxed">
            Let's create a social strategy that builds your brand and drives e-commerce results. Contact us today for a free social media assessment and discover how our AI-powered approach can transform your online presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-jasper text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-jasper-purple/25 transition-all duration-300 transform hover:scale-105">
              Get Free Social Media Assessment
            </button>
            <button className="bg-white/80 backdrop-blur-sm border border-jasper-purple/20 text-jasper-gray px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  )
}
