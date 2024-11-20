'use client'
import propTypes from 'prop-types'
import { NextUIProvider } from "@nextui-org/system";
export const Providers = ({ children }) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
};
Providers.propTypes = {
  children: propTypes.node,
}