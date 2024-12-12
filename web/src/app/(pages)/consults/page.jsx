import { Section } from '@/components/atoms/Section'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { format } from '@formkit/tempo'
import { Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react'
import { getAge } from '../../utils/utils'

const getAllConsults = async ({ token, dni }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/doctor/${dni}/records`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )

    if (!res.ok) {
      const errorText = await res.text()
      throw new Error(errorText)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching consults:', error)
    return []
  }
}

const statusMap = {
  active: { label: 'Activa', color: 'success' },
  pending: { label: 'Pendiente', color: 'warning' },
  cancelled: { label: 'Cancelada', color: 'danger' },
}

export default async function ConsultsPage() {
  const session = await getServerSession(authOptions)
  const token = session?.accessToken
  const dni = session?.user?.dni
  const consults = await getAllConsults({ token, dni })

  const consultsSorted = consults.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  )

  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-cloud-300">
        Consultas
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {consultsSorted.map(consult => (
          <li key={consult.id} className="mb-4">
            <Card className="w-full border shadow-none">
              <CardHeader className="w-full flex justify-between">
                <Chip color={statusMap[consult.status].color}>
                  {statusMap[consult.status].label}
                </Chip>
                <span className="text-cloud-300 text-sm uppercase font-bold">
                  {format(consult.date, { date: 'short', time: 'short' })}
                </span>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  Nombre:{' '}
                  {`${consult.patient.firstName} ${consult.patient.lastName}`}
                </p>
                <p>DNI: {consult.patient.dni}</p>
                <p>Edad: {getAge(consult.patient.birthday)} años</p>
                <p>Teléfono: {consult.patient.cellphone}</p>
                <p>Correo: {consult.patient.email}</p>
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
