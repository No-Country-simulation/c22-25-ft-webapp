import propTypes from 'prop-types'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import './globals.css'

export const metadata = {
  title: 'SALUS',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node,
}
