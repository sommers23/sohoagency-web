'use client';

import { useState } from 'react';
import Header from '@/components/Header';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/assessment', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('There was an error. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Start Your Free E-Commerce Assessment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border rounded px-4 py-2"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border rounded px-4 py-2"
              required
            />
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Business Website"
              className="border rounded px-4 py-2"
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border rounded px-4 py-2"
              required
            >
              <option value="">Select Country</option>
              <option value="UAE">UAE</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
