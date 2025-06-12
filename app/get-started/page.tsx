"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, BarChart3, Phone, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    websiteURL: '',
    yourName: '',
    email: '',
    phone: '',
    country: '',
    challenges: [],
    goal: '',
    revenue: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Submit logic here
    console.log('Form data:', formData);
  };

  const handleCheckboxChange = (value: string) => {
    const current = formData.challenges;
    setFormData({
      ...formData,
      challenges: current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    });
  };

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Start Your Free E-Commerce Assessment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="websiteURL">Website URL *</Label>
              <Input
                id="websiteURL"
                type="url"
                value={formData.websiteURL}
                onChange={(e) => setFormData({ ...formData, websiteURL: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="yourName">Your Name *</Label>
              <Input
                id="yourName"
                value={formData.yourName}
                onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Country Dropdown */}
            <div>
              <Label htmlFor="country">Country</Label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select your country</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="AE">United Arab Emirates</option>
                <option value="IN">India</option>
                <option value="CA">Canada</option>
              </select>
            </div>
          </div>

          {/* Challenges Section */}
          <div>
            <Label>Current Challenges (Select all that apply)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              {[
                'Low website conversion rates',
                'Poor social media performance',
                'High customer acquisition costs',
                'Not enough qualified traffic',
                'Difficulty measuring marketing ROI',
                'Low repeat purchase rates',
              ].map((label) => (
                <label key={label} className="flex items-center gap-2">
                  <Checkbox
                    checked={formData.challenges.includes(label)}
                    onCheckedChange={() => handleCheckboxChange(label)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Goal & Revenue */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Primary Goal *</Label>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select your main goal</option>
                <option value="increaseSales">Increase Sales</option>
                <option value="boostTraffic">Boost Website Traffic</option>
                <option value="improveConversions">Improve Conversions</option>
              </select>
            </div>
            <div>
              <Label>Monthly Revenue Range</Label>
              <select
                value={formData.revenue}
                onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select revenue range</option>
                <option value="<5k">Less than $5,000</option>
                <option value="5k-20k">$5,000 - $20,000</option>
                <option value="20k-100k">$20,000 - $100,000</option>
                <option value=">100k">Over $100,000</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full mt-4">
            Get Your Free Assessment
          </Button>
        </form>
      </main>
      <Footer />
    </>
  );
}
