import type { Metadata } from 'next'
import { Inter, Anton } from 'next/font/google'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton'
})

export const metadata: Metadata = {
  title: 'Mehrmarke - Digitale Sichtbarkeit für lokale Unternehmen',
  description: 'Professionelle Websites, Google-Optimierung und Social Media Marketing für Handwerksbetriebe und lokale Unternehmen. Transparent, planbar, erfolgreich.',
  keywords: 'Website erstellen, Google Unternehmensprofil, Social Media Marketing, Handwerk, lokale Unternehmen, SEO',
  authors: [{ name: 'Mehrmarke' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Mehrmarke - Digitale Sichtbarkeit für lokale Unternehmen',
    description: 'Professionelle Websites, Google-Optimierung und Social Media Marketing für Handwerksbetriebe und lokale Unternehmen.',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mehrmarke - Digitale Sichtbarkeit für lokale Unternehmen',
    description: 'Professionelle Websites, Google-Optimierung und Social Media Marketing für Handwerksbetriebe und lokale Unternehmen.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${anton.variable} font-sans antialiased bg-white text-ink`}>
        {children}
      </body>
    </html>
  )
}