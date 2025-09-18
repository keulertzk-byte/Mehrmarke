import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Pricing />
      <FAQ />
      <Contact />

      {/* Footer */}
      <footer className="bg-brand-purpleDark text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-anton text-2xl mb-4">MEHRMARKE</h3>
              <p className="text-white/80 mb-4">
                Digitale Sichtbarkeit für lokale Unternehmen
              </p>
              <p className="text-white/60 text-sm">
                © 2025 Mehrmarke. Alle Rechte vorbehalten.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#leistungen" className="hover:text-brand-lime transition-colors">Leistungen</a></li>
                <li><a href="#ueber-uns" className="hover:text-brand-lime transition-colors">Über uns</a></li>
                <li><a href="#projekte" className="hover:text-brand-lime transition-colors">Projekte</a></li>
                <li><a href="#pakete" className="hover:text-brand-lime transition-colors">Pakete</a></li>
                <li><a href="#kontakt" className="hover:text-brand-lime transition-colors">Kontakt</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-bold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/impressum" className="hover:text-brand-lime transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-brand-lime transition-colors">Datenschutz</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <div className="space-y-2 text-white/80">
                <p>E-Mail: hallo@mehrmarke.com</p>
                <p>Telefon: +49 (0) 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}