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
      <h1 className="text-4xl font-bold text-purple-600 mb
