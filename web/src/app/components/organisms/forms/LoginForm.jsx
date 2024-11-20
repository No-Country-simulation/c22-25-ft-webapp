'use client'
import { useState } from "react"
import { useLogin } from "@/hooks/useLogin"
import { Button, Input } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react"

export const LoginForm = () => {
  const { formData, errors, handleChange, handleSubmit, isLoading } = useLogin()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <Input
        type="email"
        name="email"
        label="Correo electrónico"
        variant="bordered"
        isRequired
        value={formData.email}
        onChange={handleChange}
        isInvalid={errors.email.error}
        errorMessage={errors.email.message}
      />
      <Input
        type={isPasswordVisible ? "text" : "password"}
        id="password"
        name="password"
        label="Contraseña"
        placeholder="********"
        variant="bordered"
        isRequired
        value={formData.password}
        onChange={handleChange}
        errorMessage={errors.password.message}
        isInvalid={errors.password.error}
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
            {isPasswordVisible ? (
              <EyeOff className="text-xl pointer-events-none" />
            ) : (
              <Eye className="text-xl pointer-events-none" />
            )}
          </button>
        }
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="bg-cloud-300 text-sand-50"
      >
        {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
      </Button>

    </form>
  )
}
