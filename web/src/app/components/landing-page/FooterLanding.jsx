import Image from 'next/image'
import Link from 'next/link'

export const FooterLanding = () => {
  return (
    <footer className="p-8 py-16 lg:px-12 flex flex-col gap-12 bg-[#F5F7FA]">
      <div className="w-full max-w-[960px] mx-auto flex gap-12 flex-col md:flex-row justify-center md:justify-between">
        <Image
          width={200}
          height={200}
          src="/logo.svg"
          alt="SALUS Logo"
          className="mx-auto md:mx-0"
        />
        <nav className="flex flex-col md:flex-row gap-4 md:gap-12">
          <Link
            href={'#features'}
            className="text-sm uppercase font-bold text-cloud-300"
          >
            Nuestro servicio
          </Link>
          <Link
            href={'#contact-us'}
            className="text-sm uppercase font-bold text-cloud-300"
          >
            Contáctanos
          </Link>
          <div className="flex flex-col gap-2">
            <Link
              href={'#about-us'}
              className="text-sm uppercase font-bold text-cloud-300"
            >
              Sobre nosotros
            </Link>
            <Link href={''} className="text-sm text-cloud-300">
              Términos y condiciones
            </Link>
          </div>
        </nav>
      </div>
      <div>
        <p className="text-sm text-cloud-300 text-center">
          Copyright © 2024 Salus
        </p>
      </div>
    </footer>
  )
}
