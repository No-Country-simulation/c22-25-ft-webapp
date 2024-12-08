'use client'
import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

const menuItems = [
  { label: 'Nuestro servicio', href: '#' },
  { label: 'Sobre nosotros', href: '#' },
  { label: 'Contáctanos', href: '#' },
]

export const HeaderLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="[&>header]:max-w-[100%]"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden px-3" justify="center">
        <NavbarBrand>
          <Image
            src="/logo.svg"
            priority
            alt="SALUS Logo"
            width={200}
            height={200}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">
        <NavbarBrand>
          <Image
            src="/logo.svg"
            priority
            alt="SALUS Logo"
            width={200}
            height={200}
          />
        </NavbarBrand>
        <NavbarItem className="ml-auto text-sm md:text-base">
          <Link href="#features">Nuestro servicios</Link>
        </NavbarItem>
        <NavbarItem
          // isActive
          className="text-sm md:text-base"
        >
          <Link aria-current="page" href="#about-us">
            Sobre nosotros
          </Link>
        </NavbarItem>
        <NavbarItem className="text-sm md:text-base" isActive={false}>
          <Link href="#contact-us">Contáctanos</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            href="/register"
            variant="solid"
            className="bg-pink-300 text-cloud-300"
          >
            Iniciar prueba gratuita
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            href="/login"
            variant="solid"
            className="bg-cloud-300 text-pink-300"
          >
            Ingresar
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(({ label, href }, index) => (
          <NavbarMenuItem key={`${href}-${index}`}>
            <Link className="w-full" href={href}>
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
