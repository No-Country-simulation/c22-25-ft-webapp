'use client'
import { Button, Input, Textarea } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

export const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data)
    alert('Enviando mensaje...')
  })

  return (
    <div className={`flex flex-col gap-4 m-auto w-full`}>
      <h2 className="text-4xl font-bold text-cloud-300 text-center">
        Contáctanos
      </h2>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-6 max-w-[420px] w-full m-auto"
      >
        <Input
          type="text"
          name="name"
          label="Nombre"
          variant="bordered"
          isRequired
          {...register('name', {
            required: 'El nombre es requerido',
            minLength: {
              value: 3,
              message: 'El nombre debe tener al menos 3 caracteres',
            },
            maxLength: {
              value: 48,
              message: 'El nombre no puede superar los 48 caracteres',
            },
          })}
          isInvalid={!!errors.name}
          errorMessage={errors.name?.message}
          className="w-full"
        />
        <Input
          type="email"
          name="email"
          label="Correo electrónico"
          variant="bordered"
          isRequired
          {...register('email', {
            required: 'El correo es requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'El correo proporcionado no es válido',
            },
            maxLength: {
              value: 72,
              message: 'El correo no puede superar los 72 caracteres',
            },
          })}
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
          className="w-full"
        />
        <Textarea
          label="Mensaje"
          name="description"
          variant="bordered"
          isRequired
          {...register('description', {
            required: 'La descripción es requerida',
            minLength: {
              value: 3,
              message: 'La descripción debe tener al menos 3 caracteres',
            },
            maxLength: {
              value: 500,
              message: 'La descripción no puede superar los 500 caracteres',
            },
          })}
          isInvalid={!!errors.description}
          errorMessage={errors.description?.message}
          className="w-full"
        />
        <Button
          type="submit"
          // disabled={isLoading}
          onClick={onSubmit}
          className="bg-cloud-300 text-sand-50"
        >
          {/* {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'} */}
          Enviar mensaje
        </Button>
      </form>
    </div>
  )
}
