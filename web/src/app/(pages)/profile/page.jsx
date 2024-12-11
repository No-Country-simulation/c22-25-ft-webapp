import { Section } from '@/components/atoms/Section'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { getUserByDni } from '@/services/users'

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)
  const profile = await getUserByDni({
    dni: session?.user?.dni,
    rol: session?.user?.roles[0]?.name,
    token: session?.accessToken,
  })

  return (
    <Section>
      <h2>{`</ProfilePage>`}</h2>
      <p>DNI: {profile?.dni}</p>
      <p>firstName: {profile?.firstName}</p>
      <p>lastName: {profile?.lastName}</p>
      <p>email: {profile?.email}</p>
      <p>role: {profile?.roles.map(role => role.name).join(', ')}</p>
      <p>birthday: {profile?.birthday}</p>
      <p>
        specialtyArea:{' '}
        {profile?.specialtyArea.map(area => area.name).join(', ')}
      </p>
    </Section>
  )
}
