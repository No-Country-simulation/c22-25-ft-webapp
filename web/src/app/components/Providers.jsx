'use client'
import propTypes from 'prop-types'
import { NextUIProvider } from '@nextui-org/system'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner'
export const Providers = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <Toaster />
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  )
}
Providers.propTypes = {
  children: propTypes.node,
  session: propTypes.object,
}
