'use client'
import propTypes from 'prop-types'
import { NextUIProvider } from "@nextui-org/react";
export const Provider = ({ children }) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
};
Provider.propTypes = {
  children: propTypes.node,
}