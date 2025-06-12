'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setStatus('Message sent!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('Error sending message.')
      }
    } catch {
      setStatus('Failed to send.')
    }
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <h1 className="text-center text-4xl font-bold mb-4 text-purple-600">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" className="w-full px-4 py-2 border rounded" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="w-full px-4 py-2 border rounded" />
        <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your message..." className="w-full px-4 py-2 border rounded"></textarea>
        <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition">Send Message</button>
        {status && <p className="text-center text-green-600">{status}</p>}
      </form>
    </div>
  )
}
