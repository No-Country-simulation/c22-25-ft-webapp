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
    { name: '(Agus) - María C.', url: 'https://github.com/ChichiCuello' },
    { name: '(Franco) - Franco A.', url: 'https://github.com/JSuggu' },
    {
      name: '(Walter) - Walter M.',
      url: 'https://github.com/WalterDanielMachacaChoque',
    },
  ],
  creator: 'Equipo c22-25-ft-webapp - NoCountry',
  description: '',
  keywords: ['SALUS', '', ''],
}

export default function RootLayout({
  children,
  params: {
    session,
    // ...params
  },
}) {
  return (
    <html lang="en">
      <body
        className={`
      ${inter.className} antialiased
      min-h-screen300 w-full max-w-[1600px] mx-auto
      `}
      >
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node,
  params: propTypes.object,
}
