import Link from 'next/link'

const oneTimeSetup = {
  title: "Website One-Pager",
  icon: "🌐",
  features: [
    "Modernes, responsives Design (mobil optimiert)",
    "SEO-Basics integriert",
    "Kontaktformular & Call-to-Action",
    "Anbindung an Google Business Profil",
    "Texte & Bilder von dir gestellt"
  ],
  price: "ab 1.200 € einmalig",
  buttonText: "Website anfragen"
}

const packages = [
  {
    name: "Basis",
    subtitle: "Online sichtbar werden",
    icon: "📈",
    features: [
      "1 Kanal (Facebook oder Instagram)",
      "4 Posts pro Monat",
      "Google Business Profil Optimierung + 2 Posts/Monat",
      "Einfaches Reporting (1x/Monat)"
    ],
    price: "startet unter 500 €/Monat",
    buttonText: "Basis-Paket wählen",
    featured: false
  },
  {
    name: "Standard",
    subtitle: "Reichweite & Vertrauen aufbauen",
    icon: "📈",
    features: [
      "2 Kanäle (Facebook + Instagram oder Instagram + TikTok)",
      "8–10 Posts pro Monat (inkl. 1 Reel/Video)",
      "Google Business Betreuung + Review-Management",
      "Community Management (werktags)",
      "Reporting alle 2 Wochen"
    ],
    price: "die meisten Kunden investieren 900–1.500 €/Monat",
    buttonText: "Standard-Paket wählen",
    featured: true,
    badge: "Beliebt"
  },
  {
    name: "Premium",
    subtitle: "Volle Sichtbarkeit & Kundengewinnung",
    icon: "📈",
    features: [
      "3 Kanäle (z. B. Facebook, Instagram, TikTok)",
      "12–15 Posts pro Monat (Grafik, Foto, Video, Stories/Reels)",
      "Google Business volle Betreuung (inkl. Bewertungsmanagement)",
      "Community Management (werktags, schnelle Reaktionszeiten)",
      "Werbeanzeigen Setup + Betreuung (Budget exkl.)",
      "Wöchentliches Reporting & Strategie-Call"
    ],
    price: "ab 1.500 €/Monat",
    buttonText: "Premium-Paket wählen",
    featured: false
  }
]

export default function Pricing() {
  return (
    <section id="pakete" className="bg-brand-lilacSoft section-spacing">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="badge mb-6">ANGEBOT & PREISE</div>
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl mb-8">
            ANGEBOT & PREISE
          </h2>
          <p className="text-lg text-inkMuted leading-relaxed">
            Transparent, einfach, planbar – wähle das Paket, das zu deinem Unternehmen passt.
          </p>
        </div>

        {/* One-time Setup Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-anton text-2xl text-brand-purpleDark mb-2 flex items-center justify-center gap-2">
              {oneTimeSetup.icon} Einmaliges Setup
            </h3>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card p-8 hover:shadow-float transition-all duration-300">
              <div className="text-center mb-6">
                <h4 className="font-bold text-xl text-brand-purpleDark mb-4">
                  {oneTimeSetup.title}
                </h4>
              </div>

              <div className="space-y-4 mb-8">
                {oneTimeSetup.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-purple text-xs">✓</span>
                    </div>
                    <span className="text-inkMuted">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="font-anton text-2xl text-brand-purpleDark">
                  👉 {oneTimeSetup.price}
                </div>
              </div>

              <Link
                href="#kontakt"
                className="block w-full text-center py-3 px-6 rounded-full font-medium transition-all bg-brand-purple text-white hover:brightness-95"
              >
                {oneTimeSetup.buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Monthly Packages Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-anton text-2xl text-brand-purpleDark mb-2 flex items-center justify-center gap-2">
              📈 Monatliche Sichtbarkeitspakete
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative card p-8 hover:shadow-float transition-all duration-300 ${
                  pkg.featured ? 'border-2 border-brand-purple lg:scale-105' : ''
                }`}
              >
                {/* Featured badge */}
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                      {pkg.badge}
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h4 className="font-anton uppercase text-xl text-brand-purpleDark mb-2">
                    {pkg.name}
                  </h4>
                  <p className="font-bold text-inkMuted mb-4">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-brand-purple text-xs">✓</span>
                      </div>
                      <span className="text-inkMuted text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="font-bold text-brand-purpleDark text-sm leading-tight">
                    👉 {pkg.price}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="#kontakt"
                  className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-all ${
                    pkg.featured
                      ? 'bg-brand-purple text-white hover:brightness-95'
                      : 'bg-brand-lime text-brand-purple hover:bg-brand-lime/90'
                  }`}
                >
                  {pkg.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}