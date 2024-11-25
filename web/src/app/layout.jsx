import propTypes from 'prop-types'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | SALUS',
    default: 'SALUS',
  },
  authors: [
    { name: '(Redu) - Eduardo R.', url: 'https://github.com/MrRedu' },
    { name: '(Agus) María C.', url: '' },
    { name: '(Franco) Franco A.', url: '' },
    { name: '(Walter) Walter M.', url: '' },
    { name: '(Juani) Juan T.', url: '' },
    { name: '(Fer) Fernando V.', url: '' },
  ],
  creator: 'Equipo c22-25-ft-webapp - NoCountry',
  description: '',
  keywords: ['', '', ''],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
      ${inter.className} antialiased
      min-h-screen300 w-full max-w-[1600px] mx-auto
      `}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node,
}
