'use client'

import { useState } from 'react'

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    country: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Submitting...')

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('Thank you! We'll be in touch shortly.')
        setFormData({ name: '', email: '', website: '', country: '' })
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('Submission failed. Please try again.')
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 py-20 font-poppins">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
          Transform Your E-Commerce <br /> <span className="text-black">Performance Today</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Three simple steps to unlock AI-powered growth for your business. No technical knowledge required.
        </p>
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
            />
          </div>
          <input
            type="text"
            name="website"
            placeholder="Business Website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          >
            <option value="">Select Country</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Other">Other</option>
          </select>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-md font-semibold hover:from-purple-700 hover:to-blue-700 transition"
          >
            Start Your Free Assessment →
          </button>
          {status && <p className="text-sm text-green-600 mt-2">{status}</p>}
        </form>
      </div>
    </main>
  )
}
