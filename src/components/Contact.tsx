'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <>
      {/* Pre-Contact CTA */}
      <section className="section-spacing">
        <div className="container">
          <div className="card p-12 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-purpleDark mb-6">
              Noch Fragen? Lass uns sprechen!
            </h3>
            <Link href="#kontakt-form" className="btn-primary">
              Kostenlose Beratung anfragen →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="kontakt" className="bg-brand-lilacSoft section-spacing">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="badge mb-6">KONTAKT</div>
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight">
              STARTE JETZT DEINE DIGITALE SICHTBARKEIT.
            </h2>
            <p className="text-lg text-inkMuted leading-relaxed">
              Lass uns in einem kostenlosen Erstgespräch schauen, wie wir dein Unternehmen online sichtbar machen können.
            </p>
          </div>

          {/* Contact Form */}
          <div id="kontakt-form" className="card p-12 max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-brand-lime flex items-center justify-center mx-auto mb-6">
                  <span className="text-brand-purple text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-brand-purpleDark mb-4">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-inkMuted">
                  Wir melden uns binnen 24 Stunden bei Ihnen zurück.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-purpleDark mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-purpleDark mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                {/* Company and Industry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-purpleDark mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-brand-purpleDark mb-2">
                      Branche
                    </label>
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                      placeholder="Ihre Branche"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-purpleDark mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}