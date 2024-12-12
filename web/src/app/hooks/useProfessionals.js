import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from './useAuth'
import {
  updateProfessional,
  deleteProfessional,
} from '@/services/professionals'
// export function useProfessionals() {
//  const [, ] = useState()

//  return {}
// }

export function useProfessional({
  professionals,
  modalToEditProfessional,
  modalToDeleteProfessional,
}) {
  const { token } = useAuth()
  const { register, errors, handleSubmit, reset, watch, control } = useForm()
  const [professionalsList, setProfessionalsList] = useState(
    professionals || []
  )
  const [professionalSelected, setProfessionalSelected] = useState(null)
  const handleRowSelection = (professional, modal) => {
    setProfessionalSelected(professional)
    modal.onOpen()
  }

  useEffect(() => {
    if (professionalSelected) {
      reset({
        name: professionalSelected?.name,
        lastName: professionalSelected?.lastName,
        role: professionalSelected?.role,
        specialtyArea: professionalSelected?.specialtyArea,
        dni: professionalSelected?.dni,
        status: professionalSelected?.status,
        age: professionalSelected?.age,
        email: professionalSelected?.email,
        birthday: professionalSelected?.birthday,
      })
    }
  }, [professionalSelected])

  // Edit professionals
  const onSubmit = handleSubmit(async data => {
    try {
      const professionalData = {
        dni: data.dni,
        firstName: data.name,
        lastName: data.lastName,
        email: data.email,
        birthday: data.birthday,
        enabled: data.status,
        roles: [{ name: data.role }],
        specialtyArea: [{ name: data.specialtyArea }],
      }

      // Llama a la función updateProfessional
      const result = await updateProfessional({
        token,
        professional: professionalData,
      })

      if (result) {
        setProfessionalsList(prev => {
          return prev.map(professional => {
            if (professional.dni === data.dni) {
              return { ...professional, ...data }
            }
            return professional
          })
        })
        modalToEditProfessional.onClose()
      }
    } catch (error) {
      console.error(error)
      throw new Error('Failed to update professional')
    }
  })

  const handleDelete = async () => {
    try {
      await deleteProfessional({ token, dni: professionalSelected.dni })
      setProfessionalsList(prev =>
        prev.filter(prof => prof.dni !== professionalSelected.dni)
      )
      modalToDeleteProfessional.onClose()
    } catch (error) {
      console.error(error)
      throw new Error('Failed to delete professional')
    }
  }

  return {
    professionals: professionalsList,
    handleDelete,
    //
    register,
    errors,
    onSubmit,
    watch,
    control,
    //
    professionalSelected,
    handleRowSelection,
  }
}
