'use client'

import propTypes from 'prop-types'
import { format } from '@formkit/tempo'
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { Hand } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { AttendConsultationForm } from '@/components/organisms/forms/AttendConsultationForm'
import useAuth from '@/hooks/useAuth'
import { toast } from 'sonner'

const statusMap = {
  active: { label: 'Terminada', color: 'success' },
  pending: { label: 'Pendiente', color: 'warning' },
  cancelled: { label: 'Cancelada', color: 'danger' },
}

export const CardConsult = ({ consult }) => {
  const { token } = useAuth()
  // {
  //   "consult": {
  //     "recordId": 4,
  //     "date": "2025-01-01T04:00:00.000+00:00",
  //     "status": "pending",
  //     "consultationRecord": {
  //       "consultationRecordId": null,    <- ??
  //       "reason": null,                  <- OK
  //       "currentIllness": null,          <- OK
  //       "personalBackground": null,      <- OK
  //       "familiarBackground": null,      <- Ok
  //       "physicalExam": null,            <- OK
  //       "dx": null,                      <- OK
  //       "treatment": null,               <- OK
  //       "evolution": null,               <- Ok
  //       "diagnosticTests": null,         <- No -> Necesito en form
  //       "medProcedures": null,           <- Ok
  //       "informedConsent": null,         <- No -> Necesito en form
  //       "aditionalInformation": null     <- No (le falta una d) -> Necesito en form
  //     }
  //   }
  // }
  // # Mi Formulario
  // Razón de consulta                      -> reason
  // Enfermedad actual                      -> currentIllness
  // Examen físico                          -> physicalExam
  // Diagnóstico                            -> dx
  // Descripción del tratamiento            -> treatment
  // Procedimientos médicos                 -> medProcedures
  // Evolución                              -> evolution

  const modalToAttendTheConsultation = useDisclosure()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async data => {
    console.log(data)
    // /doctor/{recordId}/consultation/add
    // {

    //   "reason": data.consult.reason, -> Razón
    //   "currentIllness": data.consult.currentIllness, -> Enfermedad actual

    //   "personalBackground": data.medicalHistory.personalBackground, -> Historia personal
    //   "familiarBackground": data.medicalHistory.familiarBackground, -> Historia familiar

    //   "dx": data.diagnostic.dx, -> Diagnóstico
    //   "physicalExam": data.diagnostic.physicalExam,

    //   "treatment": data.treatmentPlan.treatment,
    //   "evolution": data.treatmentPlan.evolution,
    //   "medProcedures": data.treatmentPlan.medicalProcedures,

    //   "diagnosticTests": "Tomografía computarizada (normal).", -> No está, 'whatever'

    //   "informedConsent": "Sí, firmado digitalmente.", -> No está, 'whatever'
    //   "aditionalInformation": "El paciente reportó estrés laboral." -> No está, 'whatever'
    // }

    const payload = {
      reason: data.consult.reason,
      currentIllness: data.consult.currentIllness,
      personalBackground: data.medicalHistory.personalBackground,
      familiarBackground: data.medicalHistory.familiarBackground,
      dx: data.diagnostic.dx,
      physicalExam: data.diagnostic.physicalExam,
      treatment: data.treatmentPlan.treatment,
      evolution: data.treatmentPlan.evolution,
      medProcedures: data.treatmentPlan.medicalProcedures,
      diagnosticTests: '',
      informedConsent: '',
      aditionalInformation: '',
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/doctor/${consult.recordId}/consultation/add`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      )

      if (!response.ok) {
        const error = await response.json()
        console.error(error)
        throw new Error(`Failed to create consultation: ${response.status}`)
      }

      // const data = await response.json()
      toast.success('Consulta atendida correctamente')
      modalToAttendTheConsultation.onClose()
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <>
      <Card key={consult.recordId}>
        <CardHeader className="flex justify-between shadow-sm">
          <h4 className="text-cloud-300 text-sm font-bold">
            {format(consult.date, { date: 'short', time: 'short' })}
          </h4>
          <div className="flex gap-2 items-center">
            <Chip color={statusMap[consult.status].color}>
              {statusMap[consult.status].label}
            </Chip>
            {consult.status !== 'cancelled' && (
              <Button
                isIconOnly
                aria-label="Atender consulta"
                color="danger"
                onPress={modalToAttendTheConsultation.onOpen}
              >
                <Hand />
              </Button>
            )}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          {consult?.consultationRecord?.reason ? (
            <Accordion selectionMode="multiple">
              <AccordionItem
                key="1"
                aria-label="Información básica"
                title={
                  <h2 className="text-cloud-600 text-sm font-bold uppercase">
                    Resumen de consulta
                  </h2>
                }
              >
                <div className="flex flex-col gap-2">
                  <span>
                    <strong className="text-cloud-400 text-sm font-bold uppercase">
                      Razón de consulta:
                    </strong>{' '}
                    {consult?.consultationRecord?.reason}
                  </span>
                  <span>
                    {' '}
                    <strong className="text-cloud-400 text-sm font-bold uppercase">
                      Diagnóstico:
                    </strong>{' '}
                    {consult?.consultationRecord?.dx}
                  </span>
                  <span>
                    <strong className="text-cloud-400 text-sm font-bold uppercase">
                      Enfermedad actual:
                    </strong>{' '}
                    {consult?.consultationRecord?.currentIllness}
                  </span>
                  <span>
                    <strong className="text-cloud-400 text-sm font-bold uppercase">
                      Antecedentes personales:
                    </strong>{' '}
                    {consult?.consultationRecord?.personalBackground}
                  </span>
                  <span>
                    <strong className="text-cloud-400 text-sm font-bold uppercase">
                      Antecedentes familiares:
                    </strong>{' '}
                    {consult?.consultationRecord?.familiarBackground}
                  </span>
                  <span>
                    <strong className="text-cloud-400 text-sm font-bold uppercase">
                      Examen físico:
                    </strong>{' '}
                    {consult?.consultationRecord?.physicalExam}
                  </span>
                  <span>
                    <strong className="text-cloud-400 text-sm font-bold uppercase">
                      Tratamiento:
                    </strong>{' '}
                    {consult?.consultationRecord?.treatment}
                  </span>
                  <span>
                    <strong className="text-cloud-400 text-sm font-bold uppercase">
                      Evolución:
                    </strong>{' '}
                    {consult?.consultationRecord?.evolution}
                  </span>
                  <span>
                    <strong className="text-cloud-400 text-sm font-bold uppercase">
                      Procedimientos médicos:
                    </strong>{' '}
                    {consult?.consultationRecord?.medProcedures}
                  </span>
                </div>
              </AccordionItem>
            </Accordion>
          ) : (
            <p className="text-cloud-300 text-sm font-bold">
              {consult.status === 'pending' &&
                'No se ha registrado ninguna consulta'}
              {consult.status === 'cancelled' &&
                'La consulta ha sido cancelada'}
            </p>
          )}
        </CardBody>
      </Card>

      {/* Modal to attend the consultation */}
      <Modal
        scrollBehavior="inside"
        size={'3xl'}
        isOpen={modalToAttendTheConsultation.isOpen}
        onOpenChange={modalToAttendTheConsultation.onOpenChange}
      >
        <ModalContent>
          <ModalHeader>Atender consulta</ModalHeader>
          <ModalBody>
            <AttendConsultationForm
              onSubmit={onSubmit}
              register={register}
              errors={errors}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onPress={modalToAttendTheConsultation.onClose}
            >
              Cancelar
            </Button>
            <Button color="primary" onPress={onSubmit}>
              Guardar consulta
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

CardConsult.propTypes = {
  consult: propTypes.object,
}
