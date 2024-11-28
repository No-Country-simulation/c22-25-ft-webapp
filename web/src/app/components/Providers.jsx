'use client'
import propTypes from 'prop-types'
import { NextUIProvider } from "@nextui-org/system";
import { SelectPages } from './SelectPages';
export const Providers = ({ children }) => {
  return (
    <NextUIProvider>
      {children}
      <SelectPages />
    </NextUIProvider>
  )
};
Providers.propTypes = {
  children: propTypes.node,
}