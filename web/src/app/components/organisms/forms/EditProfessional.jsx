'use client'
import propTypes from 'prop-types'
import { Input, Select, SelectItem, Switch } from '@nextui-org/react'
import { Controller } from 'react-hook-form'

const roles = [
  { name: 'Profesional', value: 'Profesional' },
  { name: 'Administrador', value: 'Administrador' },
]

export const EditProfessional = ({
  register,
  errors,
  onSubmit,
  watch,
  control,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
      <div className="flex gap-4">
        <Input
          label="Nombre"
          placeholder="Ejemplo"
          {...register('name')}
          isInvalid={errors?.name}
          errorMessage={errors?.name?.message}
          className="w-full"
          variant="bordered"
        />
        <Input
          label="Apellido"
          placeholder="Ejemplo"
          {...register('lastName')}
          isInvalid={errors?.lastName}
          errorMessage={errors?.lastName?.message}
          className="w-full"
          variant="bordered"
        />
      </div>
      <Input
        label="Cédula"
        placeholder="Ejemplo"
        readOnly
        {...register('dni')}
        isInvalid={errors?.dni}
        errorMessage={errors?.dni?.message}
        variant="bordered"
      />
      <Input
        label="Especialidad"
        placeholder="Ejemplo"
        {...register('specialtyArea')}
        isInvalid={errors?.specialtyArea}
        errorMessage={errors?.specialtyArea?.message}
        variant="bordered"
      />
      <Input
        label="Correo"
        placeholder="Ejemplo"
        {...register('email')}
        readOnly
        isInvalid={errors?.email}
        errorMessage={errors?.email?.message}
        variant="bordered"
      />
      <div className="flex w-full gap-4">
        <Controller
          control={control}
          name="role"
          render={({ field: { onChange, value } }) => (
            <Select
              label="Selecciona un rol"
              value={value}
              onChange={onChange}
              variant="bordered"
              defaultSelectedKeys={[value]}
            >
              {roles.map(({ name, value }) => (
                <SelectItem key={value} value={value}>
                  {name}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        <div className="w-full flex items-center">
          <Switch {...register('status')} className="w-full">
            {watch('status') ? 'Activo' : 'Inactivo'}
          </Switch>
        </div>
      </div>
    </form>
  )
}

EditProfessional.propTypes = {
  register: propTypes.func,
  errors: propTypes.object,
  onSubmit: propTypes.func,
  watch: propTypes.func,
  control: propTypes.object,
}
