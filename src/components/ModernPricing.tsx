import Link from 'next/link'

const oneTimeOffer = {
  title: "Website One-Pager",
  subtitle: "Einmalige Website-Erstellung",
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

const monthlyPackages = [
  {
    name: "Basis",
    subtitle: "Online sichtbar werden",
    features: [
      "1 Kanal (Facebook oder Instagram)",
      "4 Posts/Monat",
      "Google Business Profil Optimierung + 2 Posts/Monat",
      "Einfaches Reporting (1x/Monat)"
    ],
    price: "startet unter 500 €/Monat",
    buttonText: "Basis-Paket wählen",
    popular: false
  },
  {
    name: "Standard",
    subtitle: "Reichweite & Vertrauen aufbauen",
    features: [
      "2 Kanäle (Facebook + Instagram oder Instagram + TikTok)",
      "8–10 Posts/Monat (inkl. 1 Reel/Video)",
      "Google Business Betreuung + Review-Management",
      "Community Management (werktags)",
      "Reporting alle 2 Wochen"
    ],
    price: "die meisten Kunden investieren 900–1.500 €/Monat",
    buttonText: "Standard-Paket wählen",
    popular: true
  },
  {
    name: "Premium",
    subtitle: "Volle Sichtbarkeit & Kundengewinnung",
    features: [
      "3 Kanäle (z. B. Facebook, Instagram, TikTok)",
      "12–15 Posts/Monat (Grafik, Foto, Video, Stories/Reels)",
      "Google Business volle Betreuung (inkl. Bewertungsmanagement)",
      "Community Management (werktags, schnelle Reaktionszeiten)",
      "Werbeanzeigen Setup + Betreuung (Budget exkl.)",
      "Wöchentliches Reporting & Strategie-Call"
    ],
    price: "ab 1.500 €/Monat",
    buttonText: "Premium-Paket wählen",
    popular: false
  }
]

export default function ModernPricing() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* One-time Website Offer */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg border border-slate-200 p-8 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>

            <div className="text-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                Einmalige Website-Erstellung
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{oneTimeOffer.title}</h3>
              <p className="text-slate-600">{oneTimeOffer.subtitle}</p>
            </div>

            <div className="space-y-3 mb-8">
              {oneTimeOffer.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-slate-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-6">
                👉 {oneTimeOffer.price}
              </div>
              <Link
                href="#kontakt"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                {oneTimeOffer.buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Monthly Packages Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Sichtbarkeitspakete</h2>
            <p className="text-lg text-slate-600">Monatliche Betreuung für kontinuierliche Online-Präsenz</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {monthlyPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-lg border transition-all duration-300 hover:shadow-xl p-8 ${
                  pkg.popular
                    ? 'border-blue-500 lg:scale-105 ring-2 ring-blue-200'
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Beliebt
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 font-medium">{pkg.subtitle}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <span className="text-blue-600 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-slate-700 leading-relaxed text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-lg font-bold text-slate-800 leading-tight">
                    👉 {pkg.price}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link
                    href="#kontakt"
                    className={`inline-block font-medium px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg w-full text-center ${
                      pkg.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {pkg.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Nicht sicher, welches Paket das richtige für dich ist?
          </p>
          <Link
            href="#kontakt"
            className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            Kostenlose Beratung vereinbaren
          </Link>
        </div>
      </div>
    </section>
  )
}