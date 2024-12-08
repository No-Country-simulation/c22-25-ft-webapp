import { Section } from '@/components/atoms/Section'
import Image from 'next/image'

export const AboutUsSection = () => {
  return (
    <Section
      id={'about-us'}
      className={
        'grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:p-12 my-10'
      }
    >
      <div className="w-full h-full overflow-hidden">
        <Image
          width={1000}
          height={100}
          loading="lazy"
          src="/about-us-section.webp"
          alt="Sección del listado de pacientes dentro del sistema; donde se pueden ver los pacientes y sus datos"
          className="w-full h-full"
        />
      </div>
      <div className="mt-4 md:mt-0">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-cloud-300">{`Sobre Nosotros`}</h2>
        <p className="text-cloud-300 leading-relaxed text-pretty">
          {`En Salus, `}
          <strong>
            nos dedicamos a transformar la manera en que los profesionales de la
            salud gestionan la atención de sus pacientes.{' '}
          </strong>
          {`Nuestra misión es`}{' '}
          <strong>
            ofrecer soluciones digitales innovadoras que optimicen el proceso de
            registro médico, gestión de citas y más.
          </strong>{' '}
          {`Con un enfoque en la seguridad, la accesibilidad y la eficiencia, buscamos`}{' '}
          <strong>mejorar la experiencia de atención médica</strong>{' '}
          {`tanto para los profesionales como para los pacientes, simplificando la gestión de la salud y contribuyendo a una`}{' '}
          <strong>atención más personalizada y de calidad.</strong>
        </p>
      </div>
    </Section>
  )
}
