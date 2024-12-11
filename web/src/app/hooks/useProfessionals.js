import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

// export function useProfessionals() {
//  const [, ] = useState()

//  return {}
// }

export function useProfessional() {
  const [professionalSelected, setProfessionalSelected] = useState(null)
  const handleRowSelection = (professional, modal) => {
    setProfessionalSelected(professional)
    modal.onOpen()
  }

  const { register, errors, handleSubmit, reset } = useForm()

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
      })
    }
  }, [professionalSelected])

  const onSubmit = handleSubmit(data => {
    // Actualizar aquí
    console.log(data)
  })

  return {
    register,
    errors,
    onSubmit,
    //
    professionalSelected,
    handleRowSelection,
  }
}
