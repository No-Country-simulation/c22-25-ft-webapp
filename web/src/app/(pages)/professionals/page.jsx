import { Section } from '@/components/atoms/Section'
import { ProfessionalTable } from '@/components/organisms/tables/ProfessionalTable'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { getAge } from '@/utils/utils'
import { getAllProfessionals } from '@/services/professionals'

export default async function ProfessionalsPage() {
  const session = await getServerSession(authOptions)
  const token = session?.accessToken
  const professionals = await getAllProfessionals(token)
  const mappedProfessionals = professionals.map(professional => ({
    dni: professional?.dni,
    name: professional?.firstName,
    email: professional?.email,
    role: professional?.roles[0]?.name,
    age: getAge(professional?.birthday),
    specialtyArea: professional?.specialtyArea[0]?.name,
    status: professional?.enabled === true ? 'Activo' : 'Inactivo',
  }))

  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-cloud-300">
        Profesionales
      </h1>
      <ProfessionalTable users={mappedProfessionals} />
    </Section>
  )
}
