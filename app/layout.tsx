import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: 'STEM Fun - Making Science Fun for Kids!',
  description: 'Educational STEM products including posters, puzzles, and table mats to help young kids love Science, Technology, Engineering, and Mathematics.',
  generator: 'v0.app',
  keywords: ['STEM', 'education', 'kids', 'science', 'physics', 'learning', 'posters', 'puzzles'],
  icons: {
    icon: '/images/stem-fun-logo.png',
    apple: '/images/stem-fun-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${nunito.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
