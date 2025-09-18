export default function Impressum() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-brand-purpleDark mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-brand-purpleDark mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Katja Keulertz<br />
            Selbständige Marketingberaterin<br />
            Mehrmarke<br />
            Mohnweg 40<br />
            41569 Rommerskirchen
          </p>

          <h2 className="text-2xl font-bold text-brand-purpleDark mt-8 mb-4">Kontakt</h2>
          <p>
            E-Mail: hallo@mehrmarke.com<br />
            Telefon: +49 (0) 123 456 789
          </p>



          <h2 className="text-2xl font-bold text-brand-purpleDark mt-8 mb-4">Redaktionell verantwortlich</h2>
          <p>
            Katja Keulertz<br />
            Mohnweg 40<br />
            41569 Rommerskirchen
          </p>

          <h2 className="text-2xl font-bold text-brand-purpleDark mt-8 mb-4">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a><br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-2xl font-bold text-brand-purpleDark mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-2xl font-bold text-brand-purpleDark mt-8 mb-4">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2 className="text-2xl font-bold text-brand-purpleDark mt-8 mb-4">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2 className="text-2xl font-bold text-brand-purpleDark mt-8 mb-4">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </main>
  )
}