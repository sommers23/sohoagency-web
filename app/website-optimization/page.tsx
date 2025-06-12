import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

export default function WebsiteOptimizationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-white via-jasper-cyan/5 to-jasper-purple/5">
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Website Optimization
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Transform Your E-commerce Platform into a Sales Machine
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-6">
                In today's digital marketplace, your website isn't just a digital storefront—it's your most 
                powerful sales tool. At Soho Agency, we leverage cutting-edge AI technology to transform 
                your e-commerce platform into a high-converting sales machine that delivers measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              Our website optimization service combines data-driven analysis with strategic enhancements to create 
              seamless user experiences that convert visitors into customers. We focus on:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-jasper-cyan/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-jasper-cyan to-jasper-purple rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Conversion Rate Optimization (CRO)</h3>
                <p className="text-gray-600">Using AI-powered heat mapping and user behavior analysis to identify and eliminate conversion barriers</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-jasper-cyan/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-jasper-cyan to-jasper-purple rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Page Speed Enhancement</h3>
                <p className="text-gray-600">Implementing technical optimizations that reduce load times and keep customers engaged</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-jasper-cyan/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-jasper-cyan to-jasper-purple rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Responsiveness</h3>
                <p className="text-gray-600">Ensuring flawless performance across all devices to capture the growing mobile shopping audience</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-jasper-cyan/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-jasper-cyan to-jasper-purple rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">User Experience (UX) Design</h3>
                <p className="text-gray-600">Creating intuitive navigation and checkout processes that guide customers to purchase</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-jasper-cyan/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-jasper-cyan to-jasper-purple rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">🧪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">A/B Testing</h3>
                <p className="text-gray-600">Continuously testing design elements, CTAs, and content to maximize performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Deliver Results */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How We Deliver Results</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-jasper-cyan to-jasper-purple rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Audit</h3>
                  <p className="text-gray-600">We analyze your current website performance, identifying strengths and opportunities for improvement</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-jasper-cyan to-jasper-purple rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Optimization Plan</h3>
                  <p className="text-gray-600">We develop a customized roadmap targeting your specific e-commerce goals</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-jasper-cyan to-jasper-purple rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-gray-600">Our team executes technical and design enhancements using the latest AI tools</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-jasper-cyan to-jasper-purple rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Testing</h3>
                  <p className="text-gray-600">We implement ongoing A/B testing to refine and improve performance</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-jasper-cyan to-jasper-purple rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Tracking</h3>
                  <p className="text-gray-600">You receive regular reports showing clear ROI and conversion improvements</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Case Study: Local Furniture Retailer Increases Sales by 43%</h2>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-jasper-cyan/20">
              <p className="text-lg text-gray-600 mb-6">
                A family-owned furniture business was struggling with an outdated website that wasn't converting visitors. 
                Their bounce rate was high (78%), and mobile users rarely completed purchases.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Implemented responsive design optimized for mobile shoppers</li>
                  <li>• Streamlined the checkout process from 5 steps to 2</li>
                  <li>• Added AI-powered product recommendations</li>
                  <li>• Enhanced page load speed by 67%</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">The Results:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 43% increase in online sales within 3 months</li>
                    <li>• 52% reduction in cart abandonment</li>
                    <li>• 2.8x increase in mobile conversions</li>
                    <li>• Average order value increased by 22%</li>
                  </ul>
                </div>

                <div className="bg-jasper-cyan/5 rounded-lg p-6">
                  <blockquote className="text-gray-700 italic mb-4">
                    "Soho Agency transformed our website from a digital brochure into our best salesperson. 
                    The results speak for themselves—more sales, happier customers, and a website that actually 
                    works for our business."
                  </blockquote>
                  <cite className="text-gray-600 font-medium">— Sarah T., Owner</cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-jasper-cyan/10 to-jasper-purple/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Optimize Your E-commerce Website?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's transform your online presence into a powerful sales tool. Contact us today for a free 
              website audit and discover how our AI-powered optimization strategies can drive real results for your business.
            </p>
            <Button className="bg-gradient-to-r from-jasper-cyan to-jasper-purple text-white px-8 py-3 text-lg hover:shadow-lg transition-all duration-300">
              Get Free Website Audit
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
