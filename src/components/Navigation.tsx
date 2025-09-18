'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#projekte', label: 'Projekte' },
    { href: '#pakete', label: 'Pakete' },
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-anton uppercase text-brand-purple text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded"
          >
            MEHRMARKE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink hover:text-brand-purple transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="#kontakt" className="btn-primary">
            Erstgespräch
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Navigation öffnen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-black/5">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-ink hover:text-brand-purple transition-colors px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}