import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <section id="ueber-uns" className="section-spacing" style={{backgroundColor: '#F8F7F6'}}>
      <div className="container">
        {/* Header Badge - spans full width */}
        <div className="mb-12">
          <div className="badge">ÜBER UNS</div>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative max-w-96 sm:max-w-[31rem] lg:max-w-2xl">
              <Image
                src="/übermichfoto.png"
                alt="Über mich - Gründerin von Mehrmarke"
                width={364}
                height={436}
                className="rounded-2xl object-cover w-full"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>

            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-8 leading-tight">
              DEIN PARTNER FÜR ONLINE-SICHTBARKEIT.
            </h2>

            <div className="space-y-6 text-lg text-inkMuted leading-relaxed mb-8">
              <p>
                Ich bin Katja Keulertz, Gründerin von Mehrmarke. Nach vielen Jahren im Marketing großer
                Konsumgütermarken habe ich mich entschieden, mein Wissen für lokale Unternehmen einzusetzen.
                Mein Fokus: Branding, Kommunikation und zielgruppenrelevanter Content, der wirklich Kunden bringt.
              </p>

              <p>
                Bei Mehrmarke verbinde ich Kreativität mit klarer Strategie – damit dein Unternehmen
                online professionell auftritt und mehr Aufträge gewinnt.
              </p>
            </div>

            {/* Bullet list */}
            <div className="space-y-3 mb-8">
              {[
                "Fokus auf lokale Unternehmen und Handwerksbetriebe",
                "Jahre Erfahrung im Marketing großer Marken",
                "Kreativität kombiniert mit klarer Strategie"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-inkMuted">{item}</span>
                </div>
              ))}
            </div>

            <Link href="#kontakt" className="btn-primary">
              Jetzt kennenlernen →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}