import Image from 'next/image'
import { Section } from '@/components/atoms/Section'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Acceso denegado',
}

export default function UnauthorizedPage() {
  return (
    <div className="text-cloud-300">
      <header className="flex items-center justify-center w-full bg-cloud-300 h-20">
        <Image
          width={200}
          height={200}
          src="/logo-negative.svg"
          alt="Salus Logo"
        />
      </header>
      <Section
        className="flex flex-col justify-center items-center gap-4 max-w-[600px] mx-auto text-center
    h-[calc(100vh-5rem)]
    "
      >
        <h1 className="text-7xl lg:text-9xl font-bold lg:mb-10">#403</h1>
        <h2 className="text-3xl lg:text-4xl font-bold text-wrap text-red-500">
          Acceso Denegado.
        </h2>
        <p className="">
          Parece que no tienes permisos para acceder a este recurso. Si
          necesitas acceso, por favor solicita los permisos adecuados o contacta
          con soporte.
        </p>
        <Button
          href="/"
          as={Link}
          color="primary"
          variant="solid"
          className="bg-cloud-300 mt-10"
        >
          {<ArrowLeft />}
          Volver al Inicio
        </Button>
      </Section>
    </div>
  )
}
