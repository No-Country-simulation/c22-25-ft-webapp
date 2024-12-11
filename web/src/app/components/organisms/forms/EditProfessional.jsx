'use client'
import propTypes from 'prop-types'
import { Input, Select, SelectItem, Switch } from '@nextui-org/react'

export const EditProfessional = ({ register, errors, onSubmit }) => {
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
        {/* <Input
          label="Rol"
          placeholder="Ejemplo"
          {...register('role')}
          isInvalid={errors?.role}
          errorMessage={errors?.role?.message}
          variant="bordered"
          className="w-full"
        /> */}
        <Select
          className="flex-1 w-1/2"
          label="Rol"
          placeholder="Selecciona un rol"
          variant="bordered"

          // isInvalid={errors?.role}
          // errorMessage={errors?.role?.message}
        >
          <SelectItem>Administrador</SelectItem>
          <SelectItem>Profesional</SelectItem>
        </Select>
        <div className="w-1/2 flex items-center">
          <Switch
            color="danger"
            // checked={professional.status}
            // onChange={handleStatus}
          >
            {/* {isActive ? 'Activo' : 'Inactivo'} */}
            Ya va
          </Switch>
        </div>
        {/* <Input
          label="Status"
          placeholder="Ejemplo"
          {...register('status')}
          isInvalid={errors?.status}
          errorMessage={errors?.status?.message}
          variant="bordered"
          className="w-full"
        /> */}
      </div>
    </form>
  )
}

EditProfessional.propTypes = {
  register: propTypes.func,
  errors: propTypes.object,
  onSubmit: propTypes.func,
}
