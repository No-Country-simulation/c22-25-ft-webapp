'use client'
import useAuthToken from '@/hooks/useAuth'
import { Section } from '@/components/atoms/Section'
import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

export default function NewProfessionalPage() {
  const { token } = useAuthToken()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const formatDate = dateString => {
    const [year, month, day] = dateString.split('-')
    return `${day}-${month}-${year}`
  }

  const onSubmit = handleSubmit(async data => {
    const payload = {
      dni: Number(data.dni),
      firstName: data.name,
      lastName: data.lastname,
      // password: data.password,
      birthday: formatDate(data.birthdate),
      email: data.email,
      roles: [
        // { name: 'doctor' }
      ],
      specialtyArea: [{ name: data.specialty }],
    }
    console.table(payload)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/users/add`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      )
      const result = await response.json()

      if (response.ok) {
        console.log(result)
        reset()
      }

      if (!response.ok) {
        console.log(result)
      }
    } catch (error) {
      console.error(error)
    }
  })
  return (
    <Section>
      <h1 className="text-2xl font-bold mb-9 text-cloud-300">
        Registrar un nuevo profesional
      </h1>
      <h2 className="text-cloud-300 text-sm font-bold uppercase py-4 mb-2">
        {`Información del profesional`}
      </h2>
      <form onSubmit={onSubmit} className="px-2 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="text"
            variant="bordered"
            label="Nombres"
            isRequired
            {...register('name', {
              required: 'El nombre es obligatorio',
              minLength: {
                value: 3,
                message: 'El nombre debe tener al menos 3 caracteres',
              },
            })}
            isInvalid={!!errors.name}
            errorMessage={errors.name && errors.name.message}
          />
          <Input
            type="text"
            variant="bordered"
            label="Apellidos"
            isRequired
            {...register('lastname', {
              required: 'Los apellidos son obligatorios',
              minLength: {
                value: 3,
                message: 'Los apellidos deben tener al menos 3 caracteres',
              },
            })}
            isInvalid={!!errors.lastname}
            errorMessage={errors.lastname && errors.lastname.message}
          />
        </div>
        <Input
          type="email"
          variant="bordered"
          label="Correo electrónico"
          isRequired
          {...register('email', {
            required: 'El correo es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'El correo no es válido',
            },
          })}
          isInvalid={!!errors.email}
          errorMessage={errors.email && errors.email.message}
        />
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="text"
            variant="bordered"
            label="Cédula"
            {...register('dni', {
              required: 'La cédula es obligatoria',
              minLength: {
                value: 3,
                message: 'La cédula debe tener al menos 4 caracteres',
              },
            })}
            isInvalid={!!errors.dni}
            errorMessage={errors.dni && errors.dni.message}
            isRequired
          />
          <Input
            type="date"
            variant="bordered"
            label="Fecha de nacimiento"
            isRequired
            {...register('birthdate', {
              required: 'La fecha de nacimiento es obligatoria',
            })}
            isInvalid={!!errors.birthdate}
            errorMessage={errors.birthdate && errors.birthdate.message}
          />
        </div>
        <Input
          type="text"
          variant="bordered"
          label="Especialidad"
          isRequired
          {...register('specialty', {
            required: 'La especialidad es obligatoria',
            minLength: {
              value: 3,
              message: 'La especialidad debe tener al menos 3 caracteres',
            },
          })}
          isInvalid={!!errors.specialty}
          errorMessage={errors.specialty && errors.specialty.message}
        />

        <div className="flex gap-4 mt-4 p-2 justify-end">
          <Button
            type="button"
            variant="bordered"
            color="danger"
            onClick={() => reset()}
          >
            Limpiar
          </Button>
          <Button
            type="submit"
            onClick={onSubmit}
            className="bg-cloud-300 text-white"
          >
            Generar credenciales
          </Button>
        </div>
      </form>
    </Section>
  )
}
