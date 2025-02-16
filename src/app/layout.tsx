import type { Metadata } from 'next'
import { Montserrat, Quicksand } from 'next/font/google'
import './globals.css'

import MainHeader from './components/main-header'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${quicksand.className}  antialiased`}
      >
        <MainHeader />
        {children}
      </body>
    </html>
  )
}
