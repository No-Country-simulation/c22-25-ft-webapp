import Image from 'next/image'
import { ContactUsForm } from '@/components/organisms/forms/ContactUsForm'
import { Section } from '@/components/atoms/Section'

export const ContactUsSection = () => {
  return (
    <Section
      id={'contact-us'}
      className="lg:grid lg:grid-cols-2 lg:min-h-[680px] lg:p-0 my-10"
    >
      <div className="hidden lg:grid place-items-center bg-pink-300 w-full h-full rounded-r-[200px]">
        <Image
          width={320}
          height={200}
          src="/logo-negative.svg"
          alt="Logo"
          className=""
        />
      </div>
      <ContactUsForm />
    </Section>
  )
}
