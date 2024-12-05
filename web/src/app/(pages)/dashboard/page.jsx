import { Section } from '@/components/atoms/Section'
import { CardDashboard } from '@/components/molecules/ui/CardDashboard'
import { ClipboardPlus, Users } from 'lucide-react'

export default function DashboardPage() {
  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-cloud-300">
        Panel de control
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardDashboard
          title="Profesionales activos"
          href="/professionals"
          object="profesionales"
          quantity="50"
          fullQuantity="100"
        />
        <CardDashboard
          title="Pacientes"
          href="/patients"
          object="pacientes"
          fullQuantity="25"
          icon={<Users />}
        />
        <CardDashboard
          title="Consultas en la semana"
          href="/consults"
          object="consultas"
          fullQuantity="5"
          icon={<ClipboardPlus />}
        />
      </div>
    </Section>
  )
}
