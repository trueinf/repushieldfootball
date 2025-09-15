import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'RepuShield',
  description: 'Reputation management platform',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Font Awesome CSS (CDN) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  )
}
