import { Section } from '@/components/atoms/Section'
import { ProfessionalTable } from '@/components/organisms/tables/ProfessionalTable'

import professionalMockup from '../../mockups/professional.json'

export default function ProfessionalsPage() {
  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-cloud-300">
        Profesionales
      </h1>
      <ProfessionalTable users={professionalMockup} />
    </Section>
  )
}
