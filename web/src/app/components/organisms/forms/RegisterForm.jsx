'use client'
import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible)
  const isLoading = false

  const onSubmit = handleSubmit(data => {
    alert('Registrando...')
    console.log(data)
  })

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-6 max-w-[420px] w-full mx-auto"
    >
      <Input
        type="email"
        name="email"
        label="Correo electrónico"
        variant="bordered"
        isRequired
        description="Nunca compartiremos tus datos"
        {...register('email', {
          required: 'El correo es requerido',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'El correo no es válido',
          },
        })}
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        className="w-full"
      />
      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        id="password"
        name="password"
        label="Contraseña"
        placeholder="********"
        variant="bordered"
        isRequired
        description="La contraseña debe tener al menos 8 caracteres"
        {...register('password', {
          required: 'La contraseña es requerida',
          minLength: {
            value: 8,
            message: 'La contraseña debe tener al menos 8 caracteres',
          },
        })}
        isInvalid={!!errors.password}
        errorMessage={errors.password?.message}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isPasswordVisible ? (
              <EyeOff className="text-xl pointer-events-none text-sand-500" />
            ) : (
              <Eye className="text-xl pointer-events-none text-sand-500" />
            )}
          </button>
        }
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="bg-cloud-300 text-sand-50"
      >
        {isLoading ? 'Registrando...' : 'Registrarse'}
      </Button>
    </form>
  )
}
