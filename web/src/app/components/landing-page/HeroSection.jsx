import { Section } from '@/components/atoms/Section'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <Section
      className={
        'grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 min-h-[calc(100svh-64px)] items-center lg:p-12'
      }
    >
      <div className="mt-12 md:mt-0">
        <h2 className="text-3xl lg:text-5xl font-black mb-8 text-cloud-300">{`Historia clínica ambulatoria`}</h2>
        <p className="text-cloud-300 leading-relaxed">{`Una solución integral que permite a las instituciones y a los profesionales de la salud registrar, gestionar y hacer un seguimiento completo de la historia clínica de sus pacientes, todo en un solo lugar.`}</p>
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
          // placeholder="blur"
          quality={100}
          src="/hero-section.webp"
          alt=""
          className="w-full h-full "
        />
      </div>
    </Section>
  )
}
