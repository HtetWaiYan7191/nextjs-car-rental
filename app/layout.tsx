import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components'
import Footer from '@/components/Footer'
const inter = Inter({ 
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Car Rental',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
      <Footer/>
        </body>
    </html>
  )
}
