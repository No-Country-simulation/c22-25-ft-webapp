import { Section } from '@/components/atoms/Section'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <Section
      className={
        'grid grid-cols-1 md:grid-cols-[40%_60%] gap-8  items-center lg:p-12'
      }
    >
      <div className="mt-12 md:mt-0">
        <h2 className="text-3xl lg:text-5xl font-black mb-8 text-cloud-300">{`Historia clínica ambulatoria`}</h2>
        <p className="text-cloud-300 leading-relaxed">
          {`Una `}
          <strong>solución integral </strong>
          {`que permite a las instituciones y a los profesionales de la salud registrar, gestionar y hacer un seguimiento completo de la historia clínica de sus pacientes,`}{' '}
          <strong>todo en un solo lugar.</strong>
        </p>
        <Button
          href="/"
          as={Link}
          color="primary"
          variant="flat"
          className="bg-pink-300 mt-10 uppercase font-bold"
        >
          Iniciar prueba gratuita
        </Button>
      </div>
      <div className="w-full h-full overflow-hidden">
        <Image
          width={1000}
          height={800}
          priority
          quality={100}
          src="/hero-section.webp"
          alt="Sección del listado de pacientes dentro del sistema; donde se pueden ver los pacientes y sus datos"
          className="w-full h-full "
        />
      </div>
    </Section>
  )
}
