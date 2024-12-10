import { Section } from '@/components/atoms/Section'
import { PatientsTable } from '@/components/organisms/tables/PatientsTable'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { getAge } from '@/utils/utils'
import { getAllPatients } from '@/services/patients'

export default async function PatientsPage() {
  const session = await getServerSession(authOptions)
  const token = session?.accessToken
  const patients = await getAllPatients(token)
  const mappedPatients = patients.map(patient => ({
    dni: patient?.dni,
    name: `${patient?.firstName} ${patient?.lastName}`,
    email: patient?.email,
    cellphone: patient?.cellphone,
    age: getAge(patient?.birthday),
    gender: patient?.gender === 'masculino' ? 'M' : 'F',
    address: patient?.address,
  }))

  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-cloud-300">
        Pacientes
      </h1>
      <PatientsTable users={mappedPatients} />
    </Section>
  )
}
