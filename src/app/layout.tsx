import type { Metadata, Viewport } from 'next'
import { Raleway, Cormorant_Garamond } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import SchemaMarkup from '@/components/SchemaMarkup'

const raleway = Raleway({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600'],
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1410',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: 'Виктория Бузаева — Психолог онлайн | Личностно-ориентированная психотерапия',
    template: '%s | Психолог Виктория Бузаева',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  description: 'Психолог онлайн Виктория Бузаева. Работаю с женщинами по темам тела, близости и сексуальности. Психодинамический подход. Консультации в Zoom.',
  keywords: [
    'психолог онлайн',
    'психолог для женщин',
    'психолог сексуальность',
    'нет желания психолог',
    'психолог близость отношения',
    'личностно-ориентированная психотерапия',
    'психолог тело желание',
    'психолог онлайн женщины',
    'аноргазмия психолог',
    'страх близости психолог',
  ],
  authors: [{ name: 'Виктория Бузаева' }],
  creator: 'Виктория Бузаева',
  openGraph: {
    title: 'Виктория Бузаева — Психолог онлайн',
    description: 'Личностно-ориентированная реконструктивная психотерапия. Помогаю разобраться в себе и отношениях. Консультации онлайн в Zoom.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Психолог Виктория Бузаева',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Виктория Бузаева — Психолог онлайн',
    description: 'Личностно-ориентированная реконструктивная психотерапия. Консультации онлайн.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Добавьте свои коды верификации
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${raleway.variable} ${cormorant.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="ml-0 lg:ml-20">
          {children}
        </main>
        <Script
          src="https://planerka.app/meet/assets/external/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
