'use client'
import { Input } from "@nextui-org/react"
import { useState } from "react"

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        label="Correo electrónico"
        placeholder="ejemplo@correo.com"
        variant="bordered"
        isRequired
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type={isVisible ? "text" : "password"}
        label="Contraseña"
        placeholder="********"
        variant="bordered"
        isRequired
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
            {isVisible ? (
              // <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              'y'
            ) : (
              // <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              'x'
            )}
          </button>
        }
      />
    </form>
  )
}
