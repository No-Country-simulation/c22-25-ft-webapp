'use client'
import propTypes from 'prop-types'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { PlusCircleIcon } from 'lucide-react'
import { CreateConsultForm } from '@/components/organisms/forms/CreateConsultForm'
import { useForm } from 'react-hook-form'
import useAuth from '@/hooks/useAuth'

export const NewConsult = ({ patientDni }) => {
  const { token, dni } = useAuth()
  const modalToCreateConsult = useDisclosure()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = handleSubmit(async data => {
    const payload = { date: `${data.date}T${data.time}:00`, status: 'pending' }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/doctor/${dni}/records/add/${patientDni}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      )

      if (!res.ok) {
        const errorText = await res.text()
        console.error('Error response:', res.status, errorText)
        throw new Error(`Failed to create consult: ${res.status}`)
      }

      const data = await res.json()
      // Setear este valor en el estado
      console.log(data)

      reset()
      modalToCreateConsult.onClose()
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-cloud-300">Consultas</h2>
        <Button
          type="button"
          onClick={modalToCreateConsult.onOpen}
          className="flex gap-2 bg-cloud-300 text-white"
        >
          <PlusCircleIcon />
          Nueva consulta
        </Button>
      </div>

      {/* Modal para crear una nueva consulta */}
      <Modal
        isOpen={modalToCreateConsult.isOpen}
        onOpenChange={modalToCreateConsult.onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Registrar próxima consulta
              </ModalHeader>
              <ModalBody>
                <CreateConsultForm
                  register={register}
                  errors={errors}
                  onSubmit={onSubmit}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onSubmit}>
                  Crear consulta
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

NewConsult.propTypes = {
  patientDni: propTypes.string,
}
