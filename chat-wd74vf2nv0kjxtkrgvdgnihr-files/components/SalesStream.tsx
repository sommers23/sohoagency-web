"use client"

import { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, Clock } from 'lucide-react';

const salesData = [
  { customer: "Sarah M.", product: "Wireless Headphones", amount: "$129.99", location: "New York, NY", time: "2 min ago" },
  { customer: "Mike R.", product: "Smart Watch Pro", amount: "$299.99", location: "Los Angeles, CA", time: "1 min ago" },
  { customer: "Emma L.", product: "Fitness Tracker", amount: "$89.99", location: "Chicago, IL", time: "3 min ago" },
  { customer: "David K.", product: "Bluetooth Speaker", amount: "$149.99", location: "Miami, FL", time: "1 min ago" },
  { customer: "Lisa P.", product: "Laptop Stand", amount: "$59.99", location: "Seattle, WA", time: "4 min ago" },
  { customer: "John D.", product: "Gaming Mouse", amount: "$79.99", location: "Austin, TX", time: "2 min ago" },
  { customer: "Anna S.", product: "Wireless Charger", amount: "$39.99", location: "Boston, MA", time: "1 min ago" },
  { customer: "Chris B.", product: "Phone Case Pro", amount: "$24.99", location: "Denver, CO", time: "3 min ago" },
  { customer: "Maria G.", product: "Power Bank", amount: "$49.99", location: "Phoenix, AZ", time: "2 min ago" },
  { customer: "Ryan T.", product: "Cable Set", amount: "$19.99", location: "Portland, OR", time: "1 min ago" }
];

export default function SalesStream() {
  const [visibleSales, setVisibleSales] = useState<typeof salesData>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("SalesStream component rendered");

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSale = salesData[currentIndex % salesData.length];
      
      setVisibleSales(prev => {
        const newSales = [nextSale, ...prev].slice(0, 5); // Keep only 5 latest
        return newSales;
      });
      
      setCurrentIndex(prev => prev + 1);
    }, 2000); // New sale every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-jasper-gray flex items-center">
          <ShoppingBag className="w-5 h-5 mr-2 text-jasper-green" />
          Live Sales Feed
        </h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-jasper-green rounded-full animate-pulse-glow"></div>
          <span className="text-xs text-jasper-gray/60">LIVE</span>
        </div>
      </div>

      <div className="space-y-3 max-h-80 overflow-hidden">
        {visibleSales.map((sale, index) => (
          <div
            key={`${sale.customer}-${index}-${Date.now()}`}
            className={`bg-jasper-light/50 p-4 rounded-lg border-l-4 border-jasper-green transform transition-all duration-500 ${
              index === 0 ? 'animate-slide-in-down scale-105' : ''
            }`}
            style={{
              opacity: Math.max(0.3, 1 - (index * 0.15)),
              transform: `translateY(${index * 2}px) scale(${Math.max(0.95, 1 - (index * 0.05))})`
            }}
          >
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-semibold text-jasper-gray text-sm">{sale.customer}</p>
                  <p className="text-jasper-gray/70 text-xs">{sale.product}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-jasper-green">{sale.amount}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-jasper-gray/50">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{sale.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{sale.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-jasper-light">
        <div className="flex justify-between items-center text-sm">
          <span className="text-jasper-gray/60">Today's Revenue</span>
          <span className="font-bold text-jasper-purple">$8,247.92</span>
        </div>
        <div className="flex justify-between items-center text-sm mt-1">
          <span className="text-jasper-gray/60">Total Orders</span>
          <span className="font-bold text-jasper-blue">156</span>
        </div>
      </div>
    </div>
  );
}