import { Section } from '@/components/atoms/Section'
import { PatientsTable } from '@/components/organisms/tables/PatientsTable'

import patientsMockup from '../../mockups/patients.json'

export default function PatientsPage() {
  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-cloud-300">
        Pacientes
      </h1>
      <PatientsTable users={patientsMockup} />
    </Section>
  )
}
