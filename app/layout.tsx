import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'

import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Grandeur - Luxury Polo Crafted with Music',
  description: 'Discover Grandeur: premium polo T-shirts where music, heritage, and fashion converge. Explore our Liverpool-inspired collection.',
  generator: 'v0.app',
  authors: [{ name: 'Grandeur' }],
  openGraph: {
    title: 'Grandeur - Luxury Polo Crafted with Music',
    description: 'Premium polo T-shirts inspired by music and global cities',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1B4D3E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
