"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Brain } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("Header component rendered");

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="bg-gradient-jasper p-2 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-jasper-gray">Soho Agency</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">Services</a>
            <a href="/seo" className="text-sm font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">SEO</a>
            <a href="/analytics" className="text-sm font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">Analytics</a>
            <a href="/social-media" className="text-sm font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">Social Media</a>
            <a href="/website-optimization" className="text-sm font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">Website Optimization</a>
            <a href="#contact" className="text-sm font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">Contact</a>
            <Button 
              className="bg-jasper-purple hover:bg-jasper-purple/90 text-white px-5 py-2 text-sm"
              onClick={() => window.location.href = '/get-started'}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-jasper-gray hover:text-jasper-purple"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <a href="#services" className="font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">Services</a>
              <a href="/seo" className="font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">SEO</a>
              <a href="/analytics" className="font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">Analytics</a>
              <a href="/social-media" className="font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">Social Media</a>
              <a href="/website-optimization" className="font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">Website Optimization</a>
              <a href="#contact" className="font-semibold text-jasper-gray hover:text-jasper-purple transition-colors">Contact</a>
              <Button 
                className="bg-jasper-purple hover:bg-jasper-purple/90 text-white w-full mt-4"
                onClick={() => window.location.href = '/get-started'}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}