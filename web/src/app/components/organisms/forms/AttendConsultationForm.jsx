import propTypes from 'prop-types'
import { Input, Textarea } from '@nextui-org/react'
export const AttendConsultationForm = ({ onSubmit, register, errors }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
      <h2>Motivo de consulta</h2>
      <Input
        label="Razón de la consulta"
        variant="bordered"
        isRequired
        {...register('consult.reason', {
          required: 'La razón de la consulta es obligatoria',
        })}
        isInvalid={!!errors.consult?.reason}
        errorMessage={errors.consult?.reason && errors.consult.reason.message}
      />
      <Textarea
        label="Enfermedad actual"
        variant="bordered"
        isRequired
        {...register('consult.currentIllness', {
          required: 'La enfermedad actual es obligatoria',
        })}
        isInvalid={!!errors.consult?.currentIllness}
        errorMessage={
          errors.consult?.currentIllness &&
          errors.consult.currentIllness.message
        }
      />
      <h2>Evaluación y diagnóstico</h2>
      <Textarea
        label="Examen físico"
        variant="bordered"
        isRequired
        {...register('diagnostic.physicalExam', {
          required: 'El examen físico es obligatorio',
        })}
        isInvalid={!!errors.diagnostic?.physicalExam}
        errorMessage={
          errors.diagnostic?.physicalExam &&
          errors.diagnostic.physicalExam.message
        }
      />
      <Textarea
        label="Diagnóstico"
        variant="bordered"
        isRequired
        {...register('diagnostic.dx', {
          required: 'El diagnóstico es obligatorio',
        })}
        isInvalid={!!errors.diagnostic?.dx}
        errorMessage={errors.diagnostic?.dx && errors.diagnostic.dx.message}
      />
      <h2>Plan de tratamiento y seguimiento</h2>
      <Textarea
        label="Descripción del tratamiento"
        variant="bordered"
        isRequired
        {...register('treatmentPlan.treatment', {
          required: 'La descripción del tratamiento es obligatoria',
        })}
        isInvalid={!!errors.treatmentPlan?.treatment}
        errorMessage={
          errors.treatmentPlan?.treatment &&
          errors.treatmentPlan.treatment.message
        }
      />
      <Textarea
        label="Procedimientos medicos"
        variant="bordered"
        isRequired
        {...register('treatmentPlan.medicalProcedures', {
          required: 'Los procedimientos medicos son obligatorios',
        })}
        isInvalid={!!errors.treatmentPlan?.medicalProcedures}
        errorMessage={
          errors.treatmentPlan?.medicalProcedures &&
          errors.treatmentPlan.medicalProcedures.message
        }
      />
      <Textarea
        label="Evolución"
        variant="bordered"
        isRequired
        {...register('treatmentPlan.evolution', {
          required: 'La evolución es obligatoria',
        })}
        isInvalid={!!errors.treatmentPlan?.evolution}
        errorMessage={
          errors.treatmentPlan?.evolution &&
          errors.treatmentPlan.evolution.message
        }
      />
      <h2>Historial médico</h2>
      <Textarea
        label="Antecedentes Personales"
        variant="bordered"
        {...register('medicalHistory.personalBackground', {
          required: 'Los antecedentes personales son obligatorios',
        })}
        isInvalid={!!errors.medicalHistory?.personalBackground}
        errorMessage={
          errors.medicalHistory?.personalBackground &&
          errors.medicalHistory.personalBackground.message
        }
      />
      <Textarea
        label="Antecedentes Familiares"
        variant="bordered"
        {...register('medicalHistory.familiarBackground', {
          required: 'Los antecedentes familiares son obligatorios',
        })}
        isInvalid={!!errors.medicalHistory?.familiarBackground}
        errorMessage={
          errors.medicalHistory?.familiarBackground &&
          errors.medicalHistory.familiarBackground.message
        }
      />
      {/* <Textarea
        label="Alergias"
        variant="bordered"
        {...register('medicalHistory.allergies')}
      /> */}
    </form>
  )
}

AttendConsultationForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  register: propTypes.func.isRequired,
  errors: propTypes.object.isRequired,
}
