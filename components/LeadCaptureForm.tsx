"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Send, TrendingUp, User, Mail, Building, DollarSign, MessageSquare, Crown, Zap } from 'lucide-react';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    challenge: ''
  });

  console.log("LeadCaptureForm component rendered");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you! We'll contact you within 24 hours to discuss your AI-powered e-commerce strategy.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    console.log(`Form field ${field} updated:`, value);
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-jasper-purple/5 to-jasper-blue/10 rounded-2xl shadow-2xl p-8 max-w-md border border-jasper-purple/20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-jasper-purple/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-jasper-blue/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-jasper-purple to-jasper-blue p-2 rounded-xl mr-3 shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-jasper-gray">
                Premium Strategy Session
              </h3>
              <p className="text-xs text-jasper-purple font-medium">Exclusive AI Consultation</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-jasper-green to-emerald-400 px-4 py-2 rounded-full shadow-lg pulse-glow">
            <span className="text-xs font-bold text-white flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              FREE
            </span>
          </div>
        </div>
        <div className="bg-jasper-purple/10 border border-jasper-purple/20 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-sm text-jasper-gray font-medium text-center">
            🚀 Discover how AI can boost your e-commerce sales by <span className="text-jasper-purple font-bold">89% in 90 days</span>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
        <div className="relative group">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-jasper-purple/50 group-hover:text-jasper-purple transition-colors" />
          <Input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="pl-12 h-12 border-2 border-jasper-purple/20 focus:border-jasper-purple focus:ring-jasper-purple/30 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            required
          />
        </div>

        <div className="relative group">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-jasper-purple/50 group-hover:text-jasper-purple transition-colors" />
          <Input
            type="email"
            placeholder="Business Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="pl-12 h-12 border-2 border-jasper-purple/20 focus:border-jasper-purple focus:ring-jasper-purple/30 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            required
          />
        </div>

        <div className="relative group">
          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-jasper-purple/50 group-hover:text-jasper-purple transition-colors" />
          <Input
            placeholder="Company Name"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="pl-12 h-12 border-2 border-jasper-purple/20 focus:border-jasper-purple focus:ring-jasper-purple/30 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            required
          />
        </div>

        <div className="relative group">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-jasper-purple/50 group-hover:text-jasper-purple transition-colors z-10" />
          <Select onValueChange={(value) => handleInputChange('revenue', value)}>
            <SelectTrigger className="pl-12 h-12 border-2 border-jasper-purple/20 focus:border-jasper-purple focus:ring-jasper-purple/30 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <SelectValue placeholder="Monthly Revenue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-10k">$0 - $10,000</SelectItem>
              <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
              <SelectItem value="500k+">$500,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative group">
          <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-jasper-purple/50 group-hover:text-jasper-purple transition-colors" />
          <Textarea
            placeholder="What's your biggest e-commerce challenge?"
            value={formData.challenge}
            onChange={(e) => handleInputChange('challenge', e.target.value)}
            className="pl-12 border-2 border-jasper-purple/20 focus:border-jasper-purple focus:ring-jasper-purple/30 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl min-h-[100px]"
            rows={3}
          />
        </div>

        <Button
          type="submit"
          className="w-full h-14 bg-gradient-to-r from-jasper-purple via-violet-600 to-jasper-blue hover:from-jasper-purple/90 hover:via-violet-600/90 hover:to-jasper-blue/90 text-white font-bold text-lg rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <Send className="w-5 h-5 mr-3" />
          Get My Free Strategy Session
        </Button>
      </form>

      <div className="relative z-10 mt-8 pt-6 border-t border-jasper-purple/20">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-jasper-green/10 border border-jasper-green/30 rounded-lg p-3 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 mr-2 text-jasper-green" />
            <span className="text-sm font-semibold text-jasper-green">89% Average Revenue Increase</span>
          </div>
          <div className="flex items-center justify-center space-x-4 text-xs text-jasper-gray/60">
            <span>✅ No contracts</span>
            <span>✅ No spam</span>
            <span>✅ 24hr response</span>
          </div>
        </div>
        <p className="text-center text-xs text-jasper-gray/50 mt-3 font-medium">
          🔒 Your data is secure with us. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
