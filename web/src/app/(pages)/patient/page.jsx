'use client'
import { Section } from '@/components/atoms/Section'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { CardConsult } from '@/components/molecules/ui/CardConsult'

export default function PatientPage() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  const consults = [
    {
      id: 1,
      reason: 'Dolor de estomago',
      date: '2025-06-06',
    },
    {
      id: 2,
      reason: 'Dolor de cabeza',
      date: '2024-12-20',
    },
    {
      id: 3,
      reason: 'Dolor de cabeza',
      date: '2024-06-06',
      description:
        'Consulta realizada para evaluar un dolor persistente en la cabeza. Se diagnosticó tensión y se recomendaron técnicas de relajación y tratamiento para aliviar los síntomas experimentados.',
    },
    {
      id: 4,
      reason: 'Dolor de cabeza',
      date: '2024-12-10',
    },
  ]

  const today = new Date()

  // Dividir las consultas
  const pastConsults = consults.filter(
    consult => new Date(consult.date) < today
  )
  const upcomingConsults = consults.filter(
    consult => new Date(consult.date) >= today
  )

  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-cloud-300">
        Paciente
      </h1>

      <div
        className={
          'flex flex-col lg:grid lg:grid-cols-2 gap-6 w-full overflow-hidden'
        }
      >
        {/* Primera columna */}
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-cloud-300 text-sm font-bold uppercase">
                John Doe
              </span>
              <span className="text-cloud-300 text-sm font-bold uppercase">
                57 años
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              blanditiis deserunt perferendis saepe at nihil sit laboriosam
              laudantium, nemo assumenda eaque explicabo, officiis est
              architecto maiores ea voluptate! Atque, quisquam.
            </p>
          </div>
          <Accordion defaultExpandedKeys={['1']} selectionMode="multiple">
            <AccordionItem
              key="1"
              aria-label="Información básica"
              title={
                <h2 className="text-cloud-300 text-sm font-bold uppercase">
                  Información básica
                </h2>
              }
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Historial médico"
              title={
                <h2 className="text-cloud-300 text-sm font-bold uppercase">
                  Historial médico
                </h2>
              }
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Motivo de consulta"
              title={
                <h2 className="text-cloud-300 text-sm font-bold uppercase">
                  Motivo de consulta
                </h2>
              }
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Evaluación y Diagnóstico"
              title={
                <h2 className="text-cloud-300 text-sm font-bold uppercase">
                  Evaluación y Diagnóstico
                </h2>
              }
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Plan de Tratamiento y Seguimiento"
              title={
                <h2 className="text-cloud-300 text-sm font-bold uppercase">
                  Plan de Tratamiento y Seguimiento
                </h2>
              }
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="Documentación y Consentimientos"
              title={
                <h2 className="text-cloud-300 text-sm font-bold uppercase">
                  Documentación y Consentimientos
                </h2>
              }
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>

        {/* Segunda columna */}
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full flex flex-col gap-2">
            <h3 className="text-cloud-300 text-sm font-bold uppercase">
              Consultas
            </h3>
            {upcomingConsults.length > 0 &&
              upcomingConsults.map(consult => (
                <CardConsult
                  key={consult.id}
                  reason={consult.reason}
                  date={consult.date}
                  description={consult.description}
                />
              ))}
          </div>
          {pastConsults.length > 0 && (
            <Accordion defaultExpandedKeys={['7']}>
              <AccordionItem
                key="7"
                aria-label="Evaluación y Diagnóstico"
                title={
                  <h2 className="text-cloud-300 text-sm font-bold uppercase">
                    Historial de Consultas
                  </h2>
                }
              >
                {pastConsults.map(consult => (
                  <CardConsult
                    key={consult.id}
                    reason={consult.reason}
                    date={consult.date}
                    description={consult.description}
                  />
                ))}
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </div>
    </Section>
  )
}
