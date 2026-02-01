import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import SchemaMarkup from '@/components/SchemaMarkup'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D0D0D',
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
  description: 'Психолог онлайн Виктория Бузаева. Личностно-ориентированная реконструктивная психотерапия (ЛОРП). Работаю с самооценкой, отношениями, тревогой. Консультации в Zoom. Запись онлайн.',
  keywords: [
    'психолог онлайн',
    'онлайн консультация психолога',
    'личностно-ориентированная психотерапия',
    'психолог самооценка',
    'психолог отношения',
    'помощь психолога при тревоге',
    'психолог Москва онлайн',
    'ЛОРП терапия',
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
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="ml-0 lg:ml-20">
          {children}
        </main>
      </body>
    </html>
  )
}
