import { Section } from '@/components/atoms/Section'

const metricsData = [
  {
    quantity: '500+',
    titile: 'Profesionales de la salud registrados',
  },
  {
    quantity: '10,000+',
    titile: 'Pacientes registrados',
  },
  {
    quantity: '1,000+',
    titile: 'Consultas mensuales',
  },
  {
    quantity: '80%',
    titile: 'Reducción en tiempos de gestión',
  },
]

export const MetricsSection = () => {
  return (
    <Section className={'bg-pink-300 py-12 lg:py-16 my-10'}>
      <h2 className="hidden">Métricas de impacto</h2>
      <ul className="grid grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-1 gap-12 md:gap-4">
        {metricsData.map((metric, index) => (
          <li
            key={index}
            className={`flex flex-col items-center gap-4 ${index === 0 || index === 3 ? 'col-span-2' : ''} md:col-auto`}
          >
            <p className="text-4xl font-black">{metric.quantity}</p>
            <h3 className="text-center">{metric.titile}</h3>
          </li>
        ))}
      </ul>
    </Section>
  )
}
