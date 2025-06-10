"use client"

import { Brain, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  console.log("Footer component rendered");

  return (
    <footer className="bg-jasper-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-jasper p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Soho Agency</span>
            </div>
            
            <p className="text-lg font-medium text-jasper-blue">
              OPTIMIZING E-COMMERCE WITH AI INNOVATION
            </p>
            
            <p className="text-gray-300 max-w-md">
              Empowering small and medium businesses with cutting-edge AI tools and strategic marketing solutions that drive real results.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-jasper-blue transition-colors">Website Optimization</a></li>
              <li><a href="#" className="hover:text-jasper-blue transition-colors">SEO & Lead Generation</a></li>
              <li><a href="#" className="hover:text-jasper-blue transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-jasper-blue transition-colors">AI-Powered Analytics</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@sohoagency.co" 
                className="block text-gray-300 hover:text-jasper-blue transition-colors"
              >
                info@sohoagency.co
              </a>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-jasper-blue transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-jasper-blue transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-jasper-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Soho Agency. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-jasper-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-jasper-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-jasper-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}