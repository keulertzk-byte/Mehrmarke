'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "WAS KOSTET DAS?",
    answer: "Unsere Pakete starten ab X €/Monat. Alle Preise sind transparent und flexibel monatlich kündbar."
  },
  {
    question: "WIE SCHNELL SEHE ICH ERGEBNISSE?",
    answer: "Erste Effekte (z. B. mehr Sichtbarkeit bei Google) siehst du nach wenigen Wochen. Social Media baut langfristig Vertrauen auf."
  },
  {
    question: "BRAUCHE ICH WIRKLICH SOCIAL MEDIA?",
    answer: "Ja – Social Media sorgt nicht nur für Reichweite, sondern auch für Vertrauen. Kunden wollen sehen, dass du aktiv bist."
  },
  {
    question: "KANN ICH PAKETE KOMBINIEREN ODER UPGRADEN?",
    answer: "Ja, jederzeit. Wir passen unsere Leistungen flexibel an dein Wachstum an."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-spacing">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-6">FAQ</div>
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">
            HÄUFIGE FRAGEN
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`card overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-2 border-brand-purple bg-brand-lilac/30' : 'hover:shadow-soft'
              }`}
            >
              <button
                className="w-full p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-inset"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-brand-purpleDark pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full bg-brand-lilac flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  >
                    <span className="text-brand-purple font-bold">+</span>
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-inkMuted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}