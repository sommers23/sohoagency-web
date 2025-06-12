'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    country: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        console.error('Submission failed.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        {submitted ? (
          <div className="text-green-600 font-semibold text-center text-xl">
            ✅ Thank you! Your assessment request has been received.
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center">
              Start Your Free E-Commerce Assessment
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Business Website"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              >
                <option value="">Select Country</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Other">Other</option>
              </select>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded hover:opacity-80 transition"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </main>
    </>
  )
}
