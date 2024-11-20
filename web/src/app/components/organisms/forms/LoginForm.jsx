'use client'
import { useState } from "react"
import { Input } from "@nextui-org/react"
import { Eye, EyeOff } from "lucide-react"

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

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
        type={isPasswordVisible ? "text" : "password"}
        label="Contraseña"
        placeholder="********"
        variant="bordered"
        isRequired
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
            {isPasswordVisible ? (
              <EyeOff className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <Eye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
      />
    </form>
  )
}
