'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()
  const router = useRouter()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSubmit = handleSubmit(async data => {
    try {
      setIsLoading(true)
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        setError('Ocurrió un error, tu correo o contraseña son incorrectos')
        return
      }

      reset()
      setError(null)
      router.push('/dashboard')
    } catch (error) {
      console.error('Error while logging in: ', error)
      throw new Error('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <>
      {error && (
        <p className="text-red-500 text-center mb-4 text-sm">{error}</p>
      )}
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
          {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </Button>
      </form>
    </>
  )
}
