'use client'
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    alert("Registrando...")
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
        {...register('email', {
          required: 'El correo es requerido',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'El correo no es válido'
          }
        })}
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        className="w-full"
      />
      <Button
        type="submit"
        // disabled={isLoading}
        className="bg-cloud-300 text-sand-50"
      >
        {/* {isLoading ? "Registrando..." : "Registrarse"} */}
        Registrarse
      </Button>
    </form>
  )
};
