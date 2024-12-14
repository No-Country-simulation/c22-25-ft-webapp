'use client'
import { formatDateToBackend } from '@/utils/utils'
import { Section } from '@/components/atoms/Section'
import {
  Accordion,
  AccordionItem,
  Button,
  Input,
  RadioGroup,
  Radio,
  // Textarea,
  // Checkbox,
} from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function NewPatientPage() {
  const router = useRouter()
  const { token } = useAuth()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = handleSubmit(async data => {
    // /doctor/patients/add
    const payload = {
      dni: Number(data.dni),
      firstName: data.name,
      lastName: data.lastname,
      cellphone: data.phone,
      email: data.email,
      birthday: formatDateToBackend(data.birthday),
      gender: data.gender,
      address: data.address,
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/doctor/patients/add`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      )

      if (response.ok) {
        reset()
        router.push('/patients')
      }

      toast.success('Paciente registrado exitosamente')
    } catch (error) {
      console.error(error)
    }
  })
  return (
    <Section>
      <h1 className="text-2xl font-bold mb-9 text-cloud-300">
        Registrar un nuevo paciente
      </h1>
      <form onSubmit={onSubmit}>
        <Accordion defaultExpandedKeys={['1']} selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="Información básica"
            title={
              <h2 className="text-cloud-300 text-sm font-bold uppercase">
                Información básica
              </h2>
            }
          >
            <div className="grid md:grid-cols-2 gap-4 pb-4">
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
              <Input
                type="date"
                variant="bordered"
                label="Fecha de nacimiento"
                isRequired
                {...register('birthday', {
                  required: 'La fecha de nacimiento es obligatoria',
                })}
                isInvalid={!!errors.birthday}
                errorMessage={errors.birthday && errors.birthday.message}
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
                    message: 'La cédula debe tener al menos 3 caracteres',
                  },
                })}
                isInvalid={!!errors.dni}
                errorMessage={errors.dni && errors.dni.message}
              />
              <Input
                type="email"
                variant="bordered"
                label="Correo electrónico"
                isRequired
                {...register('email', {
                  required: 'El correo electrónico es obligatorio',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Correo electrónico inválido',
                  },
                })}
                isInvalid={!!errors.email}
                errorMessage={errors.email && errors.email.message}
              />
              <Input
                type="phone"
                variant="bordered"
                label="Teléfono"
                isRequired
                {...register('phone', {
                  required: 'El teléfono es obligatorio',
                  // validate: (value) => {
                  //   const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
                  //   return phoneRegex.test(value) || 'Teléfono inválido';
                  // }
                })}
                isInvalid={!!errors.phone}
                errorMessage={errors.phone && errors.phone.message}
              />
              <RadioGroup
                label="Sexo"
                className="px-2 [&>div]:flex-row [&>div]:justify-between"
                {...register('gender', {
                  required: 'El sexo es obligatorio',
                })}
                isInvalid={!!errors.gender}
                errorMessage={errors.gender && errors.gender.message}
              >
                <Radio value="masculino" {...register('gender')}>
                  Masculino
                </Radio>
                <Radio value="femenino" {...register('gender')}>
                  Femenino
                </Radio>
                <Radio value="otro" {...register('gender')}>
                  Otro
                </Radio>
              </RadioGroup>
              <Input
                type="text"
                variant="bordered"
                label="Dirección"
                isRequired
                {...register('address', {
                  required: 'La dirección es obligatoria',
                  minLength: {
                    value: 6,
                    message: 'La dirección debe tener al menos 6 caracteres',
                  },
                })}
                isInvalid={!!errors.address}
                errorMessage={errors.address && errors.address.message}
              />
            </div>
          </AccordionItem>
        </Accordion>
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
            Guardar
          </Button>
        </div>
      </form>
    </Section>
  )
}
