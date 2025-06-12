import { CheckCircle, Target, TrendingUp, Users, Eye, BarChart3, Database, Lightbulb, Zap } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AnalyticsPage() {
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
            <BarChart3 className="w-5 h-5 text-jasper-purple" />
            <span className="text-jasper-purple font-medium">AI-Powered Analytics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-jasper-gray mb-8 leading-tight">
            Leverage Advanced Data Analysis for{' '}
            <span className="bg-gradient-jasper bg-clip-text text-transparent">
              Maximum E-commerce ROI
            </span>
          </h1>
          
          <p className="text-xl text-jasper-gray/70 max-w-4xl mx-auto leading-relaxed">
            In the data-rich world of e-commerce, success belongs to businesses that can extract meaningful insights and take action. 
            At Soho Agency, we harness the power of AI-driven analytics to uncover customer insights, optimize performance, and maximize your return on investment.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-jasper-gray mb-6">Our Approach</h2>
            <p className="text-xl text-jasper-gray/70 max-w-3xl mx-auto">
              We transform complex data into clear, actionable strategies that drive business growth:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Customer Behavior Analysis",
                description: "Understanding how visitors interact with your site and identifying optimization opportunities"
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Forecasting trends and customer behaviors to stay ahead of the market"
              },
              {
                icon: Target,
                title: "Conversion Funnel Optimization",
                description: "Identifying and eliminating drop-off points in your sales process"
              },
              {
                icon: Users,
                title: "Customer Segmentation",
                description: "Creating detailed buyer personas for targeted marketing efforts"
              },
              {
                icon: BarChart3,
                title: "Competitive Intelligence",
                description: "Analyzing competitor performance and identifying market opportunities"
              },
              {
                icon: Database,
                title: "ROI Tracking",
                description: "Measuring the effectiveness of all marketing initiatives with precision"
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
                title: "Analytics Audit",
                description: "We assess your current data collection and reporting capabilities"
              },
              {
                step: "2",
                title: "Custom Dashboard Creation",
                description: "We build intuitive dashboards that highlight your most important metrics"
              },
              {
                step: "3",
                title: "AI Model Implementation",
                description: "Our team deploys machine learning models tailored to your business needs"
              },
              {
                step: "4",
                title: "Insight Generation",
                description: "We translate complex data into clear, actionable business recommendations"
              },
              {
                step: "5",
                title: "Continuous Optimization",
                description: "You receive ongoing analysis and strategy adjustments based on performance data"
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
                Case Study: Home Goods Retailer Increases Customer Lifetime Value by{' '}
                <span className="text-jasper-cyan">68%</span>
              </h2>
              <p className="text-lg text-jasper-gray/70 max-w-4xl mx-auto">
                A medium-sized home goods e-commerce store was collecting data but struggling to use it effectively. 
                They couldn't identify which products to promote or understand why customers weren't returning for repeat purchases.
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
                    Implemented advanced customer segmentation using AI
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 flex-shrink-0" />
                    Created predictive models to identify high-value customers
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 flex-shrink-0" />
                    Analyzed purchase patterns to optimize product recommendations
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 flex-shrink-0" />
                    Developed targeted retention campaigns based on customer behavior
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-jasper-cyan mt-0.5 flex-shrink-0" />
                    Set up automated reporting dashboards for key metrics
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
                    { metric: "68%", label: "increase in customer lifetime value" },
                    { metric: "41%", label: "improvement in repeat purchase rate" },
                    { metric: "27%", label: "reduction in customer acquisition costs" },
                    { metric: "52%", label: "higher conversion rate for recommendations" }
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
                "Soho Agency turned our mountain of data into a goldmine of insights. For the first time, we truly understand our customers and can make decisions based on facts, not hunches. The impact on our bottom line has been remarkable."
              </blockquote>
              <cite className="text-jasper-cyan font-semibold">— David K., E-commerce Director</cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-jasper-gray mb-8">
            Ready to Unlock the Power of Your Data?
          </h2>
          <p className="text-xl text-jasper-gray/70 mb-12 leading-relaxed">
            Let's transform your business intelligence into a competitive advantage. Contact us today for a free analytics assessment 
            and discover how our AI-powered approach can drive measurable growth for your e-commerce business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-jasper text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-jasper-purple/25 transition-all duration-300 transform hover:scale-105">
              Get Free Analytics Assessment
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
    </main>
  )
}
