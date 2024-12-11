'use client'
import { Accordion, AccordionItem } from '@nextui-org/react'

const historialMedico = [
  {
    id: 1,
    title: 'Antecedentes Personales',
    content: 'Alergia al polen',
  },
  {
    id: 2,
    title: 'Antecedentes Familiares',
    content: 'Historial de diabetes en la familia',
  },
]

const motivoConsulta = [
  {
    id: 1,
    title: 'Fecha de consulta',
    content: '10 de diciembre de 2024',
  },
  {
    id: 2,
    title: 'Motivo de la consulta',
    content: 'Dolor de cabeza persistente',
  },
  {
    id: 3,
    title: 'Enfermedad Actual',
    content: 'Migrañas frecuentes',
  },
]

const evaluacionDiagnostico = [
  {
    id: 1,
    title: 'Examen Físico',
    content: 'Presión arterial normal, signos vitales estables',
  },
  {
    id: 2,
    title: 'Diagnóstico',
    content: 'Migraña',
  },
]

const planTratamiento = [
  {
    id: 1,
    title: 'Tratamiento',
    content: 'Prescripción de analgésicos y recomendación de descanso',
  },
  {
    id: 2,
    title: 'Procedimientos Médicos',
    content: 'Ninguno necesario',
  },
  {
    id: 3,
    title: 'Evolución',
    content: 'Seguir monitorizando la frecuencia e intensidad de las migrañas',
  },
]

const documentacionConsentimientos = [
  {
    id: 1,
    title: 'Consentimiento Informado',
    content: 'Firmado',
  },
  {
    id: 2,
    title: 'Información Adicional',
    content: 'Ninguna',
  },
]

export const BasicInformation = () => {
  return (
    <Accordion defaultExpandedKeys={['2']} selectionMode="multiple">
      {/* <AccordionItem
        key="1"
        aria-label="Información básica"
        title={
          <h2 className="text-cloud-600 text-sm font-bold uppercase">
            Información básica
          </h2>
        }
      >
        {defaultContent}
      </AccordionItem> */}
      <AccordionItem
        key="2"
        aria-label="Historial médico"
        title={
          <h2 className="text-cloud-600 text-sm font-bold uppercase">
            Historial médico
          </h2>
        }
      >
        <ul>
          {historialMedico.map(item => (
            <li key={item.id} className="flex items-baseline gap-2">
              <h3 className="text-cloud-300 text-sm font-bold uppercase">
                {item.title}:
              </h3>
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Motivo de consulta"
        title={
          <h2 className="text-cloud-600 text-sm font-bold uppercase">
            Motivo de consulta
          </h2>
        }
      >
        <ul>
          {motivoConsulta.map(item => (
            <li key={item.id} className="flex items-baseline gap-2">
              <h3 className="text-cloud-300 text-sm font-bold uppercase">
                {item.title}:
              </h3>
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Evaluación y Diagnóstico"
        title={
          <h2 className="text-cloud-600 text-sm font-bold uppercase">
            Evaluación y Diagnóstico
          </h2>
        }
      >
        <ul>
          {evaluacionDiagnostico.map(item => (
            <li key={item.id} className="flex items-baseline gap-2">
              <h3 className="text-cloud-300 text-sm font-bold uppercase">
                {item.title}:
              </h3>
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Plan de Tratamiento y Seguimiento"
        title={
          <h2 className="text-cloud-600 text-sm font-bold uppercase">
            Plan de Tratamiento y Seguimiento
          </h2>
        }
      >
        <ul>
          {planTratamiento.map(item => (
            <li key={item.id} className="flex items-baseline gap-2">
              <h3 className="text-cloud-300 text-sm font-bold uppercase">
                {item.title}:
              </h3>
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Documentación y Consentimientos"
        title={
          <h2 className="text-cloud-600 text-sm font-bold uppercase">
            Documentación y Consentimientos
          </h2>
        }
      >
        <ul>
          {documentacionConsentimientos.map(item => (
            <li key={item.id} className="flex items-baseline gap-2">
              <h3 className="text-cloud-300 text-sm font-bold uppercase">
                {item.title}:
              </h3>
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </Accordion>
  )
}
