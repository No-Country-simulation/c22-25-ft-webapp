import { useState } from 'react'

const loginInitialState = {
  email: '',
  password: '',
}

const loginErrorsInitialState = {
  email: {
    message: '',
    error: false,
  },
  password: {
    message: '',
    error: false,
  },
}

export function useLogin() {
  const [formData, setFormData] = useState(loginInitialState)
  const [errors, setErrors] = useState(loginErrorsInitialState)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      return setErrors({
        ...errors,
        email: {
          error: true,
          message: 'Correo electrónico requerido',
        },
        password: {
          error: true,
          message: 'Contraseña es requerida',
        },
      })
    }

    try {
      setLoading(true)

      console.log(formData)
    } catch (error) {
      // throw new Error
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    loading,
  }
}
