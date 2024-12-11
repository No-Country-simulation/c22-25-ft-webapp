'use client'
import { Accordion, AccordionItem } from '@nextui-org/react'

const defaultContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
export const BasicInformation = () => {
  return (
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
  )
}
