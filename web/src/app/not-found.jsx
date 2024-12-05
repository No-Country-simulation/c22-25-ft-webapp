import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/atoms/Section'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Not found',
}

export default function NotFoundPage() {
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
        <h1 className="text-7xl lg:text-9xl font-bold lg:mb-10">#404</h1>
        <h2 className="text-3xl lg:text-4xl font-bold text-wrap">
          ¡Ups! No podemos encontrar esta página.
        </h2>
        <p className="">
          Parece que la información que buscas no está disponible. Si llegaste
          aquí por error, vuelve al Inicio para continuar tu trabajo.
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
