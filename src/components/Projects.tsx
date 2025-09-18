import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    title: "WEBSITE FÜR B2B BÄCKEREI",
    description: "Moderne Online-Präsenz mit klarer Struktur",
    status: "Abgeschlossen",
    statusType: "completed",
    gradient: "from-brand-lilac to-brand-lilac/70",
    image: "/websitekunde.png"
  },
  {
    title: "SOCIAL MEDIA CONTENT FÜR EIGENE AGENTUR",
    description: "Behind-the-scenes und nützliche Informationen über die eigenen Kanäle teilen",
    status: "Abgeschlossen",
    statusType: "completed",
    gradient: "from-brand-purple to-brand-purpleDark",
    image: "/contentbeispiel.png"
  },
  {
    title: "HOCHWERTIGE PRODUKTBILDER & CONTENT",
    description: "Social Media Konzept mit Content-Plan und Anzeigenideen",
    status: "Konzept",
    statusType: "concept",
    gradient: "from-brand-lime to-brand-lime/80",
    image: "/contentbeispielproductshot.png"
  }
]

export default function Projects() {
  return (
    <section id="projekte" className="section-spacing">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="badge mb-6">ERFOLGSGESCHICHTEN</div>
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl mb-8">
            PROJEKTE & BEISPIELE
          </h2>
          <p className="text-lg text-inkMuted leading-relaxed">
            Hier zeigen wir, wie wir Unternehmen online sichtbar machen – echte Projekte und kreative Konzepte.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="card p-8 hover:shadow-float transition-all duration-300">
              {/* Header with image or decorative pattern */}
              {project.image ? (
                <div className="rounded-xl mb-6 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              ) : (
                <div className={`bg-gradient-to-br ${project.gradient} rounded-xl p-6 mb-6 relative overflow-hidden`}>
                  {/* Grid pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 gap-1 h-full">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div key={i} className="bg-white/30 rounded-sm"></div>
                      ))}
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-soft">
                      {project.statusType === 'completed' ? (
                        <span className="text-brand-purple text-xl">✓</span>
                      ) : (
                        <span className="text-brand-purple text-xl">→</span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Content */}
              <h3 className="font-bold text-lg text-brand-purpleDark mb-3">
                {project.title}
              </h3>
              <p className="text-inkMuted leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-inkMuted mb-6">Ihr Projekt könnte das nächste sein</p>
          <Link href="#kontakt" className="btn-primary">
            Projekt besprechen →
          </Link>
        </div>
      </div>
    </section>
  )
}