import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components'
import Footer from '@/components/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]

})

export const metadata: Metadata = {
  title: 'Car Rental',
  description: 'Discover the best cars in the world.',
  icons: {
    icon: [
      '/favicon.ico?v=4'
    ],
    apple: [
      'apple-touch-icon.png?v=4'
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ],
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Navbar/>
        {children}
      <Footer/>
        </body>
    </html>
  )
}
