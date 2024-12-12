'use client'
import propTypes from 'prop-types'
import { Input } from '@nextui-org/react'

export const CreateConsultForm = ({ register, errors, onSubmit }) => {
  const today = new Date().toISOString().split('T')[0]
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
      <Input
        type="date"
        name="date"
        variant="bordered"
        label="Fecha de la consulta"
        {...register('date', { required: 'La fecha es requerida' })}
        isRequired
        min={today}
        isInvalid={errors?.date}
        errorMessage={errors?.date?.message}
        className="w-full"
      />
      <Input
        type="time"
        name="time"
        variant="bordered"
        label="Hora de la consulta"
        {...register('time', { required: 'La hora es requerida' })}
        isRequired
        isInvalid={errors?.time}
        errorMessage={errors?.time?.message}
        className="w-full"
      />
    </form>
  )
}

CreateConsultForm.propTypes = {
  register: propTypes.func.isRequired,
  errors: propTypes.object.isRequired,
  onSubmit: propTypes.func.isRequired,
}
