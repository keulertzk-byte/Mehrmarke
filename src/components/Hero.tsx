'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const enableRotator = false // Set to true to enable rotation

  const phrases = [
    "MEHR ANFRAGEN.",
    "MEHR SICHTBARKEIT.",
    "MEHR VERTRAUEN.",
    "MEHR KUNDEN."
  ]

  useEffect(() => {
    if (!enableRotator) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        setIsVisible(true)
      }, 180)
    }, 2200)

    return () => clearInterval(interval)
  }, [enableRotator, phrases.length])

  return (
    <section className="hero-gradient relative pb-56 lg:pb-72 -mt-16 pt-16">
      <div className="container py-18 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-anton uppercase text-[40px] sm:text-[56px] lg:text-[88px] xl:text-[104px] leading-[0.95] tracking-[-0.02em] mb-8">
            <span className="text-brand-purpleDark block">ICH BAUE</span>
            <span className="text-brand-purpleDark block">DEINE ONLINE-PRÄSENZ</span>
            <span className="text-brand-purpleDark block">AUF & SORGE FÜR</span>
            <span
              className={`text-[#8F78E8] block transition-opacity duration-200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {phrases[currentPhrase]}
            </span>
          </h1>

          {/* Subline with rotating text */}
          <p className="text-lg sm:text-xl lg:text-2xl leading-[1.35] text-brand-purpleDark mb-12">
            Ich baue deine Online-Präsenz auf und sorge für{' '}
            <span
              className={`inline-block ml-1 transition-opacity duration-200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              aria-live="polite"
              aria-atomic="true"
            >
              {phrases[currentPhrase].toLowerCase()}
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#kontakt" className="btn-primary">
              Kostenloses Erstgespräch sichern →
            </Link>
            <Link href="#leistungen" className="btn-secondary">
              Leistungen ansehen
            </Link>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-inkMuted">
            <span>• SCHNELL</span>
            <span>• VERSTÄNDLICH</span>
            <span>• PRAXISNAH</span>
          </div>
        </div>
      </div>
    </section>
  )
}