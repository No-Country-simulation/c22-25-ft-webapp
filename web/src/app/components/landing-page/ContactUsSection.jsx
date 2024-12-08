import { ContactUsForm } from '../organisms/forms/ContactUsForm'
import Image from 'next/image'
import { Section } from '../atoms/Section'

export const ContactUsSection = () => {
  return (
    <Section className="lg:grid lg:grid-cols-2 md:min-h-[680px] lg:p-0 my-10">
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
