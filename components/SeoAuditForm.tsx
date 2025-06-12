'use client'

import { useState } from 'react'
import { X, Globe, Search, BarChart3, Target, Sparkles, ArrowRight } from 'lucide-react'

interface SeoAuditFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function SeoAuditForm({ isOpen, onClose }: SeoAuditFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    email: '',
    phone: '',
    monthlyRevenue: '',
    currentTraffic: '',
    mainGoals: [] as string[],
    additionalInfo: ''
  })

  const goalOptions = [
    'Increase organic traffic',
    'Improve search rankings', 
    'Generate more leads',
    'Boost online sales',
    'Enhance local visibility',
    'Outrank competitors'
  ]

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      mainGoals: prev.mainGoals.includes(goal)
        ? prev.mainGoals.filter(g => g !== goal)
        : [...prev.mainGoals, goal]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('SEO Audit Form submitted:', formData)
    // Handle form submission here
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-jasper p-8 rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Search className="w-5 h-5" />
              <span className="font-medium">Free SEO Audit</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Comprehensive SEO Analysis
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover exactly what's holding your website back from ranking higher and generating more organic traffic.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Business Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-jasper-gray font-semibold mb-3">
                Business Name *
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-jasper-purple/60 w-5 h-5" />
                <input
                  type="text"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-jasper-purple/20 rounded-xl focus:ring-2 focus:ring-jasper-purple/30 focus:border-jasper-purple/50 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  placeholder="Your business name"
                  value={formData.businessName}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label className="block text-jasper-gray font-semibold mb-3">
                Website URL *
              </label>
              <div className="relative">
                <BarChart3 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-jasper-purple/60 w-5 h-5" />
                <input
                  type="url"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-jasper-purple/20 rounded-xl focus:ring-2 focus:ring-jasper-purple/30 focus:border-jasper-purple/50 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                />
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-jasper-gray font-semibold mb-3">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-4 border border-jasper-purple/20 rounded-xl focus:ring-2 focus:ring-jasper-purple/30 focus:border-jasper-purple/50 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-jasper-gray font-semibold mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-4 border border-jasper-purple/20 rounded-xl focus:ring-2 focus:ring-jasper-purple/30 focus:border-jasper-purple/50 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </div>

          {/* Business Metrics */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-jasper-gray font-semibold mb-3">
                Monthly Revenue Range
              </label>
              <select
                className="w-full px-4 py-4 border border-jasper-purple/20 rounded-xl focus:ring-2 focus:ring-jasper-purple/30 focus:border-jasper-purple/50 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                value={formData.monthlyRevenue}
                onChange={(e) => setFormData(prev => ({ ...prev, monthlyRevenue: e.target.value }))}
              >
                <option value="">Select range</option>
                <option value="0-10k">$0 - $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-500k">$100,000 - $500,000</option>
                <option value="500k+">$500,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-jasper-gray font-semibold mb-3">
                Current Monthly Traffic
              </label>
              <select
                className="w-full px-4 py-4 border border-jasper-purple/20 rounded-xl focus:ring-2 focus:ring-jasper-purple/30 focus:border-jasper-purple/50 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                value={formData.currentTraffic}
                onChange={(e) => setFormData(prev => ({ ...prev, currentTraffic: e.target.value }))}
              >
                <option value="">Select range</option>
                <option value="0-1k">0 - 1,000 visitors</option>
                <option value="1k-5k">1,000 - 5,000 visitors</option>
                <option value="5k-20k">5,000 - 20,000 visitors</option>
                <option value="20k-100k">20,000 - 100,000 visitors</option>
                <option value="100k+">100,000+ visitors</option>
              </select>
            </div>
          </div>

          {/* Goals */}
          <div>
            <label className="block text-jasper-gray font-semibold mb-4">
              What are your main SEO goals? (Select all that apply)
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              {goalOptions.map((goal) => (
                <label key={goal} className="flex items-center group cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={formData.mainGoals.includes(goal)}
                    onChange={() => handleGoalToggle(goal)}
                  />
                  <div className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${
                    formData.mainGoals.includes(goal)
                      ? 'border-jasper-purple bg-jasper-purple/10'
                      : 'border-jasper-purple/20 hover:border-jasper-purple/40 bg-white/80'
                  }`}>
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      formData.mainGoals.includes(goal)
                        ? 'border-jasper-purple bg-jasper-purple'
                        : 'border-jasper-purple/40'
                    }`}>
                      {formData.mainGoals.includes(goal) && (
                        <Target className="w-2.5 h-2.5 text-white" />
                      )}
                    </div>
                    <span className="text-jasper-gray font-medium">{goal}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <label className="block text-jasper-gray font-semibold mb-3">
              Additional Information
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-4 border border-jasper-purple/20 rounded-xl focus:ring-2 focus:ring-jasper-purple/30 focus:border-jasper-purple/50 transition-all duration-200 bg-white/80 backdrop-blur-sm resize-none"
              placeholder="Tell us about your current SEO challenges, target audience, main competitors, or any specific concerns..."
              value={formData.additionalInfo}
              onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
            />
          </div>

          {/* Audit Preview */}
          <div className="bg-gradient-to-r from-jasper-purple/10 to-jasper-cyan/10 border border-jasper-purple/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-jasper-purple" />
              <h3 className="text-xl font-bold text-jasper-gray">What You'll Receive</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-jasper-gray/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jasper-cyan rounded-full"></div>
                Complete technical SEO analysis
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jasper-cyan rounded-full"></div>
                Keyword opportunity research
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jasper-cyan rounded-full"></div>
                Competitor comparison report
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jasper-cyan rounded-full"></div>
                Priority action plan
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jasper-cyan rounded-full"></div>
                Traffic growth projections
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jasper-cyan rounded-full"></div>
                Custom strategy consultation
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="group bg-gradient-jasper text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-jasper-purple/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
            >
              Get My Free SEO Audit Report
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <p className="text-sm text-jasper-gray/60 mt-4">
              We'll email your detailed audit report within 24 hours
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
