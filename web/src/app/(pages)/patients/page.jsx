import { Section } from "@/components/atoms/Section";
import { PatientsTable } from "@/components/organisms/tables/PatientsTable";

import patientsMockup from '../../mockups/patients.json'

export default function PatientsPage() {
  return (
    <Section>
      <PatientsTable users={patientsMockup} />
    </Section>
  )
};