'use client';

import { useState } from 'react';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/assessment', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Submitted successfully!');
        setFormData({ name: '', email: '', website: '', country: '' });
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-purple-600 mb-4">
          TRANSFORM YOUR E-COMMERCE <br />
          <span className="text-black">PERFORMANCE TODAY</span>
        </h1>
        <p className="text-lg mb-6">
          THREE SIMPLE STEPS TO UNLOCK AI-POWERED GROWTH FOR YOUR BUSINESS
        </p>
        <p className="text-gray-700 mb-12">
          Ready to see real results? Our streamlined onboarding process makes it easy to harness the power of AI
          for your e-commerce business. No technical knowledge required—just bring your business goals,
          and we'll handle the rest.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Full Name"
            className="border border-gray-300 rounded px-4 py-3"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-3"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            name="website"
            placeholder="Business Website"
            className="border border-gray-300 rounded px-4 py-3 col-span-1"
            value={formData.website}
            onChange={handleChange}
          />
          <select
            required
            name="country"
            className="border border-gray-300 rounded px-4 py-3 col-span-1"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="UAE">UAE</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className="col-span-2 bg-purple-600 text-white text-lg font-semibold py-3 rounded hover:bg-purple-700 transition"
          >
            Start Your Free Assessment →
          </button>
        </form>
      </section>
    </div>
  );
}
