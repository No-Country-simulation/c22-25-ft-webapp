import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuthToken from './useAuth'

// export function useProfessionals() {
//  const [, ] = useState()

//  return {}
// }

export function useProfessional() {
  const { token } = useAuthToken()
  const [professionalSelected, setProfessionalSelected] = useState(null)
  const handleRowSelection = (professional, modal) => {
    setProfessionalSelected(professional)
    modal.onOpen()
  }

  const { register, errors, handleSubmit, reset, watch, control } = useForm()

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

  const onSubmit = handleSubmit(async data => {
    // Actualizar aquí
    console.log('Info enviada: ',data)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/users/${data.dni}/update`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            dni: data.dni,
            firstName: data.name,
            lastName: data.lastName,
            email: data.email,
            birthday: data.birthday,
            enabled: data.status,
            roles: [{ name: data.role === 'Administrador' ? 'admin' : 'doctor' }],
            specialtyArea: [{ name: data.specialtyArea }],
          }),
        }
      )

      if (!res.ok) {
        const errorText = await res.text()
        console.error('Error response:', res.status, errorText)
        throw new Error(`Failed to update professional: ${res.status}`)
      }

      if (res.status === 204) return null

      const result = await res.json()
      return result
    } catch (error) {
      console.error(error)
      throw new Error('Failed to update professional')
    }
  })

  return {
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
