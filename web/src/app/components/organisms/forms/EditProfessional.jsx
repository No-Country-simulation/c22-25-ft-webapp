import propTypes from 'prop-types'
import { Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

export const EditProfessional = ({ user }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: user.name,
      role: user.role,
      team: user.team,
      license: user.license,
      status: user.status,
      age: user.age,
      email: user.email,
    },
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
      <Input
        label="Nombre"
        placeholder="Ejemplo"
        {...register('name')}
        isInvalid={errors.name}
        errorMessage={errors.name?.message}
      />
      <Input
        label="Rol"
        placeholder="Ejemplo"
        {...register('role')}
        isInvalid={errors.role}
        errorMessage={errors.role?.message}
      />
      <Input
        label="Equipo"
        placeholder="Ejemplo"
        {...register('team')}
        isInvalid={errors.team}
        errorMessage={errors.team?.message}
      />
      <Input
        label="Licencia"
        placeholder="Ejemplo"
        {...register('license')}
        isInvalid={errors.license}
        errorMessage={errors.license?.message}
      />
      <Input
        label="Status"
        placeholder="Ejemplo"
        {...register('status')}
        isInvalid={errors.status}
        errorMessage={errors.status?.message}
      />
      <Input
        label="Edad"
        placeholder="Ejemplo"
        {...register('age')}
        isInvalid={errors.age}
        errorMessage={errors.age?.message}
      />
      {/* <Input label="Avatar" placeholder="Ejemplo" /> */}
      <Input
        label="Correo"
        placeholder="Ejemplo"
        {...register('email')}
        isInvalid={errors.email}
        errorMessage={errors.email?.message}
      />
    </form>
  )
}

EditProfessional.propTypes = {
  user: propTypes.object,
}
