import Link from 'next/link'

const services = [
  {
    title: "MODERNE WEBSITE",
    description: "Eine professionelle Website, die Vertrauen schafft, mobil optimiert ist und dir als digitale Visitenkarte dient.",
    icon: "🌐"
  },
  {
    title: "GOOGLE UNTERNEHMENSPROFIL & LOKALE SEO",
    description: "Wir optimieren deinen Google Maps Eintrag, sorgen für mehr Sichtbarkeit in lokalen Suchergebnissen und helfen dir, mehr Bewertungen zu sammeln.",
    icon: "📍"
  },
  {
    title: "SOCIAL MEDIA SETUP & CONTENT-PLANUNG",
    description: "Wir richten deine Social Media Kanäle ein, erstellen einen Content-Plan und liefern dir Vorlagen oder kompletten Content.",
    icon: "📱"
  },
  {
    title: "CONTENT-PRODUKTION & KAMPAGNENIDEEN",
    description: "Von Fotos bis zu kreativen Kampagnen – wir machen dein Unternehmen online erlebbar.",
    icon: "✨"
  }
]

export default function Services() {
  return (
    <section id="leistungen" className="bg-brand-lilacSoft section-spacing">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="badge mb-6">WAS WIR FÜR DICH TUN</div>
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl mb-8">
            LEISTUNGEN
          </h2>
          <div className="text-lg text-inkMuted leading-relaxed mb-8">
            <p className="mb-4">
              Viele lokale Unternehmen haben keine Zeit für Online-Marketing – und verpassen dadurch neue Kunden.
            </p>
            <p>
              Mit Mehrmarke bekommst du eine moderne Online-Präsenz, die dich sichtbar macht und dir mehr Anfragen bringt.
            </p>
          </div>
          <Link href="#kontakt" className="btn-primary">
            UNSERE LEISTUNGEN IM ÜBERBLICK
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 hover:shadow-float transition-all duration-300"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-purple text-white flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-brand-lime"></div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg text-brand-purpleDark mb-4">
                {service.title}
              </h3>
              <p className="text-inkMuted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}