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
        setStatus('Thanks! We’ll be in touch shortly.')
        setFormData({ name: '', email: '', website: '', country: '' })
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('Submission failed.')
    }
  }

  return (
    <div className="min-h-screen bg-white py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-purple-600 mb-2">TRANSFORM YOUR E-COMMERCE</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">PERFORMANCE TODAY</h2>
      <p className="max-w-xl mx-auto mb-8 text-gray-700">
        Ready to see real results? Our streamlined onboarding process makes it easy to harness the power of AI for your e-commerce business. No technical knowledge required—just bring your business goals, and we’ll handle the rest.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-gray-50 p-6 rounded-lg shadow">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" className="border px-4 py-2 rounded w-full" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="border px-4 py-2 rounded w-full" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="website" value={formData.website} onChange={handleChange} required placeholder="Business Website" className="border px-4 py-2 rounded w-full" />
          <select name="country" value={formData.country} onChange={handleChange} required className="border px-4 py-2 rounded w-full">
            <option value="">Select Country</option>
            <option value="UAE">UAE</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition">
          Start Your Free Assessment →
        </button>
        {status && <p className="text-center text-sm text-green-600 mt-2">{status}</p>}
      </form>
    </div>
  )
}
