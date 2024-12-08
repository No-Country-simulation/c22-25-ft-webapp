'use client'
import { Section } from '@/components/atoms/Section'
import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

export default function NewProfessionalPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = handleSubmit(data => {
    console.log(data)
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
        <Input
          type="text"
          variant="bordered"
          label="Cédula"
          isRequired
          {...register('dni', {
            required: 'La cédula es obligatoria',
            minLength: {
              value: 3,
              message: 'La cédula debe tener al menos 4 caracteres',
            },
          })}
          isInvalid={!!errors.dni}
          errorMessage={errors.dni && errors.dni.message}
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
