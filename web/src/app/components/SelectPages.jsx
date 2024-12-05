'use client'
//  Este componente es momentáneo; para observar las páginas disponibles,
import { Select, SelectItem } from '@nextui-org/react'
import Link from 'next/link'

const paginas = [
  { key: 'inicio', label: 'Inicio', href: '/' },
  { key: 'login', label: 'Login', href: '/login' },
  { key: 'register', label: 'Register', href: '/register' },
  { key: 'dashboard', label: 'Dashboard', href: '/dashboard' },
  { key: 'unauthorized', label: 'Unauthorized', href: '/unauthorized' },
  { key: 'notfound', label: 'Not Found', href: '/notfound' },
  { key: 'patients', label: 'Patients', href: '/patients' },
  { key: 'new-patient', label: 'New Patient', href: '/patients/new' },
  { key: 'professionals', label: 'Professionals', href: '/professionals' },
]

export const SelectPages = () => {
  return (
    <Select
      label="Páginas posibles"
      className="w-[172px] absolute bottom-2 right-2 opacity-40"
      color="danger"
    >
      {paginas.map(({ key, label, href }) => (
        <SelectItem key={key} className="flex" textValue={label}>
          <Link href={href} className="flex">
            {label}
          </Link>
        </SelectItem>
      ))}
    </Select>
  )
}
