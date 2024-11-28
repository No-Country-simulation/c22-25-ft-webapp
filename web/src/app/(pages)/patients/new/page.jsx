'use client'
import { Section } from "@/components/atoms/Section";
import {
  Accordion,
  AccordionItem,
  Button, Input,
  RadioGroup,
  Radio,
  Textarea,
  Checkbox
} from "@nextui-org/react";
import { useForm } from "react-hook-form";

// const patient = {
//   name: 'John',
//   lastname: 'Doe',
//   birthday: '1990-01-01',
//   email: 'qL8nI@example.com',
//   cedula: '123456789',
//   gender: 'male',
//   address: '123 Main St',
//   phone: '123-456-7890',
//   medicalHistory: {
//     personalHistory: 'none',
//     familyHistory: 'none',
//     allergies: 'none',
//   },
//   consult: {
//     date: '2023-01-01',
//     time: '10:00',
//     reason: 'none',
//     notes: 'none',
//   },
//   diagnostic: {
//     physicalExamination: '',
//     diagnosis: ''
//   },
//   treatmentPlan: {
//     description: '',
//     medicalProcedures: '',
//     evolution: ''
//   },
//   consent: {
//     consent: false,
//     additionalInformation: ''
//   }
// }

export default function NewPatientPage() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <Section>
      <h1 className="text-2xl font-bold mb-9 text-cloud-300">Registrar un nuevo paciente</h1>
      <form onSubmit={onSubmit} >
        <Accordion defaultExpandedKeys={["1"]} selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="Información básica"
            title={
              <h2 className="text-cloud-300 text-sm font-bold uppercase">Información básica</h2>
            }
          >
            <div className="grid md:grid-cols-2 gap-4 pb-4">
              <Input type="text"
                variant="bordered"
                label="Nombres"
                isRequired
                {...register('name', {
                  required: 'El nombre es obligatorio',
                  minLength: {
                    value: 3,
                    message: 'El nombre debe tener al menos 3 caracteres'
                  }
                })}
                isInvalid={!!errors.name}
                errorMessage={errors.name && errors.name.message}
              />
              <Input type="text"
                variant="bordered"
                label="Apellidos"
                isRequired
                {...register('lastname', {
                  required: 'Los apellidos son obligatorios',
                  minLength: {
                    value: 3,
                    message: 'Los apellidos deben tener al menos 3 caracteres'
                  }
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
              <Input type="text"
                variant="bordered"
                label="Cédula"
                isRequired
                {...register('cedula', {
                  required: 'La cédula es obligatoria',
                  minLength: {
                    value: 3,
                    message: 'La cédula debe tener al menos 3 caracteres'
                  }
                })}
                isInvalid={!!errors.cedula}
                errorMessage={errors.cedula && errors.cedula.message}
              />
              <Input type="email"
                variant="bordered"
                label="Correo electrónico"
                isRequired
                {...register('email', {
                  required: 'El correo electrónico es obligatorio',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Correo electrónico inválido'
                  }
                })}
                isInvalid={!!errors.email}
                errorMessage={errors.email && errors.email.message}
              />
              <Input type="phone"
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
                <Radio value="hombre" {...register('gender')}>Hombre</Radio>
                <Radio value="mujer" {...register('gender')}>Mujer</Radio>
                <Radio value="otro" {...register('gender')}>Otro</Radio>
              </RadioGroup>
              <Input type="text"
                variant="bordered"
                label="Dirección"
                isRequired
                {...register('address', {
                  required: 'La dirección es obligatoria',
                  minLength: {
                    value: 6,
                    message: 'La dirección debe tener al menos 6 caracteres'
                  }
                })}
                isInvalid={!!errors.address}
                errorMessage={errors.address && errors.address.message}
              />
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Historial médico"
            title={
              <h2 className="text-cloud-300 text-sm font-bold uppercase">Historial médico</h2>
            }
          >
            <div className="flex flex-col gap-4 pb-4">
              <Textarea
                label="Antecedentes Personales"
                // placeholder="- - -"
                variant="bordered"
                {...register('medicalHistory.personalHistory')}
              />
              <Textarea
                label="Antecedentes Familiares"
                // placeholder="- - -"
                variant="bordered"
                {...register('medicalHistory.familyHistory')}
              />
              <Textarea
                label="Alergias"
                // placeholder="- - -"
                variant="bordered"
                {...register('medicalHistory.allergies')}
              />
            </div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Motivo de consulta"
            title={
              <h2 className="text-cloud-300 text-sm font-bold uppercase">Motivo de consulta</h2>
            }
          >
            <div className="flex flex-col gap-4 pb-4">
              <Input
                type="date"
                variant="bordered"
                label="Fecha de la consulta"
                isRequired
                {...register('consult.date', {
                  required: 'La fecha de la consulta es obligatoria',
                })}
                isInvalid={!!errors.consult?.date}
                errorMessage={errors.consult?.date && errors.consult.date.message}
              />
              <Input
                type="time"
                variant="bordered"
                label="Hora de la consulta"
                isRequired
                {...register('consult.time', {
                  required: 'La hora de la consulta es obligatoria',
                })}
                isInvalid={!!errors.consult?.time}
                errorMessage={errors.consult?.time && errors.consult.time.message}
              />
              <Textarea
                label="Razón de la consulta"
                // placeholder="- - -"
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
                // placeholder="- - -"
                variant="bordered"
                isRequired
                {...register('consult.currentDisease', {
                  required: 'La enfermedad actual es obligatoria',
                })}
                isInvalid={!!errors.consult?.currentDisease}
                errorMessage={errors.consult?.currentDisease && errors.consult.currentDisease.message}
              />
            </div>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Evaluación y Diagnóstico"
            title={
              <h2 className="text-cloud-300 text-sm font-bold uppercase">Evaluación y Diagnóstico</h2>
            }
          >
            <div className="flex flex-col gap-4 pb-4">
              <Textarea
                label="Examen físico"
                variant="bordered"
                isRequired
                {...register('diagnostic.physicalExamination', {
                  required: 'El examen físico es obligatorio',
                })}
                isInvalid={!!errors.diagnostic?.physicalExamination}
                errorMessage={errors.diagnostic?.physicalExamination && errors.diagnostic.physicalExamination.message}
              />
              <Textarea
                label="Diagnóstico"
                variant="bordered"
                isRequired
                {...register('diagnostic.diagnosis', {
                  required: 'El diagnóstico es obligatorio',
                })}
                isInvalid={!!errors.diagnostic?.diagnosis}
                errorMessage={errors.diagnostic?.diagnosis && errors.diagnostic.diagnosis.message}
              />
            </div>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Plan de Tratamiento y Seguimiento"
            title={
              <h2 className="text-cloud-300 text-sm font-bold uppercase">Plan de Tratamiento y Seguimiento</h2>
            }
          >
            <div className="flex flex-col gap-4 pb-4">
              <Textarea
                label="Descripción del tratamiento"
                variant="bordered"
                isRequired
                {...register('treatmentPlan.description', {
                  required: 'La descripción del tratamiento es obligatoria',
                })}
                isInvalid={!!errors.treatmentPlan?.description}
                errorMessage={errors.treatmentPlan?.description && errors.treatmentPlan.description.message}
              />
              <Textarea
                label="Procedimientos medicos"
                variant="bordered"
                isRequired
                {...register('treatmentPlan.medicalProcedures', {
                  required: 'Los procedimientos medicos son obligatorios',
                })}
                isInvalid={!!errors.treatmentPlan?.medicalProcedures}
                errorMessage={errors.treatmentPlan?.medicalProcedures && errors.treatmentPlan.medicalProcedures.message}
              />
              <Textarea
                label="Evolución"
                variant="bordered"
                isRequired
                {...register('treatmentPlan.evolution', {
                  required: 'La evolución es obligatoria',
                })}
                isInvalid={!!errors.treatmentPlan?.evolution}
                errorMessage={errors.treatmentPlan?.evolution && errors.treatmentPlan.evolution.message}
              />
            </div>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Documentación y Consentimientos"
            title={
              <h2 className="text-cloud-300 text-sm font-bold uppercase">Documentación y Consentimientos</h2>
            }
          >
            <div className="flex flex-col gap-4 pb-4">
              <Checkbox
                variant="bordered"
                isRequired
                {...register('consent.consent', {
                  required: 'El consentimiento es obligatorio',
                })}
                isInvalid={!!errors.consent?.consent}
              >El paciente dió el consentimiento para recolectar sus datos
              </Checkbox>
              <Textarea
                label="Información adicional"
                variant="bordered"
                {...register('consent.additionalInformation')}
              />
            </div>
          </AccordionItem>
        </Accordion>
        <div className="flex gap-4 mt-4 p-2 justify-end">
          <Button type="button" variant="bordered" color="danger" onClick={reset}>Limpiar</Button>
          <Button type="submit" onClick={onSubmit} className="bg-cloud-300 text-white">Guardar</Button>
        </div>
      </form >
    </Section >
  )
};
